'use client'

import { useState, createContext, useContext } from 'react'
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { ShoppingBag, Search, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

const MenuContext = createContext(false)

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 w-full z-10 py-4 md:py-11">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo text */}
          <Link href="/" className="text-2xl font-bold text-orange-500">
            Food<span className='text-white'>tuck</span> 
          </Link>
          {/* Desktop navigation menu */}
          <div className="hidden lg:flex space-x-8">
            <NavItem href="/" active>Home</NavItem>
            <NavItem href="/menu">Menu</NavItem>
            <NavItem href="/blog">Blog</NavItem>
            <NavItem href="/not-found">Pages</NavItem>
            <NavItem href="/aboutSection">About</NavItem>
            <NavItem href="/ourshop">Shop</NavItem>
            <NavItem href="/signupForm">Contact</NavItem>
          </div>
          <div className="flex items-center space-x-4">
            {/* Search input (visible on desktop, toggleable on mobile) */}
            <div className={`relative ${isSearchOpen ? 'block' : 'hidden'} lg:block`}>
              <Input
                type="search"
                placeholder="Search..."
                className="pl-6 pr-12 py-2 rounded-full bg-transparent border-orange-500 text-white placeholder-white w-64"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white" size={18} />
            </div>
            {/* Mobile search toggle button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="text-white" size={24} />
            </Button>
            {/* Shopping bag icon */}
            <ShoppingBag className="text-white" size={24} />
            {/* Hamburger menu (visible on mobile) */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="lg:hidden"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <Menu className={`h-6 w-6 ${isMenuOpen ? 'text-orange-500' : 'text-white'}`} />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              {/* Mobile menu content */}
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <MenuContext.Provider value={true}>
                  <nav className="flex flex-col space-y-4">
                    <NavItem href="/" active>Home</NavItem>
                    <NavItem href="/menu">Menu</NavItem>
                    <NavItem href="/blog">Blog</NavItem>
                    <NavItem href="/not-found">Pages</NavItem>
                    <NavItem href="/aboutSection">About</NavItem>
                    <NavItem href="/ourshop">Shop</NavItem>
                    <NavItem href="/signupForm">Contact</NavItem>
                  </nav>
                </MenuContext.Provider>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavItem({ href, children, active = false }: NavItemProps) {
  const isMenuOpen = useContext(MenuContext);
  return (
    <Link 
      href={href} 
      className={`text-base ${active || isMenuOpen ? 'text-orange-500' : 'text-white'} hover:text-orange-500 transition-colors relative ${active ? 'after:content-[""] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-orange-500 after:rounded-full' : ''}`}
    >
      {children}
    </Link>
  )
}

