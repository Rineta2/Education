import React from 'react'

import { blog, megaBlog } from '@/components/Data/Data'

import Image from 'next/image'

import Link from 'next/link'

export default function Blog() {
  return (
    <section className="blog">

      <div className="blog__container container grid">

        {
          blog.map((item) => (
            <div className="blog__content">
              <div className="text">
                <h3>{item.title}</h3>
                <h1>{item.text}</h1>
                <p>{item.desc}</p>

                <div className="btn">
                  <div className="date">
                    <div className="icons">{item.icons}</div>
                    <small>{item.date}</small>
                  </div>

                  <Link href={item.path}>{item.link}</Link>
                </div>
              </div>

              <div className="img">
                <Image src={item.img} alt="" />
              </div>
            </div>
          ))
        }

        <div className="mega__content">
          {
            megaBlog.map((item) => (
              <div className="content" key={item.id}>
                <Image src={item.img} alt="" />

                <div className="text">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <Link href={item.path}>{item.link}</Link>
                </div>
              </div>
            ))
          }
        </div>

      </div>

    </section>
  )
}
