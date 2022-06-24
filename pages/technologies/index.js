import Head from 'next/head'
import React from 'react'
import Technologies from '../../components/Technologies'

function TechnologiesPage() {
    return (
        <main>
            <Head>
                <title>Tech Stack - Vadym Melnychenko - Front-End Web Developer & Web Designer</title>
                <meta name="description" content="These are my favorite Technologies! Im Vadym Melnychenko and im an Front-End Web Developer and Web Designer from Kyiv, Ukraine." />
                <meta property="og:title" content="Tech Stack - Vadym Melnychenko - Front-End Web Developer & Web Designer" />
                <meta property="og:description" content="These are my favorite Technologies! Im Vadym Melnychenko and im an Front-End Web Developer and Web Designer from Kyiv, Ukraine." />
            </Head>
            <Technologies />
        </main>
    )
}

export default TechnologiesPage