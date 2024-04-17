import '../globals.css'
import Link from "next/link";

export const metadata = {
    title: 'Eastness',
    description: 'Based in Thailand, Eastness Productions is a high-end creative production service company operating in Southeast Asia and beyond.'
}

const headerLinks = [
    {
        url: "/projects",
        title: "Work"
    },
    {
        url: "/locations",
        title: "Locations"
    },
    {
        url: "/about",
        title: "About"
    },
];

export default async function RootLayout({ children }) {
    function HeaderLink({url, title}) {
        return <Link className='text-lg hover:opacity-60' href={url}>{title}</Link>
    }
    
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="https://use.typekit.net/yod0ehn.css"/>
            </head>
            <body className="text-white bg-black">
                <header className="sticky top-0 left-0 p-7 flex justify-between items-baseline z-30">
                    <Link href="/">
                        <h1 className="font-medium text-3xl uppercase">Eastness</h1>
                    </Link>
                    <nav className="flex gap-4">
                        {headerLinks.map((link) => (
                            <HeaderLink key={link.title} url={link.url} title={link.title} />
                        ))}
                    </nav>
                </header>
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}