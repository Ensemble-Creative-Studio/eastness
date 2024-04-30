"use client"

import Image from "next/image.js";
import { useRouter, useSearchParams } from "next/navigation.js";
import { useEffect, useState } from "react";
import Gallery from "./utils/gallery.jsx";
import { AnimatePresence } from "framer-motion";

export default function LocationsList({ locations }) {
    const router = useRouter();
    const [showGallery, setShowGallery] = useState(false);
    const [selectedGallery, setSelectedGallery] = useState(null);
    const [visibleImage, setVisibleImage] = useState(locations[0]);
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
        <div className="flex flex-col items-start gap-3">
            {locations.map((location) => (
                    <h2 
                        key={location._key}
                        onClick={() => displayGallery(location)}
                        onMouseEnter={() => handleMouseEnter(location)}
                        className="text-xl z-10 relative inline-block pointer-events-auto"
                    >
                        {location.name}
                    </h2>
            ))}
            <Image src={visibleImage.thumbnailImg} alt={visibleImage.name} width={1000} height={1000} className="h-screen w-screen object-cover fixed top-0 left-0 z-0" />
            <AnimatePresence>
                {showGallery && selectedGallery && <Gallery location={selectedGallery} onClose={handleCloseGallery} />}
            </AnimatePresence>
        </div>
    )
}