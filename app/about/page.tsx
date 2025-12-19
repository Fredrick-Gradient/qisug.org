"use client"

import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BlueSiteHeader } from "@/components/blue-header"

export default function AboutPage() {
  const contentRef = useRef(null)
  const isInView = useInView(contentRef, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen flex flex-col">
      <BlueSiteHeader />

      <main className="flex-1 bg-[#ffd500] pt-24 lg:pt-32">
        <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16" ref={contentRef}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image with animation */}
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, scale: 0.95, x: -30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.22, 1, 0.36, 1],
                delay: 0.3
              }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-lg shadow-2xl"
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.35)",
                }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/queen-27s-20gate-20web-20nw-02.jpeg"
                  alt="Teacher with students in classroom"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Right Side - Content with staggered animations */}
            <div className="order-1 lg:order-2">
              <motion.h1 
                className="font-serif text-4xl md:text-5xl font-bold text-[#3d4fd4] mb-8 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.2
                }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit
              </motion.h1>

              <div className="space-y-6 text-black">
                <motion.p 
                  className="text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.4
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                  laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                  in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
                  at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue
                  duis dolore te feugait nulla facilisi.
                </motion.p>

                <motion.p 
                  className="text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.6
                  }}
                >
                  Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                  laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </motion.p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional animated sections can be added below */}
        <motion.div
          className="max-w-7xl mx-auto px-4 py-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Future content sections with scroll-triggered animations */}
        </motion.div>
      </main>

      <SiteFooter />
    </div>
  )
}