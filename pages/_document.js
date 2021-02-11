import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <title>Regex Cheat</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <body className="dark:bg-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument