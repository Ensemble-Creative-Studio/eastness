"use client"

import Link from "next/link.js";
import VideoInteractions from "./videoInteractions.jsx";

export default function ProjectsList({ projects }) {
    return (
        <div className="flex flex-col justify-start projects-list">
            {projects.map((project) => (
                <div key={project._id} className="relative slide inline-block">
                    <video src={project.loopVideo} autoPlay loop muted className="h-screen w-screen object-cover fixed top-0 left-0 hidden"></video>
                    <Link href={`/projects/${project.slug}`} >
                        <h2 className="text-3xl z-10 relative inline-block">{project.title}</h2>
                    </Link>
                </div>
            ))}
            <VideoInteractions/>
        </div>
    );
}