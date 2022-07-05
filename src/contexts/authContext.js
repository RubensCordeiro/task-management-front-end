import { useState, createContext, useEffect } from "react";

const authContext = createContext();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  function handleLogin(loginResponse) {
    setAuthenticated(true);
    localStorage.setItem("authToken", loginResponse);
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem("authToken")
  }

  return (
    <authContext.Provider value={{ authenticated, handleLogin, loading, handleLogout }}>
      {children}
    </authContext.Provider>
  );
}

export { authContext, AuthProvider };
