import Head from 'next/head'
import { Provider } from 'react-redux'
import { useStore } from '../store'

import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Head>
        <title>Regex Cheat</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
