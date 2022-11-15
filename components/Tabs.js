import React, {useState} from "react";
import styles from '../styles/Tabs.module.scss'
import {FiArrowUpRight, FiGithub} from "react-icons/fi";

function TabGroup({types, projects}) {
    const [active, setActive] = useState(types[0].value);
    return (
        <>
            <div className={styles.buttonGroupStyles}>
                {types.map(type => (
                    <div className={`${styles.tabStyles} ${active === type.value && styles.activeTab}`}
                         key={type.value}
                         onClick={() => setActive(type.value)}
                    >
                        {type.title}
                    </div>
                ))}
            </div>
            <p/>
            <br/>
            <div className={styles.projectsDisplay}>
                {active === 'commerce' &&
                <div className={styles.privatReposMsg}>
                    Sorry, some repositories may be private
                </div>
                }
                {projects?.find(p => p.value === active)?.data?.map((project, key) => (
                    <div className={styles.projectCard} key={key}>
                        <a href={project.pageHref} target="_blank" rel="noreferrer">
                            <img
                                src={project.img}
                                className={styles.projectImg}
                                alt={project.name}
                            />
                        </a>
                        <div className={styles.projectDescription}>
                            <p>{project.description}</p>
                        </div>
                        <div className={styles.projectIcons}>
                            {
                                project?.githubHref ?
                                    <div style={{display: 'flex', alignItems: 'center', marginRight: '20px'}}>
                                        <a href={project.githubHref} target="_blank" rel="noreferrer">
                                            <FiGithub style={{fontSize: '1.5em', color: '#DA32BE'}}/>
                                            <small>Github</small>
                                        </a>
                                    </div>
                                    : null
                            }
                            
                            <div style={{display: 'flex', alignItems: 'center', marginRight: '20px'}}>
                                <a href={project.pageHref} target="_blank" rel="noreferrer">
                                    <FiArrowUpRight style={{fontSize: '1.5em', color: '#DA32BE'}}/>
                                    <small>Visit</small>
                                </a>
                            </div>
                        </div>
                    </div>
                )) || null}
            </div>
        </>
    );
}
export default TabGroup;