import home from "../components/home.module.css";
import Layout from "../components/Layout";
import Head from "next/head"

export default () => {
    return (
        <Layout>
            <Head>
                <title>Blog</title>
            </Head>
            <div className={home.main}>
                <h1>Hello World!</h1>
            </div>
        </Layout>
    )
}