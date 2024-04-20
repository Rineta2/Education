'use client'
import { useState, useEffect } from 'react'

import '@/components/scss/Footer.scss'

import { FaArrowAltCircleUp, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

import { CgBrowser } from 'react-icons/cg'

import { link, suport, company } from '@/components/Data/Data'

import Link from 'next/link';

import Image from 'next/image'

import logo from '@/components/assets/Logo/logo.png'

import { Fade, Zoom } from "react-awesome-reveal";

export default function Footer() {

  //============== Arrow ==============//

  const [showArrow, setShowArrow] = useState<boolean>(false);

  const setArrowed = (): void => {
    if (window.scrollY > 0) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', setArrowed);

    return () => {
      window.removeEventListener('scroll', setArrowed);
    };
  }, []);

  //============== DATE ==============//
  const [currentYear] = useState(new Date().getFullYear());

  return (
    <>
      <footer>
        <div className="footer__container container grid">
          <div className="logo">

            <Zoom duration={1000} triggerOnce delay={500}>
              <Image src={logo} alt='' />
            </Zoom>

            <div className="social">
              <Fade duration={1000} triggerOnce delay={500} direction='left'>
                <Link className={'social__link'} href={'https://www.facebook.com/profile.php?id=100007663247764&locale=id_ID'}>
                  <FaFacebookF className='icons' />
                </Link>
              </Fade>

              <Fade duration={1000} triggerOnce delay={500} direction='down'>
                <Link className={'social__link'} href={'https://www.instagram.com/rineta.io?igsh=NG4zdzhkcjkxbnNo'}>
                  <FaInstagram className='icons' />
                </Link>
              </Fade>

              <Fade duration={1000} triggerOnce delay={500} direction='up'>
                <Link className={'social__link'} href={'https://www.tiktok.com/@rineta.io?_t=8l0LeyikXkG&_r=1'}>
                  <FaTiktok className='icons' />
                </Link>
              </Fade>

              <Fade duration={1000} triggerOnce delay={500} direction='right'>
                <Link className={'social__link'} href={''}>
                  <CgBrowser className='icons' />
                </Link>
              </Fade>
            </div>

            <p>Copyright {currentYear} by <b>RINETA STORE</b></p>
          </div>

          <div className="quick">
            <span><b>Navbar</b></span>
            {
              link.map((item, index) => {
                return (
                  <Link href={item.link} key={index}>{item.title}</Link>
                )
              })
            }
          </div>

          <div className="quick">
            <span><b>Suport</b></span>
            {
              suport.map((item, index) => {
                return (
                  <Link href={item.link} key={index}>{item.title}</Link>
                )
              })
            }
          </div>

          <div className="quick">
            <span><b>Company</b></span>
            {
              company.map((item, index) => {
                return (
                  <Link href={item.link} key={index}>{item.title}</Link>
                )
              })
            }
          </div>

        </div>
      </footer>

      <div className={`top ${showArrow ? 'arrow' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >
        <FaArrowAltCircleUp className='icon' />
      </div>
    </>
  )
}