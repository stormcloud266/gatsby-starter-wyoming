import React from "react"
import Form from "./form"
import { Email, Pin, Phone } from "../assets/icons"
const Contact = () => (
  <section className="wrapper section contact" id="contact">

    <div className="contact__info">

      <div className="contact__text">
        <h2>We'll Meet You There</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eos doloribus labore laborum accusamus dolor natus aliquid quis quidem aperiam?</p>
      </div>

      <div>

        <div className="contact__icon-group">
          <div className="icon"><Email/></div>
          <p>ex@mple.com</p>
        </div>

        <div className="contact__icon-group">
          <div className="icon"><Phone/></div>
          <p>(555) 123 - 4567</p>
        </div>

        <div className="contact__icon-group">
          <div className="icon"><Pin/></div>
          <p>123 Street, City ST</p>
        </div>

      </div>
    </div>


    <Form />

  </section>
  
)

export default Contact