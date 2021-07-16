import Footer from "./footer"
import Header from "./header"

export default function Layout({children}) {
    return (
        <>
            <Header />
            <main className="bg-gradient-to-r from-red-400 to-blue-600">{children}</main>
            <Footer />
        </>
    )
}