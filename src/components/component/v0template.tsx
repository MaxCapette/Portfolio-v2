/* eslint-disable @next/next/no-img-element */
import Link from "next/link";


import About from "../about/About";
import Projects from "../Projects";
import ContactPage from "../contact/contact";
import { Skills } from "./skills";
export function V0template() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section id="about" className="py-16 px-6 md:px-10 lg:px-16 bg-gradient-to-r from-secondary to-primary">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
            
              <div className="typewriter w-min">
              <h1 className="text-4xl font-bold">Hello 👋 I&apos;m Max,</h1></div>
              <h2 className="text-2xl font-medium">a Web Developer</h2>
              <p className="text-muted-foreground introText">
                I&apos;m a passionate front-end developer with a strong focus on
                building beautiful and responsive user interfaces. I have
                experience working with modern web technologies and frameworks,
                and I&apos;m always eager to learn and grow.
              </p>
              <div className="flex gap-4">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/pdf/CV_2024-07-13_Maxime_Capette.pdf"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  View Resume
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/about2.jpeg"
                width={400}
                height={400}
                alt="a cool picture of me (kind of)"
                className="rounded-full"
              />
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="py-16 px-6 md:px-10 lg:px-16 bg-input"
        >
          <Projects />
        </section>
        <section id="experience" className="py-16 px-6 md:px-10 lg:px-16 bg-gradient-to-r from-secondary to-primary">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold flex ">Work Experience</h2>
            <p className="text-muted-foreground">
              Here&apos;s a timeline of my previous roles and experiences.
            </p>
          </div>
          <About />
        </section>
        <Skills />
        <section id="contact" className="py-16 px-6 md:px-10 lg:px-16 bg-muted">
          <div className="max-w-4xl mx-auto space-y-4 flex flex-col items-center">
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="text-muted-foreground">
              Feel free to reach out to me for any inquiries or opportunities.
            </p>
           <ContactPage />
          </div>
        </section>
      </main>
    </div>
  );
}
