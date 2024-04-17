import { getAboutPage } from "@/sanity/sanity-utils.js";
import { PortableText } from "@portabletext/react";

export default async function About() {
    const about = await getAboutPage();
    return (
        <div className="flex flex-col gap-4 fixed w-full p-7 z-0">
            <PortableText value={about[0].content} />
        </div>
    )
}