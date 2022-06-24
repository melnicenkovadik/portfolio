import Head from "next/head";
import AboutMe from "../../components/AboutMe";

export default function AboutMePage() {
    return (
        <main>
            <Head>
                <title>About Me - Vadym Melnychenko - Front-End Developer</title>
                <meta
                    name="description"
                    content="Get to know me! Im Vadym Melnychenko and im a Front-End Developer from Kyiv, Ukraine."
                />
                <meta
                    property="og:title"
                    content="About Me - Vadym Melnychenko - Front-End Developer"
                />
                <meta
                    property="og:description"
                    content="Get to know me! Im Vadym Melnychenko and im a Front-End Developer from Kyiv, Ukraine."
                />
            </Head>
            <AboutMe />
        </main>
    );
}
