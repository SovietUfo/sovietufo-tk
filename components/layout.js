import Footer from "./footer"
import Header from "./header"
import Head from "next/head"

export default function Layout({children}) {
    return (
        <>
            <Head>
                <title>sovietufo.tk</title>
            </Head>
            <body className="bg-gradient-to-r from-yellow-500 via-red-500 to-purple-500">
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </>
    )
}