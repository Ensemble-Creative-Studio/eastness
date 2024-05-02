"use client"

import { useEffect, useRef, useState } from "react";
import Modal from "./modal.jsx";

export default function VideoPlayer({ src, onClose }) {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    }
    
    const handleMuteUnmute = () => {
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    }

    const handleFullscreen = () => {
        if (videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen();
        } else if (videoRef.current.mozRequestFullScreen) {
            videoRef.current.mozRequestFullScreen();
        } else if (videoRef.current.webkitRequestFullscreen) {
            videoRef.current.webkitRequestFullscreen();
        } else if (videoRef.current.msRequestFullscreen) {
            videoRef.current.msRequestFullscreen();
        }
        setIsFullscreen(true);
    }

    const handleExitFullscreen = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        setIsFullscreen(false);      
    }

    const handleTimeUpdate = () => {
        setCurrentTime(videoRef.current.currentTime);
    }

    const handleVideoEnd = () => {
        setIsPlaying(false);
        videoRef.current.currentTime = 0;
    }

    const handleLoadedMetadata = () => {
        setDuration(videoRef.current.duration)
    }

    const handleProgressBarClick = (e) => {
        const progressBar = e.currentTarget;
        const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
        const progressBarWidth = progressBar.offsetWidth;
        const seekTime = (clickPosition / progressBarWidth) * duration;

        videoRef.current.currentTime = seekTime;
    }

    return (
        <Modal onClose={onClose} size={100}>
            <div className="fixed z-50 top-0 left-0 w-screen h-screen bg-black p-7 flex justify-center text-white">
                <div className="relative h-full w-full">
                    {!isPlaying && (
                        <div className="absolute flex h-full w-full justify-center items-center">
                            <svg
                                className='scaling fill-white'
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M23 12l-22 12v-24l22 12zm-21 10.315l18.912-10.315-18.912-10.315v20.63z" />
                            </svg>
                        </div>
                    )}
                    <video
                        ref={videoRef}
                        onClick={handlePlayPause}
                        className="w-auto h-full mx-auto"
                        onTimeUpdate={handleTimeUpdate}
                        onEnded={handleVideoEnd}
                        onLoadedMetadata={handleLoadedMetadata}
                        playsInline
                        autoPlay
                    >
                        <source src={src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <button className="absolute top-0 right-0" onClick={onClose}>
                            Close
                    </button>
                    <div className="absolute flex md:gap-6 bottom-4 md:left-0 w-full md:w-auto justify-between">
                        <button onClick={handlePlayPause}>
                            {isPlaying ? "Pause" : "Play"}
                        </button>
                        <button onClick={handleMuteUnmute}>
                            {isMuted ? "Unmute" : "Mute"}
                        </button>
                        <button onClick={handleFullscreen}>
                            Fullscreen
                        </button>
                    </div>
                    <div className="absolute cursor-pointer bottom-0 left-0 right-0">
                        <div className="h-1.5 bg-white bg-opacity-25" onClick={handleProgressBarClick}>
                            <div className="h-1.5 bg-white" style={{ width: `${(currentTime / duration) * 100}%` }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}