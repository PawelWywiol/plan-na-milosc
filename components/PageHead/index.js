import Head from "next/head";

import Analytics from "../Analytics";

export default function PageHead() {
  return (
    <Head>
      <title>Plan na miłość, czyli jak stworzyć fajny związek</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="robots" content="index, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <meta
        name="title"
        content="Plan na miłość, czyli jak stworzyć fajny związek"
      />
      <meta
        name="description"
        content="Sprawdź, jakim typem randkowicza jesteś!"
      />
      <meta
        name="keywords"
        content="Logan Ury, Plan na miłość,	Społeczny Instytut Wydawniczy Znak, Empik, książki, zdrowie, rodzina, związki"
      />

      <meta property="og:locale" content="pl_PL" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Plan na miłość, czyli jak stworzyć fajny związek"
      />
      <meta
        property="og:description"
        content="Sprawdź, jakim typem randkowicza jesteś!"
      />
      <meta property="og:url" content="https://plannamilosc.pl/" />
      <meta
        property="og:site_name"
        content="Plan na miłość, czyli jak stworzyć fajny związek"
      />
      <meta
        property="og:image"
        content="https://plannamilosc.pl/images/cover.jpg"
      />
      <meta
        property="og:image:secure_url"
        content="https://plannamilosc.pl/images/cover.jpg"
      />
      <meta property="og:updated_time" content="" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:description"
        content="Sprawdź, jakim typem randkowicza jesteś!"
      />
      <meta
        name="twitter:title"
        content="Plan na miłość, czyli jak stworzyć fajny związek"
      />
      <meta name="twitter:site" content="https://plannamilosc.pl/" />
      <meta
        name="twitter:image"
        content="https://plannamilosc.pl/images/cover.jpg"
      />
      <meta name="twitter:creator" content="Wydawnictwo Znak" />

      <Analytics />

      <script type="application/ld+json">
        {`
{
  "@context": "https://schema.org",
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://plannamilosc.pl/"
  },
  "headline": "Plan na miłość, czyli jak stworzyć fajny związek",
  "description": "Sprawdź, jakim typem randkowicza jesteś! Zastanawiacie się, dlaczego Wasze życie miłosne nie jest takie, jakiego byście sobie życzyli? Gdzie popełniacie błąd? Ten test pozwoli Wam określić, jakim typem randkowicza jesteście, a książka pokaże, jak zmienić swoje przekonania o miłości w realne działania.",
  "image": "https://plannamilosc.pl/images/cover.jpg",  
  "author": {
    "@type": "Person",
    "name": "Logan Ury"
  },  
  "publisher": {
    "@type": "Organization",
    "name": "Społeczny Instytut Wydawniczy Znak Sp. z o.o.",
    "logo": {
      "@type": "ImageObject",
      "url": "https://plannamilosc.pl/images/logo.svg"
    }
  },
  "datePublished": ""
}

`}
      </script>
    </Head>
  );
}
