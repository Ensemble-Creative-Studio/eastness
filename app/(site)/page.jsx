import ProjectsList from "@/components/projectsList.jsx";
import SoundButton from "@/components/utils/soundButton.jsx";
import { getFeaturedProjects } from "@/sanity/sanity-utils.js"
import { Suspense } from "react";

export default async function Home() {
    const featured = await getFeaturedProjects();
    const projects = featured[0].projects;

    return (
        <div className="flex flex-col gap-4 p-4 md:p-7 z-0">
            <Suspense>
                <ProjectsList projects={projects} showFilms={false} />
            </Suspense>
            <SoundButton/>
        </div>
    )
}