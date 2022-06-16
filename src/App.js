import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Footer from "./components/UI/Footer/Footer";

import NavbarDesktop from "./components/UI/Navbar/NavbarDesktop";

import TaskPage from "./pages/TaskPage";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import NewTaskPage from "./pages/NewTaskPage";
import EditTaskPage from "./pages/EditTaskPage";
import RegisterPage from "./pages/RegisterPage";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarDesktop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks/*" element={<TaskPage />} />
          <Route path="/tasks/task/:taskId" element={<TaskDetailsPage />} />
          <Route path="/tasks/new" element={<NewTaskPage />} />
          <Route path="/tasks/edit/:taskId" element={<EditTaskPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
