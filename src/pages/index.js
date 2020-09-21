import React from "react"
import { graphql, Link } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import Img from "gatsby-image"
import { Pin, Alarm, Dollar } from '../images/icons'
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
        data.heroImage.childImageSharp.fluid
      ]}
    >
      <h1>Wyoming</h1>
    </BackgroundImage>

    <section className="section wrapper wrapper--sm intro" id="about">
      <h2>Welcome to the Wyoming Gatsby Starter</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, voluptate fuga. Nostrum illo quidem facilis, perferendis nemo provident omnis aliquid in! Quasi hic in repellendus praesentium unde reprehenderit eligendi cupiditate!</p>
      <Link to="/page-2">Page Two</Link>
    </section>

    <div className="section bg-darker" id="west">
      <section className="wrapper wrapper--sm-on-md text-image">
        <Img fluid={data.image.childImageSharp.fluid} />

        <div className="text-image__text">
          <h2>The Wild West</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, voluptate fuga. Nostrum illo quidem facilis, perferendis nemo provident omnis aliquid in! Quasi hic in repellendus praesentium unde reprehenderit eligendi cupiditate!</p>
        </div>
      </section>
    </div>

    <BackgroundImage
      Tag="section"
      className="banner"
      id="adventure"
      fluid={[
        `linear-gradient(rgba(27,25,26, 0.7), rgba(27,25,26, 0.7))`,
        data.bannerImage.childImageSharp.fluid
      ]}
    >
      <div className="wrapper wrapper--sm">
        <h2>Your Next Adventure Starts Here</h2>
      </div>
    </BackgroundImage>


    <div className="section bg-darker">
      <section className="wrapper cards">
        <h2>A Little Bit of Everything</h2>
        <div className="cards__container">

          <div className="card">
            <div className="card__icon">
              <Alarm />
            </div>

            <h3>Wake Up with the Sun</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem expedita odit aut, adipisci ipsam similique?</p>
          </div>

          <div className="card">
            <div className="card__icon">
              <Pin />
            </div>

            <h3>Wide Open Spaces</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem expedita odit aut, adipisci ipsam similique?</p>
          </div>

          <div className="card">
            <div className="card__icon">
              <Dollar />
            </div>

            <h3>It's Pretty Cheap</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem expedita odit aut, adipisci ipsam similique?</p>
          </div>

        </div>
      </section>
    </div>

  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "dan-meyers-wyoming.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image: file(relativePath: { eq: "sean-musil-wyoming.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    bannerImage: file(relativePath: { eq: "trevor-vannoy-wyoming.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
