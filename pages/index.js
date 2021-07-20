import Image from 'next/image'
import Layout from '../components/layout'

export default function Home() {
    return (
        <Layout>
            <h1 className="mb-20">the swaggest fucking site on the internet</h1>
            <div className="flex justify-center mx-4">
                <Image src="/images/floppa.jpg" alt="" height="300" width="1000" className="rounded"/>
            </div>
        </Layout>
  )
}
