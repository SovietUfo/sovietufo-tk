import Footer from "./footer"
import Header from "./header"

export default function Layout({children}) {
    return (
        <div className="flex flex-col justify-between h-screen">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}