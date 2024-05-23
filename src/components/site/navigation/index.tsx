import { User } from '@clerk/nextjs/server'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    user?: null | User
}

const Navbar = (props: Props) => {
  return (
    <div className='p-4 flex items-center justify-between relative'>
        <aside className='flex items-center gap-2'>
            <Image 
                src='./assets/ezWebLogo.svg'
                alt='ezWeb Logo'
                width={40}
                height={40}
            />
            <span className='text-xl font-bold'>ezWeb.</span>
            <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                <ul className="flex items-center justify-center gap-8">
                <Link href={'#'}>Pricing</Link>
                <Link href={'#'}>About</Link>
                <Link href={'#'}>Documentation</Link>
                <Link href={'#'}>Features</Link>
                </ul>
            </nav>
        </aside>
    </div>
  )
}

export default Navbar