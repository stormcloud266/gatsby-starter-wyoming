import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const Hero = () => {
  const { file } = useStaticQuery(graphql`
    query HeroQuery {
      file(relativePath: { eq: "dan-meyers-wyoming.jpg" }) {
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
      className="hero"
      fluid={[
        `linear-gradient(rgba(27,25,26, 0.7), rgba(27,25,26, 0.7))`,
        file.childImageSharp.fluid
      ]}
    >
      <h1>Wyoming</h1>
    </BackgroundImage>
  )
}

export default Hero