const { PinIcon } = require("@sanity/icons");

const location = {
    name: "location",
    title: "Locations",
    icon: PinIcon,
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "name", maxLength: 96 },
        },
        {
            name: "description",
            title: "Description",
            type: "array",
            of: [{ type: "block" }],
        },
        {
            name: "thumbnail",
            title: "Thumbnail",
            type: "image",
        },
        {
            name: "gallery",
            title: "Gallery",
            type: "array",
            of: [
                {
                    name: "image",
                    title: "Image",
                    type: "image",
                    fields: [
                        {
                            name: "title",
                            title: "Title",
                            type: "string",
                        },
                        {
                            name: "alt",
                            title: "Alternative text",
                            type: "string",
                        },
                    ],
                },
            ],
        },
    ],
}

export default location;