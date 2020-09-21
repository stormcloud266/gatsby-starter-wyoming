import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const CTA = () => {
  const { file } = useStaticQuery(graphql`
    query CTABannerQuery {
      file(relativePath: { eq: "trevor-vannoy-wyoming.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      Tag="section"
      className="banner"
      id="adventure"
      fluid={[
        `linear-gradient(rgba(27,25,26, 0.7), rgba(27,25,26, 0.7))`,
        file.childImageSharp.fluid
      ]}
    >
      <div className="wrapper wrapper--sm">
        <h2>Your Next Adventure Starts Here</h2>
      </div>
    </BackgroundImage>
  )
}

export default CTA