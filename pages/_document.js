import Document, { Head, Main, NextScript } from 'next/document';

export default class RootDocument extends Document {
    render() {
      return (
        <html>
          <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
            <meta name="description" content="We Festivate"/>
            <meta name="keywords" content="website,wework,weworkevent" />
            <style global jsx>
                {`
                  html, body, #__next {
                      margin: 0;
                      padding: 0;
                      background-color: #f1f1f1;
                      box-sizing: border-box;
                      height: 100%;
                  }
                `}
            </style>
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </html>
      );
    }
}