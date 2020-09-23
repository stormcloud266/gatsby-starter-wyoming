import React from "react"

import Layout from "@components/layout"
import SEO from "@components/seo"

import Hero from "@sections/hero"
import Intro from "@sections/intro"
import TextImage from "@sections/textImage"
import Banner from "@sections/banner"
import CardsContainer from "@sections/cardsContainer"
import Contact from "@sections/contact"

const IndexPage = ({ location }) => {
  return (
    <Layout>
      <SEO
        title="Home"
        description="My example description"
        url={location.href}
      />

      <Hero />

      <Intro />

      <TextImage />

      <Banner />

      <CardsContainer />

      <Contact />
    </Layout>
  )
}

export default IndexPage
