import Document, {Html, Head, Main, NextScript} from "next/document"

class CustomDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="description" content="big floppa my beloved" />
                    <meta name="og:description" content="big floppa my beloved" />
                    <meta name="theme-color" content="#1a0936" />
                    <meta property="og:title" content="sovietufo.tk" />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="https://media.discordapp.net/attachments/683671445318008873/884153738699345980/flop.jpg?width=687&height=676" />
                </Head>
                <body className="bg-[#3f1680]">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default CustomDocument