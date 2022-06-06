import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Footer from "./components/UI/Footer/Footer";

import NavbarDesktop from "./components/UI/Navbar/NavbarDesktop";
import GlobalContainer from "./components/UI/Layout/GlobalContainer";

import TaskPage from "./pages/TaskPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarDesktop />
        <GlobalContainer>
          <Routes>
            <Route path="/tasks/*" element={<TaskPage />} />
          </Routes>
        </GlobalContainer>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
