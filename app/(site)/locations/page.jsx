import LocationsList from "@/components/locationsList.jsx";
import { getLocations } from "@/sanity/sanity-utils.js";

export default async function Locations() {
    const locations = await getLocations();
    console.log(locations);
    return (
        <div className="flex flex-col gap-4 fixed w-full p-7 z-0">
            <LocationsList locations={locations}/>
        </div>
    )
}