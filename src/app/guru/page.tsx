import { headingGuru, guru } from "@/components/Data/Data"

import Image from "next/image"

import '@/components/scss/Profil.scss'

export default function Guru() {
  return (
    <section className="guru">
      <div className="guru__container container grid">

        {
          headingGuru.map((item) => (
            <div className="heading">
              <h1>{item.title}</h1>
              <p>{item.text}</p>
            </div>
          ))
        }

        <div className="content">

          {
            guru.map((item) => (
              <div className="box" key={item.id}>
                <div className="img">
                  <Image src={item.img} alt="" />
                </div>
                <div className="text">
                  <h1>{item.name}</h1>
                  <h3>{item.jabatan}</h3>
                </div>
              </div>
            ))
          }

        </div>

        <div className="btn">
          <span>Lead More</span>
        </div>

      </div>
    </section>
  )
}
