const homepage = {
    name:"homepage",
    title: "Homepage",
    type: "document",
    fields: [
        {
            name: "featured",
            title: " ",
            description: "Select the projects you want to display on homepage",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{type: "project"}]
                }
            ]
        }
    ]
}

export default homepage;