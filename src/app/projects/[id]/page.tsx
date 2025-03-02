/* eslint-disable @next/next/no-img-element */
import { projects } from "@/Data/projectsDatas";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

type Props = {
  params: { id: string }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.id === parseInt(params.id));
  
  if (!project) {
    return {
      title: "Projet non trouvé",
      description: "Le projet que vous recherchez n'existe pas"
    };
  }

  return {
    title: `${project.title} | Portfolio de Max Capette`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Portfolio de Max Capette`,
      description: project.description,
      images: [
        {
          url: project.images[0],
          width: 800,
          height: 600,
          alt: `Capture d'écran du projet ${project.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Portfolio de Max Capette`,
      description: project.description,
      images: [project.images[0]],
    },
  };
}

export default function Projects({ params }: { params: { id: string } }) {
 /* finding a project object from an array of projects based on a specific condition. */
  const project = projects.find((p) => p.id === parseInt(params.id));

  if (!project) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center py-32">
      <div className="max-w-4xl w-full px-2">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">{project.title}</h2>
          <Link href="/">
            <Button className="mx-4">Back</Button>
          </Link>
        </div>
        <div className="mb-8 w-full ">
          {project.link ? (
            <Link target="_blank" rel="noopener noreferrer" href={project.link}>
              <div className="flex space-x-2 justify-center">
                <img
                  src={project.images[1]}
                  alt={`Capture d'écran principale du projet ${project.title} - ${project.description}`}
                  className="rounded-lg shadow-lg w-1/2 h-auto"
                />
                {project.images[2] && (
                  <img
                    src={project.images[2]}
                    alt={`Capture d'écran supplémentaire du projet ${project.title} - interface utilisateur`}
                    className="rounded-lg shadow-lg w-1/2 h-auto"
                  />
                )}
              </div>
            </Link>
          ) : (
            <div className="flex space-x-2 justify-center">
              <img
                src={project.images[1]}
                alt={`Capture d'écran principale du projet ${project.title} - ${project.description}`}
                className="rounded-lg shadow-lg w-1/2 h-auto"
              />
              {project.images[2] && (
                <img
                  src={project.images[2]}
                  alt={`Capture d'écran supplémentaire du projet ${project.title} - interface utilisateur`}
                  className="rounded-lg shadow-lg w-1/2 h-auto"
                />
              )}
            </div>
          )}
        </div>
        <div className="space-y-4 mb-8 flex flex-col items-center">
          <p className="text-lg">{project.description}</p>
          <p className="text-lg">{project.comment}</p>
          <p className="text-lg">{project.login}</p>
        </div>
        <div className="flex flex-col space-y-4">
          {project.link && (
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
              href={project.link}
            >
              <Button className="w-full">Link to website</Button>
            </Link>
          )}
          {project.githubLink1 && (
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
              href={project.githubLink1}
            >
              <Button className="w-full">Link to GitHub</Button>
            </Link>
          )}
          {project.githubLink2 && (
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
              href={project.githubLink2}
            >
              <Button className="w-full">Link to GitHub Back-end</Button>
            </Link>
          )}
          <Link href="/">
            <Button className="w-full">Back</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
