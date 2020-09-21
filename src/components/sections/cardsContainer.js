import React from "react"
import Card from '@components/card'
import { Pin, Alarm, Battery } from '@assets/icons'

const CardsContainer = () => {

  const cards = [
    { 
      title: 'Wake Up with the Sun',
      icon: <Alarm />,
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facere mollitia repellat quam, quis blanditiis.'
    },
    { 
      title: 'Explore Wide Open Spaces',
      icon: <Pin />,
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facere mollitia repellat quam, quis blanditiis.'
    },
    { 
      title: 'Recharge Your Mental Batteries',
      icon: <Battery />,
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facere mollitia repellat quam, quis blanditiis.'
    }
  ]

  return (
    <div className="section bg-darker">
      <section className="wrapper cards">
        <h2>A Little Bit of Everything</h2>
        <div className="cards__container">

          {
            cards.map(card => (
              <Card
                key={card.title}
                icon={card.icon}
                title={card.title}
                body={card.body}
              />
            ))
          }

        </div>
      </section>
    </div>
  )
}

export default CardsContainer
