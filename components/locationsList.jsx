import Image from "next/image.js";
import Link from "next/link.js";

export default function LocationsList({ locations }) {
    return (
        <div className="flex flex-col justify-start">
            {locations.map((location, index) => (
                <div key={location._id} className="relative slide inline-block group">
                    <Image src={location.thumbnailImg} alt={location.name} width={1000} height={1000} className={`h-screen w-screen object-cover fixed top-0 left-0 ${index === 0 ? 'visible' : 'invisible group-hover:visible'}`}/>
                    <Link href={`/locations/${location.slug}`}>
                        <h2 className="text-3xl z-10 relative inline-block">{location.name}</h2>
                    </Link>
                </div>
            ))}
        </div>
    )
}