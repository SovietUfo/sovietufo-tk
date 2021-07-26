import Layout from "../components/layout"
import Image from "next/image"

export default function About() {
    return (
        <Layout>
            <div className="flex justify-center mx-4 mb-4">
                <Image src="/images/cta.jpg" width="150" height="150" alt="" className="rounded-lg"/>
            </div>
            <p>i like doing dumb shit</p>
        </Layout>
    )
}