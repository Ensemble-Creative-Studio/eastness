"use client"

import { AnimatePresence, motion } from "framer-motion";
import { PortableText } from "next-sanity";
import Image from "next/image.js";
import { useEffect, useRef } from "react"

export default function Gallery({location, onClose}) {
    const galleryRef = useRef(null);

    useEffect(() => {
        const handleKeyUp = (event) => {
            if (event.key === 'Escape') { onClose(); }
        };

        const handleCLickOutside = (event) => {
            if (galleryRef.current && !galleryRef.current.contains(event.target)) {
                onClose();
            }
        }

        document.addEventListener('keyup', handleKeyUp);
        document.addEventListener('mousedown', handleCLickOutside);
        return () => {
            document.removeEventListener('keyup', handleKeyUp);
            document.removeEventListener('mousedown', handleCLickOutside);
        };
    }, [onClose]);
    console.log(location);

    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-40 z-50">
            <motion.div
                key="modal"
                initial={{ opacity: 1, x: '100vw' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 1, x: '100vw' }}
                transition={{ 
                    type: 'spring',
                    mass: 1,
                    stiffness: 80,
                    damping: 20,
                    // duration: 0.6 
                }}
            >
                <div ref={galleryRef} className="absolute top-0 right-0 w-5/6 h-screen overflow-y-scroll bg-white text-black">
                    <div className="top-0 p-7 flex flex-col gap-7 pointer-events-none">
                        <h3 className="text-3xl">
                            {location.name}
                        </h3>
                        <div className="max-w-readable">
                            <PortableText value={location.description} />
                        </div>
                    </div>
                    <div className="flex flex-col absolute w-full">
                        {location.gallery.map((photo) => (
                            <Image
                                key={photo._key}
                                src={photo.url}
                                alt=""
                                width={500}
                                height={500}
                                className="w-full object-cover"
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}