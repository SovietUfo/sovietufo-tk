import {useEffect} from "react"

export default function Contact() {

    useEffect(() => {
        document.title = "Contact"
    })

    return (
        <>
            <h1>you can find me on:</h1>
            <ul>
                <li><a href="https://github.com/SovietUfo">GitHub</a></li>
                <li><a href="https://twitter.com/elSovieto">Twitter</a></li>
                <li><a href="https://discordapp.com/users/590956498495209474/">Discord</a></li>
                <li><a href="https://open.spotify.com/user/arcadeaddicted?si=622673af0d9f4862">Spotify</a></li>
                <li><a href="https://www.last.fm/user/SovietUfo">last.fm</a></li>
            </ul>
        </>
    )
}