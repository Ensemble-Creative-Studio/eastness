"use client"

import { motion } from "framer-motion";
import { PortableText } from "next-sanity";
import Image from "next/image.js";
import { useEffect, useRef } from "react"
import RightModal from "./rightModal.jsx";

export default function Gallery({location, onClose}) {
    return (
        <RightModal onClose={onClose} >
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
        </RightModal>
    )
}