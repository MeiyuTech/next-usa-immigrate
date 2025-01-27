import type { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'

import { AnimatedCard } from '@/components/ui/animated-elements'
import { InvestmentProjectsSection } from '@/components/sections/InvestmentProjectsSection'
import { GlobalNetworkSection } from '@/components/sections/GlobalNetworkSection'

export default function HomePage() {
  return (
    <>
      <main className="relative min-h-screen -mt-16">
        {/* Hero Section */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/golden-gate-bridge-view.jpg"
            alt="Golden Gate Bridge View"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-h-screen items-center pt-16">
          <div className="container mx-auto px-4">
            <div className="ml-auto max-w-2xl pr-8 md:pr-0">
              <h1
                className="mb-6 text-5xl font-medium text-white md:text-7xl 
                drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] transition-all duration-300
                text-right"
              >
                开启您的美国梦之旅
              </h1>
              <p
                className="mb-8 max-w-lg text-lg text-white 
                drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] transition-all duration-300
                text-left ml-auto"
              >
                🌟 量身定制移民路径，助您实现家庭与事业双赢 <br />
                🏙️ 覆盖投资、商业、教育多领域，满足不同阶段需求 <br />
                🌐 中美多地团队协作，提供一站式全链路服务
              </p>
              <div className="flex justify-end">
                <Button
                  className="px-8 py-6 text-base border-2 border-white 
                    bg-transparent text-white 
                    hover:bg-white/10 hover:backdrop-blur-sm hover:text-white
                    transition-all duration-300 
                    shadow-lg"
                  variant="outline"
                >
                  <Link href="/contact">免费评估</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Immigration Pathways Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">多元化移民方案</h2>
          <p className="text-lg text-center mb-16 max-w-3xl mx-auto">
            我们深知每位客户的背景与需求各不相同，因此，美域佳华提供多元化、个性化的移民方案，
            确保您的移民之旅顺畅无忧，实现事业发展与家庭幸福双丰收。
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* L1/EB-1C Card */}
            <Link href="/posts/l-1-eb-1c-introduction">
              <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-lg">
                  <Image
                    src="/eb-1c-l-1.jpg"
                    alt="L1/EB-1C 高管移民"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-[#008080]">L1/EB-1C 高管移民</CardTitle>
                  <CardDescription>适合人群：跨国企业高管或创业者</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">亮点：</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>无排期、无抽签，一步到位绿卡</li>
                    <li>适用于有三年以上经营历史的企业</li>
                    <li>配偶合法工作，子女享公立教育</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <p className="text-[#008080] font-medium">快速通道，开启全球事业版图</p>
                </CardFooter>
              </AnimatedCard>
            </Link>

            {/* EB-5 Card */}
            <Link href="/services/eb-5-investment">
              <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-lg">
                  <Image
                    src="/eb-5-investment.jpg"
                    alt="EB-5 投资移民"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-[#008080]">EB-5 投资移民</CardTitle>
                  <CardDescription>
                    适合人群：具备合法资金，寻求稳定投资机会的投资者
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">亮点：</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>低风险投资，稳健回报</li>
                    <li>无需学历、语言要求</li>
                    <li>带领全家一步到位获得美国身份</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <p className="text-[#008080] font-medium">投资未来，搭建家庭稳固桥梁</p>
                </CardFooter>
              </AnimatedCard>
            </Link>

            {/* EB-2/3 Card */}
            <Link href="/posts/eb-23-introduction">
              <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-lg">
                  <Image
                    src="/eb-2-3-employer-sponsorship.jpg"
                    alt="EB-2/3 雇主担保移民"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-[#008080]">EB-2/3 雇主担保移民</CardTitle>
                  <CardDescription>适合人群：本科及以上学历人才</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">亮点：</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>H1B抽签可跳过排期，快速获批</li>
                    <li>适合各类技术、管理和专业人才</li>
                    <li>低成本，高性价比移民途径</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <p className="text-[#008080] font-medium">以才华立足美国，事业家庭两不误</p>
                </CardFooter>
              </AnimatedCard>
            </Link>
          </div>
        </div>
      </section>

      {/* id="investment-projects" */}
      <InvestmentProjectsSection />

      <GlobalNetworkSection />
    </>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: '首页 | 美域佳华',
  }
}
