import { Metadata } from 'next'
import Image from 'next/image'
import { AnimatedElement } from '@/components/ui/animated-elements'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'

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
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-16">
          {/* Vision & Strategy Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">愿景与战略</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">移民资金战略</h3>
                <p className="text-gray-700 leading-relaxed">
                  美域集团选择移民资金作为融资渠道，是因为这提供了一个独特的双赢机会：既能引入外部资金和全球人才，又能帮助投资人及其家庭实现美国梦。我们在教育、物流、餐饮等领域已取得显著成就，这些成功经验将继续服务于新的投资者。
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">全球化视野</h3>
                <p className="text-gray-700 leading-relaxed">
                  我们的团队具备国际化视野和专业知识，深入研究不同地区的市场需求，制定精准的投资策略。确保每一笔投资都能带来可观收益，同时保证100%的绿卡获批率。
                </p>
              </div>
            </div>
          </section>

          {/* Core Business Section - Updated */}
          <section>
            <h2 className="text-2xl font-bold mb-6">业务优势</h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">专业服务</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    通过有效利用EB5、EB1C、EB2、EB3等多种移民渠道，结合安全合规的资金出境方案，我们成功投资了众多现金流充足、收益稳定的商业项目。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">成功案例</h3>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-green-600 font-semibold">投资移民案件成功率：100%</p>
                    <p className="text-gray-600 mt-2">为数百个家庭成功实现美国梦</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Future Outlook Section - Enhanced */}
          <section>
            <h2 className="text-2xl font-bold mb-6">展望未来</h2>
            <div className="bg-gradient-to-r from-blue-50 to-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                我们的目标是构建一个更强大、更多元、更具全球竞争力的企业，为每一位中国家庭成功移民美国扫清障碍。有了大家的支持和共同努力，美域集团必将在新的领域取得更大的成功。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                感谢选择美域集团作为您的美国事业生活伙伴，让我们一起开启新的篇章，共创繁荣未来。
              </p>
            </div>
          </section>

          {/* Global Network Section */}
          <section id="global-network" className="py-24">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-4">多时区团队协作</h2>
              <h3 className="text-2xl text-center mb-4">为您中美两岸一站式的全链路服务</h3>
              <p className="text-lg text-center mb-16">
                北京/成都/常州 - 旧金山/洛杉矶/波士顿/迈阿密
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
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: '集团介绍 | 美域集团',
    description:
      '美域集团是一家具有前瞻性的投资管理公司，专注于中美投资与移民服务，为客户提供全方位的投资管理解决方案。',
  }
}
