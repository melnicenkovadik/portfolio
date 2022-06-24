import Head from "next/head";
import Header from "../components/Header";

export default function Index() {
    return (
        <main>
            <Head>
                <title>Vadym Melnychenko - Front-End Developer</title>
                <meta
                    name="description"
                    content="Vadym Melnychenko is a Front-End developer from Kyiv, Ukraine."
                />
                <meta
                    property="og:title"
                    content="Vadym Melnychenko - Front-End Developer"
                />
                <meta
                    property="og:description"
                    content="Vadym Melnychenko is a Front-End developer from Kyiv, Ukraine."
                />
            </Head>
            <Header />
        </main>
    );
}
