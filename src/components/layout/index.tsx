import Footer from "./footer"
import Header from "./header"

export default function Layout({children}) {
    return (
        <div className="flex flex-col justify-between h-screen w-screen">
            <Header />
            <main className="z-10">{children}</main>
            <Footer />
        </div>
    )
}