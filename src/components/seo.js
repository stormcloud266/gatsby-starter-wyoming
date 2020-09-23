import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, creator, url, imageUrl }) => {
  const data = useStaticQuery(graphql`
    query SiteData {
      site {
        siteMetadata {
          title
          description
          creator
          siteUrl
        }
      }
      file(name: { eq: "banner" }) {
        publicURL
      }
    }
  `)

  const info = {
    title: title || data.site.siteMetadata.title,
    creator: creator || data.site.siteMetadata.creator,
    description: description || data.site.siteMetadata.description,
    url: url || data.site.siteMetadata.siteUrl,
    imageUrl: imageUrl || data.site.siteMetadata.siteUrl + data.file.publicURL,
  }

  return (
    <Helmet>
      <title>{info.title}</title>
      <meta name="description" content={info.description} />

      {/***********  twitter cards ***********/}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={info.title} />
      <meta name="twitter:description" content={info.description} />
      <meta name="twitter:image" content={info.imageUrl} />
      <meta name="twitter:creator" content={info.creator} />

      {/***********  open graph ***********/}
      <meta property="og:url" content={info.url} />
      <meta property="og:type" content={"website"} />
      <meta property="og:title" content={info.title} />
      <meta property="og:description" content={info.description} />
      <meta property="og:image" content={info.imageUrl} />

      {/***********  schema ***********/}
      <script type="application/ld+json">{`
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "${data.site.siteMetadata.title}",
        "url": "${data.site.siteMetadata.siteUrl}",
      }
      `}</script>
    </Helmet>
  )
}

export default SEO
