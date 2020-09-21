import React from "react"
import { Link } from "gatsby"

import Layout from "@components/layout"
import SEO from "@components/seo"
import image from "@images//map-undraw.svg"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page Not Found" />
    <section className="section wrapper success">

      <img src={image} alt=""/>

      <div className="success__text">
        <h1>Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/">Return Home</Link>
      </div>

    </section>
  </Layout>
)

export default NotFoundPage
