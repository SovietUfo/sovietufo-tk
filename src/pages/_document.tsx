import Document, {Html, Head, Main, NextScript} from "next/document"

class CustomDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="description" content="big floppa my beloved" />
                    <meta name="theme-color" content="#1a0936" />
                    <meta property="og:title" content="sovietufo.tk" />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="../../public/images/flop.jpg" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default CustomDocument