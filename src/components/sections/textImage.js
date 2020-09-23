import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const TextImage = () => {
  const { file } = useStaticQuery(graphql`
    query TxtQuery {
      file(relativePath: { eq: "sean-musil-wyoming.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <div className="section bg-darker" id="west">
      <section className="wrapper wrapper--sm-on-md text-image">
        <Img fluid={file.childImageSharp.fluid} />

        <div className="text-image__text">
          <h2 className="text-image__title">The Wild West</h2>
          <p className="text-image__body">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut,
            voluptate fuga. Nostrum illo quidem facilis, perferendis nemo
            provident omnis aliquid in! Quasi hic in repellendus praesentium
            unde reprehenderit eligendi cupiditate!
          </p>
          <Link to="/#contact" className="btn">
            Book Now
          </Link>
        </div>
      </section>
    </div>
  )
}

export default TextImage
