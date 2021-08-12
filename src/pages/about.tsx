import Image from "next/image"
import {useEffect} from "react"

export default function About() {

    useEffect(() => {
        document.title = "About me"
    })

    return (
        <>
            <div className="flex justify-center mx-4 mb-4">
                <Image src="/images/cta.jpg" width="150" height="150" alt="" className="rounded-lg"/>
            </div>
            <h1 className="mb-4">i like doing dumb shit</h1>
            <p>and big floppa</p>
        </>
    )
}