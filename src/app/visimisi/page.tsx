import { visi, misi } from '@/components/Data/Data'

import '@/components/scss/Profil.scss'

import Visi from '@/components/assets/Visi/visi.jpg'

import Image from 'next/image'

export default function visimisi() {
  return (
    <section className="misi">

      <div className="misi__container container grid">

        <div className="content">

          <div className="img">
            <Image src={Visi} alt='' />
          </div>

          <div className="box__content">
            {
              visi.map((item) => (
                <div className="box">
                  <h1>{item.title}</h1>

                  <div className="text">
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))
            }

            {
              misi.map((item) => (
                <div className="box2">
                  <h1>{item.title}</h1>
                  <div className="text" key={item.id}>
                    <p><div className="icons">{item.icons}</div>{item.text}</p>
                  </div>
                </div>
              ))
            }
          </div>

        </div>

      </div>

    </section>
  )
}
