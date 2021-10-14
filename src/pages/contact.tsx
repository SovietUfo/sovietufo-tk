import {useEffect} from "react"
import {FaGithub, FaTwitter, FaSpotify, FaDiscord, FaLastfm} from "react-icons/fa"

import LinkButton from "../components/linkButton"

export default function Contact() {

    useEffect(() => {
        document.title = "Contact"
    })
    
    return (
        <>
            <h1>you can contact me on:</h1>
            <ul>
                <li><LinkButton url="https://twitter.com/sovietufo" text="twitter" icon={<FaTwitter className="inline mr-1 mb-1"/>}/></li>
                <li><LinkButton url="https://discordapp.com/users/590956498495209474/" text="discord" icon={<FaDiscord className="inline mr-1 mb-1"/>}/></li>
            </ul>
            <h1 className="text-2xl">other stuff:</h1>
            <ul>
                <li><LinkButton url="https://github.com/SovietUfo" text="github" icon={<FaGithub className="inline mr-1 mb-1"/>}/></li>
                <li><LinkButton url="https://open.spotify.com/user/arcadeaddicted" text="spotify" icon={<FaSpotify className="inline mr-1 mb-1"/>}/></li>
                <li><LinkButton url="https://last.fm/user/SovietUfo" text="last.fm" icon={<FaLastfm className="inline mr-1 mb-1"/>}/></li>
            </ul>
        </>
    )
}