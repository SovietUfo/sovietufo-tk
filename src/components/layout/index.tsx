import Footer from "./footer"
import Header from "./header"

import React from "react"

type Props = {
    children: React.ReactNode
}

export default function Layout({children}: Props) {
    return (
        <div className="flex flex-col justify-between h-screen w-screen">
            <Header />
            <main className="z-10">{children}</main>
            <Footer />
        </div>
    )
}