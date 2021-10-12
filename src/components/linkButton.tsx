interface Props {
    url: string,
    bg: string,
    text: string
}

export default function LinkButton(props: Props) {
    return (
        <a href={props.url}>
            <button className={`p-2 rounded hover:text-[${props.bg}] bg-[#2a0f57]`}>{props.text}</button>
        </a>
    )
}