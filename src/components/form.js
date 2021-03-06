import React from "react"

const Form = ({ name = "contact" }) => (
  <form
    name={name}
    className="form"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    action="/success"
  >
    <input type="hidden" name="bot-field" />
    <input type="hidden" name="form-name" value={name} />

    <div className="form__section">
      <input type="text" id="name" name="name" />
      <label htmlFor="name">Name</label>
    </div>

    <div className="form__section">
      <input type="email" id="email" name="email" required />
      <label htmlFor="email">Email</label>
    </div>

    <div className="form__section">
      <textarea name="comment" id="comment" required />
      <label htmlFor="comment">Comment</label>
    </div>

    <button>Send Email</button>
  </form>
)

export default Form
