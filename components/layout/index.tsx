import Footer from "./footer"
import Header from "./header"
import Head from "next/head"

export default function Layout({children}) {
    return (
        <>
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </>
    )
}