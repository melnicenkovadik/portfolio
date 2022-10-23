import React from 'react'
import styles from '../styles/AboutMe.module.scss'
import Link from 'next/link'
import {BiArrowBack} from 'react-icons/bi'
import {FiArrowUpRight} from 'react-icons/fi'

function AboutMe() {
    return (
        <div className={styles.aboutMe}>
            <div className={styles.aboutMeContainer}>
                <div className={styles.titleReturn}>
                    <h1 className={styles.title}>About Me</h1>
                    <Link href="/">
                        <a className={styles.return}><BiArrowBack
                            style={{color: 'rgb(218, 50, 190)', marginRight: '1em'}}/> Return</a>
                    </Link>
                </div>
                <div className={styles.separator}></div>
                <div className={styles.aboutMeDisplay}>
                    <h2 style={{fontWeight: '300', lineHeight: '1.8em'}}>
                        <strong>Welcome!</strong>
                    </h2>
                    <br/>
                    <p>
                        <p>My name is Vadim, I'm from Kyiv, Ukraine. Multitalented React Developer with experience in Blockchain software industry. Demonstrated excellent skills in HTML, JavaScript. True team player with strengths in adaptability and accuracy. I have excellent experience as a web developer, as well as an academic background in computer science and technology. Experience and my academic background have given me some outstanding technical skills. I have 5 years experience as Web developer and more than 3 year as React Developer in the Blockchain field. In addition, I have excellence in creating top-notch novelty designs. I firmly believe that these qualities set me apart from the rest of the contestants.<br/><br/>I would also like to inform you that I have mastered HTML, CSS and JavaScript and have a lot of experience with them.<br/><br/>I also have great knowledge and experience in React, Next.js &amp; Gatsby.js, in the development of decentralized applications (an application for staking/swap/wrapper/multi-sender/borrowing cryptocurrencies, a system for creating and filling assets/events for the Ambrosus blockchain, as well as a system viewing them), SRM systems, as well as landing pages and Headless CMS (based on Prismic) and others.
                            <br/><br/>Examples commers projects whitch i created :<br/>
                            <a href='https://staking.ambrosus.io/' target="_blank">https://staking.ambrosus.io/</a> <br/>
                            <a href='https://amb.to/' target="_blank">https://amb.to/</a> <br/>
                            <a href='https://explorer-beta.ambrosus.io/' target="_blank">https://explorer-beta.ambrosus.io/</a> <br/>
                            <a href='https://ambrosus.io/' target="_blank">https://ambrosus.io/</a> <br/>
                            <a href='https://nimbusplatform.io/' target="_blank">https://nimbusplatform.io/</a> <br/>
                            <a href='https://app.nimbusplatform.io/#/lp-staking' target="_blank">https://app.nimbusplatform.io/#/lp-staking</a> <br/>
                            <a href='https://app.nimbusplatform.io/#/dapps/borrow' target="_blank">https://app.nimbusplatform.io/#/dapps/borrow</a> <br/>
                            <a href='https://app.nimbusplatform.io/#/wrap' target="_blank">https://app.nimbusplatform.io/#/wrap</a> <br/>
                            <a href='https://app.nimbusplatform.io/#/swap' target="_blank">https://app.nimbusplatform.io/#/swap</a> <br/>
                            
                            <br/>In addition, I also have strong state management skills (mobx, redux), understand typescript, and test react components with jest, react-testing-library, storybook.<br/><br/>However, I always strive to learn from scratch and improve my skills whenever possible.<br/><br/>During my time in JavaScript, I have worked on different teams and tried several approaches to development. I think that the main thing in the process of developing a product and delivering solutions to a client is the planning of all actions and the efforts of people, as well as trust within the team, then success is guaranteed.<br/><br/>Therefore, I consider myself a good or maybe the best candidate and a great contributor to your project.<br/><br/>Thank you for taking the time to review the letter. I will be waiting for you for further process.</p>
                        <Link href="/technologies">You can find more information on my Tech Stack page.</Link>
                        <br/><br/>
                    </p>
                </div>
                <div className={styles.navigation}>
                    <Link href="/technologies">
                        <a>
                            <FiArrowUpRight
                                style={{marginRight: '10px'}}
                            />
                            My tech-stack
                        </a>
                    </Link>
                    <Link href="/projects">
                        <a>
                            <FiArrowUpRight
                                style={{marginRight: '10px'}}
                            />
                            Projects
                        </a>
                    </Link>
                </div>
                <div className={styles.footer}>
                    <p>Vadym Melnychenko 2021 - Contact me at <a href="mailto:jjgm98@gmail.com">jjgm98@gmail.com</a></p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
