"use client"

import { useRouter, useSearchParams } from "next/navigation.js";
import VideoInteractions from "./utils/videoInteractions.jsx";
import { useEffect, useState } from "react";
import VideoPlayer from "./utils/videoPlayer.jsx";
import Image from "next/image.js";
import { motion, AnimatePresence } from "framer-motion";


export default function ProjectsList({ projects, showFilms }) {
    const router = useRouter();
    const [selectedProject, setSelectedProject] = useState(null);
    const [showVideo, setShowVideo] = useState(false);
    const searchParams = useSearchParams();
    const hasSearchParams = searchParams.has("film");
    const randomNumber = Math.floor(Math.random() * projects.length);
    const [visibleImage, setVisibleImage] = useState(projects[randomNumber]);

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
        <div className="flex flex-col justify-start projects-list gap-3">
            {projects.map((project) => (
                <div key={project._id} className="relative slide inline-block">
                    {!showFilms && <video src={project.loopVideo} autoPlay loop muted playsInline className="h-screen w-screen object-cover fixed top-0 left-0 hidden"></video>}
                    <h2 
                        onClick={() => displayFilm(project)}
                        onMouseEnter={() => handleMouseEnter(project)}
                        className={`text-xl z-10 relative inline-block ${showFilms ? "cursor-pointer" : "cursor-default"}`}
                    >
                        {project.title}
                    </h2>
                </div>
            ))}
            {!showFilms && <VideoInteractions/>}
            {showFilms && (
                <>
                <Image src={projects[randomNumber].thumbnail} alt="" width={1000} height={1000} className="h-screen w-screen object-cover fixed top-0 left-0 -z-10" />
                <AnimatePresence wait>
                    <motion.img
                        key={visibleImage._id}
                        src={visibleImage.thumbnail}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            type: 'spring',
                            mass: 1,
                            stiffness: 80,
                            damping: 20
                        }}
                        alt={visibleImage.title}
                        className="h-screen w-screen object-cover fixed top-0 left-0 z-0" />
                </AnimatePresence></>
            )}
            <AnimatePresence>
                {showVideo && selectedProject && <VideoPlayer src={selectedProject} onClose={handleCloseVideo}/>}
            </AnimatePresence>
        </div>
    );
}