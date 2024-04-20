'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link';

import { usePathname, useRouter } from 'next/navigation'

import { FaSchoolCircleCheck } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FaTimes } from 'react-icons/fa'

import { megaMenu1, megaMenu2, megaMenu3 } from '@/components/Data/Data'

import '@/components/scss/Header.scss'

function Header() {

  const [showMenu, setShowMenu] = useState(false)

  const pathname = usePathname()

  //=========== Fixed Header ===========//

  const [fix, setFix] = useState<boolean>(false);

  const setFixed = (): void => {
    if (window.scrollY > 0) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', setFixed);

    return () => {
      window.removeEventListener('scroll', setFixed);
    };
  }, []);

  const router = useRouter();

  return (
    <header className={fix ? 'fixed' : ''}>
      <nav>
        <div className="logo">
          <Link href={'/'}><FaSchoolCircleCheck className='logo__icon' />Education</Link>
        </div>

        <ul className={`nav__list ${showMenu ? 'show' : ''}`}>

          <li className="nav__item">
            <Link href={'/'} className={`nav__link ${pathname === '/' ? 'active' : ''}`} onClick={() => setShowMenu(false)}>Beranda</Link>
          </li>

          <li className="nav__item dropdown">
            <span className={`nav__link ${pathname === '' ? 'active' : ''}`}>Tentang Kami<IoIosArrowDown className='dropdown__icon' /></span>
            <div className="megamenu">
              <ul className="content">
                <li className="megamenu__item header__megamenu">Profil</li>
                {
                  megaMenu1.map((item) => (
                    <div className="megamenu__item" key={item.id}>
                      <li className="menu__icon">
                        <div className="icon"> {item.icon}</div>
                      </li>

                      <div className="megamenu__link">
                        <Link href={item.path} className={`${pathname === item.path ? 'active' : ''}`} onClick={() => setShowMenu(false)}>{item.title}</Link>
                      </div>
                    </div>
                  ))
                }
              </ul>

              <ul className="content">
                <li className="megamenu__item header__megamenu">Profil</li>
                {
                  megaMenu2.map((item) => (
                    <div className="megamenu__item" key={item.id}>
                      <li className="menu__icon">
                        <div className="icon"> {item.icon}</div>
                      </li>

                      <div className="megamenu__link">
                        <Link href={item.path} className={`${pathname === item.path ? 'active' : ''}`} onClick={() => setShowMenu(false)}>{item.title}</Link>
                      </div>
                    </div>
                  ))
                }
              </ul>

              <ul className="content">
                <li className="megamenu__item header__megamenu">Profil</li>
                {
                  megaMenu3.map((item) => (
                    <div className="megamenu__item" key={item.id}>
                      <li className="menu__icon">
                        <div className="icon"> {item.icon}</div>
                      </li>

                      <div className="megamenu__link">
                        <Link href={item.path} className={`${pathname === item.path ? 'active' : ''}`} onClick={() => setShowMenu(false)}>{item.title}</Link>
                      </div>
                    </div>
                  ))
                }
              </ul>
            </div>
          </li>

          <li className="nav__item">
            <Link href={'/databerita'} className={`nav__link ${pathname === '/databerita' ? 'active' : ''}`} onClick={() => setShowMenu(false)}>Berita</Link>
          </li>

          <li className="nav__item">
            <Link href={'/pengumuman'} className={`nav__link ${pathname === '/pengumuman' ? 'active' : ''}`} onClick={() => setShowMenu(false)}>Pengumuman</Link>
          </li>

          <li className="nav__item">
            <Link href={'/kontak'} className={`nav__link ${pathname === '/kontak' ? 'active' : ''}`} onClick={() => setShowMenu(false)}>Kontak</Link>
          </li>

          <li className="nav__item" onClick={() => router.push('/pendaftaran')}>
            <Link href={'/pendaftaran'} className={`nav__link ${pathname === '/pendaftaran' ? 'active' : ''}`} onClick={() => setShowMenu(false)}>Pendaftaran</Link>
          </li>
        </ul>

        <div className="toggle__menu" onClick={() => setShowMenu(!showMenu)}>
          {
            showMenu ? <FaTimes className='close' /> : <IoMenu className='hamburger' />
          }
        </div>
      </nav>
    </header>
  )
}

export default Header