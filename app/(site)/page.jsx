import ProjectsList from "@/components/projectsList.jsx";
import SoundButton from "@/components/soundButton.jsx";
import { getFeaturedProjects } from "@/sanity/sanity-utils.js"

export default async function Home() {
    const featured = await getFeaturedProjects();
    const projects = featured[0].projects;

    return (
        <div className="flex flex-col gap-4 fixed w-full p-7 z-0">
            <ProjectsList projects={projects} />
            <SoundButton/>
        </div>
    )
}