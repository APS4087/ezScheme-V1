// FILE: components/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-transparent text-gray-800 dark:text-gray-300 py-8 mt-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center relative">
        <aside className="flex items-center gap-2">
          <Image 
            src='/assets/ezSchemeLogo.svg'
            alt='ezWeb Logo'
            width={40}
            height={40}
          />
          <span className="text-xl font-bold text-gray-800 dark:text-white">ezScheme.</span>
        </aside>
        <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
          <ul className="flex items-center justify-center gap-8">
            <Link href="/about" className="hover:text-gray-800 dark:hover:text-white">About Us</Link>
            <Link href="/contact" className="hover:text-gray-800 dark:hover:text-white">Contact</Link>
            <Link href="/privacy" className="hover:text-gray-800 dark:hover:text-white">Privacy Policy</Link>
          </ul>
        </nav>
        <div className="mt-4 md:mt-0">
          <p className="text-gray-500 dark:text-gray-400">&copy; 2023 ezScheme. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}