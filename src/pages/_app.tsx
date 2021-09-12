import 'tailwindcss/tailwind.css'
import "../styles/global.css"
import Layout from "../components/layout"
import ParticleContainer from "../components/particleContainer"

import { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <ParticleContainer />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
  )
}

export default MyApp
