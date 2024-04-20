import React from 'react'

import { beritaHeading, duoBerita, triBerita } from '@/components/Data/Data'

import Link from 'next/link'

import Image from 'next/image'

function Berita() {
  return (
    <section className="berita">

      <div className="berita__container container grid">

        {
          beritaHeading.map((item) => (
            <div className="heading">
              <div className="top__heading">
                <h3>{item.title}</h3>
                <div className="icons">{item.icon}</div>
                <h2>{item.text}</h2>
              </div>

              <h1>{item.judul}</h1>
              <p>{item.desc}</p>
            </div>
          ))
        }

        <div className="duo__berita">
          {
            duoBerita.map((item) => (
              <div className="box" key={item.id}>
                <Image src={item.img} alt="" />

                <div className="text">
                  <div className="date">
                    <div className="icons">{item.icons}</div>
                    <h3>{item.date}</h3>
                  </div>

                  <h1>{item.title}</h1>
                  <p>{item.desc}</p>
                  <Link href={item.path}>{item.span}</Link>
                </div>
              </div>
            ))
          }
        </div>

        <div className="tri__berita">

          {
            triBerita.map((item) => (
              <div className="box" key={item.id}>
                <Image src={item.img} alt="" />

                <div className="text">
                  <h1>{item.title}</h1>
                  <p>{item.desc}</p>

                  <div className="content">
                    <div className="box__date">
                      <Link href={item.path}>{item.span}</Link>
                      <div className="date">
                        <div className="icons">{item.icons}</div>
                        <h3>{item.date}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }


        </div>

        <div className="btn">
          <Link href={'/'}>Lead More</Link>
        </div>

      </div>

    </section>
  )
}

export default Berita