import Head from 'next/head'
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Regex Cheat</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
