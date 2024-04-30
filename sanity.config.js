import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemas/index";
import { DocumentTextIcon, HomeIcon } from "@sanity/icons";
import { visionTool } from "@sanity/vision";
import { vercelDeployTool } from "sanity-plugin-vercel-deploy";

const config = defineConfig({
    projectId: "fcq5rsjt",
    dataset: "production",
    title: "Eastness",
    apiVersion: "2024-04-10",
    basePath: "/admin",
    plugins: [
        structureTool({
            structure: (S) =>
                S.list()
                    .title('Content')
                    .items([
                        S.listItem()
                            .title('Homepage')
                            .icon(HomeIcon)
                            .child(
                                S.document()
                                    .schemaType('homepage')
                                    .documentId('homepage')
                                    .title('Featured projects')
                            ),
                        S.listItem()
                            .title('About page')
                            .icon(DocumentTextIcon)
                            .child(
                                S.document()
                                    .schemaType('about')
                                    .documentId('about')
                                    .title('About page')
                            ),
                        S.divider(),
                        ...S.documentTypeListItems()
                            .filter(listItem => listItem.getId() !== 'homepage' && listItem.getId() !== 'about')
                    ]),
        }),
        visionTool(),
        vercelDeployTool(),
    ],
    schema: { types: schemaTypes }
})

export default config;