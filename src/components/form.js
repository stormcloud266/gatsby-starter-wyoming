import React from "react"

const Form = () => (
  <form action="" className="form">

    <div className="form__section">
      <input type="text" id="name"/>
      <label htmlFor="name">Name</label>
    </div>

    <div className="form__section">
      <input type="email" id="email"/>
      <label htmlFor="email">Email</label>
    </div>

    <div className="form__section">
      <textarea name="comment" id="comment" />
      <label htmlFor="comment">Comment</label>
    </div>

    <button>Send Email</button>

  </form>
  
)

export default Form