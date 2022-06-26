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
    let projects =
        [
            {
                data: [
                    {
                        name: "Arcadia Stacking ",
                        img: "/stacking.png",
                        description:
                            "Staking system for Ambrosus blockchain! It is Powered by Web3.js , Walletconnect and" +
                            " built with" +
                            " React.js.",
                        githubHref: "https://github.com/ambrosus/staking-frontend",
                        pageHref: "https://staking.ambrosus.io/",
                    },
                    {
                        name: "Amb.to ",
                        img: "/ambTo.png",
                        description:
                            "Asset explorer for Ambrosus blockchain! It is Powered by Blockchain and" +
                            " built with" +
                            " React.js.",
                        githubHref: "https://github.com/ambrosus/amb-to-v2",
                        pageHref: "https://amb.to/0x7a2f8d9b1ff83a11a4d796dcf039c225ca0922f53bb2be867c2ebd9e3e4e42c8",
                    },
                    {
                        name: "Ambrosus.io ",
                        img: "/ambrosus.png",
                        description:
                            "It is built by Gatsby.js and web3",
                        githubHref: "https://github.com/ambrosus/landing-page",
                        pageHref: "https://ambrosus.io/",
                    },

                    {
                        name: "Ambrosus Explorer ",
                        img: "/explorer.png",
                        description:
                            "It is built by React.js and powered by  web3 & TypeScript",
                        githubHref: "https://github.com/ambrosus/explorer-frontend",
                        pageHref: "https://explorer-beta.ambrosus.io/",
                    },
                    {
                        name: "Ambrosus DashBoard ",
                        img: "/dashboard.png",
                        description:
                            "It is built by React.js",
                        githubHref: "https://github.com/ambrosus/app-dashboard-v2",
                        pageHref: "https://main.d1twcejp5sycpd.amplifyapp.com/dashboard/node",
                    },
                    {
                        name: "Minerall.io ",
                        img: "/minerall.png",
                        description:
                            "Minerall.io - is a multicoin mining pool . It is built by React.js and powered by  web3 & TypeScript",
                        githubHref: "https://github.com/inc4/minerall-site",
                        pageHref: "https://minerall.io/",
                    },
                    {
                        name: "INC4 site ",
                        img: "/inc-site.png",
                        description:
                            "INC4 is a company who developing blockchain technologies of any complexity.  . It is" +
                            " built by" +
                            " React.js and powered by" +
                            " TypeScript",
                        githubHref: "https://github.com/inc4/inc4-site",
                        pageHref: "https://inc4.net/",
                    },
                    {
                        name: "Ambrosus Explorer  ",
                        img: "/old-explorer.png",
                        description:
                            "Old Ambrosus Explorer. It is" +
                            " built by" +
                            " React.js and powered by" +
                            " TypeScript",
                        githubHref: "https://github.com/ambrosus/ambrosus-monorepo/tree/master/explorer-client",
                        pageHref: "https://explorer.ambrosus.io/",
                    },
                    {
                        name: "Nimbus Swap Machine 💼 ",
                        img: "/nimswap.png",
                        description:
                            " Swap your tokens to NBU / GNBU. It is" +
                            " built by" +
                            " React.js and powered by" +
                            " TypeScript",
                        githubHref: "https://github.com/nimbusplatformorg/nim-swap-machine",
                        pageHref: "https://app.nimbusplatform.io/#/swap",
                    },
                    {
                        name: "Nimbus Wrap Machine ",
                        img: "/nbuwrap.png",
                        description:
                            " Wrap your tokens to NBU / GNBU / BUSD / BNB. It is" +
                            " built by" +
                            " React.js and powered by" +
                            " TypeScript",
                        githubHref: "https://github.com/nimbusplatformorg/",
                        pageHref: "https://app.nimbusplatform.io/#/wrap",
                    },

                ],
                value: 'commerce'
            },
            {
                data: [
                    {
                        name: "PokeSearcher",
                        img: "/pokesearch.png",
                        description:
                            "A Web app that allows you to search for all the current Pokemons! It is Powered by PokeApi and built with React.js.",
                        githubHref: "https://github.com/melnicenkovadik/pokemons",
                        pageHref: "https://pokemons-khaki.vercel.app/",
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
                    }
                ],
                value: 'best'
            },
            {
                data: [
                    {
                        name: "Snake game",
                        img: "/snake.png",
                        description:
                            "It is built with html/css/js",
                        githubHref: "https://gitlab.com/melnicenkovadik/snake",
                        pageHref: "https://melnicenkovadik.gitlab.io/snake/",
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
                        name: "Meditation",
                        img: "/medit.png",
                        description:
                            "Meditation app .It is built with html/css/js",
                        githubHref: "https://gitlab.com/melnicenkovadik/meditation-app",
                        pageHref: "https://melnicenkovadik.gitlab.io/meditation-app/",
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
                        name: "Create sounds",
                        img: "/tap-mus.png",
                        description:
                            "Create sounds by tapping buttons =) .It is built with React.js",
                        githubHref: "https://gitlab.com/melnicenkovadik/create-sounds-app",
                        pageHref: "https://melnicenkovadik.gitlab.io/create-sounds-app/",
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
                        name: "Chat",
                        img: "/chat.png",
                        description:
                            "Chat layout (in process).It is built with React.js",
                        githubHref: "https://github.com/melnicenkovadik/chat-react",
                        pageHref: "https://react-chat-eta.vercel.app/",
                    },
                ],
                value: 'other'
            }
        ]

    return {
        props: {
            projects,
        },
    };
}
