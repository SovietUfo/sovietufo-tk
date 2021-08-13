import {useEffect} from "react"

export default function Contact() {

    useEffect(() => {
        document.title = "Contact"
    })

    return (
        <>
            <h1>you can find me on:</h1>
            <ul>
                <li><a href="https://github.com/SovietUfo" className="hover:text-[#333]">GitHub</a></li>
                <li><a href="https://twitter.com/elSovieto" className="hover:text-[#1DA1F2]">Twitter</a></li>
                <li><a href="https://discordapp.com/users/590956498495209474/" className="hover:text-[#5865F2]">Discord</a></li>
                <li><a href="https://open.spotify.com/user/arcadeaddicted?si=622673af0d9f4862" className="hover:text-[#1DB954]">Spotify</a></li>
                <li><a href="https://www.last.fm/user/SovietUfo" className="hover:text-[#D51007]">last.fm</a></li>
            </ul>
        </>
    )
}