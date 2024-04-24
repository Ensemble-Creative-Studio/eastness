import ProjectsList from "@/components/projectsList.jsx";
import { getProjects } from "@/sanity/sanity-utils.js"

export default async function Projects() {
    const projects = await getProjects();
    return (
        <div className="flex flex-col gap-4 relative w-full p-7">
            <ProjectsList projects={projects} showFilms={true}/>
        </div>
    )
}