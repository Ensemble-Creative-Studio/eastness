import { PortableText } from "next-sanity";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function About({about, onClose}) {
    const aboutRef = useRef(null);

    useEffect(() => {
        const handleKeyUp = (event) => {
            if (event.key === 'Escape') { onClose(); }
        };
        const handleCLickOutside = (event) => {
            if (aboutRef.current && !aboutRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener("keyup", handleKeyUp);
        document.addEventListener("mousedown", handleCLickOutside);
        return () => {
            document.removeEventListener("keyup", handleKeyUp);
            document.removeEventListener("mousedown", handleCLickOutside);
        };
    }, [onClose]);

    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-40 z-40">
            <motion.div
                key="modal"
                initial={{ opacity: 1, x: '100vw' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 1, x: '100vw' }}
                transition={{ 
                    type: 'spring',
                    mass: 1,
                    stiffness: 80,
                    damping: 20
                }}
            >
                <div ref={aboutRef} className="w-5/6 p-7 bg-white text-black  fixed right-0 overflow-y-scroll h-full">
                    <div className="flex flex-col gap-4 max-w-readable">
                        <h2 className="text-3xl">About us</h2>
                        <PortableText value={about[0].description} />
                        <h2 className="text-3xl">Contact us</h2>
                        <PortableText value={about[0].contact} />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}