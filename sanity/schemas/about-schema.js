const about = {
    name: "about",
    title: "About page",
    type: "document",
    fields: [
        {
            name: "description",
            title: "Description",
            type: "array",
            of: [
                { type: "block" }
            ]
        },
        {
            name: "contact",
            title: "Contact",
            type: "array",
            of: [
                { type: "block" }
            ]
        }
    ]
}

export default about;