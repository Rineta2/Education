'use client'
import { useState } from 'react'

import { gallery } from '@/components/Data/Data'

import Image from 'next/image'

import { StaticImageData } from 'next/image'

import { FaTimes } from "react-icons/fa";

export default function Gallery() {

  const [model, setModel] = useState(false)

  const [tempingSrc, setTempImgSrc] = useState<StaticImageData | null>(null);

  const getImg = (Image: StaticImageData) => {
    setTempImgSrc(Image)
    setModel(true)
  }

  return (
    <section className="gallery">

      <div className="gallery__container container grid">

        <div className="heading">
          <h1>Beberapa Foto Tentang Kami</h1>
        </div>

        <div className="galery__card">
          {
            gallery.map((item) => (
              <div className="pics" key={item.id}>
                <Image src={item.img} alt='' onClick={() => getImg(item.img)} />
              </div>
            ))
          }
        </div>

        <div className={model ? "model open" : "model"}>
          <div className="model__content">
            {tempingSrc && <Image src={tempingSrc} alt='' />}
          </div>

          <div className="close" onClick={() => setModel(false)}>
            <FaTimes className='icon' />
          </div>

        </div>
      </div>

    </section>
  )
}
