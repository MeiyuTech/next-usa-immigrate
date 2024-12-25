'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function AnimatedTitle() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // 调整缩放范围从20倍到1倍
  const scale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const y = useTransform(scrollYProgress, [0, 1], ['50%', '0%'])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const blur = useTransform(scrollYProgress, [0, 1], [0, 4])

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
          <span className="block text-6xl font-bold text-white md:text-8xl">美域佳华</span>
        </motion.div>
      </div>
    </div>
  )
}
