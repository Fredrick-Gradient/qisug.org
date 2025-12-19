"use client"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    let ticking = false
    const handle = () => {
      const y = window.scrollY
      if (!ticking) {
        rafRef.current = window.requestAnimationFrame(() => {
          setScrollY(y)
          setIsScrolled(y > 50)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handle, { passive: true })
    handle()
    return () => {
      window.removeEventListener("scroll", handle)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div className="w-full flex flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <main className="flex-1 bg-[#203dce] pt-24 sm:pt-32 md:pt-20 lg:pt-25">
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-0 min-h-[calc(100vh-8rem)] sm:min-h-[calc(100vh-10rem)] lg:min-h-[calc(100vh-5rem)]">
              {/* Left Side - Text Content */}
              <div className="flex items-center justify-center lg:justify-start py-8 sm:py-12 lg:py-20 z-10">
                <div className="max-w-xl w-full text-center lg:text-left px-4 sm:px-6 lg:px-0">
                  <h1 className="font-serif text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white mb-6 sm:mb-8 ">
                    Queensgate International School
                  </h1>
                  <Link href="/admissions">
                    <Button
                      size="lg"
                      className="bg-[#3d4fd4] text-white hover:bg-[#3d4fd4]/90 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-md shadow-lg transition-all hover:shadow-xl"
                    >
                      Apply Today
                    </Button>
                  </Link>
                </div>
              </div>

             
            </div>
          </div>
        
          {/* Absolute overlay image - Desktop only */}
          <div className={`pointer-events-none absolute inset-0 hidden lg:flex items-center justify-end pr-4 xl:pr-8 ${isScrolled ? "z-40" : "z-70"}`}>
            <div
              className="w-full max-w-2xl xl:max-w-3xl 2xl:max-w-4xl px-4 max-h-[calc(100vh-6rem)] overflow-visible"
              style={{
                transform: `translateY(${Math.min(scrollY * 0.6, 220)}px) translateX(2rem)`,
                opacity: Math.max(1 - scrollY / 700, 0.45),
                transition: 'transform 160ms linear, opacity 160ms linear',
              }}
            >
              <Image
                src="/images/students.png"
                alt="Happy students with backpacks"
                width={1300}
                height={850}
                className="w-full object-contain max-h-[calc(100vh-7rem)]"
                style={{ objectPosition: 'bottom' }}
                priority
              />
            </div>
          </div>

          {/* Mobile Image - Static, below text */}
          <div className="lg:hidden relative w-full  px-4 sm:px-6">
            <div className="max-w-md mx-auto">
              <Image
                src="/images/students.png"
                alt="Happy students with backpacks"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}