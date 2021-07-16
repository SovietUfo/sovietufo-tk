import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <nav className="bg-gray-900 cursor-default font-sans">
            <div className="flex flex-row text-white space-x-4 p-2 content-center">
                <Image src="/favicon.ico" alt="" width="40" height="40"/>
                <span className="text-2xl font-sans" title="the swaggest website on the internet">sovietufo.tk</span>
                <Link href="/about" passHref><button className="text-lg px-3 bg-gray-700 hover:bg-gray-800 rounded">About</button></Link>
                <Link href="/projects" passHref><button className="text-lg px-3 bg-gray-700 hover:bg-gray-800 rounded">Projects</button></Link>
                <Link href="/contact" passHref><button className="text-lg px-3 bg-gray-700 hover:bg-gray-800 rounded">Contact</button></Link>
            </div>
        </nav>
    )
}