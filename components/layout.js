import Footer from "./footer"
import Header from "./header"
import Head from "next/head"

export default function Layout({children}) {
    return (
        <>
            <Head>
                <title>sovietufo.tk</title>
            </Head>
            <body className="bg-red-600">
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </>
    )
}