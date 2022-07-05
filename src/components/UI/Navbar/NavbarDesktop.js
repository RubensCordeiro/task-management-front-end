import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { authContext } from "../../../contexts/authContext";

function NavbarDesktop() {
  const [navColor, setNavColor] = useState("bg-transparent");
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const { authenticated, handleLogout } = useContext(authContext);
  const nav = useNavigate();

  function scrollStateHandler() {
    window.scrollY >= 50
      ? setNavColor("bg-gray-100 shadow-xl")
      : setNavColor("bg-transparent");
  }

  function logout(){
    handleLogout();
    nav('/');
  }

  window.addEventListener("scroll", scrollStateHandler);

  return (
    <nav
      className={`flex justify-between px-8 py-2 rounded-sm sticky top-0 z-10 ${navColor} transition duration-200 linear z-40`}
    >
      <div className="nav-menu w-16 cursor-pointer">
        <p className="text-2xl">
          {
            <FontAwesomeIcon
              icon={faBars}
              className="text-zinc-800 hover:text-zinc-500 transition linear duration-200"
              onClick={() => setSidebarVisible(true)}
            />
          }
        </p>
      </div>
      <div className="nav-logo w-32">
        <p className="text-lg sm:text-xl font-medium">
          Electro<span className="text-teal-600">Tasks</span>
        </p>
      </div>
      <div className="nav-options w-16">
        {authenticated || <Link to='/login'>
          <p className="text-lg sm:text-xl">Login</p>
        </Link>}
        {authenticated && <p className="text-lg sm:text-xl cursor-pointer hover:text-red-900" onClick={logout}>Logout</p>}
      </div>
      <Sidebar
        visible={sidebarVisible}
        onHideSidebar={() => setSidebarVisible(false)}
      />
    </nav>
  );
}

export default NavbarDesktop;
