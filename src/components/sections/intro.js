import React from "react"
import { Link } from "gatsby"

const Intro = () => (
  <section className="section wrapper wrapper--sm intro" id="about">
    <h2>Welcome to the Wyoming Gatsby Starter</h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, voluptate
      fuga. Nostrum illo quidem facilis, perferendis nemo provident omnis
      aliquid in! Quasi hic in repellendus praesentium unde reprehenderit
      eligendi cupiditate!
    </p>
    <Link to="/#contact">Start Your Adventure</Link>
  </section>
)

export default Intro
