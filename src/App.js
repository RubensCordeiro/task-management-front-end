import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Footer from "./components/UI/Footer/Footer";

import NavbarDesktop from "./components/UI/Navbar/NavbarDesktop";

import { authContext } from "./contexts/authContext";
import TaskPage from "./pages/TaskPage";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import NewTaskPage from "./pages/NewTaskPage";
import EditTaskPage from "./pages/EditTaskPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import { useContext } from "react";

function App() {
  const { authenticated } = useContext(authContext);

  return (
    <div className="App">
      <BrowserRouter>
        <NavbarDesktop />
        <Routes>
          <Route path="/" element={<Home />} /> 
          {authenticated && <>
            <Route path="/tasks/*" element={<TaskPage />} />
            <Route path="/tasks/task/:taskId" element={<TaskDetailsPage />} />
            <Route path="/tasks/new" element={<NewTaskPage />} />
            <Route path="/tasks/edit/:taskId" element={<EditTaskPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </>}
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Home />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
