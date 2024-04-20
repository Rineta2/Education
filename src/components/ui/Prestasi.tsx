'use client'
import { useState } from 'react'

import { imgPrestasi, headingPrestasi } from '@/components/Data/Data'

import Image from 'next/image';
function Prestasi() {

  const [selectedCategory, setSelectedCategory] = useState('fashion');

  const handleFilter = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredData = selectedCategory === '' ? imgPrestasi : imgPrestasi.filter(id => id.category === selectedCategory)

  return (
    <section className="prestasi">
      <div className="prestasi__container container grid">

        {
          headingPrestasi.map((item) => (
            <div className="heading">
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
            </div>
          ))
        }

        <div className="content">
          <div className="fillter__button">
            {
              imgPrestasi.map((item) => (
                <button className={selectedCategory === item.category ? 'active' : ""} onClick={() => handleFilter(item.category)}>
                  <h1>{item.title}</h1>
                  <p>{item.desc}</p>
                </button>
              ))
            }
          </div>

          {
            filteredData.map((item) => (
              <div className="box" key={item.id}>
                <Image src={item.img} alt="" />
              </div>
            ))
          }

        </div>
      </div>
    </section>
  )
}

export default Prestasi