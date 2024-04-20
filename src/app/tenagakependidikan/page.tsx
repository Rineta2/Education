'use client'
import { useState } from 'react'

import { headingTenagakependidikan, tenagakependidikan } from '@/components/Data/Data'

import Image from 'next/image';

import { Zoom } from 'react-awesome-reveal';

import '@/components/scss/Profil.scss'

export default function Tenagakependidikan() {

  const [selectedCategory, setSelectedCategory] = useState('jabatan1');

  const handleFilter = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredData = selectedCategory === '' ? tenagakependidikan : tenagakependidikan.filter(id => id.category === selectedCategory)

  return (
    <section className="tenagakependidikan">
      <div className="tenagakependidikan__container container grid">

        {
          headingTenagakependidikan.map((item) => (
            <div className="heading">
              <h1>{item.title}</h1>
              <p>{item.text}</p>
            </div>
          ))
        }

        <div className="content__data">
          <div className='filter__button'>
            <Zoom triggerOnce cascade delay={300}>
              <button className={selectedCategory === 'jabatan1' ? 'active' : ""} onClick={() => handleFilter('jabatan1')}>Jabatan1</button>
            </Zoom>

            <Zoom triggerOnce cascade delay={300}>
              <button className={selectedCategory === 'jabatan2' ? 'active' : ""} onClick={() => handleFilter('jabatan2')}>Jabatan2</button>
            </Zoom>

            <Zoom triggerOnce cascade delay={300}>
              <button className={selectedCategory === 'jabatan3' ? 'active' : ""} onClick={() => handleFilter('jabatan3')}>Jabatan3</button>
            </Zoom>

            <Zoom triggerOnce cascade delay={300}>
              <button className={selectedCategory === 'jabatan4' ? 'active' : ""} onClick={() => handleFilter('jabatan4')}>Jabatan4</button>
            </Zoom>
          </div>

          {
            filteredData.map((item) => (
              <div className="content__item" key={item.id}>
                <div className="content__img">
                  <Image src={item.img} alt='' />
                </div>

                <div className="content__text">
                  <h1>{item.name}</h1>
                  <p>{item.jabatan}</p>
                </div>
              </div>
            ))
          }
        </div>

      </div>
    </section>
  )
}
