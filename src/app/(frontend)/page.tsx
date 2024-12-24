'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <main className="relative min-h-screen -mt-16">
      {/* Hero Section */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/golden-gate-bridge.jpg"
          alt="Golden Gate Bridge"
          fill
          className="object-cover brightness-75"
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
            <Button className="bg-white px-8 py-6 text-base hover:bg-white/90" variant="secondary">
              免费评估
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
