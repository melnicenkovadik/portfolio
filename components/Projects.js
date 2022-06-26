import React from 'react'
import styles from '../styles/Projects.module.scss'
import {BiArrowBack} from 'react-icons/bi'
import {FiArrowUpRight, FiGithub} from 'react-icons/fi'
import Link from 'next/link'
import TabGroup from "./Tabs";

const types = [{
    title: 'My commerce',
    value: 'commerce'
}, {
    title: 'Best Pet-projects',
    value: 'best'
}, {
    title: 'Other',
    value: 'other'
}];

function Projects({projects}) {
    return (
        <div className={styles.projects}>
            <div className={styles.projectsContainers}>
                <div className={styles.titleReturn}>
                    <h1 className={styles.title}>Projects</h1>
                    <Link href="/">
                        <a className={styles.return}><BiArrowBack
                            style={{color: 'rgb(218, 50, 190)', marginRight: '1em'}}/> Return</a>
                    </Link>
                </div>
                <div className={styles.separator}></div>
                <TabGroup types={types} projects={projects}/>
                <div className={styles.navigation}>
                    <Link href="/technologies">
                        <a>
                            <FiArrowUpRight
                                style={{marginRight: '10px'}}
                            />
                            My tech-stack
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
                    <p>Vadym Melnychenko 2021 - Contact me at <a href="mailto:jjgm98@gmail.com">jjgm98@gmail.com</a></p>
                </div>
            </div>
        </div>
    )
}

export default Projects
