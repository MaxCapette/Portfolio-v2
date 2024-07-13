/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card"


import {projects} from "@/Data/projectsDatas";
import { Button } from './ui/button';
import Link from "next/link";



export default function Projects() { 
    const reversedProjects = [...projects].reverse();
   // Ajoutez ce code au début de votre composant
const [currentPage, setCurrentPage] = useState(1);
const projectsPerPage = 6;

// Calculer les projets à afficher pour la page actuelle
const indexOfLastProject = currentPage * projectsPerPage;
const indexOfFirstProject = indexOfLastProject - projectsPerPage;
const currentProjects = reversedProjects.slice(indexOfFirstProject, indexOfLastProject);
    return (
        <>
        <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-8 flex flex-col items-center">
          <h2 className="text-3xl font-bold">My Projects</h2>
          <p className="text-muted-foreground">Here are some of the projects I&apos;ve worked on.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map(project => (
            <Card key={project.id} className="transform transition-transform hover:scale-110">
                <Link className="project" href={`projects/${project.id}`}>
              <img src={project.images[0]} width={400} height={300} alt="Project 1" className=" inset-0 h-60 object-fill rounded-t-lg" />
              <CardContent className="p-4">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              </Link>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="mx-4"
          >
            Previous
          </Button>
          <Button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(reversedProjects.length / projectsPerPage)))}
            disabled={currentPage === Math.ceil(reversedProjects.length / projectsPerPage)}
            className="mx-4"
          >
            Next
          </Button>
        </div>
      </div>
     
    </>
    )
}   