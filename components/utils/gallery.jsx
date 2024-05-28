"use client"

import { motion } from "framer-motion";
import { PortableText } from "next-sanity";
import Image from "next/image.js";
import { useEffect, useRef } from "react"
import Modal from "./modal.jsx";
import useMediaQuery from "./useMediaQuery.jsx";

export default function Gallery({location, onClose}) {
    const isMedium = useMediaQuery('(min-width: 768px)');
    let  size = 85; if (isMedium) { size =75; }
    return (
        <Modal onClose={onClose} size={size}>
            <div className="top-0 p-4 md:p-7 flex flex-col gap-7 pointer-events-none">
                <h3 className="text-sm md:text-base">
                    {location.name}
                </h3>
                <div className="max-w-readable text-sm md:text-base">
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
        </Modal>
    )
}