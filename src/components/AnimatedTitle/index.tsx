'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTheme } from '@/providers/Theme'

export function AnimatedTitle() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll({
    offset: ['start start', '80vh start'],
  })

  // Animation transforms
  const scale = useTransform(scrollYProgress, [0, 1], [12, 1])
  // 从中心开始 (0)，最终位置在顶部偏下 (20vh)
  const y = useTransform(scrollYProgress, [0, 1], ['-100vh', '-40vh'])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="absolute inset-x-0 h-[80vh] pointer-events-none z-50">
      <motion.div
        className="flex h-screen items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="text-center w-screen px-4 origin-center"
          style={{
            scale,
            y,
            opacity,
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
      </motion.div>
    </div>
  )
}
