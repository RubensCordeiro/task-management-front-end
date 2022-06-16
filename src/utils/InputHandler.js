class InputHandler {
  fieldLengthHandler({
    inputValue,
    setErrorFunction,
    fieldName,
    errorMessage,
    errorExists,
    length,
  }) {
    if (inputValue && inputValue.length < length) {
      setErrorFunction({
        field: fieldName,
        message: errorMessage,
        mode: "include",
      });
    } else if (inputValue && errorExists) {
      setErrorFunction({
        field: fieldName,
        message: errorMessage,
        mode: "remove",
      });
    }
  }

  emptyFieldErrorHandler({
    inputValue,
    setErrorFunction,
    fieldName,
    errorMessage,
    errorExists,
  }) {
    if (!inputValue) {
      setErrorFunction({
        field: fieldName,
        message: errorMessage,
        mode: "include",
      });
    } else if (inputValue && errorExists) {
      setErrorFunction({
        field: fieldName,
        message: errorMessage,
        mode: "remove",
      });
    }
  }

  blurHandler({
    inputValue,
    setErrorFunction,
    fieldName,
    errorMessage,
    errorExists,
  }) {
    if (!inputValue) {
      setErrorFunction({
        field: fieldName,
        message: errorMessage,
        mode: "include",
      });
    } else if (inputValue && errorExists) {
      setErrorFunction({
        field: fieldName,
        message: errorMessage,
        mode: "remove",
      });
    }
  }

  formatErrorHandler({
    inputValue,
    expectedFormat,
    setErrorFunction,
    fieldName,
    errorMessage,
    errorExists,
  }) {
    if (!expectedFormat.test(inputValue)) {
      setErrorFunction({
        field: fieldName,
        message: errorMessage,
        mode: "include",
      });
    } else if (inputValue && errorExists) {
      setErrorFunction({
        field: fieldName,
        message: errorMessage,
        mode: "remove",
      });
    }
  }
}

export default new InputHandler();
