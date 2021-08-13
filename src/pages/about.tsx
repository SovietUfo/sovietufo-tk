import Image from "next/image"
import {useEffect} from "react"

function getAge() {
    let msPassed = new Date().getTime() - new Date(2006, 7, 5).getTime()
    
    let yearsPassed = Math.floor(msPassed / 31557600000 /* number of seconds in a year */)
    return yearsPassed
}

export default function About() {

    useEffect(() => {
        document.title = "About me"
    })

    return (
        <>
            <div className="flex justify-center mx-4 mb-4">
                <Image src="/images/cta.jpg" width="150" height="150" alt="" className="rounded-lg"/>
            </div>
            <h1 className="mb-4">hi</h1>
            <p>I&apos;m a {getAge()} years old cool person from poland that&apos;s trying to be good in development</p>
        </>
    )
}