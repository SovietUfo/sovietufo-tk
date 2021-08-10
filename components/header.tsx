import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <nav>
            <div className="flex items-center flex-shrink-0 mr-6">
                <Image src="/favicon.ico" width="40" height="40" alt=""></Image>
                <Link href="/" passHref><Image src="/images/logo.gif" alt="sovietufo.tk" height="45" width="135" className="cursor-pointer"/></Link>
            </div>
            <div className="flex-grow"></div>
            <Link href="/about" passHref><button className="flex-none">About</button></Link>
            <Link href="/projects" passHref><button className="flex-none">My projects</button></Link>
            <Link href="/contact" passHref><button className="flex-none">Contact</button></Link>
            
        </nav>
    )
}