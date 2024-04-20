import React from 'react'

import { sambutan } from '@/components/Data/Data'

import Image from 'next/image'

import '@/components/scss/Profil.scss'

export default function Kepsek() {
  return (
    <section className="kepsek">
      <div className="kepsek__container container grid">

        {
          sambutan.map((item) => (
            <div className="content">

              <div className="text">
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
              </div>

              <div className="profile">
                <Image src={item.img} alt="" />
                <div className="text__profile">
                  <h3>{item.name}</h3>
                  <p>{item.jabatan}</p>
                </div>
              </div>

            </div>
          ))
        }

      </div>
    </section>
  )
}
