"use client"

import { useRouter, useSearchParams } from "next/navigation.js";
import VideoInteractions from "./videoInteractions.jsx";
import Film from "./film.jsx";
import { useEffect, useState } from "react";


export default function ProjectsList({ projects, showFilms }) {
    const router = useRouter();
    const [selectedProject, setSelectedProject] = useState(null);
    const [showVideo, setShowVideo] = useState(false);
    const searchParams = useSearchParams();
    const hasSearchParams = searchParams.has("film");

    const updateUrl = (project) => {
        const slug = project.slug;
        const filmUrl = project.film;

        if (showFilms) {
            if (!hasSearchParams) {
                router.push(`?film=${slug}`, undefined, { shallow: true });
            }
            setSelectedProject(filmUrl);
            setShowVideo(true);
        }
    }

    useEffect(() => {
        if (showFilms && hasSearchParams) {
            const slug = searchParams.get("film");
            const project = projects.find(project => project.slug === slug);

            if (project) {
                updateUrl(project);
            }
        }
    }, []);
    
    const handleCloseVideo = () => {
        setShowVideo(false);
        const url = new URL(window.location.href);
        router.push(url.pathname, undefined, { shallow: true });
    }

    return (
        <div className="flex flex-col justify-start projects-list">
            {projects.map((project) => (
                <div key={project._id} className="relative slide inline-block">
                    <video src={project.loopVideo} autoPlay loop muted className="h-screen w-screen object-cover fixed top-0 left-0 hidden"></video>
                        <button onClick={() => updateUrl(project)}>
                            <h2 className={`text-3xl z-10 relative inline-block ${showFilms ? "cursor-pointer" : "cursor-default"}`}>{project.title}</h2>
                        </button>
                </div>
            ))}
            <VideoInteractions/>
            {showVideo && selectedProject && <Film filmUrl={selectedProject} onClose={handleCloseVideo}/>}
        </div>
    );
}