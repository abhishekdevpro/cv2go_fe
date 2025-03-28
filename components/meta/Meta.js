import Head from "next/head";

export default function Meta({ title, keywords, description }) {
  const homepage = "https://ciblijob.fr//";
  const logo = "/assets/logo.png";
  const favicon = "/assets/favicon.ico";

  function websiteSchema() {
    return {
      __html: JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "WebSite",
        name: "CV2GO",
        url: homepage,
        potentialAction: {
          "@type": "SearchAction",
          target: "{search_term_string}",
          "query-input": "required name=search_term_string",
        },
      }),
    };
  }

  function organizationSchema() {
    return {
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "CV2GO",
        alternateName: "CV2GO",
        url: homepage,
        logo: logo,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "18882008168",
          contactType: "customer service",
          areaServed: "CA",
          availableLanguage: "en",
        },
        sameAs: [
          "https://ciblijob.fr//",
          "https://www.facebook.com/people/CV2GO/61564845718534/",
        ],
      }),
    };
  }
  function localBusinessSchema() {
    return {
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "CV2GO",
        image:
          "https://ciblijob.fr//_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.2cfd75d8.jpg&w=640&q=75",
        url: "https://ciblijob.fr//",
        telephone: "18882008168",
        priceRange: "$269",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Montreal",
          addressCountry: "CA",
        },
        sameAs: ["https://www.instagram.com/ciblijob/"],
      }),
    };
  }

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="keywords"
        content={Array.isArray(keywords) ? keywords.join(", ") : keywords}
      />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href={favicon} />
      <title>{title}</title>

      {/* Canonical URL */}
      <link rel="canonical" href={homepage} />

      {/* Robots Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="yahoobot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />

      {/* Open Graph (OG) Tags */}
      <meta property="og:site_name" content="CV2GO" />
      <meta property="og:url" content={homepage} />
      <meta
        property="og:title"
        content="Best AI Resume Builder Online | CV2GO"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Create a professional resume easily with our best AI resume builders online. Make customized, job-friendly resumes and download in minutes and get hired faster"
      />
      <meta property="og:image" content={logo} />

      {/* Twitter Meta Tags */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={homepage} />
      <meta
        property="twitter:title"
        content="Best AI Resume Builder Online | CV2GO"
      />
      <meta
        property="twitter:description"
        content="Create a professional resume easily with our best AI resume builders online. Make customized, job-friendly resumes and download in minutes and get hired faster"
      />
      <meta property="twitter:image" content={logo} />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={websiteSchema()}
        key="websiteSchema"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={organizationSchema()}
        key="organizationSchema"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={localBusinessSchema()}
        key="localBusinessSchema"
      />
    </Head>
  );
}
