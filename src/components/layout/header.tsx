import Image from "next/image"
import Link from "next/link"
import {BsList} from "react-icons/bs"
import {useState} from "react"
import styles from "../../styles/animations.module.css"

export default function Header() {

    const [isHidden, setIsHidden] = useState(false)

    function toggleVisibility() {
        setIsHidden(!isHidden)
    }

    return (
        <nav className="lg:flex items-center bg-[#2E3440] lg:p-4 sticky justify-between">
            <div className="flex items-center flex-shrink-0 ml-3 lg:ml-0 justify-between">
                <div>
                    <Image src="/favicon.ico" width="40" height="40" alt=""></Image>
                    <Link href="/" passHref><Image src="/images/logo.gif" alt="sovietufo.tk" height="45" width="135" className="cursor-pointer"/></Link>
                </div>
                <button onClick={toggleVisibility} className="cursor-pointer"><BsList className="lg:hidden h-10 w-10 m-3 text-white"/></button>
            </div>
            <div className={isHidden ? `lg:space-x-6 ${styles.fadeIn}` : "hidden lg:block lg:space-x-6"}>
                <Link href="/about" passHref><button className="navButton">About</button></Link>
                <Link href="/projects" passHref><button className="navButton">My projects</button></Link>
                <Link href="/contact" passHref><button className="navButton">Contact</button></Link>
            </div>
        </nav>
    )
}