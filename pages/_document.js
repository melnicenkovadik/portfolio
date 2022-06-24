import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta
                        name="description"
                        content="Vadym Melnychenko is a Front-End developer from Kyiv, Ukraine."
                    />
                    <meta
                        property="og:title"
                        content="Vadym Melnychenko - Front-End Developer"
                    />
                    <meta
                        property="og:description"
                        content="Vadym Melnychenko is a Front-End Developer from Kyiv, Ukraine."
                    />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="/og-image.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
