import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoCloseSharp } from 'react-icons/io5';

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: 'Home', href: '#home' },
    { id: 2, text: 'About', href: '#about' },
    { id: 3, text: 'Portfolio', href: '#portfolio' },
    { id: 4, text: 'Experience', href: '#experience' },
    { id: 5, text: 'Contact', href: '#contact' },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      <nav className="max-w-screen-2xl mx-auto px-4 md:px-20 h-16 flex items-center justify-between glass-card shadow-md">
        {/* Logo + Name */}
        <div className='flex items-center space-x-3'>
          <img src={'/photo.avif'} className='h-12 w-12 rounded-full object-cover border-2 border-white/10' alt="Aniket" />
          <div>
            <h1 className='font-bold text-lg text-slate-50 leading-tight'><span className='text-violet-400 text-2xl'>A</span>niket <span className='text-violet-400 text-2xl'>G</span>upta</h1>
            <p className='text-xs text-slate-400 -mt-1'>Web Developer</p>
          </div>
        </div>

        {/* Desktop Navbar */}
        <div className='flex items-center space-x-4'>
          <ul className='hidden md:flex space-x-8 items-center'>
            {navItems.map(({ id, text, href }) => (
              <li key={id}><a href={href} className='text-slate-200 hover:text-white transition'>{text}</a></li>
            ))}
          </ul>

          {/* Mobile Hamburger Icon */}
          <div onClick={() => setMenu(!menu)} className='md:hidden text-slate-200 cursor-pointer'>
            {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menu && (
        <div className='md:hidden mt-2'>
          <ul className='flex flex-col items-center justify-center space-y-4 py-4 bg-slate-900/80'>
            {navItems.map(({ id, text, href }) => (
              <li key={id}><a href={href} className='text-slate-200'>{text}</a></li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
