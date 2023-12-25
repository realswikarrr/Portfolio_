import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function NavBar() {
  return (
    <div className="mt-5">
      <div className=" ">
        <nav className="flex justify-between px-2 py-2 items-center">
          <div className="flex space-x-3 justify-center items-center">
            <h1 className="bg-black/10 dark:bg-[#c8c8dc]/10 cursor-pointer px-4 py-2 text-sm rounded-md text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white transition-all duration-75">
              Home
            </h1>
          </div>
          <div className="flex space-x-3 text-2xl cursor-pointer">
            <FaGithub className=" opacity-50 hover:opacity-100" />
            <FaLinkedin className=" opacity-50 hover:opacity-100" />
            <MdOutlineEmail className=" opacity-50 hover:opacity-100" />
          </div>
        </nav>
      </div>
    </div>
  );
}
