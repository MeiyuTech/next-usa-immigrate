import type { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { AnimatedTitle } from '@/components/AnimatedTitle'

export default function HomePage() {
  return (
    <>
      <main className="relative min-h-screen -mt-16">
        {/* Hero Section */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/golden-gate-bridge.jpg"
            alt="Golden Gate Bridge"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-h-screen items-center pt-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="mb-6 text-5xl font-medium text-white md:text-7xl">
                Lorem ipsum dolor sit
              </h1>
              <p className="mb-8 max-w-lg text-lg text-white/90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <Button
                className="px-8 py-6 text-base border-2 border-white bg-transparent text-white hover:bg-white hover:text-black transition-colors"
                variant="outline"
              >
                免费评估
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* 添加动画标题部分 */}
      <AnimatedTitle />

      {/* 这里可以添加更多的内容部分 */}
    </>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: '首页 | 美域佳华',
  }
}
