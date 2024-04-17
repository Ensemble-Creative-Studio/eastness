import { clientConfig } from "./config/client-config";
import { createClient, groq } from "next-sanity";

export async function getAboutPage() {
    return createClient(clientConfig).fetch(
        groq`*[_type == "about"]`
    )
}

export function getProjects() {
    return createClient(clientConfig).fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            title,
            "thumbnail": thumbnail.asset->url,
            loopVideo,
            "slug": slug.current
        }`
    )
}

export function getProject(slug) {
    return createClient(clientConfig).fetch(
        groq`*[_type == "project" && slug.current == $slug][0]`,{ slug }
    )
}

export function getFeaturedProjects() {
    return createClient(clientConfig).fetch(
        groq`*[_type == "homepage"]{
            _id,
            "projects": featured[]->{
                ...,
                "slug": slug.current
            },
        }`
    )
}

export function getLocations() {
    return createClient(clientConfig).fetch(
        groq`*[_type == "location"]{
            ...,
            "thumbnailImg": thumbnail.asset->url,
            "slug": slug.current
        }`
    )
}

export function getLocation(slug) {
    return createClient(clientConfig).fetch(
        groq`*[_type == "location" && slug.current == $slug][0]`,{ slug }
    )
}