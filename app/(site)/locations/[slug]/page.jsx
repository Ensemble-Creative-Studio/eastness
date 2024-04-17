import { getLocation } from "@/sanity/sanity-utils.js";

export default async function Location({params}) {
    const location = await getLocation(params.slug);

    return (
        <div>
            <h2>{location.name}</h2>
        </div>
    )
}