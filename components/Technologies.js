import styles from '../styles/Technologies.module.scss'
import {BiArrowBack} from 'react-icons/bi'
import {
    SiAdobexd,
    SiAmazonaws,
    SiBootstrap,
    SiCss3,
    SiCypress,
    SiEthereum,
    SiFigma,
    SiGatsby,
    SiGit,
    SiGraphql,
    SiGreensock,
    SiHtml5,
    SiJava,
    SiJavascript,
    SiJest,
    SiMaterialui,
    SiChakraui,
    SiMobx,
    SiMongodb,
    SiNestjs,
    SiNextdotjs,
    SiNodedotjs,
    SiPuppeteer,
    SiReact,
    SiReactrouter,
    SiRedux,
    SiSass,
    SiSpringboot,
    SiStorybook,
    SiStyledcomponents,
    SiTailwindcss,
    SiTestinglibrary,
    SiTypescript,
    SiWeb3Dotjs,
    SiWebdriverio,
} from 'react-icons/si'
import {FiArrowUpRight} from 'react-icons/fi'
import Link from 'next/link'

function Technologies() {

    const iconStyle = {width: '50px', height: 'auto', margin: '1em'}

    return (
        <div className={styles.technologies}>
            <div className={styles.technologiesContainers}>
                <div className={styles.titleReturn}>
                    <h1 className={styles.title}>Tech-stack</h1>
                    <Link href="/">
                        <a className={styles.return}><BiArrowBack
                            style={{color: 'rgb(218, 50, 190)', marginRight: '1em'}}/> Return</a>
                    </Link>
                </div>
                <div className={styles.separator}></div>
                <div className={styles.technologiesDisplay}>
                    <div>
                        <h1>Languages</h1>
                        <div className={styles.technologiesList}>
                            <div className={styles.technologyItem}>
                                <SiJavascript
                                    style={iconStyle}
                                />
                                <small>JavaScript</small>
                            </div>
                            <div className={styles.technologyItem}>
                                <SiTypescript style={iconStyle}/>
                                <small>Typescript</small>
                            </div>
                            <div className={styles.technologyItem}>
                                <SiJava style={iconStyle}/>
                                <small>Java</small>
                            </div>
                            <div className={styles.technologyItem}>
                                <SiNodedotjs style={iconStyle}/>
                                <small>Node.js</small>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1>Frameworks</h1>
                        <div className={styles.technologiesList}>
                            <div className={styles.technologyItem}>
                                <SiReact style={iconStyle}/>
                                <small>React.js</small>
                            </div>
                            <div className={styles.technologyItem}>
                                <SiNextdotjs style={iconStyle}/>
                                <small>Next.js</small>
                            </div>
                            <div className={styles.technologyItem}>
                                <SiSpringboot style={iconStyle}/>
                                <small>Spring boot</small>
                            </div>
                            <div className={styles.technologyItem}>
                                <SiNestjs style={iconStyle}/>
                                <small>Nest.js</small>
                            </div>
                            <div className={styles.technologyItem}>
                                <SiGatsby style={iconStyle}/>
                                <small>Gatsby</small>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1>Libraries</h1>
                        <div className={styles.technologiesList}>
                            <div className={styles.technologyItem}>
                                <SiHtml5 style={iconStyle}/>
                                <small>HTML5</small>
                            </div>
                            <div className={styles.technologyItem}>
                                <SiGit style={iconStyle}/>
                                <small>Git</small>
                            </div>
                            <div className={styles.technologyItem}>
                                <SiRedux style={iconStyle}/>
                                <small>Redux</small>
                            </div>
                            <div className={styles.technologyItem}>
                                <SiGraphql style={iconStyle}/>
                                <small>Graphql</small>
                            </div>
                            <div className={styles.technologyItem}>
                                <SiGreensock style={iconStyle}/>
                                <small>GSAP</small>
                            </div>
                            <div className={styles.technologyItem}>
                                <SiWeb3Dotjs style={iconStyle}/>
                                <small>web3.js</small>
                            </div>
                            <div className={styles.technologyItem}>
                                <SiEthereum style={iconStyle}/>
                                <small>ethers.js</small>
                            </div>
                            <div className={styles.technologyItem}>
                                <SiAmazonaws style={iconStyle}/>
                                <small>Amazon AWS</small>
                            </div>
                            <div className={styles.technologyItem}>
                                <SiMobx style={iconStyle}/>
                                <small>MobX</small>
                            </div>
                            <div className={styles.technologyItem}>
                                <SiReactrouter style={iconStyle}/>
                                <small>ReactRouter</small>
                            </div>
                            <div className={styles.technologyItem}>
                                <SiMongodb style={iconStyle}/>
                                <small>MongoDb</small>
                            </div>

                        </div>
                    </div>

                    <div>
                        <h1>Styling</h1>
                        <div className={styles.technologiesList}>
                            <div className={styles.technologyItem}>
                                <SiCss3 style={iconStyle}/>
                                <small>CSS3</small>
                            </div>
                            <div className={styles.technologyItem}>
                                <SiSass style={iconStyle}/>
                                <small>Sass</small>
                            </div>
                            <div className={styles.technologyItem}>
                                <SiMaterialui style={iconStyle}/>
                                <small>MaterialUI</small>
                            </div>  
                            <div className={styles.technologyItem}>
                                <SiChakraui style={iconStyle}/>
                                <small>Chakraui</small>
                            </div>
                            <div className={styles.technologyItem}>
                                <SiBootstrap style={iconStyle}/>
                                <small>Bootstrap</small>
                            </div>
                            <div className={styles.technologyItem}>
                                <SiStyledcomponents style={iconStyle}/>
                                <small>Styled Components</small>
                            </div>
                            <div className={styles.technologyItem}>
                                <SiTailwindcss style={iconStyle}/>
                                <small>Tailwind css</small>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1>Testing</h1>
                        <div className={styles.technologiesList}>
                            <div className={styles.technologyItem}>
                                <SiJest style={iconStyle}/>
                                <small>Jest</small>
                            </div>
                            <div className={styles.technologyItem}>
                                <SiTestinglibrary style={iconStyle}/>
                                <small>React Testing Library</small>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1>Web Design / Prototyping</h1>
                        <div className={styles.technologiesList}>
                            <div className={styles.technologyItem}>
                                <SiAdobexd style={iconStyle}/>
                                <small>Adobe Xd</small>
                            </div>
                            <div className={styles.technologyItem}>
                                <SiFigma style={iconStyle}/>
                                <small>Figma</small>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1>Learning</h1>
                        <div className={styles.technologiesList}>
                            <div className={styles.technologyItem}>
                                <SiStorybook style={iconStyle}/>
                                <small>Storybook</small>
                            </div>
                            <div className={styles.technologyItem}>
                                <SiCypress style={iconStyle}/>
                                <small>Cypress</small>
                            </div>
                            <div className={styles.technologyItem}>
                                <SiPuppeteer style={iconStyle}/>
                                <small>Puppeteer</small>
                            </div>
                            <div className={styles.technologyItem}>
                                <SiWebdriverio style={iconStyle}/>
                                <small>Webdriver.io</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.navigation}>
                    <Link href="/projects">
                        <a>
                            <FiArrowUpRight
                                style={{marginRight: '10px'}}
                            />
                            Projects
                        </a>
                    </Link>
                    <Link href="/about-me">
                        <a>
                            <FiArrowUpRight
                                style={{marginRight: '10px'}}
                            />
                            About Me
                        </a>
                    </Link>
                </div>
                <div className={styles.footer}>
                    <p>Vadym Melnychenko 2021 - Contact me at <a href="mailto:melnicenkovadik@gmail.com">melnicenkovadik@gmail.com</a></p>
                </div>
            </div>
        </div>
    )
}

export default Technologies