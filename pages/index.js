import home from "../components/home.module.css";
import Head from "next/head"

export default () => {
    return (
        <main>
            <Head>
                <title>Blog</title>
            </Head>
            <div className={home.main}>
                <h1>Hello World!</h1>
            </div>
        </main>
    )
}