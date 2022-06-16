import { useState } from "react";

export default function useErrors() {
  const [errors, setErrors] = useState([]);

  function replaceErrors(fieldName, errorArray, updatedValue) {
    const updatedArray = [...errorArray];
    const errorIndex = updatedArray
      .map((error) => error.field)
      .indexOf(fieldName);
    if (errorIndex >= 0) {
      updatedArray[errorIndex] = { field: fieldName, messages: updatedValue };
    } else {
      updatedArray.push({ field: fieldName, messages: updatedValue });
    }
    return updatedArray;
  }

  function setError({ field, message, mode }) {
    const errorAlreadyExists = errors.find(
      (element) =>
        (element.field === field) & element?.messages?.includes(message)
    );

    if (errorAlreadyExists && mode === "include") {
      return;
    }

    const fieldData = errors.find((element) => element.field === field) || {};

    let updatedErrorMessages = [];

    if (mode === "include") {
      updatedErrorMessages =
        fieldData?.messages?.length > 0
          ? [...fieldData.messages, message]
          : [message];
    } else if (mode === "remove") {
      updatedErrorMessages = fieldData.messages.filter(
        (errorMessage) => errorMessage !== message
      );
    } else {
      return;
    }

    setErrors((prevState) => {
      return replaceErrors(field, prevState, updatedErrorMessages);
    });
  }

  function getErrorMessages(field) {
    return errors.find((error) => error.field === field)?.messages;
  }

  function hasError(field) {
    return errors.find((error) => error.field === field)?.messages?.length > 0
      ? true
      : false;
  }

  return { setError, hasError, getErrorMessages };
}
