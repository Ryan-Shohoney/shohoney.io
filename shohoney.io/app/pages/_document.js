import Document, { 
  Head, 
  Main, 
  NextScript 
} from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import React from 'react';

class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const sheets = new ServerStyleSheets();
    const originalRender = ctx.renderPage;

    ctx.renderPage = _ =>
      originalRender({
        enhanceApp: App => props => sheets.collect(<App {...props} />),
      });
    

    const initialProps = await Document.getInitialProps(ctx);
    return { 
      ...initialProps,
      styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()], 
    }
  }

  render() {
    return (
      <html lang="en"> 
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
};

export default MyDocument;