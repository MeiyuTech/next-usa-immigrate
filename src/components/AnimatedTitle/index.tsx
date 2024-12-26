'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTheme } from '@/providers/Theme'

export function AnimatedTitle() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // Adjust scale range from 20x to 1x
  const scale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const y = useTransform(scrollYProgress, [0, 1], ['50%', '0%'])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const blur = useTransform(scrollYProgress, [0, 1], [0, 4])

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div ref={containerRef} className="relative h-[200vh] w-full">
      <div className="sticky top-0 flex h-screen items-center justify-center">
        <motion.div
          className="text-center"
          style={{
            scale,
            y,
            opacity,
            filter: `blur(${blur}px)`,
          }}
        >
          <span
            className={`block text-6xl font-bold md:text-8xl ${
              mounted ? (theme === 'dark' ? 'text-white' : 'text-black') : 'text-black'
            }`}
          >
            美域佳华
          </span>
        </motion.div>
      </div>
    </div>
  )
}
