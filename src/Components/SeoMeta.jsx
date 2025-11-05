import React from "react";
import { Helmet } from "react-helmet-async";

const SeoMeta = ({ title, description, url }) => {
  const defaultTitle = "Framisty Design Institute — Best Design Institute in Gujarat";
  const defaultDescription =
    "Framisty Design Institute: Real project-based training for design and video editing. Small batches, placement support.";
  const defaultUrl = "https://framisty.com/";

  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <link rel="canonical" href={url || defaultUrl} />

      {/* Open Graph (for social media sharing) */}
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:url" content={url || defaultUrl} />
      <meta property="og:type" content="website" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Framisty Design Institute",
          "telephone": "+91 6352305842",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "5th Floor, Grand Emporio, Motera Stadium Road, Ahmedabad",
            "addressLocality": "Ahmedabad",
            "addressRegion": "Gujarat",
            "postalCode": "380005",
            "addressCountry": "IN"
          },
          "url": "https://framisty.com/"
        })}
      </script>
    </Helmet>
  );
};

export default SeoMeta;
