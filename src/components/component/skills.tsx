import { SiCss3, SiGit, SiGithub, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiRedux, SiSymfony, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si";

export function Skills() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-accent flex justify-center">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Tech Stack</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          These are the technologies and tools I use to build amazing web applications.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <div className="flex flex-col items-center gap-2">
            <SiHtml5 className="w-10 h-10" />
            <span className="text-sm font-medium">HTML</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SiCss3 className="w-10 h-10" />
            <span className="text-sm font-medium">CSS</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <SiNextdotjs className="w-10 h-10" />
            <span className="text-sm font-medium">Next.js</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SiTailwindcss className="w-10 h-10" />
            <span className="text-sm font-medium">Tailwind CSS</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SiReact className="w-10 h-10" />
            <span className="text-sm font-medium">React</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SiJavascript className="w-10 h-10" />
            <span className="text-sm font-medium">JavaScript</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SiTypescript className="w-10 h-10" />
            <span className="text-sm font-medium">TypeScript</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SiSymfony className="w-10 h-10" />
            <span className="text-sm font-medium">Symfony</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SiGit className="w-10 h-10" />
            <span className="text-sm font-medium">Git</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SiVercel className="w-10 h-10" />
            <span className="text-sm font-medium">Vercel</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SiRedux className="w-10 h-10" />
            <span className="text-sm font-medium">Redux</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SiGithub className="w-10 h-10" />
            <span className="text-sm font-medium">GitHub</span>
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

