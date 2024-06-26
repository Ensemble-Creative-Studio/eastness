"use client"
import Link from "next/link.js";
import About from "./about.jsx";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function Header({aboutData}) {
    const [showAbout, setShowAbout] = useState(false);

    const headerLinks = [
        {
            url: "/projects",
            title: "Work"
        },
        {
            url: "/locations",
            title: "Locations"
        },
    ];

    function HeaderLink({url, title}) {
        return <Link className='text-sm md:text-base' href={url}>{title}</Link>
    }

    return (
        <header className="sticky top-0 left-0 p-4 md:p-7 flex justify-between items-baseline z-30 bg-bottom-gradient">
            <Link href="/">
                <h1 className="font-medium text-2xl md:text-3xl uppercase">Eastness</h1>
            </Link>
            <nav className="flex gap-2 md:gap-4">
                {headerLinks.map((link) => (
                    <HeaderLink key={link.title} url={link.url} title={link.title} />
                ))}
                <button className='text-sm md:text-base cursor-pointer' onClick={() => setShowAbout(true)}>About</button>
            </nav>
            <AnimatePresence>{showAbout && <About about={aboutData} onClose={() => setShowAbout(false)}/> }</AnimatePresence>
        </header>
    )
}