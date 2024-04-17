import { useEffect } from 'react';

export default function VideoInteractions() {
    useEffect(() => {
        const projectsList = document.querySelector(".projects-list");
        const slides = document.getElementsByClassName("slide");
        const soundIcon = document.querySelector(".mute-unmute-button");

        function showBackgroundVideo(slide) {
            const video = slide.firstChild;
            video.classList.add("show");
            video.classList.remove("hidden");
            video.play();

            hideBackgroundVideos(slide);
        }

        function hideBackgroundVideos(slideToKeep) {
            const otherSlides = Array.from(slides).filter((item) => item !== slideToKeep);
            for (const slide of otherSlides) {
                const video = slide.firstChild;
                video.classList.remove("show");
                video.classList.add("hidden");
                video.pause();
            }
            setVideoSound();
        }

        function setPageSound() {
            projectsList.classList.toggle("unmute")
            setVideoSound();

            const onIcon = document.querySelector(".volume-on");
            const offIcon = document.querySelector(".volume-off");
            onIcon.classList.toggle("hidden");
            offIcon.classList.toggle("hidden");
        }
        
        function setVideoSound() {
            Array.from(slides).forEach((slide) => {
                const video = slide.firstChild;
                if (video.classList.contains("show") && projectsList.classList.contains("unmute")) {
                    video.muted = false;
                } else {
                    video.muted = true;
                }
            });
        }

        function triggerVideo() {
            Array.from(slides).forEach((slide) => {
                const trigger = slide.querySelector("h2");
                trigger.addEventListener('mouseenter', () => {
                    showBackgroundVideo(slide)
                });
            });
        }

        if (soundIcon) {
            soundIcon.addEventListener("click", setPageSound)
        }

        triggerVideo();
        showBackgroundVideo(slides[0]);

        // Cleanup function
        return () => {
            if (soundIcon) {
                soundIcon.removeEventListener("click", setPageSound);
            }
            const triggers = document.querySelectorAll("h2");
            triggers.forEach((element) => {
                element.removeEventListener('mouseenter', setVideoSound);
            });
        };
    }, []);

    return null;
}
