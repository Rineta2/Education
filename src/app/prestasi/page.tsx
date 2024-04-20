'use client'

import { heading, prestasi, prestasiData } from '@/components/Data/Data'

import { Fade, Zoom } from 'react-awesome-reveal'

import { MdDateRange } from 'react-icons/md'

import Image from 'next/image'

import Link from 'next/link'

import '@/components/scss/Profil.scss'

export default function Prestasi() {
  return (
    <section className="prestasi">
      <div className="prestasi__container container grid">

        {
          heading.map((item) => (
            <div className="heading">
              <h1>{item.title}</h1>
            </div>
          ))
        }

        {
          prestasi.map((item) => (
            <div className="article">
              <Zoom duration={1000} triggerOnce delay={300}>
                <Image src={item.img} alt="" />
              </Zoom>

              <div className="text">
                <div className="des">
                  <Fade direction='down' duration={1000} triggerOnce delay={300}>
                    <span><MdDateRange className='icons' />{item.date}</span>
                  </Fade>

                  <Fade direction='up' duration={1000} triggerOnce delay={300}>
                    <Link href={''}>{item.title}</Link>
                  </Fade>

                  <Fade direction='up' duration={1000} triggerOnce delay={300}>
                    <p>{item.desc}</p>
                  </Fade>
                </div>

                <div className="profile">
                  <Zoom duration={1000} triggerOnce delay={300}>
                    <Image src={item.profile} alt="" />
                  </Zoom>
                  <div className="text__2">
                    <Fade duration={1000} triggerOnce delay={300}>
                      <span>{item.name}</span>
                      <small>{item.job}</small>
                    </Fade>
                  </div>
                </div>
              </div>

            </div>
          ))
        }

        <div className="article__data">
          {
            prestasiData.map((item) => (
              <div className="data" key={item.id}>
                <Zoom duration={1000} triggerOnce delay={300}>
                  <Image src={item.img} alt="" />
                </Zoom>

                <Fade direction='down' duration={1000} triggerOnce delay={300}>
                  <small><MdDateRange className='icons' />{item.date}</small>
                </Fade>

                <Zoom duration={1000} triggerOnce delay={300}>
                  <h2>{item.title}</h2>
                </Zoom>

                <Fade direction='up' duration={1000} triggerOnce delay={300}>
                  <p>{item.desc}</p>
                </Fade>

                <div className="profile">
                  <Zoom duration={1000} triggerOnce delay={300}>
                    <Image src={item.profile} alt="" />
                  </Zoom>
                  <div className="dataP">
                    <Fade direction='down' duration={1000} triggerOnce delay={300}>
                      <span>{item.name}</span>
                    </Fade>

                    <Fade direction='up' duration={1000} triggerOnce delay={300}>
                      <small>{item.job}</small>
                    </Fade>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

      </div>
    </section>
  )
}
