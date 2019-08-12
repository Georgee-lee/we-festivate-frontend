/* eslint-disable react/react-in-jsx-scope */
import Document, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";

export default class RootDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head } = renderPage();
    const styles = flush();

    return { html, head, styles };
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
          <meta name="description" content="We Festivate" />
          <meta name="keywords" content="website,wework,weworkevent" />
          <title>WeFestivate</title>
          <link rel="stylesheet" href="../static/index.css" />
          <script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
