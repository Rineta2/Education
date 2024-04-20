'use client'

import '@/components/scss/Kontak.scss'

import { socialData } from '@/components/Data/Data'

import Link from 'next/link'

export default function Kontak() {
  return (
    <section className="kontak">

      <div className="kontak__container container grid">

        <div className="heading">
          <h1>Kontak</h1>
          <p>Hubungi Kami</p>
        </div>

        <div className="content">

          <div className="maps">
            <iframe src="https://www.google.com/maps/embed?pb=!4v1713611405930!6m8!1m7!1sfxnAD4XL0OAuToy5s0cl8w!2m2!1d-6.571014799863566!2d106.6342068991356!3f87.20919!4f0!5f0.7820865974627469" width="400" height="300" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy={'no-referrer-when-downgrade'}></iframe>
          </div>

          <div className="form">
            <form>
              <div className="inputBox">
                <label>Hubungi Kami Sekarang</label>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea name="pesan" placeholder="Pesan" cols={30} rows={10}></textarea>
                <button type='submit'>Kirim</button>
              </div>
            </form>
          </div>
        </div>

        <div className="box">
          {
            socialData.map((data, index) => (
              <div className="box__content">
                <Link href={data.link} key={index}>
                  <div className="icon">{data.icon}</div>
                </Link>
              </div>
            ))
          }
        </div>

      </div>

    </section>
  )
}