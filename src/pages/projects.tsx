import {useEffect} from "react"

export default function Projects() {

    useEffect(() => {
        document.title = "Stuff i made"
    })

    return (
        <>
            <h1>you can find all the cool stuff i did on my <a href="https://github.com/SovietUfo?tab=repositories" className="text-blue-400">GitHub profile.</a></h1>
        </>
    )
}