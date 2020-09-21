import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Page2 = ({ data, location }) => (
  <Layout>

    <SEO 
      title="Page Two"
      description="My example description 2"
      url={location.href}
      imageUrl={'https://url.to/image.png'}
    />

    <section className="wrapper page-2">
      <Img fluid={data.image.childImageSharp.fluid}/>
      <h2>Page Two</h2>
      <Link to="/">Go Home</Link>
    </section>

  </Layout>
)

export default Page2

export const query = graphql`
  query {
    image: file(relativePath: { eq: "sean-musil-wyoming.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`