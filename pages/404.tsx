import Link from "next/link"

export default function FortyFour() {
    return (
        <>
            <h1 className="font-mono text-6xl mb-4">404 - no page here</h1>
            <div className="justify-center flex"><Link href="/"><a className="text-white text-2xl">return to home</a></Link></div>
        </>
    )
}