const about = {
    name: "about",
    title: "About page",
    type: "document",
    fields: [
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [
                { type: "block" }
            ]
        }
    ]
}

export default about;