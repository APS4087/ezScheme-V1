import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ModeToggle } from '@/components/global/mode-toggle';

const Navbar = () => {
  return (
    <div className='p-4 flex items-center justify-between relative'>
      <aside className='flex items-center gap-2'>
        <Link href="/" className='flex items-center gap-2'>
          <Image 
            src='/assets/ezSchemeLogo.svg'
            alt='ezWeb Logo'
            width={40}
            height={40}
          />
          <span className='text-xl font-bold'>ezScheme.</span>
        </Link>
      </aside>
      <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex items-center justify-center gap-8">
          <Link href={'#features'}>Features</Link>
          <Link href={'#pricing'}>Pricing</Link>
          {/* <Link href={'#about'}>About</Link> */}
          {/* <Link href={'#documentation'}>Documentation</Link> */}
          <Link href={'#faq'}>FAQ</Link>
        </ul>
      </nav>
      <aside className='flex gap-2 items-center'>
        {/* <Link href={'/agency'} className='bg-violet-500 text-white p-2 px-4 rounded-md hover:bg-violet-800'>
          Sign In
        </Link> */}
        <ModeToggle />
      </aside>
    </div>
  );
}

export default Navbar;