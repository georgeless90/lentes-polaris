import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script';

export default function Document() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Lentes Polaris",
    alternateName: "Tienda online de lentes polarizados",
    url: "https://www.lentespolaris.store",
  };

  return (
    <Html lang="es">
      <Head>
      <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          strategy="onLoad"
        ></Script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');`,
          }}
        /> 
         <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        /> 
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
