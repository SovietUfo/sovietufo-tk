import Image from "next/image"
import {useEffect} from "react"

export default function Home() {

    useEffect(() => {
        document.title = "sovietufo.tk"
    })

    return (
        <>
            <h1 className="mb-16">the swaggest site on the internet</h1>
            <div className="flex justify-center mx-4">
                <Image src="/images/floppa.jpg" alt="" height="300" width="1000" className="rounded-lg"/>
            </div>
        </>
    )
}
