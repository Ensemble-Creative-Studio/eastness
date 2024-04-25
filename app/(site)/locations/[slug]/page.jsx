import { getLocation } from "@/sanity/sanity-utils.js";
import { PortableText } from "next-sanity";
import Image from "next/image.js";

export default async function Location({params}) {
    const location = await getLocation(params.slug);
    return (
        <div className="p-7">
            <h2 className="text-3xl z-10 relative inline-block">{location.name}</h2>
            <div className="max-w-readable mt-3">
                <PortableText value={location.description} />
            </div>
            <div className="flex flex-wrap gap-5 mt-5">
                {location.gallery.map((photo) => (
                    <Image 
                        key={photo._key} 
                        alt={photo._type} 
                        src={photo.url} 
                        width="500" 
                        height="500"
                        className="object-cover rounded-md flex-grow w-1/4"
                    />
                ))}
            </div>
        </div>
    )
}