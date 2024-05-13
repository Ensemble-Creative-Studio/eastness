import ProjectsList from "@/components/projectsList.jsx";
import { getProjects } from "@/sanity/sanity-utils.js"
import { Suspense } from "react";

export default async function Projects() {
    const projects = await getProjects();
    return (
        <div className="relative w-full p-4 md:p-7">
            <Suspense>
                <ProjectsList projects={projects} showFilms={true}/>
            </Suspense>
        </div>
    )
}