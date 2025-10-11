import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="https://res.cloudinary.com/twosapiens/image/upload/v1752717392/a-vector-logo-design-for-express-india-f_0Cbj16ZZSQymUwZfbI5nIQ_ykQlxmLCRqu-1EL1brPCxQ_jn2kuu.jpg" />
        <link rel="shortcut icon" type="image/x-icon" href="https://res.cloudinary.com/twosapiens/image/upload/v1752717392/a-vector-logo-design-for-express-india-f_0Cbj16ZZSQymUwZfbI5nIQ_ykQlxmLCRqu-1EL1brPCxQ_jn2kuu.jpg" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}