import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatedCard, AnimatedElement, AnimatedNumber } from '@/components/ui/animated-elements'
import { Button } from '@/components/ui/button'
import { CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'
import { BusinessDistributionChart } from '@/components/charts/business-distribution-chart'
import { FinancialGrowthChart } from '@/components/charts/financial-growth-chart'

export default function AboutUsPage() {
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
                集团介绍
              </h1>
              <p className="mb-8 max-w-lg text-lg text-white/90 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] transition-all duration-300">
                美域集团是一家具有前瞻性的投资管理公司，专注于中美投资与移民服务，为客户提供全方位的投资管理解决方案。
              </p>
              <Button
                className="px-8 py-6 text-base border-2 border-white 
                    bg-transparent text-white 
                    hover:bg-white/10 hover:backdrop-blur-sm hover:text-white
                    transition-all duration-300 
                    shadow-lg"
                variant="outline"
              >
                了解更多
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Vision & Strategy Section */}
      <section id="vision-and-strategy" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">愿景与战略</h2>
          <p className="text-lg text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            在全球经济的多变背景下，美域集团从传统项目管理成功转型为前瞻性投资管理公司，致力于为全球华人提供优质的美国投资与移民服务。
          </p>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Strategy 1 and Image */}
            <div className="flex flex-col md:col-span-5 gap-8">
              <div className="grid md:grid-cols-1 gap-8">
                {/* Strategy 1 */}
                <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
                  <CardHeader className="h-auto">
                    <CardTitle className="text-2xl text-[#008080] flex items-center gap-3">
                      全球化资源整合
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      开办了下属的教育、投资、物流、餐饮、房产等相互扶持的不同企业，并互相扶持与发展。我们近年来开始专注于中国资金走进美投资的方向。我们的核心竞争力源自于我们独特的转型策略。通过移民资金融资模式，我们不仅获得资金支持，更引入全球人才和创新思维，实现多方共赢。
                    </p>
                    <div className="mt-4">
                      <h4 className="text-lg font-medium mb-2">业务分布概况</h4>
                      <BusinessDistributionChart
                        data={[
                          { name: '物流', value: 40 },
                          { name: '餐饮', value: 25 },
                          { name: '教育', value: 20 },
                          { name: '房地产', value: 15 },
                        ]}
                      />
                    </div>
                  </CardContent>
                </AnimatedCard>
              </div>

              {/* Strategy 2 Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Investment Strategy Card */}
                <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#008080] flex items-center gap-3">
                      多元化投资布局
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      通过 EB-5、EB-1C、EB-2、EB-3
                      等多种移民渠道，结合安全合规的资金出境方案，投资优质商业项目。
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 mt-1 text-[#008080] flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        <span className="text-muted-foreground">稳定的投资回报与充沛的现金流</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 mt-1 text-[#008080] flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        <span className="text-muted-foreground">
                          符合政府投资移民政策，极高的政府通过率
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </AnimatedCard>

                {/* Financial Growth Card */}
                <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#008080] flex items-center gap-3">
                      财务增长趋势
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      近五年业务稳健增长，营收和利润持续提升。
                    </p>
                    <FinancialGrowthChart
                      data={[
                        { year: '2019', revenue: 100, profit: 30 },
                        { year: '2020', revenue: 120, profit: 38 },
                        { year: '2021', revenue: 150, profit: 45 },
                        { year: '2022', revenue: 220, profit: 75 },
                        { year: '2023', revenue: 320, profit: 120 },
                      ]}
                    />
                  </CardContent>
                </AnimatedCard>

                {/* Success Rate Card */}
                <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#008080] flex items-center gap-3">
                      成功经验
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-[#008080] mb-2">
                          <AnimatedNumber value={100} />%
                        </div>
                        <p className="text-sm text-gray-600">投资回本率</p>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-[#008080] mb-2">
                          <AnimatedNumber value={100} />%
                        </div>
                        <p className="text-sm text-gray-600">绿卡通过率</p>
                      </div>
                    </div>
                  </CardContent>
                </AnimatedCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Advantages Section */}
      <section id="service-advantage" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">核心优势</h2>
          <p className="text-lg text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            依托专业团队和全球化布局，为客户提供全方位的投资移民解决方案
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Advantage 1: Professional Team */}
            <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
              <CardHeader>
                <CardTitle className="text-2xl text-[#008080] flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#008080]/10">
                    1
                  </span>
                  专业团队支持
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  具备国际化视野和专业知识的团队，确保投资与移民双重目标的实现。
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 mt-1 text-[#008080] flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span className="text-muted-foreground">
                      深入研究市场需求，制定精准投资策略
                    </span>
                  </li>
                </ul>
              </CardContent>
            </AnimatedCard>

            {/* Advantage 2: Global Network */}
            <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
              <CardHeader>
                <CardTitle className="text-2xl text-[#008080] flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#008080]/10">
                    2
                  </span>
                  全球化布局
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  在美国和中国设立12家办公室，为客户提供全方位的业务支持。
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 mt-1 text-[#008080] flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span className="text-muted-foreground">跨国业务网络，提供本地化服务</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 mt-1 text-[#008080] flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span className="text-muted-foreground">深耕中美两大市场，把握投资机遇</span>
                  </li>
                </ul>
              </CardContent>
            </AnimatedCard>

            {/* Advantage 3: One-Stop Service */}
            <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
              <CardHeader>
                <CardTitle className="text-2xl text-[#008080] flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#008080]/10">
                    3
                  </span>
                  一站式服务
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  从投资规划到落地运营，提供全程无缝对接服务。
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 mt-1 text-[#008080] flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span className="text-muted-foreground">
                      业务资源无缝对接，助力企业在美发展
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 mt-1 text-[#008080] flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span className="text-muted-foreground">专业团队全程陪伴，降低投资风险</span>
                  </li>
                </ul>
              </CardContent>
            </AnimatedCard>

            {/* Advantage 4: Track Record */}
            <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
              <CardHeader>
                <CardTitle className="text-2xl text-[#008080] flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#008080]/10">
                    4
                  </span>
                  卓越业绩
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  稳健的投资策略和优质的服务，为客户创造长期价值。
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 mt-1 text-[#008080] flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span className="text-muted-foreground">投资移民案件100%成功率</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 mt-1 text-[#008080] flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span className="text-muted-foreground">
                      多个成功项目案例，持续创造投资回报
                    </span>
                  </li>
                </ul>
              </CardContent>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Global Network Section */}
      <section id="global-network" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">全球办公室</h2>
          <h3 className="text-2xl text-center mb-4">中美两岸一站式的全链路服务</h3>
          <p className="text-lg text-center mb-16">
            北京/常州/成都/武汉 - 洛杉矶/旧金山/迈阿密/波士顿/纽约
          </p>
          {/* World Map */}
          <div className="relative w-full aspect-[1.6/1] mb-16">
            <AnimatedElement
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src="/MeiyuGlobalNetwork.png"
                alt="Meiyu Global Network"
                fill
                className="object-cover transition-all duration-700 hover:scale-110"
              />
            </AnimatedElement>
          </div>
          {/* Office Locations Carousel */}
          <Link href="/about-us/contact">
            <Carousel
              opts={{
                align: 'start',
                loop: true,
                autoplay: true,
                delay: 3000,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {[
                  {
                    src: '/office-beijing.jpg',
                    alt: 'Office Beijing',
                    title: '中国-北京办公室',
                  },
                  {
                    src: '/office-irvine.jpg',
                    alt: 'Office Invine',
                    title: '美国-洛杉矶办公室',
                  },
                  {
                    src: '/office-sf.jpg',
                    alt: 'Office San Francisco',
                    title: '美国-旧金山办公室',
                  },
                  {
                    src: '/office-miami.jpg',
                    alt: 'Office Miami',
                    title: '美国-迈阿密办公室',
                  },
                  {
                    src: '/office-boston.jpg',
                    alt: 'Office Boston',
                    title: '美国-波士顿办公室',
                  },
                  {
                    src: '/office-chengdu.jpg',
                    alt: 'Office Chengdu',
                    title: '中国-成都办公室',
                  },
                  {
                    src: '/office-changzhou.jpg',
                    alt: 'Office Changzhou',
                    title: '中国-常州办公室',
                  },
                ].map((office, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/3">
                    <div className="relative aspect-video rounded-lg overflow-hidden group">
                      <Image
                        src={office.src}
                        alt={office.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-[#008080] py-2 px-4">
                        <p className="text-center text-white">{office.title}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </Link>
        </div>
      </section>
    </>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: '集团介绍 | 关于我们',
    description:
      '美域集团是一家具有前瞻性的投资管理公司，专注于中美投资与移民服务，为客户提供全方位的投资管理解决方案。',
  }
}
