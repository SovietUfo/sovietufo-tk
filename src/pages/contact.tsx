import {useEffect} from "react"
import Image from "next/image"
import {FaGithub, FaTwitter, FaSpotify, FaDiscord, FaLastfm} from "react-icons/fa"

import LinkButton from "../components/linkButton"

export default function Contact() {

    useEffect(() => {
        document.title = "Contact"
    })
    
    return (
        <>
            <div className="flex justify-center mx-4 my-4">
                <Image src="/images/shnozle.png" width="150" height="150" className="rounded-lg" alt=""/>
            </div>
            <h1>you can contact me on:</h1>
            <ul>
                <li><LinkButton url="https://twitter.com/sovietufo" text="twitter" icon={<FaTwitter className="inline mr-1 mb-1"/>}/></li>
                <li><LinkButton url="https://discordapp.com/users/590956498495209474/" text="discord" icon={<FaDiscord className="inline mr-1 mb-1"/>}/></li>
            </ul>
            <h1 className="text-3xl">other stuff:</h1>
            <ul>
                <li><LinkButton url="https://github.com/SovietUfo" text="github" icon={<FaGithub className="inline mr-1 mb-1"/>}/></li>
                <h1 className="text-xl">Music: </h1>
                <li><LinkButton url="https://open.spotify.com/user/arcadeaddicted" text="spotify" icon={<FaSpotify className="inline mr-1 mb-1"/>}/></li>
                <li><LinkButton url="https://last.fm/user/SovietUfo" text="last.fm" icon={<FaLastfm className="inline mr-1 mb-1"/>}/></li>
            </ul>
        </>
    )
}