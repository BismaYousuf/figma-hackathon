'use client'
import Link from 'next/link';
import { ShoppingBag, Search, UserRound, Menu } from 'lucide-react';
import { useState } from 'react';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-10 py-6 bg-black">
      <div className="flex items-center justify-between max-w-[1320px] mx-auto px-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-orange-500">
          Food<span className="text-white">tuck</span>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <Menu className="text-white" size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`md:flex space-x-8 ${menuOpen ? 'block' : 'hidden'} md:block`}>
          <NavItem href="/" active>
            Home
          </NavItem>
          <NavItem href="/menu">Menu</NavItem>
          <NavItem href="/blog">Blog</NavItem>
          <NavItem href="/not-found">Pages</NavItem>
          <NavItem href="/aboutSection">About</NavItem>
          <NavItem href="/ourshop">Shop</NavItem>
          <NavItem href="/signupForm">Contact</NavItem>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <Search className="text-white cursor-pointer" size={24} />
          <Link href={'/signinform'}>
            <UserRound className="text-white cursor-pointer" size={24} />
          </Link>
          <ShoppingBag className="text-white cursor-pointer" size={24} />
        </div>
      </div>
    </nav>
  );
}

function NavItem({ href, children, active = false }: NavItemProps) {
  return (
    <Link
      href={href}
      className={`text-base ${active ? 'text-orange-500' : 'text-white'} hover:text-orange-500 transition-colors relative ${
        active
          ? 'after:content-[""] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-orange-500 after:rounded-full'
          : ''
      }`}
    >
      {children}
    </Link>
  );
}
