import {useEffect} from "react"

import LinkButton from "../components/linkButton"

export default function Contact() {

    useEffect(() => {
        document.title = "Contact"
    })

    return (
        <>
            <h1>you can find me on:</h1>
            <ul>
                <li><LinkButton bg="#333" url="https://github.com/SovietUfo" text="github"/></li>
                <li><LinkButton bg="#1DA1F2" url="https://twitter.com/sovietufo" text="twitter"/></li>
                <li><LinkButton bg="#5865F2" url="https://discordapp.com/users/590956498495209474/" text="discord"/></li>
                <li><LinkButton bg="#1DB954" url="https://open.spotify.com/user/arcadeaddicted" text="spotify"/></li>
                <li><LinkButton bg="#D51007" url="https://last.fm/user/SovietUfo" text="last.fm"/></li>
            </ul>
        </>
    )
}