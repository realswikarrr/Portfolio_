"use client";
import {
  SiTypescript,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiPython,
  SiVisualstudiocode,
  SiGithubactions,
  SiNpm,
} from "react-icons/si";

import { Tooltip } from "react-tooltip";

export default function MainHeader() {
  return (
    <div className="m-10">
      <h1 className="font-bold text-2xl md:text-3xl mb-4">
        Hi My Name is Swikar 🫰
      </h1>
      <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-12">
        I am currently pursuing a Master Degree in Computer Science and have
        interest in Full Stack Development. I like building cool stuff and
        publishing and sharing it with others.
      </p>
      <h1 className="font-bold text-2xl md:text-3xl mb-4">Technologies 💻</h1>
      <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-6">
        I use different kind of technologies for my projects. I have listed
        below some technologies that i have worked in the past and currently
        using.
      </p>
      <div className="w-full space-x-4 items-center text-2xl flex flex-wrap flex-row justify-center p-2 border border-slate-800 rounded-md bg-white/10 dark:bg-black/10 mb-12">
        <SiNextdotjs className="my_next mt-3 md:mt-0" />
        <SiTypescript className="my_typescript mt-3 md:mt-0" />
        <SiTailwindcss className="my_tailwind mt-3 md:mt-0" />
        <SiJavascript className="my_javascript mt-3 md:mt-0" />
        <SiGit className="my_git mt-3 md:mt-0" />
        <SiNodedotjs className="my_node mt-3 md:mt-0" />
        <SiPython className="my_python mt-3 md:mt-0" />
        <SiVisualstudiocode className="my_vscode mt-3 md:mt-0" />
        <SiGithubactions className="my_githubaction mt-3 md:mt-0" />
        <SiNpm className="my_npm mt-3 md:mt-0" />
      </div>
      <Tooltip anchorSelect=".my_next" place="top">
        Next Js
      </Tooltip>
      <Tooltip anchorSelect=".my_typescript" place="top">
        TypeScript
      </Tooltip>
      <Tooltip anchorSelect=".my_tailwind" place="top">
        TailWind
      </Tooltip>
      <Tooltip anchorSelect=".my_javascript" place="top">
        JavaScript
      </Tooltip>
      <Tooltip anchorSelect=".my_git" place="top">
        Git
      </Tooltip>
      <Tooltip anchorSelect=".my_node" place="top">
        Node
      </Tooltip>
      <Tooltip anchorSelect=".my_python" place="top">
        Python
      </Tooltip>
      <Tooltip anchorSelect=".my_vscode" place="top">
        VsCode
      </Tooltip>
      <Tooltip anchorSelect=".my_githubaction" place="top">
        GitHub Action
      </Tooltip>
      <Tooltip anchorSelect=".my_npm" place="top">
        npm
      </Tooltip>
    </div>
  );
}
