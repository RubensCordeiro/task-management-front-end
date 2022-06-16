import { useState } from "react";
import GlobalContainer from "../UI/Layout/GlobalContainer";
import Fieldset from "./Fieldset";
import Input from "./Input";
import Button from "../UI/Buttons/Button";
import useErrors from "../../hooks/useErrors";
import InputHandler from "../../utils/InputHandler";
import UserService from "../../services/UserService";

export default function UserForm() {
  const baseUser = false;
  const { setError, hasError, getErrorMessages } = useErrors();
  const [email, setEmail] = useState("");
  const [username, setUsename] = useState("");
  const [password, setPassword] = useState("");
  const [timer, setTimer] = useState(null);
  // eslint-disable-next-line
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

  const isButtonEnabled =
    !hasError("email") &&
    !hasError("username") &&
    !hasError("password") &&
    ![email.length, username.length, password.length].includes(0);

  async function checkEmail(email) {
    const response = await UserService.checkEmailExistense(email);
    if (response === true) {
      setError({
        field: "email",
        message: "Email is already in use",
        mode: "include",
      });
    } else if (response === false) {
      setError({
        field: "email",
        message: "Email is already in use",
        mode: "remove",
      });
    }
  }

  function handleEmailChange(email) {
    setEmail(email);
    InputHandler.emptyFieldErrorHandler({
      inputValue: email,
      setErrorFunction: setError,
      fieldName: "email",
      errorMessage: "Email must not be empty",
      errorExists: hasError("email"),
    });

    InputHandler.formatErrorHandler({
      inputValue: email,
      expectedFormat: emailRegex,
      setErrorFunction: setError,
      fieldName: "email",
      errorMessage: "Email has wrong format",
      errorExists: hasError("email"),
    });

    clearTimeout(timer);

    const newTimer = setTimeout(() => {
      checkEmail(email);
    }, 500);

    setTimer(newTimer);
  }

  function handleUsername(username) {
    setUsename(username);
    InputHandler.emptyFieldErrorHandler({
      inputValue: username,
      setErrorFunction: setError,
      fieldName: "username",
      errorMessage: "Username must not be empty",
      errorExists: hasError("username"),
    });
  }

  function handlePassword(password) {
    setPassword(password);
    InputHandler.emptyFieldErrorHandler({
      inputValue: password,
      setErrorFunction: setError,
      fieldName: "password",
      errorMessage: "Password must not be empty",
      errorExists: hasError("password"),
    });
    InputHandler.fieldLengthHandler({
      inputValue: password,
      setErrorFunction: setError,
      fieldName: "password",
      errorMessage: "Password must be longer than 10 characters",
      errorExists: hasError("password"),
      length: 10,
    });
  }

  return (
    <GlobalContainer>
      <p className="mb-2 w-full text-center">Create your account</p>
      <form className="mt-2 bg-zinc-50 p-4 rounded-sm border border-zinc-400 shadow-lg max-w-xl mx-auto flex flex-col gap-y-2">
        <Fieldset label={"Username"} errors={getErrorMessages("username")}>
          <Input
            inputParams={{
              type: "text",
              id: "Username",
              placeholder: "Username",
              value: username,
            }}
            error={hasError("username")}
            changeHandler={(username) => handleUsername(username)}
            blurHandler={() =>
              InputHandler.blurHandler({
                inputValue: username,
                setErrorFunction: setError,
                fieldName: "username",
                errorMessage: "Username must not be empty",
                errorExists: hasError("username"),
              })
            }
          />
        </Fieldset>
        <Fieldset label={"Password"} errors={getErrorMessages("password")}>
          <Input
            inputParams={{
              type: "password",
              id: "Password",
              placeholder: "Password",
              value: password,
            }}
            error={hasError("password")}
            changeHandler={(password) => handlePassword(password)}
            blurHandler={() =>
              InputHandler.blurHandler({
                inputValue: password,
                setErrorFunction: setError,
                fieldName: "password",
                errorMessage: "Password must not be empty",
                errorExists: hasError("password"),
              })
            }
          />
        </Fieldset>
        <Fieldset label={"Email"} errors={getErrorMessages("email")}>
          <Input
            inputParams={{
              type: "text",
              id: "Email",
              placeholder: "Email (Optional)",
              value: email,
            }}
            error={hasError("email")}
            changeHandler={(email) => handleEmailChange(email)}
            blurHandler={() =>
              InputHandler.blurHandler({
                inputValue: email,
                setErrorFunction: setError,
                fieldName: "email",
                errorMessage: "Email must not be empty",
                errorExists: hasError("email"),
              })
            }
          />
        </Fieldset>
        {isButtonEnabled && (
          <Button type={"submit"} color="teal">
            {baseUser ? "Edit User" : "Create User"}
          </Button>
        )}
      </form>
    </GlobalContainer>
  );
}
