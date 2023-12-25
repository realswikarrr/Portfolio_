import Link from "next/link";
import { CiStar } from "react-icons/ci";
import { FaCodeFork } from "react-icons/fa6";

export default function ProjectPage() {
  return (
    <div className="m-10">
      <h1 className="font-bold text-2xl md:text-3xl mb-4">Projects ⚒️</h1>
      <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-12">
        I love building side projects and working in new technologies. Below i
        listed few projects that i built during my free time. Make sure to check
        my{" "}
        <Link
          className="text-blue-500 underline"
          href="https://github.com/realswikarrr"
          target="_"
        >
          GitHub
        </Link>{" "}
        for more projects 🫡.
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 mb-12 gap-2">
        <Link
          href="https://github.com/realswikarrr/likedvideo_analysis"
          target="_"
        >
          <div className="flex flex-col h-36 p-4 bg-white/10 dark:bg-black/10 rounded-md border border-slate-400 hover:border-slate-700 dark:border-slate-800 dark:hover:border-slate-600 transition-colors duration-75 cursor-pointer">
            <h1 className="font-semibold mb-1">likedvideo_analysis</h1>
            <p className="text-sm text-gray-800/70 dark:text-gray-100/70">
              Uses Youtube API to get videos and provide analysis.
            </p>
            <div className="mt-auto flex flex-row gap-4 text-gray-700 dark:text-gray-300 text-sm">
              <p className="flex flex-row items-center">
                <span className="w-3 h-3 rounded-full mr-1 bg-[rgb(43,116,137)]"></span>
                TypeScript
              </p>
              <p className="flex flex-row items-center justify-center">
                <span className="mr-1">
                  <CiStar />
                </span>
                1
              </p>
              <p className="flex flex-row items-center justify-center">
                <span className="mr-1">
                  <FaCodeFork />
                </span>
                1
              </p>
            </div>
          </div>
        </Link>

        {/* NEXT PROJECT */}
        <Link href="https://github.com/realswikarrr/nep-lofi" target="_">
          <div className="flex flex-col h-36 p-4 bg-white/10 dark:bg-black/10 rounded-md border border-slate-400 hover:border-slate-700 dark:border-slate-800 dark:hover:border-slate-600 transition-colors duration-75 cursor-pointer">
            <h1 className="font-semibold mb-1">nep_lofi</h1>
            <p className="text-sm text-gray-800/70 dark:text-gray-100/70">
              Music Player / Chat App built using Next Js and tailwind.
            </p>
            <div className="mt-auto flex flex-row gap-4 text-gray-700 dark:text-gray-300 text-sm">
              <p className="flex flex-row items-center">
                <span className="w-3 h-3 rounded-full mr-1 bg-[rgb(43,116,137)]"></span>
                TypeScript
              </p>
              <p className="flex flex-row items-center justify-center">
                <span className="mr-1">
                  <CiStar />
                </span>
                1
              </p>
              <p className="flex flex-row items-center justify-center">
                <span className="mr-1">
                  <FaCodeFork />
                </span>
                0
              </p>
            </div>
          </div>
        </Link>

        {/* NEXT PROJECT */}
        <Link href="https://github.com/realswikarrr/reddit_clone" target="_">
          <div className="flex flex-col h-36 p-4 bg-white/10 dark:bg-black/10 rounded-md border border-slate-400 hover:border-slate-700 dark:border-slate-800 dark:hover:border-slate-600 transition-colors duration-75 cursor-pointer">
            <h1 className="font-semibold mb-1">nep_lofi</h1>
            <p className="text-sm text-gray-800/70 dark:text-gray-100/70">
              A clone of reddit , full stack application made using Next Js and
              tRPC
            </p>
            <div className="mt-auto flex flex-row gap-4 text-gray-700 dark:text-gray-300 text-sm">
              <p className="flex flex-row items-center">
                <span className="w-3 h-3 rounded-full mr-1 bg-[rgb(43,116,137)]"></span>
                TypeScript
              </p>
              <p className="flex flex-row items-center justify-center">
                <span className="mr-1">
                  <CiStar />
                </span>
                1
              </p>
              <p className="flex flex-row items-center justify-center">
                <span className="mr-1">
                  <FaCodeFork />
                </span>
                0
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
