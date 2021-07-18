import Layout from "../components/layout"


export default function Projects() {
    return (
        <Layout>
            <h1 className="text-center text-white text-3xl mb-4">Here are some VERY cool things I made:</h1>
            <ul className="text-center text-white text-2xl mb-10 list-disc">
                <li><a href="https://github.com/SovietUfo/sovietufo-tk" className="hover:text-blue-500 hover:underline transition">This site</a></li>
                
            </ul>
            <p className="text-center text-white text-xl">currently nothing else but i will definetely do something cool in the future</p>
        </Layout>
    )
}