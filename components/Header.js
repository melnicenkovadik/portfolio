import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.scss";
import { BsArrowUpRight, BsPersonFill } from "react-icons/bs";
import { FiInstagram, FiGithub,  } from "react-icons/fi";
import {SiGmail, SiOpencv} from "react-icons/si";
import {ImTelegram} from "react-icons/im";

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.social}>
                <a
                    href="https://www.instagram.com/melnyschenko/"
                    rel="noreferrer"
                    target="_blank"
                    aria-label="My instagram page"
                >
                    <FiInstagram />
                </a>
                <a
                    href="https://github.com/melnicenkovadik"
                    target="_blank"
                    rel="noreferrer"
                    style={{ marginLeft: "30px" }}
                    aria-label="My github account"
                >
                    <FiGithub />
                </a>
                <a
                    href="mailto:melnicenkovadik@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{ marginLeft: "30px" }}
                    aria-label="Contact me via email"
                >
                    <SiGmail />
                </a>
                <a
                    href="https://t.me/avokadikvadik"
                    target="_blank"
                    rel="noreferrer"
                    style={{ marginLeft: "30px" }}
                    aria-label="Contact me via telegram"
                >
                    <ImTelegram />
                </a>
                <a
                    href="https://avokadikvadik.notion.site/Resume-CV-0b4c2c344ace488492989cc7695739cd"
                    target="_blank"
                    rel="noreferrer"
                    style={{ marginLeft: "30px",textDecoration: "none" }}
                    aria-label="My CV"
                >
                    CV
                </a>
            </div>
          
            <h1 className={styles.name}>Vadym Melnychenko</h1>
            <div className={styles.roles}>
                <h2>Front-End Developer</h2>
            </div>
            <div className={styles.callToAction}>
                <Link href="/projects">
                    <a>
                        {" "}
                        <BsArrowUpRight style={{ marginRight: "1em" }} />{" "}
                        Projects{" "}
                    </a>
                </Link>
                <Link href="/technologies">
                    <a>
                        {" "}
                        <BsArrowUpRight style={{ marginRight: "1em" }} /> Tech
                        Stack
                    </a>
                </Link>
            </div>
            <div className={styles.otherOptions}>
                <span style={{ fontWeight: "200" }}>Or...</span>
                <Link href="/about-me">
                    <a>
                        <BsPersonFill style={{ marginRight: "20px" }} /> Know
                        more about me
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default Header;
