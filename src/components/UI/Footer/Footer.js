import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="py-4 flex flex-col items-center content-center bg-zinc-900 rounded-xs text-neutral-300 w-full">
      <p className="border-b border-zinc-400">Made by Rubens Cordeiro | 2022</p>
      <ul className="flex items-center justify-center gap-x-8 py-1">
        <li>
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-2xl text-zinc-300 hover:text-zinc-50 hover:shadow-xl transition linear duration-200 cursor-pointer hover:shadow-lg hover:shadow-zinc-50"
          />
        </li>
        <li>
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-2xl text-zinc-300 hover:text-zinc-50 hover:shadow-xl transition linear duration-200 cursor-pointer hover:shadow-lg hover:shadow-zinc-50"
          />
        </li>
        <li>
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-2xl text-zinc-300 hover:text-zinc-50 hover:shadow-xl transition linear duration-200 cursor-pointer hover:shadow-lg hover:shadow-zinc-50"
          />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
