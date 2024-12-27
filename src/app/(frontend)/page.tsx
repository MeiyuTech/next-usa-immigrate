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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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

      {/* Animated Title Section */}
      <AnimatedTitle />
      <div className="hidden md:block">
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>

      {/* Company Introduction Section */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          {/* First Row */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-foreground">专业的移民顾问服务</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                <Image
                  src="/office-changzhou.jpg"
                  alt="Office in Changzhou"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-foreground">全方位的定制申请方案</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                <Image
                  src="/office-irvine.jpg"
                  alt="Office in Irvine"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: '首页 | 美域佳华',
  }
}
