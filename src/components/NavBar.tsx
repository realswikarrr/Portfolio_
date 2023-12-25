import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function NavBar() {
  return (
    <div className="mt-5 border border-t-0 border-r-0 border-l-0  border-b-[#c8c8dc]/20">
      <div className="">
        <nav className="flex justify-between px-2 py-2 items-center mb-4">
          <div className="flex space-x-3 justify-center items-center">
            <Link href="/">
              <h1 className="bg-black/10 dark:bg-[#c8c8dc]/10 cursor-pointer px-4 py-2 text-sm rounded-md text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white transition-all duration-75">
                Home
              </h1>
            </Link>
          </div>
          <div className="flex space-x-3 text-2xl cursor-pointer">
            <Link href="https://github.com/realswikarrr" target="_">
              <FaGithub className=" opacity-50 hover:opacity-100" />
            </Link>

            <Link href="https://www.linkedin.com/in/swikarrr/" target="_">
              <FaLinkedin className=" opacity-50 hover:opacity-100" />
            </Link>

            <Link href="mailto:swikarbusiness@gmail.com" target="_">
              <MdOutlineEmail className=" opacity-50 hover:opacity-100" />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
