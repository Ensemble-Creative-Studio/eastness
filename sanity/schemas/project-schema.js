import { DocumentVideoIcon } from "@sanity/icons";

const project = {
    name: "project",
    title: "Projects",
    icon: DocumentVideoIcon,
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title", maxLength: 96 }
        },
        {
            name: "thumbnail",
            title: "Thumbnail",
            type: "image"
        },
        {
            name: "loopVideo",
            title: "Loop video",
            type: "url",
        },
        {
            name: "film",
            title: "Film",
            type: "url"
        }
    ]
}

export default project;