'use client'

import { swiper, home } from '@/components/Data/Data'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import '@/components/scss/Home.scss';

import dynamic from 'next/dynamic';

import Image from 'next/image';

const Goals = dynamic(() => import('@/components/ui/Goals'), { ssr: false });
const Prestasi = dynamic(() => import('@/components/ui/Prestasi'), { ssr: false });
const Sambutan = dynamic(() => import('@/components/ui/Sambutan'), { ssr: false });
const DataBerita = dynamic(() => import('@/components/ui/Berita'), { ssr: false });
const Banner = dynamic(() => import('@/components/ui/Banner'), { ssr: false });
const Gallery = dynamic(() => import('@/components/ui/Gallery'), { ssr: false });
const Blog = dynamic(() => import('@/components/ui/Blog'), { ssr: false });
function Home() {
  return (
    <>
      <div className="swiper__content">
        <Swiper navigation={true} modules={[Navigation, Autoplay]} autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          waitForTransition: false,
        }} className="mySwiper">
          {
            swiper.map((item) => (
              <SwiperSlide key={item.id} className='swiper-slide'>
                <Image src={item.img} alt="" />
              </SwiperSlide>
            ))
          }
        </Swiper>

        <div className="box__container container grid">
          <div className="content__box">
            {
              home.map((item) => (
                <div className="box" key={item.id}>
                  <div className="icons"> {item.icons}</div>
                  <h3>{item.title}</h3>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <Sambutan />

      <hr className='hr' />

      <Goals />

      <DataBerita />

      <Prestasi />

      <hr className="hr" />

      <Banner />

      <Gallery />

      <Blog />
    </>
  )
}

export default Home