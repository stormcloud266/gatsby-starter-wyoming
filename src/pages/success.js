import React from "react"
import { Link } from "gatsby"

import Layout from "@components/layout"
import SEO from "@components/seo"
import image from "@images/mailbox-undraw.svg"

const SuccessPage = () => (
  <Layout>
    <SEO title="Success!" />
    <section className="section wrapper success">
      <img src={image} alt="" />

      <div className="success__text">
        <h1>Thank You!</h1>
        <p>Your email has been successfully sent.</p>
        <Link to="/">Return Home</Link>
      </div>
    </section>
  </Layout>
)

export default SuccessPage
