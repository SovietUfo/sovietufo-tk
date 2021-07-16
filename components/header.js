import Image from "next/image"
import swag from "../public/favicon.ico"

export default function Header() {
    return (
        <nav className="bg-gray-800">
            <ul>
                <Image src={swag} alt="" width="30" height="30"/>
                <h1 className="text-lg">sovietufo.tk</h1>
                <h2 className="text-base">the most swag website on the internet</h2>
            </ul>
        </nav>
    )
}