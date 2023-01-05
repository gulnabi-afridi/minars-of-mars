import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="preload"
          href="/Fonts/gt-walsheim-bold-oblique-web.ttf"
          as="font"
          type="font/woff"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/Fonts/gt-walsheim-bold-web.ttf"
          as="font"
          type="font/woff"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/Fonts/gt-walsheim-light-oblique-web.ttf"
          as="font"
          type="font/woff"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/gt-walsheim-light-web.ttf"
          as="font"
          type="font/woff"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/gt-walsheim-medium-web.ttf"
          as="font"
          type="font/woff"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/gt-walsheim-regular-oblique-web.ttf"
          as="font"
          type="font/woff"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/MBJ-Chunky.ttf"
          as="font"
          type="font/woff"
          crossOrigin=""
        />
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
    </Html>
  )
}
