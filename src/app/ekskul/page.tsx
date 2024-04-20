'use client'
import React from 'react'

import { Fade, Zoom } from 'react-awesome-reveal'

import { FaArrowsAltH } from 'react-icons/fa'
import { PiArrowsHorizontal } from 'react-icons/pi'

import { organisasi, megaOrganisasi, organisasiTwo } from '@/components/Data/Data'

import Link from 'next/link'

import Image from 'next/image'

import '@/components/scss/Profil.scss'

export default function Ekskul() {
  return (
    <section className="ekskul">

      <div className="ekskul__container container grid">

        <div className="heading">
          <Fade direction="down" triggerOnce>
            <h1>Organisasi Siswa Intra Sekolah.</h1>
          </Fade>
        </div>

        <div className="page1">
          <div className="filter__berita">
            {organisasi.map((berita, index) => (
              <div className="berita__card" key={index}>
                <div className="berita__card-img">
                  <Zoom triggerOnce duration={1000}>
                    <Image src={berita.img} alt='' />
                  </Zoom>
                </div>

                <div className="news">
                  <div className="title">
                    <Fade direction="right" triggerOnce>
                      <h3>{berita.title}</h3>
                      <span className='icon'><FaArrowsAltH /></span>
                      <span>{berita.date}</span>
                    </Fade>
                  </div>

                  <div className="desc">
                    <Zoom triggerOnce duration={1000}>
                      <Link href=''>{berita.subtitle}</Link>
                      <p>{berita.desc}</p>
                      <div className="profile">
                        <Image src={berita.imgProfil} alt="" />
                        <div className="text">
                          <span>{berita.name}</span>
                          <small>{berita.posisi}</small>
                        </div>
                      </div>
                    </Zoom>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="page__content">
          {megaOrganisasi.map((data, index) => (
            <div className="content__card" key={index}>
              <div className="content__card-img">
                <Zoom triggerOnce duration={1000}>
                  <Image src={data.img} alt='' />
                </Zoom>
              </div>

              <div className="news">
                <Fade direction="up" triggerOnce>
                  <span className='title'>{data.title} <PiArrowsHorizontal className='icon' /></span>
                  <small className='date'>{data.date}</small>
                </Fade>
              </div>

              <div className="desc">
                <Fade direction="left" triggerOnce>
                  <Link href={''}>{data.subtitle}</Link>
                  <p>{data.desc}</p>
                </Fade>
              </div>

              <div className="profile">
                <Fade direction="left" triggerOnce>
                  <Image src={data.imgProfil} alt="" />
                </Fade>
                <div className="name__profile">
                  <Zoom triggerOnce duration={1000}>
                    <span className='name'>{data.name}</span>
                    <small className='posisi'>{data.posisi}</small>
                  </Zoom>
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="page__content2">
          {organisasiTwo.map((data, index) => (
            <div className="content__card" key={index}>
              <div className="content__card-img">
                <Zoom triggerOnce duration={1000}>
                  <Image src={data.img} alt='' />
                </Zoom>
              </div>

              <div className="news">
                <Fade direction="left" triggerOnce>
                  <span className='title'>{data.title} <PiArrowsHorizontal className='icon' /></span>
                  <small className='date'>{data.date}</small>
                </Fade>
              </div>

              <div className="desc">
                <Fade direction="right" triggerOnce>
                  <Link href={''}>{data.subtitle}</Link>
                  <p>{data.desc}</p>
                </Fade>
              </div>

              <div className="profile">
                <Zoom triggerOnce duration={1000}>
                  <Image src={data.imgProfil} alt="" />
                </Zoom>
                <div className="name__profile">
                  <Zoom triggerOnce duration={1000}>
                    <span className='name'>{data.name}</span>
                    <small className='posisi'>{data.posisi}</small>
                  </Zoom>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  )
}
