import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(this: any) {
  const setGoogleTags: any=() =>  {
    if (process.env.PRODUCTION) {
      return {
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-163398934-1');
        `
      };
    }
  }
  return (
    <Html lang="en">
      <Head>
          <meta charSet="UTF-8" />
          <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
            <link rel="icon" href="images/favicon.ico" type="image/x-icon" />
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-163398934-1"></script>
            <script dangerouslySetInnerHTML={setGoogleTags()} />
          
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
function setGoogleTags() {
  throw new Error('Function not implemented.');
}

