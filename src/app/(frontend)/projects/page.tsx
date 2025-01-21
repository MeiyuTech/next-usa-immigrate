import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { InvestmentProjectsSection } from '@/components/sections/InvestmentProjectsSection'

export default function ProjectsPage() {
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
              <h1 className="mb-6 text-5xl font-medium text-white md:text-7xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] transition-all duration-300">
                项目展示
              </h1>
              <p className="mb-8 max-w-lg text-lg text-white/90 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] transition-all duration-300">
                美域佳华不仅专注于移民服务，更致力于为客户提供涵盖投资、商业运营和教育等多维度的项目支持。
                无论您处于事业初创期、扩展期，或是希望为家人提供更优质的教育与生活条件，我们都能为您匹配合适的项目，
                助力您和家人的长远发展。
              </p>
              <Button
                className="px-8 py-6 text-base border-2 border-white 
                    bg-transparent text-white 
                    hover:bg-white/10 hover:backdrop-blur-sm hover:text-white
                    transition-all duration-300 
                    shadow-lg"
                variant="outline"
                asChild
              >
                <Link href="#investment-projects">选择项目</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Project Showcase Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="object-cover w-full h-full">
            <source src="/videos/fedex20240106.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-5xl md:text-7xl font-bold mb-4">
                Fedex Ground 联邦快递 <br /> 独立投资项目
              </h2>
              <h2 className="text-2xl md:text-4xl font-medium mb-8 text-white/80">
                南加州最具影响力的 EB-5 项目公司
              </h2>
              <h3 className="text-2xl md:text-3xl mb-8">Fedex 项目 | 第一顺位 | 无排期</h3>
              <p className="text-lg md:text-xl mb-6">无排期南加州联邦快递承包项目全球首发</p>
              <p className="text-lg md:text-xl mb-12">I-526 获批担保 / 低风险投资，稳健回报</p>
              <Button
                className="px-8 py-6 text-base border-2 border-white 
                  bg-transparent text-white 
                  hover:bg-white/10 hover:backdrop-blur-sm hover:text-white
                  transition-all duration-300 
                  shadow-lg"
                variant="outline"
                asChild
              >
                <Link href="/projects/fedex#project-overview">项目介绍</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* id="investment-projects" */}
      <InvestmentProjectsSection />
    </>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: '项目展示',
  }
}
