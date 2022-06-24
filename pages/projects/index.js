import React from "react";
import Projects from "../../components/Projects";
import Head from "next/head";

export default function ProjectsPage({ projects }) {
    return (
        <main>
            <Head>
                <title>Projects - Vadym Melnychenko - Front-End Developer</title>
                <meta
                    name="description"
                    content="Check out my Projects! Im Vadym Melnychenko and im a Front-End Developer from Kyiv, Ukraine."
                />
                <meta
                    property="og:title"
                    content="Projects - Vadym Melnychenko - Front-End Developer"
                />
                <meta
                    property="og:description"
                    content="Check out my Projects! Im Vadym Melnychenko and im a Front-End Developerfrom Kyiv, Ukraine."
                />
            </Head>
            <Projects projects={projects} />
        </main>
    );
}

export async function getStaticProps() {
    let projects = [
        {
            name: "PokeSearcher",
            img: "/pokesearch.png",
            description:
                "A Web app that allows you to search for all the current Pokemons! It is Powered by PokeApi and built with React.js.",
            githubHref: "https://github.com/melnicenkovadik/pokemons",
            pageHref: "https://pokemons-khaki.vercel.app/",
        },
        
    ];

    return {
        props: {
            projects,
        },
    };
}
