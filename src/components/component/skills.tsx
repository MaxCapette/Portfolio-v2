"use client"
import { SiCss3, SiGit, SiGithub, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiRedux, SiSymfony, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si";
import { useState } from "react";

export function Skills() {
  const [hoveredTech, setHoveredTech] = useState<string>("");

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-accent flex justify-center">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Tech Stack</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            These are the technologies and tools I use to build amazing web applications.
          </p>
          <div className="min-h-[2.5rem] flex items-center justify-center">
            <span className="text-primary font-semibold text-lg">
              {hoveredTech ? `🚀 ${hoveredTech}` : ""}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <div 
            className="flex flex-col items-center gap-2 group cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-lg p-4 hover:shadow-lg"
            onMouseEnter={() => setHoveredTech("HTML")}
            onMouseLeave={() => setHoveredTech("")}
          >
            <SiHtml5 className="w-10 h-10 transition-all duration-300 group-hover:scale-125 group-hover:text-orange-500" />
            <span className="text-sm font-medium transition-all duration-300 group-hover:text-orange-500 group-hover:font-bold">HTML</span>
          </div>
          <div 
            className="flex flex-col items-center gap-2 group cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-lg p-4 hover:shadow-lg"
            onMouseEnter={() => setHoveredTech("CSS")}
            onMouseLeave={() => setHoveredTech("")}
          >
            <SiCss3 className="w-10 h-10 transition-all duration-300 group-hover:scale-125 group-hover:text-blue-500" />
            <span className="text-sm font-medium transition-all duration-300 group-hover:text-blue-500 group-hover:font-bold">CSS</span>
          </div>
          
          <div 
            className="flex flex-col items-center gap-2 group cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-lg p-4 hover:shadow-lg"
            onMouseEnter={() => setHoveredTech("Next.js")}
            onMouseLeave={() => setHoveredTech("")}
          >
            <SiNextdotjs className="w-10 h-10 transition-all duration-300 group-hover:scale-125 group-hover:text-black" />
            <span className="text-sm font-medium transition-all duration-300 group-hover:text-black group-hover:font-bold">Next.js</span>
          </div>
          <div 
            className="flex flex-col items-center gap-2 group cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-lg p-4 hover:shadow-lg"
            onMouseEnter={() => setHoveredTech("Tailwind CSS")}
            onMouseLeave={() => setHoveredTech("")}
          >
            <SiTailwindcss className="w-10 h-10 transition-all duration-300 group-hover:scale-125 group-hover:text-cyan-500" />
            <span className="text-sm font-medium transition-all duration-300 group-hover:text-cyan-500 group-hover:font-bold">Tailwind CSS</span>
          </div>
          <div 
            className="flex flex-col items-center gap-2 group cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-lg p-4 hover:shadow-lg"
            onMouseEnter={() => setHoveredTech("React")}
            onMouseLeave={() => setHoveredTech("")}
          >
            <SiReact className="w-10 h-10 transition-all duration-300 group-hover:scale-125 group-hover:text-blue-400" />
            <span className="text-sm font-medium transition-all duration-300 group-hover:text-blue-400 group-hover:font-bold">React</span>
          </div>
          <div 
            className="flex flex-col items-center gap-2 group cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-lg p-4 hover:shadow-lg"
            onMouseEnter={() => setHoveredTech("JavaScript")}
            onMouseLeave={() => setHoveredTech("")}
          >
            <SiJavascript className="w-10 h-10 transition-all duration-300 group-hover:scale-125 group-hover:text-yellow-400" />
            <span className="text-sm font-medium transition-all duration-300 group-hover:text-yellow-400 group-hover:font-bold">JavaScript</span>
          </div>
          <div 
            className="flex flex-col items-center gap-2 group cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-lg p-4 hover:shadow-lg"
            onMouseEnter={() => setHoveredTech("TypeScript")}
            onMouseLeave={() => setHoveredTech("")}
          >
            <SiTypescript className="w-10 h-10 transition-all duration-300 group-hover:scale-125 group-hover:text-blue-600" />
            <span className="text-sm font-medium transition-all duration-300 group-hover:text-blue-600 group-hover:font-bold">TypeScript</span>
          </div>
          <div 
            className="flex flex-col items-center gap-2 group cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-lg p-4 hover:shadow-lg"
            onMouseEnter={() => setHoveredTech("Symfony")}
            onMouseLeave={() => setHoveredTech("")}
          >
            <SiSymfony className="w-10 h-10 transition-all duration-300 group-hover:scale-125 group-hover:text-black" />
            <span className="text-sm font-medium transition-all duration-300 group-hover:text-black group-hover:font-bold">Symfony</span>
          </div>
          <div 
            className="flex flex-col items-center gap-2 group cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-lg p-4 hover:shadow-lg"
            onMouseEnter={() => setHoveredTech("Git")}
            onMouseLeave={() => setHoveredTech("")}
          >
            <SiGit className="w-10 h-10 transition-all duration-300 group-hover:scale-125 group-hover:text-orange-600" />
            <span className="text-sm font-medium transition-all duration-300 group-hover:text-orange-600 group-hover:font-bold">Git</span>
          </div>
          <div 
            className="flex flex-col items-center gap-2 group cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-lg p-4 hover:shadow-lg"
            onMouseEnter={() => setHoveredTech("Vercel")}
            onMouseLeave={() => setHoveredTech("")}
          >
            <SiVercel className="w-10 h-10 transition-all duration-300 group-hover:scale-125 group-hover:text-black" />
            <span className="text-sm font-medium transition-all duration-300 group-hover:text-black group-hover:font-bold">Vercel</span>
          </div>
          <div 
            className="flex flex-col items-center gap-2 group cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-lg p-4 hover:shadow-lg"
            onMouseEnter={() => setHoveredTech("Redux")}
            onMouseLeave={() => setHoveredTech("")}
          >
            <SiRedux className="w-10 h-10 transition-all duration-300 group-hover:scale-125 group-hover:text-purple-600" />
            <span className="text-sm font-medium transition-all duration-300 group-hover:text-purple-600 group-hover:font-bold">Redux</span>
          </div>
          <div 
            className="flex flex-col items-center gap-2 group cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-lg p-4 hover:shadow-lg"
            onMouseEnter={() => setHoveredTech("GitHub")}
            onMouseLeave={() => setHoveredTech("")}
          >
            <SiGithub className="w-10 h-10 transition-all duration-300 group-hover:scale-125 group-hover:text-gray-800" />
            <span className="text-sm font-medium transition-all duration-300 group-hover:text-gray-800 group-hover:font-bold">GitHub</span>
          </div>
          {/* <div className="flex flex-col items-center gap-2">
            <BookIcon className="w-10 h-10" />
            <span className="text-sm font-medium">ChatGPT</span>
          </div> */}
        </div>
      </div>
    </section>
  )
}

