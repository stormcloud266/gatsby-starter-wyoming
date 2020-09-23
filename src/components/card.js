import React from "react"

const Card = ({ icon, title, body }) => (
  <div className="card">
    <div className="icon">{icon}</div>

    <h3 className="card__title">{title}</h3>
    <p className="card__body">{body}</p>
  </div>
)

export default Card
