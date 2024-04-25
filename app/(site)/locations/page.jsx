import LocationsList from "@/components/locationsList.jsx";
import { getLocations } from "@/sanity/sanity-utils.js";

export default async function Locations() {
    const locations = await getLocations();
    return (
        <div className="flex flex-col gap-4 relative w-full p-7">
            <LocationsList locations={locations}/>
        </div>
    )
}