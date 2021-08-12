import 'tailwindcss/tailwind.css'
import "../styles/global.css"
import Layout from "../components/layout"

import { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
