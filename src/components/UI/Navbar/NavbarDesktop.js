import { useState } from "react";

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
      className={`flex justify-between px-8 py-2 rounded-sm sticky top-0 z-50 ${navColor} transition duration-200 linear`}
    >
      <div className="nav-menu w-16 cursor-pointer">
        <p className="text-lg sm:text-xl">Icon</p>
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
