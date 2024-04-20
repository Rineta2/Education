'use client'

import { useState } from 'react'

import { galleryPage, headingGallery } from "@/components/Data/Data"

import { StaticImageData } from 'next/image'

import { FaTimes } from "react-icons/fa";

import Image from 'next/image'

import '@/components/scss/Profil.scss'

export default function gallery() {

  const [model, setModel] = useState(false)

  const [tempingSrc, setTempImgSrc] = useState<StaticImageData | null>(null);

  const getImg = (Image: StaticImageData) => {
    setTempImgSrc(Image)
    setModel(true)
  }
  return (
    <section className="gallery__page">

      <div className="gallery__container container grid">

        {
          headingGallery.map((item) => (
            <div className="heading">
              <h1>{item.title}</h1>
              <p>{item.text}</p>
            </div>
          ))
        }

        <div className="galery__card">
          {
            galleryPage.map((item) => (
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
