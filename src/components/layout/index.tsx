import Footer from "./footer"
import Header from "./header"

import React from "react"

interface Props {
    children: React.ReactNode
}

export default function Layout({children}: Props) {
    return (
        <div className="flex flex-col justify-between h-screen w-screen">
            <Header />
            <main className="z-10 w-2/3 self-center rounded lg:bg-[#3B4252] py-6">{children}</main>
            <Footer />
        </div>
    )
}