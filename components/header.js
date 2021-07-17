import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <nav className="flex items-center bg-gray-900 p-4 text-white space-x-6 sticky mb-16">
            <div className="flex items-center flex-shrink-0 mr-6">
                <Image src="/favicon.ico" width="40" height="40" alt=""></Image>
                <span className="text-2xl tracking-tight ml-2 mr-6">sovietufo.tk</span>
                <span className="text-lg tracking-tight">the most swag website ever made</span>
            </div>
            <div className="flex-grow"></div> {/*float-right class doesn't work for some reason so i used this*/}
            <Link href="/about" className="flex-none" passHref><button className="px-4 py-2 text-lg bg-gray-700 border rounded hover:bg-white hover:border-transparent hover:text-gray-900 transition">About</button></Link>
            <Link href="/projects" className="flex-none" passHref><button className="px-4 py-2 text-lg bg-gray-700 border rounded hover:bg-white hover:border-transparent hover:text-gray-900 transition">My projects</button></Link>
            <Link href="/contact" className="flex-none" passHref><button className="px-4 py-2 text-lg bg-gray-700 border rounded hover:bg-white hover:border-transparent hover:text-gray-900 transition">Contact</button></Link>
            <Link href="/api" className="flex-none" passHref><button className="px-4 py-2 text-lg bg-gray-700 border rounded hover:bg-white hover:border-transparent hover:text-gray-900 transition">APIs</button></Link>
        </nav>
    )
}