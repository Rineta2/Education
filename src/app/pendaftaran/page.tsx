'use client'
import { useState } from 'react'

import '@/components/scss/Pendaftaran.scss'

import Link from 'next/link';

import { IoLogIn, IoMenu } from "react-icons/io5";

import { MdDashboard, MdHome } from "react-icons/md";

import { FaTimes } from 'react-icons/fa'

export default function Pendaftaran() {

  const [open, setOpen] = useState(false)

  return (
    <>
      <div className={open ? 'sidebar open' : 'sidebar'}>
        <div className="prof">
          <h1>rineta.io</h1>
        </div>
        <div className="side__menu">
          <ul>
            <li><Link href="/login"><IoLogIn className='icons' /> Login</Link></li>
            <li><Link href="/admin"><MdDashboard className='icons' /> Admin</Link></li>
            <li><Link href="/" onClick={() => setOpen(!open)}><MdHome className='icons' /> Home</Link></li>
          </ul>
        </div>
      </div>

      <div className="toggle" onClick={() => setOpen(!open)}>
        {
          open ? <FaTimes className='icon' /> : <IoMenu className='icon' />
        }
      </div>

      <section className='pendaftaran'>
        <div className="pendaftaran__container container grid">
          <h1>Hallo</h1>
        </div>
      </section>

    </>
  )
}
