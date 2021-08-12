import {useEffect} from "react"

export default function FiveHundred() {

    useEffect(() => {
        document.title = "a server-side error occured"
    })

    return <h1 className="font-mono text-6xl">500 - a server-side error occured</h1>
}