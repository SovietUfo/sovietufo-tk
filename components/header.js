import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <nav>
            <div className="flex items-center flex-shrink-0 mr-6">
                <Image src="/favicon.ico" width="40" height="40" alt=""></Image>
                <Link href="/"><a className="text-2xl tracking-tight ml-2 mr-6">sovietufo.tk</a></Link>
                <span className="text-lg tracking-tight">the most swag website ever made</span>
            </div>
            <div className="flex-grow"></div>
            <Link href="/about" className="flex-none" passHref><button>About</button></Link>
            <Link href="/projects" className="flex-none" passHref><button>My projects</button></Link>
            <Link href="/contact" className="flex-none" passHref><button>Contact</button></Link>
        </nav>
    )
}