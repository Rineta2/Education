import { bannerImg } from '@/components/Data/Data'

import Image from 'next/image'
import Link from 'next/link'

export default function Banner() {
  return (
    <section className="banner">

      <div className="banner__container container grid">

        {
          bannerImg.map((item) => (
            <div className="banner">
              <Image src={item.img} alt='' />
              <div className="text">
                <h1>{item.title}</h1>
                <Link href={item.path}>{item.text}</Link>
              </div>
            </div>
          ))
        }

      </div>

    </section>
  )
}
