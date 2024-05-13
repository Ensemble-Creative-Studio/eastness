import LocationsList from "@/components/locationsList.jsx";
import { getLocations } from "@/sanity/sanity-utils.js";
import { Suspense } from "react";

export default async function Locations() {
    const locations = await getLocations();
    return (
        <div className="flex flex-col gap-4 relative w-full p-4 md:p-7">
            <Suspense>
                <LocationsList locations={locations}/>
            </Suspense>
        </div>
    )
}