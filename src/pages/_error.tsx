import {NextPageContext} from "next"
import {useEffect} from "react"

interface Props {
    statusCode: number
}

export default function Error({statusCode}: Props) {

    useEffect(() => {
        document.title = "Error"
    })

    return (
        <h1>
            {statusCode ? `A server-side error occured. Status code: ${statusCode}` : "a client-side error occured"}
        </h1>
    )
}

export function getInitialProps({res, err}: NextPageContext) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return {statusCode}
}