import { getProject } from "@/sanity/sanity-utils.js";

export default async function Project({params}) {
    const project = await getProject(params.slug);

    return (
        <div>
            <video src={project.loopVideo}></video>
        </div>
    )
}