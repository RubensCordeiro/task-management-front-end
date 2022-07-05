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

  function logout() {
    handleLogout();
    nav('/');
  }

  window.addEventListener("scroll", scrollStateHandler);

  return (
    <nav
      className={`flex relative justify-between px-8 py-2 rounded-sm sticky top-0 z-10 ${navColor} transition duration-200 linear z-40 align-center items-center`}
    >
      <div className="nav-menu cursor-pointer">
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
      <div className="nav-logo absolute left-1/2 -translate-x-1/2">
        <p className="text-lg sm:text-xl font-medium">
          Electro<span className="text-teal-600">Tasks</span>
        </p>
      </div>
      <div className="nav-options">
        {authenticated ||
          <ul className="flex align-center items-center justify-between gap-x-2">
            <li>
              <Link to='/login'>
                <p className="text-lg sm:text-xl hover:text-teal-800">Login</p>
              </Link>
            </li>
            <li>|</li>
            <li>
              <Link to='/register'>
              <p className="text-lg sm:text-xl hover:text-teal-800">Register</p>
              </Link>
            </li>
          </ul>
        }
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
