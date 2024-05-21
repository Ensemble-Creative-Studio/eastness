"use client"

import Image from "next/image.js";
import { useRouter, useSearchParams } from "next/navigation.js";
import { useEffect, useState } from "react";
import Gallery from "./utils/gallery.jsx";
import { motion, AnimatePresence } from "framer-motion";

export default function LocationsList({ locations }) {
    const router = useRouter();
    const [showGallery, setShowGallery] = useState(false);
    const [selectedGallery, setSelectedGallery] = useState(null);
    const randomNumber = Math.floor(Math.random() * locations.length);
    const [visibleImage, setVisibleImage] = useState(locations[randomNumber]);
    const searchParams = useSearchParams();
    const hasSearchParams = searchParams.has("gallery");

    // Update background image
    const handleMouseEnter = (location) => {
        setVisibleImage(location);
    }

    // Display gallery and update url
    const displayGallery = (location) => {
        const slug = location.slug;

        if (!hasSearchParams) {
            router.push(`?gallery=${slug}`, undefined, { shallow: true });
        }
        setSelectedGallery(location);
        setShowGallery(true);
    }

    // Display gallery if search params are in the url at page loading
    useEffect(() => {
        if (hasSearchParams) {
            const slug = searchParams.get("gallery");
            const location = locations.find(location => location.slug === slug);

            if (location) {
                displayGallery(location);
            }
        }
    }, []);

    // Hide gallery and update url
    const handleCloseGallery = () => {
        setShowGallery(false);
        const url = new URL(window.location.href);
        router.push(url.pathname, undefined, { shallow: true });
    }

    return (
        <div className="flex flex-col items-start">
            {locations.map((location) => (
                    <h2 
                        key={location._id}
                        onClick={() => displayGallery(location)}
                        onMouseEnter={() => handleMouseEnter(location)}
                        className="text-lg md:text-xl z-10 relative inline-block pointer-events-auto cursor-pointer"
                    >
                        {location.name}
                    </h2>
            ))}
            <Image src={locations[randomNumber].thumbnailImg} alt="" width={1000} height={1000} className="h-screen w-screen object-cover fixed top-0 left-0 -z-10" />
            <AnimatePresence wait>
                <motion.img
                    key={visibleImage._id}
                    src={visibleImage.thumbnailImg}
                    initial={{ opacity:0 }}
                    animate={{ opacity:1 }}
                    exit={{ opacity:0 }}
                    transition={{
                        type: 'spring',
                        mass: 1,
                        stiffness: 80,
                        damping: 20
                    }}
                    alt={visibleImage.name}
                    className="h-screen w-screen object-cover fixed top-0 left-0 z-0"
                />
            </AnimatePresence>
            <AnimatePresence>
                {showGallery && selectedGallery && <Gallery location={selectedGallery} onClose={handleCloseGallery} />}
            </AnimatePresence>
        </div>
    )
}