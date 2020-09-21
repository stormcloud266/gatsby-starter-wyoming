import React from "react"
import Layout from "../components/layout"
import CardsContainer from "../components/cardsContainer"
import CTA from "../components/ctaBanner"
import Hero from "../components/hero"
import SEO from "../components/seo"
import Intro from "../components/intro"
import TextImage from "../components/textImage"
import Contact from '../components/contact'

const IndexPage = ({ data, location }) => {
  
  return (
  <Layout>

    <SEO 
      title="Home"
      description="My example description"
      url={location.href}
      imageUrl={'https://url.to/image.png'}
    />

    <Hero />

    <Intro />

    <TextImage />

    <CTA />

    <CardsContainer />

    <Contact />


  </Layout>
)
}

export default IndexPage
