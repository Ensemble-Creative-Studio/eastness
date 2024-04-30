"use client"

import { useRouter, useSearchParams } from "next/navigation.js";
import VideoInteractions from "./videoInteractions.jsx";
import { useEffect, useState } from "react";
import VideoPlayer from "./utils/videoPlayer.jsx";
import Image from "next/image.js";


export default function ProjectsList({ projects, showFilms }) {
    const router = useRouter();
    const [selectedProject, setSelectedProject] = useState(null);
    const [showVideo, setShowVideo] = useState(false);
    const searchParams = useSearchParams();
    const hasSearchParams = searchParams.has("film");
    const [visibleImage, setVisibleImage] = useState(projects[0]);

    // Update background image
    const handleMouseEnter = (project) => {
        setVisibleImage(project);
    }
    
    // Display film and update url
    const displayFilm = (project) => {
        const slug = project.slug;
        const filmUrl = project.film;

        if (showFilms) {
            // Update URL
            if (!hasSearchParams) {
                router.push(`?film=${slug}`, undefined, { shallow: true });
            }
            setSelectedProject(filmUrl);
            setShowVideo(true);
        }
    }

    // Display film if search params are in the url at page loading
    useEffect(() => {
        if (showFilms && hasSearchParams) {
            const slug = searchParams.get("film");
            const project = projects.find(project => project.slug === slug);

            if (project) {
                displayFilm(project);
            }
        }
    }, []);
    
    // Hide film and update url
    const handleCloseVideo = () => {
        setShowVideo(false);
        const url = new URL(window.location.href);
        router.push(url.pathname, undefined, { shallow: true });
    }

    return (
        <div className="flex flex-col justify-start projects-list">
            {projects.map((project) => (
                <div key={project._id} className="relative slide inline-block">
                    {/* <video src={project.loopVideo} autoPlay loop muted className="h-screen w-screen object-cover fixed top-0 left-0 hidden"></video> */}
                    <button 
                        onClick={() => displayFilm(project)}
                        onMouseEnter={() => handleMouseEnter(project)}
                    >
                        <h2 className={`text-3xl z-10 relative inline-block ${showFilms ? "cursor-pointer" : "cursor-default"}`}>{project.title}</h2>
                    </button>
                </div>
            ))}
            {/* <VideoInteractions/> */}
            <Image src={visibleImage.thumbnail} alt="" width={1000} height={1000} className="h-screen w-screen object-cover fixed top-0 left-0" />
            {showVideo && selectedProject && <VideoPlayer src={selectedProject} onClose={handleCloseVideo}/>}
        </div>
    );
}