'use client'

import { headingSejarah, sejarah } from '@/components/Data/Data'

import { Fade } from 'react-awesome-reveal'

import Image from 'next/image'

import { SlCalender } from 'react-icons/sl'
import { IoIosArrowForward } from 'react-icons/io'

import '@/components/scss/Profil.scss'
export default function Sejarah() {
  return (
    <section className="sejarah">
      <div className="sejarah__container container gird">

        {
          headingSejarah.map((item) => (
            <div className="sejarah__heading">
              <Fade direction="down" triggerOnce delay={300}>
                <span>{item.text} <IoIosArrowForward /></span>
              </Fade>

              <Fade direction="right" triggerOnce delay={300}>
                <h3>{item.title}</h3>
              </Fade>
            </div>
          ))
        }

        {
          sejarah.map((item) => (
            <div className="sejarah__box" key={item.id}>
              <div className="img">
                <Image src={item.img} alt='' />
              </div>

              <div className="text">
                <Fade direction="up" triggerOnce delay={300}>
                  <p>{item.desc}</p>
                </Fade>
              </div>

              <div className="date">
                <Fade direction="right" triggerOnce delay={300}>
                  <span><SlCalender className="icon" />{item.date}</span>
                </Fade>
              </div>

            </div>
          ))
        }

      </div>
    </section>
  )
}
