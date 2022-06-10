import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavbarDesktop() {
  const [navColor, setNavColor] = useState("bg-transparent");

  function scrollStateHandler() {
    window.scrollY >= 50
      ? setNavColor("bg-gray-100 shadow-xl")
      : setNavColor("bg-transparent");
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
        <p className="text-lg sm:text-xl">Login</p>
      </div>
    </nav>
  );
}

export default NavbarDesktop;
