import Image from "next/image"

export default function Header() {
    return (
        <nav className="bg-gray-800 cursor-default">
            <ul className="flex flex-row text-white space-x-4 p-2 content-center">
                <Image src="/favicon.ico" alt="" width="40" height="40"/>
                <span className="text-2xl font-sans" title="the swaggest website on the internet">sovietufo.tk</span>
                
            </ul>
        </nav>
    )
}