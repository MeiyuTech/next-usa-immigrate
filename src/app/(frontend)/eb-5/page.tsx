import type { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function EB5Page() {
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
                EB-5 投资移民
              </h1>
              <p className="mb-8 max-w-lg text-lg text-white/90 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] transition-all duration-300">
                投资未来，开启美国绿卡之旅。
              </p>
              <Button
                className="px-8 py-6 text-base border-2 border-white 
                    bg-transparent text-white 
                    hover:bg-white/10 hover:backdrop-blur-sm hover:text-white
                    transition-all duration-300 
                    shadow-lg"
                variant="outline"
              >
                免费评估
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* EB-5 Introduction Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          {/* EB-5 Introduction */}
          <div className="max-w-6xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">EB-5 项目简介</h2>
            <p className="text-lg text-center mb-16 max-w-3xl mx-auto">
              EB-5
              是美国政府推出的投资移民项目，旨在通过外资促进美国经济增长并创造就业机会。投资者在满足规定的投资金额和创造就业条件后，可申请获得美国永久居留权（绿卡）。
            </p>
          </div>

          {/* AmCan Advantages */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">美域佳华的优势</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Advantage 1 */}
              <Card className="transition-all duration-300 hover:scale-[1.02] hover:border-[#d4b675]/30 border border-transparent">
                <CardHeader className="text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <CardTitle className="text-xl mb-2">双轨并行</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    美域佳华提供 EB-5 <span className="text-[#d4b675]">独立投资项目</span> 和
                    <span className="text-[#d4b675]">区域中心投资项目</span>{' '}
                    的双重选择，满足不同投资人的需求。
                  </p>
                </CardContent>
              </Card>

              {/* Advantage 2 */}
              <Card className="transition-all duration-300 hover:scale-[1.02] hover:border-[#d4b675]/30 border border-transparent">
                <CardHeader className="text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <CardTitle className="text-xl mb-2">跨项策略</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    美域佳华独有的 <span className="text-[#d4b675]">EB-5</span> 与
                    <span className="text-[#d4b675]">L1/EB-1C</span> 跨国高管移民结合策略，100
                    万美元投资可为 2-3 位投资者同步办理绿卡，一举多得。
                  </p>
                </CardContent>
              </Card>

              {/* Advantage 3 */}
              <Card className="transition-all duration-300 hover:scale-[1.02] hover:border-[#d4b675]/30 border border-transparent">
                <CardHeader className="text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <CardTitle className="text-xl mb-2">中美联动</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    美域佳华在北美和中国大陆均设有办公室，可以为EB-5投资人提供{' '}
                    <span className="text-[#d4b675]">中美两岸全链路服务</span>
                    ，包括项目选择、投资、移民、税务规划、子女教育、生活规划等。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Add Project Showcase Section */}
      <section className="relative min-h-screen">
        {/* Video Background */}
        {/* TODO: find a high quality video */}
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="object-cover w-full h-full">
            <source src="/videos/fedex-intro.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">北美最具影响力的 EB-5 项目公司</h2>
            <h3 className="text-2xl md:text-3xl mb-8">Fedex 项目 | 第一顺位 | 无排期</h3>
            <p className="text-lg md:text-xl mb-6">无排期南加州联邦项目全球首发</p>
            <p className="text-lg md:text-xl mb-12">526E 获批担保/项目完工担保</p>
            <Button
              className="px-8 py-6 text-base border-2 border-white 
                bg-transparent text-white 
                hover:bg-white/10 hover:backdrop-blur-sm hover:text-white
                transition-all duration-300 
                shadow-lg"
              variant="outline"
            >
              查看我们的EB-5项目
            </Button>
          </div>
        </div>
      </section>

      {/* Company Introduction Section */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          {/* First Row */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                中国已取代墨西哥成为美国移民的第一来源国
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                其中，美国EB-5项目是中国投资人普遍参与的移民计划。EB-5项目既可以投资移民局批准的区域中心项目，也可以自主选择项目进行独立投资。由于独立投资项目与大家普遍熟知的区域中心项目相比有很多优势，特别是其无需排期，因此美域佳华推荐有意移民的中国投资者联系独立项目投资。
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                <Image
                  src="/China-top-source-US-immigrants.png"
                  alt="China-top-source-US-immigrants"
                  fill
                  sizes="(max-width: 78px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-foreground">美域佳华的重要优势</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                我们可以将EB-5独立项目投资移民和EB-1C跨国高管移民结合起来，一石二鸟或数鸟，一笔100万美元的独立投资项目同时可以办理两三家绿卡。其中1个投资人通过EB-5的方式得到绿卡，其他1个或2个投资人则可通过L1/EB-1C跨国高管移民走快车道。值得一提的是：与通过EB-5投资移民相比，通过L1/EB-1C跨国高管移民获得绿卡的步骤少，等待时间起码少4年，无需通过2年临时绿卡过渡，一步到位拿到永久绿卡。
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                <Image
                  src="/Individual-vs-RegionalCenter.png"
                  alt="Individual-vs-RegionalCenter"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Network Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">选择美域佳华</h2>
          <h3 className="text-2xl text-center mb-4">实现中美联动的全链路覆盖服务</h3>
          <p className="text-lg text-center mb-16">北京/成都/常州 - 旧金山/洛杉矶/波士顿/迈阿密</p>
          {/* World Map */}
          <div className="relative w-full aspect-[2/1] mb-16">
            <Image
              src="/AmCan-global-network.jpeg"
              alt="Meiyu Global Network"
              fill
              className="object-contain"
            />
          </div>
          {/* Office Locations Carousel */}
          <Carousel
            opts={{
              align: 'start',
              loop: true,
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
                    <div className="absolute bottom-0 left-0 right-0 bg-[#d4b675] py-2 px-4">
                      <p className="text-center text-white">{office.title}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>
    </>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: '投资移民 (EB-5) | 美域佳华',
  }
}
