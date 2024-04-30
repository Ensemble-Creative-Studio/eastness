import Header from '@/components/header.jsx'
import '../globals.css'
import { getAboutPage } from '@/sanity/sanity-utils.js'

export const metadata = {
    title: 'Eastness',
    description: 'Based in Thailand, Eastness Productions is a high-end creative production service company operating in Southeast Asia and beyond.'
}

export default async function RootLayout({ children }) {
    const about = await getAboutPage();

    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="https://use.typekit.net/yod0ehn.css"/>
            </head>
            <body className="text-white bg-black">
                <Header aboutData={about}/>
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}