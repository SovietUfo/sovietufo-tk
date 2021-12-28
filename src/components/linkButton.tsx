import React from "react"

interface Props {
    url?: string,
    text: string,
    icon?: React.ReactNode
}

export default function LinkButton(props: Props) {
    return (
        <a href={props.url}>
            <button className="p-2 rounded text-2xl">{props.icon}{props.text}</button>
        </a>
    )
}