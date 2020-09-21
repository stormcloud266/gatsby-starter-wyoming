import React from "react"

import Layout from "@components/layout"
import SEO from "@components/seo"

import Hero from "@sections/hero"
import Intro from "@sections/intro"
import TextImage from "@sections/textImage"
import CTA from "@sections/ctaBanner"
import CardsContainer from "@sections/cardsContainer"
import Contact from '@sections/contact'

const IndexPage = ({ location }) => {
  
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
