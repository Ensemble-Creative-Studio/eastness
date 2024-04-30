import { getAboutPage, getProjects } from "@/sanity/sanity-utils.js";
import { PortableText } from "@portabletext/react";

export default async function About() {
    const about = await getAboutPage();
    const projects = await getProjects();

    const randomNumber = Math.floor(Math.random() * projects.length);
    const projectToShow = projects[randomNumber];

    return (
        <div className="fixed">
            <video src={projectToShow.film} autoPlay loop muted className="h-screen w-screen object-cover fixed top-0 left-0 z-0 scale-150"></video>
            <div className="flex flex-col gap-4 w-full p-7 bg-white text-black max-w-readable fixed right-0 z-10 overflow-y-scroll h-full">
                <h2 className="text-3xl">About us</h2>
                <PortableText value={about[0].description} />
                <h2 className="text-3xl">Contact us</h2>
                <PortableText value={about[0].contact} />
            </div>
        </div>
    )
}