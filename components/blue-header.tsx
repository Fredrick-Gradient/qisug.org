"use client"

import Link from "next/link"
import { Menu, Search, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { useState, useEffect } from "react"
import Image from "next/image"

const navItems = [
  { title: "Home", href: "/" },
  {
    title: "About us",
    href: "/about",
    submenu: [
      { title: "Our School", href: "/about#school" },
      { title: "Our Approach", href: "/about#approach" },
    ],
  },
  {
    title: "Admissions",
    href: "/admissions",
    submenu: [
      { title: "Requirements", href: "/admissions#requirements" },
      { title: "Admission Period", href: "/admissions#period" },
      { title: "How to Apply", href: "/admissions#how-to-apply" },
      { title: "Apply Now", href: "/admissions#apply" },
    ],
  },
  { title: "Academics", href: "/academics" },
  {
    title: "Policies",
    href: "/policies",
    submenu: [
      { title: "Lorem ipsum dolor sit", href: "/policies#policy1" },
      { title: "Lorem ipsum dolor sit", href: "/policies#policy2" },
      { title: "Lorem ipsum dolor sit", href: "/policies#policy3" },
      { title: "Lorem ipsum dolor sit", href: "/policies#policy4" },
    ],
  },
  { title: "Contact Us", href: "/contact" },
  { title: "FAQ", href: "/faq" },
]

export function BlueSiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed  left-0 right-0 z-50 w-full bg-transparent">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-repeat"
        style={{ backgroundImage: "url('/images/blue_sholastic_pattern.webp')" }}
      />

      <div
        className="absolute inset-0"
        style={{ backgroundColor: '#2a3dc8ff', opacity: 0.90 }}
      />

      <div className="container max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative">
        <div className="flex items-start justify-between w-full gap-2 sm:gap-4">
          {/* Left: Logo Section */}
          <div className={`flex-shrink-0 transition-all duration-300 ${
            isScrolled 
              ? 'py-2' 
              : 'py-3 sm:py-4 md:py-6'
          }`}>
            <Link href="/" className="flex items-center">
              <div className={`relative transition-all duration-300 ${
                isScrolled 
                  ? 'w-12 h-12 sm:w-14 sm:h-14' 
                  : 'w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-30'
              }`}>
                <Image
                  src="/images/logo_blue.webp"
                  alt="Queensgate International School"
                  width={240}
                  height={256}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-[#3d4fd4] h-10 w-10">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="bg-[#ffd500] text-[#3d4fd4] border-l-0 w-[85vw] sm:w-[350px] px-4 sm:px-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-[#3d4fd4]">Menu</h2>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="text-[#3d4fd4] h-8 w-8">
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col space-y-1">
                  {navItems.map((item) => (
                    <div key={item.title}>
                      <SheetClose asChild>
                        <Link 
                          href={item.href} 
                          className="block py-2.5 px-3 text-base font-semibold hover:bg-[#3d4fd4]/10 rounded-md transition-colors"
                        >
                          {item.title}
                        </Link>
                      </SheetClose>
                      {item.submenu && (
                        <div className="ml-4 mt-1 mb-2 space-y-1">
                          {item.submenu.map((subitem) => (
                            <SheetClose key={subitem.href} asChild>
                              <Link 
                                href={subitem.href} 
                                className="block py-1.5 px-3 text-sm text-[#3d4fd4]/80 hover:bg-[#3d4fd4]/10 rounded-md transition-colors"
                              >
                                {subitem.title}
                              </Link>
                            </SheetClose>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
                
                {/* Mobile Login Button */}
                <div className="mt-6 pt-6 border-t border-[#3d4fd4]/20">
                  <SheetClose asChild>
                    <Link href="/login" className="block">
                      <Button
                        variant="outline"
                        className="w-full text-white border-[#3d4fd4] hover:bg-[#3d4fd4] hover:text-white font-medium flex items-center justify-center gap-2"
                      >
                        <User className="h-5 w-5" />
                        <span>Log In</span>
                      </Button>
                    </Link>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Navigation and Actions */}
          <div className={`hidden lg:flex items-center gap-2 xl:gap-3 ml-auto transition-all duration-300 ${
            isScrolled ? "py-3" : "py-6"
          }`}>
            {/* Desktop Navigation */}
            <nav className="flex items-center space-x-1">
              {navItems.map((item) =>
                item.submenu ? (
                  <DropdownMenu key={item.title}>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="ghost" 
                        className={`text-white hover:bg-[#3d4fd4]/10 font-bold transition-all duration-300 ${
                          isScrolled ? "text-xs xl:text-sm px-2 xl:px-3 py-1.5 h-8" : "text-sm px-3 py-2 h-9"
                        }`}
                      >
                        {item.title}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white border-[#3d4fd4]/20">
                      {item.submenu.map((subitem) => (
                        <DropdownMenuItem key={subitem.href} asChild>
                          <Link
                            href={subitem.href}
                            className="text-white font-bold hover:bg-[#3d4fd4] hover:text-white cursor-pointer"
                          >
                            {subitem.title}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link key={item.title} href={item.href}>
                    <Button 
                      variant="ghost" 
                      className={`text-white hover:bg-[#3d4fd4]/10 font-bold transition-all duration-300 ${
                        isScrolled ? "text-xs xl:text-sm px-2 xl:px-3 py-1.5 h-8" : "text-sm px-3 py-2 h-9"
                      }`}
                    >
                      {item.title}
                    </Button>
                  </Link>
                ),
              )}
            </nav>

            {/* Log In Button */}
            <Link href="/login">
              <Button
                variant="ghost"
                className={`text-white hover:bg-[#3d4fd4]/10 font-medium flex items-center gap-2 transition-all duration-300 ${
                  isScrolled ? "text-xs xl:text-sm px-2 py-1.5 h-8" : "text-sm px-3 py-2 h-9"
                }`}
              >
                <div className={`flex items-center justify-center rounded-full bg-[#3d4fd4] transition-all duration-300 ${
                  isScrolled ? "w-6 h-6 xl:w-7 xl:h-7" : "w-8 h-8 xl:w-9 xl:h-9"
                }`}>
                  <User className={`text-white transition-all duration-300 ${
                    isScrolled ? "h-3 w-3 xl:h-4 xl:w-4" : "h-4 w-4 xl:h-5 xl:w-5"
                  }`} />
                </div>
                <span className="hidden xl:inline">Log In</span>
              </Button>
            </Link>

            {/* Search Bar */}
            <div className="relative">
              <div className={`flex items-center bg-white rounded-full pl-3 pr-1.5 border border-[#3d4fd4]/20 transition-all duration-300 ${
                isScrolled ? "py-1 w-32 xl:w-48" : "py-1.5 w-40 xl:w-56"
              }`}>
                <Input
                  type="search"
                  placeholder="Search..."
                  className={`flex-1 bg-transparent border-0 text-[#3d4fd4] placeholder:text-[#3d4fd4]/40 focus-visible:ring-0 focus-visible:ring-offset-0 px-0 transition-all duration-300 ${
                    isScrolled ? "text-xs" : "text-sm"
                  }`}
                />
                <div className={`flex items-center justify-center rounded-full bg-[#3d4fd4] flex-shrink-0 transition-all duration-300 ${
                  isScrolled ? "w-6 h-6 xl:w-7 xl:h-7" : "w-8 h-8 xl:w-9 xl:h-9"
                }`}>
                  <Search className={`text-white transition-all duration-300 ${
                    isScrolled ? "h-3 w-3 xl:h-4 xl:w-4" : "h-4 w-4 xl:h-5 xl:w-5"
                  }`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}