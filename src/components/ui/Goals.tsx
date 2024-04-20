import React from 'react'

import { goals, goalsId } from '@/components/Data/Data'

function Goals() {
  return (
    <section className='goals'>
      <div className="goals__container container grid">

        {
          goals.map((item) => (
            <div className="heading">
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
            </div>
          ))
        }

        <div className="box__content">
          {
            goalsId.map((item) => (
              <div className="box" key={item.id}>
                <div className="icons">
                  {item.icons}
                </div>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>
              </div>
            ))
          }
        </div>

      </div>
    </section>
  )
}

export default Goals