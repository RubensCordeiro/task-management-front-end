import GlobalContainer from "../UI/Layout/GlobalContainer";
import Input from "./Input";
import Fieldset from "./Fieldset";
import Button from "../UI/Buttons/Button";
import { authContext } from "../../contexts/authContext";

import AuthenticationService from "../../services/AuthenticationService";

import { useState, useContext } from "react";
import { useNavigate } from "react-router";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin } = useContext(authContext);
  const nav = useNavigate();

  const isButtonEnabled = username.length > 0 && password.length > 0;

  async function authenticateUser({ username, password }) {
    const response = await AuthenticationService.authenticate({
      username,
      password,
    });

    return response;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const authResponse = await authenticateUser({ username, password });
    handleLogin(authResponse.token);
    nav("/tasks");
  }

  return (
    <GlobalContainer>
      <p className="mb-2 w-full text-center">Login</p>
      <form
        className="mt-2 bg-zinc-50 p-4 rounded-sm border border-zinc-400 shadow-lg max-w-xl mx-auto flex flex-col gap-y-2"
        onSubmit={handleSubmit}
      >
        <Fieldset label={"Username"}>
          <Input
            inputParams={{
              type: "text",
              id: "Username",
              placeholder: "Username",
              value: username,
            }}
            changeHandler={(username) => setUsername(username)}
          />
        </Fieldset>
        <Fieldset label={"Password"}>
          <Input
            inputParams={{
              type: "password",
              id: "Password",
              placeholder: "Password",
              value: password,
            }}
            changeHandler={(password) => setPassword(password)}
          />
        </Fieldset>

        {isButtonEnabled && (
          <Button type={"submit"} color="teal">
            Login
          </Button>
        )}
      </form>
    </GlobalContainer>
  );
}
