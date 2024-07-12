/* eslint-disable @next/next/no-img-element */
import { projects } from "@/Data/projectsDatas";
import "./project.css";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Projects({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === parseInt(params.id));

  if (!project) {
    return <div>Projetnon trouvé</div>;
  }

  return (
    <main className="main flex min-h-screen flex-col items-center justify-between py-32">
      <div className="projectMain">
        <div className="flex items-center">
          <h2 className="text-3xl font-bold">{project.title}</h2>
          <Link href="/">
            <Button className="mx-4">Back</Button>
          </Link>
        </div>
        <Link target="_blank" rel="noopener noreferrer" href={project.link}>
          <div className="projectImages">
            <img
              src={project.images[1]}
              alt={project.title}
              width={500}
              height={1000}
            />
            {project.images[2] && (
              <img
                src={project.images[2]}
                alt={project.title}
                width={500}
                height={1000}
              />
            )}
          </div>
        </Link>
        <p className="projectDescription">{project.description}</p>
        <p className="projectDescription">{project.comment}</p>
        <p className="projectDescription">{project.login}</p>
        {project.link && (
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="projectLinks"
            href={project.link}
          >
            <Button>Link to website</Button>{" "}
          </Link>
        )}
        {project.githubLink1 && (
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="projectLinks"
            href={project.githubLink1}
          >
            <Button>Link to github </Button>
          </Link>
        )}
        {project.githubLink2 && (
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="projectLinks"
            href={project.githubLink2}
          >
            <Button> Link to github Back-end</Button>
          </Link>
        )}
        <Link href="/">
          <Button className="">Back</Button>
        </Link>
      </div>
    </main>
  );
}
