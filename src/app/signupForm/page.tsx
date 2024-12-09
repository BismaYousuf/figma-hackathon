"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { User, Mail, Lock, ChevronRight } from 'lucide-react'
import Image from "next/image"
import { Header } from "@/components/header"

export default function SignUpForm() {
  return (
    <>   <Header />

    <div className="relative w-[1920px] h-[410px] bg-black m-auto">
      {/* Background Image */}
      <Image
        src={'/menubg.png'}
        alt={'Menu Background'}
        width={1920}
        height={410}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Heading on Top of Image */}
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
{/* Heading */}
<h1 className="text-[48px] font-bold text-white">Sign Up Page</h1>

{/* Paragraph with Hover Effect */}
<p className="text-[16px] text-white flex items-center space-x-2 group">
  <span className="transition-colors duration-300">Home</span>
  <ChevronRight size={16} className="text-white transition-colors duration-300 group-hover:text-orange-500" />
  <span className="transition-colors duration-300 text-orange-500">Sign Up</span>
</p>
</div>
    </div>
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-[424px] bg-white p-8 shadow-[0px_4px_80px_rgba(255,159,13,0.15)] rounded-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Sign Up</h2>
        
        <form className="space-y-4">
          <div className="relative">
            <Input
              placeholder="Name"
              className="pl-12 h-11 border-gray-200"
            />
            <User className="absolute left-4 top-3 h-5 w-5 text-gray-600" />
          </div>

          <div className="relative">
            <Input
              type="email"
              placeholder="Email"
              className="pl-12 h-11 border-gray-200"
            />
            <Mail className="absolute left-4 top-3 h-5 w-5 text-gray-600" />
          </div>

          <div className="relative">
            <Input
              type="password"
              placeholder="Password"
              className="pl-12 h-11 border-gray-200"
            />
            <Lock className="absolute left-4 top-3 h-5 w-5 text-gray-600" />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" className="bg-[#FF9F0D] border-0" />
              <label
                htmlFor="remember"
                className="text-sm leading-none text-gray-800"
              >
                Remember me?
              </label>
            </div>
          </div>

          <Button className="w-full bg-[#FF9F0D] hover:bg-[#FF9F0D]/90 h-11">
            Sign Up
          </Button>

          <div className="text-right">
            <a href="#" className="text-sm text-gray-400 hover:text-gray-600">
              Forget password?
            </a>
          </div>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 text-gray-600 bg-white border border-gray-200">
                OR
              </span>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full h-11 mb-3"
          >
            <Image
              src="/google.jpeg"
              alt="Google"
              width={20}
              height={20}
              className="w-5 h-5 mr-2"
            />
            Sign up with Google
          </Button>

          <Button
            variant="outline"
            className="w-full h-11"
          >
            <Image
              src="/apple.png"
              alt="Apple"
              width={20}
              height={20}
              className="w-5 h-5 mr-2"
            />
            Sign up with Apple
          </Button>
        </form>
      </div>
    </div>
    </>
  )
}

