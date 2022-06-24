import React from "react";
import Projects from "../../components/Projects";
import Head from "next/head";

export default function ProjectsPage({projects}) {
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
            <Projects projects={projects}/>
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
        {
            name: "Pumping",
            img: "/pumping.png",
            description:
                "A Web app that allows you to create training plan & download it!" +
                "It built with React.js & typescript",
            githubHref: "https://github.com/melnicenkovadik/pumping-ts",
            pageHref: "https://pumping-ts.vercel.app/",
        },
        {
            name: "Portfolio",
            img: "/portfolio.png",
            description:
                "My web portfolio!" +
                "It is powered by Prismic.io an API-based digital content management and built with Gatsby.js",
            githubHref: "https://github.com/melnicenkovadik/gatsby-prismic",
            pageHref: "https://gatsby-prismic-taupe.vercel.app/",
        },
        {
            name: "Aim Training",
            img: "/aim.png",
            description:
                "Game for training play in Counter-Strike.It is built with React.js",
            githubHref: "https://github.com/melnicenkovadik/AimGameTraining",
            pageHref: "https://aim-game-training.vercel.app/",
        },
        {
            name: "Events planing",
            img: "/events.png",
            description:
                "App for planing events with hard sorting and pagination. It is built with Next.js",
            githubHref: "https://github.com/melnicenkovadik/events-planing-next",
            pageHref: "https://events-chi.vercel.app/events",
        },
        {
            name: "Chat",
            img: "/chat.png",
            description:
                "Chat layout (in process).It is built with React.js",
            githubHref: "https://github.com/melnicenkovadik/chat-react",
            pageHref: "https://react-chat-eta.vercel.app/",
        },
        {
            name: "Treloloshka",
            img: "/trelolosha.png",
            description:
                "Todo app in trello style .It is built with React.js",
            githubHref: "https://github.com/melnicenkovadik/treloloshka",
            pageHref: "https://treloloshka.vercel.app/",
        },
        {
            name: "Music player",
            img: "/player.png",
            description:
                "Music player .It is built with React.js",
            githubHref: "https://github.com/melnicenkovadik/music-react-player",
            pageHref: "https://music-react-player.vercel.app/",
        },
        {
            name: "Online shop",
            img: "/shop.png",
            description:
                "My first online shop .It is powered by redux and built with React.js",
            githubHref: "https://gitlab.com/melnicenkovadik/react-redux-on-line-shop",
            pageHref: "https://react-redux-on-line-shop.vercel.app/",
        },
        {
            name: "Jira clone",
            img: "/board.png",
            description:
                "Try to copy Jira .It is powered by vuex and built with Nuxt.js",
            githubHref: "https://github.com/melnicenkovadik/MyBoard-jira-clone-",
            pageHref: "https://my-board-jira-clone.vercel.app/auth/signin",
        },
        {
            name: "Book list",
            img: "/books.png",
            description:
                "App for create book list for reading .It is built with React.js",
            githubHref: "https://gitlab.com/melnicenkovadik/book-list-app/",
            pageHref: "https://melnicenkovadik.gitlab.io/book-list-app/",
        },
        {
            name: "La Luna",
            img: "/luna.png",
            description:
                "Site for nails master in witch you can register by form & master get notification on telegram .It" +
                " is powered by teltgram-bot api &  built with React.js",
            githubHref: "https://gitlab.com/melnicenkovadik/telegram_send_react",
            pageHref: "https://laluna-pied.vercel.app/",
        },
        {
            name: "Create sounds",
            img: "/tap-mus.png",
            description:
                "Create sounds by tapping buttons =) .It is built with React.js",
            githubHref: "https://gitlab.com/melnicenkovadik/create-sounds-app",
            pageHref: "https://melnicenkovadik.gitlab.io/create-sounds-app/",
        },
        {
            name: "The Ham",
            img: "/ham.png",
            description:
                "My first step project on FullStack course .It is built with html/css/js",
            githubHref: "https://gitlab.com/melnicenkovadik/this-my-first-project/-/tree/master/step-1",
            pageHref: "https://melnicenkovadik.gitlab.io/stepham.gitlab.io/",
        },
        {
            name: "Meditation",
            img: "/medit.png",
            description:
                "Meditation app .It is built with html/css/js",
            githubHref: "https://gitlab.com/melnicenkovadik/meditation-app",
            pageHref: "https://melnicenkovadik.gitlab.io/meditation-app/",
        },
        {
            name: "Google maps clone",
            img: "/map.png",
            description:
                "It is built with React.js",
            githubHref: "https://gitlab.com/melnicenkovadik/google-maps-clone",
            pageHref: "https://melnicenkovadik.gitlab.io/google-maps-clone/",
        },
        {
            name: "Site constructor",
            img: "/cosntructor.png",
            description:
                "Built sites without coding. It is built with React.js",
            githubHref: "https://github.com/melnicenkovadik/constructor",
            pageHref: "https://vanilla-js-site-constructor.web.app/",
        },
        {
            name: "Snake game",
            img: "/snake.png",
            description:
                "It is built with html/css/js",
            githubHref: "https://gitlab.com/melnicenkovadik/snake",
            pageHref: "https://melnicenkovadik.gitlab.io/snake/",
        },

    ];

    return {
        props: {
            projects,
        },
    };
}
