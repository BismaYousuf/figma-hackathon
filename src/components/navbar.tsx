import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { ShoppingBag, Search } from 'lucide-react'

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

export function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-10 py-11">
      <div className="container mx-auto px-4">
        <div className=" items-center justify-center ml-[605px]">
          <Link href="/" className="text-2xl font-bold text-orange-500">
            Food<span className='text-white'>tuck</span> 
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <div className="hidden md:flex space-x-8">
            <NavItem href="/" active>Home</NavItem>
            <NavItem href="/menu">Menu</NavItem>
            <NavItem href="/blog">Blog</NavItem>
            <NavItem href="/pages">Pages</NavItem>
            <NavItem href="/about">About</NavItem>
            <NavItem href="/Ourshop">Shop</NavItem>
            <NavItem href="/contact">Contact</NavItem>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Input
                type="search"
                placeholder="Search..."
                className="pl-6 pr-12 py-2 rounded-full bg-transparent border-orange-500 text-white placeholder-white w-64"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white" size={18} />
            </div>
            <ShoppingBag className="text-white" size={24} />
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavItem({ href, children, active = false }: NavItemProps) {
  return (
    <Link 
      href={href} 
      className={`text-base ${active ? 'text-orange-500' : 'text-white'} hover:text-orange-500 transition-colors relative ${active ? 'after:content-[""] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-orange-500 after:rounded-full' : ''}`}
    >
      {children}
    </Link>
  )
}
