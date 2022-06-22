import { useState, createContext } from "react";

const authContext = createContext();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  function handleLogin(loginResponse) {
    setAuthenticated(true);
    localStorage.setItem("authToken", loginResponse);
  }

  return (
    <authContext.Provider value={{ authenticated, handleLogin }}>
      {children}
    </authContext.Provider>
  );
}

export { authContext, AuthProvider };
