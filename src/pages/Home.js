import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faCheck,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <section className="">
      <article className="mx-auto flex items-center justify-center text-center py-32 bg-gradient-to-r from-teal-700 to-teal-50">
        <ul className="flex flex-col gap-y-16 text-2xl text-white font-bold">
          <li>SIMPLE</li>
          <li>ELEGANT</li>
          <li>AND SECURE.</li>
        </ul>
      </article>
      <article className="mx-auto mt-2 py-8 px-16">
        <ul className="flex flex-col items-center justify-center text-center gap-y-8 h-48">
          <li className="text-center flex gap-x-2 text-xl text-black">
            <span>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            Monitor your tasks
          </li>
          <li className="text-center flex gap-x-2 text-xl text-black">
            <span>
              <FontAwesomeIcon icon={faFilter} />
            </span>
            Filter as desired
          </li>
          <li className="text-center flex gap-x-2 text-xl text-black">
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            Notification by e-mail.
          </li>
        </ul>
      </article>
    </section>
  );
}
