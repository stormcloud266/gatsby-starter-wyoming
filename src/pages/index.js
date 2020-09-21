import React from "react"
import { graphql, Link } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data, location }) => (
  <Layout>

    <SEO 
      title="Home"
      description="My example description"
      url={location.href}
      imageUrl={'https://url.to/image.png'}
    />

    <BackgroundImage
      Tag="section"
      className="hero"
      fluid={[
        `linear-gradient(rgba(27,25,26, 0.7), rgba(27,25,26, 0.7))`,
        data.image.childImageSharp.fluid
      ]}
    >
      <h1>Wyoming</h1>
    </BackgroundImage>

    <section className="wrapper home">
      <h2>Welcome to the Wyoming Gatsby Starter</h2>
      <Link to="/page-2">Page Two</Link>
    </section>

  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    image: file(relativePath: { eq: "dan-meyers-wyoming.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
