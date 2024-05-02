import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Modal({children, onClose, size}) {
    const modalRef = useRef(null);

    useEffect(() => {
        const handleKeyUp = (event) => {
            if (event.key === 'Escape') { onClose(); }
        };
        const handleCLickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
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
        <div className="fixed top-0 left-0 w-screen h-screen z-40">
            <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        type: 'spring',
                        mass: 1,
                        stiffness: 80,
                        damping: 20
                    }
                }}
                exit={{
                    opacity: 0,
                    transition: {
                        type: 'spring',
                        mass: 1,
                        stiffness: 200,
                        damping: 23
                    }
                }}
            >
                <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-40"></div>
            </motion.div>
            <motion.div
                key="modal"
                initial={{ x: `${size}vw` }}
                animate={{ 
                    x: 0,
                    transition: {
                        type: 'spring',
                        mass: 1,
                        stiffness: 80,
                        damping: 20
                    }
                }}
                exit={{ 
                    x: `${size}vw`,
                    transition: {
                        type: 'spring',
                        mass: 1,
                        stiffness: 200,
                        damping: 23
                    }
                }}
            >
                <div ref={modalRef} className="bg-white text-black z-50 fixed right-0 overflow-y-scroll h-screen" style={{ width: `${size}vw`}}>
                    {children}
                </div>
            </motion.div>
        </div>
    )
}