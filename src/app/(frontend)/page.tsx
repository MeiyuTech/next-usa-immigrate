import type { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
// import { AnimatedTitle } from '@/components/AnimatedTitle'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'

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
                  免费评估
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Animated Title Section */}
      {/* <AnimatedTitle />
      <div className="hidden md:block">
        <br />
        <br />
        <br />
        <br />
        <br />
      </div> */}

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

      {/* Immigration Pathways Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">多元化移民方案</h2>
          <p className="text-lg text-center mb-16 max-w-3xl mx-auto">
            我们深知每位客户的背景与需求各不相同，因此，美域佳华提供多元化、个性化的移民方案，
            <br />
            确保您的移民之旅顺畅无忧，实现事业发展与家庭幸福双丰收。
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* L1/EB-1C Card */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-[#d4b675]">L1/EB-1C 高管移民</CardTitle>
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
                <p className="text-[#d4b675] font-medium">快速通道，开启全球事业版图</p>
              </CardFooter>
            </Card>

            {/* EB-5 Card */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-[#d4b675]">EB-5 投资移民</CardTitle>
                <CardDescription>适合人群：具备合法资金，寻求稳定投资机会的投资者</CardDescription>
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
                <p className="text-[#d4b675] font-medium">投资未来，搭建家庭稳固桥梁</p>
              </CardFooter>
            </Card>

            {/* EB-2/3 Card */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-[#d4b675]">EB-2/3 雇主担保移民</CardTitle>
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
                <p className="text-[#d4b675] font-medium">以才华立足美国，事业家庭两不误</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Network Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">中美多地团队协作</h2>
          <h3 className="text-2xl text-center mb-4">一站式的全链路服务</h3>
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
    title: '首页 | 美域佳华',
  }
}
