import React from "react"

const Card = ({ icon, title, body }) => (
  <div className="card">
    <div className="icon">
      {icon}
    </div>

    <h3>{title}</h3>
    <p>{body}</p>
  </div>
)

export default Card
