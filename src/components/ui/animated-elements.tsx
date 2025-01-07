'use client'

import { useInView } from 'react-intersection-observer'
import { Card } from '@/components/ui/card'
import { useEffect, useState } from 'react'

// Animated number component
export function AnimatedNumber({ value }: { value: number }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (inView) {
      // 动画持续时间
      const duration = 2000
      // 更新间隔
      const interval = 16
      // 步进次数
      const steps = duration / interval
      // 每次增加的值
      const increment = value / steps

      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, interval)

      return () => clearInterval(timer)
    } else {
      setCount(0)
    }
  }, [inView, value])

  return (
    <span ref={ref} className={`inline-block ${inView ? 'opacity-100' : 'opacity-0'}`}>
      {new Intl.NumberFormat('en-US').format(count)}
    </span>
  )
}

// Animated card component
export function AnimatedCard({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <Card
      ref={ref}
      className={`transition-all duration-1000 delay-100 ease-out ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } ${className}`}
    >
      {children}
    </Card>
  )
}

// Add new AnimatedProgress component
export function AnimatedProgress({ value }: { value: number }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (inView) {
      setWidth(value)
    } else {
      setWidth(0)
    }
  }, [inView, value])

  return (
    <div ref={ref} className="h-2 bg-[#008080]/10 rounded-full overflow-hidden">
      <div
        className="h-full bg-[#008080] rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  )
}
