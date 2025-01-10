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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { AnimatedCard, AnimatedElement } from '@/components/ui/animated-elements'

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
            <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-lg">
                <Image src="/eb-1c-l-1.jpg" alt="L1/EB-1C 高管移民" fill className="object-cover" />
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

            {/* EB-5 Card */}
            <Link href="/services/eb-5">
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
          </div>
        </div>
      </section>

      {/* Investment Projects Section */}
      <section id="investment-projects" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">多领域投资项目</h2>
          <p className="text-lg text-center mb-16 max-w-3xl mx-auto">
            美域佳华不仅专注于移民服务，更致力于为客户提供涵盖投资、商业运营和教育等多维度的项目支持。
            无论您处于事业初创期、扩展期，或是希望为家人提供更优质的教育与生活条件，我们都能为您匹配合适的项目，
            助力您和家人的长远发展。
          </p>

          {/* Business Investment Projects */}
          <div className="mb-24">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Local Logistics Card */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-8 text-center">本地物流</h3>
                <Link href="/projects/fedex#project-overview">
                  <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
                    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-lg">
                      <Image src="/fedex.png" alt="fedex" fill className="object-cover" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-[#008080] flex items-center gap-2">
                        <span>🚚</span>
                        <span>联邦快递独立投资项目</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold mb-2">项目亮点：</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                        <li>加入全球物流巨头网络，业务覆盖全球220多个国家和地区</li>
                        <li>参与FedEx独立承运商模式，投资回报稳定</li>
                        <li>灵活的商业模式，适合追求长期收益的投资者</li>
                      </ul>
                      <p className="text-[#008080] font-medium">
                        与全球物流巨头并肩，构建可持续收益体系
                      </p>
                    </CardContent>
                  </AnimatedCard>
                </Link>
              </div>

              {/* Health Food Card */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-8 text-center">健康餐饮</h3>
                <Link href="/projects/vegetarian-restaurant">
                  <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
                    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-lg">
                      <Image
                        src="/taste-of-beauty.jpg"
                        alt="taste-of-beauty"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-[#008080] flex items-center gap-2">
                        <span>🥗</span>
                        <span>高级素食餐厅投资项目</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold mb-2">项目亮点：</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                        <li>依托团队20年餐饮经验，打造高端素食品牌</li>
                        <li>总店位于加州橙县，分店位于洛杉矶好莱坞，市场潜力巨大</li>
                        <li>符合当下健康饮食趋势，稳健回报与品牌溢价并存</li>
                      </ul>
                      <p className="text-[#008080] font-medium">创新餐饮投资，把握健康潮流新机遇</p>
                    </CardContent>
                  </AnimatedCard>
                </Link>
              </div>
            </div>
          </div>

          {/* Real Estate Projects */}
          <div className="mb-24">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Student Housing Card */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-8 text-center">学生公寓</h3>
                <Link href="/projects/ucr-student-housing">
                  <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
                    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-lg">
                      <Image
                        src="/uc-student-housing-hero-section.jpg"
                        alt="uc-student-housing"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-[#008080] flex items-center gap-2">
                        <span>🏠</span>
                        <span>加州大学河滨分校公寓项目</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold mb-2">项目亮点：</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                        <li>位于60号和91号高速交汇处，地理位置优越，紧邻安大略机场</li>
                        <li>项目获得河滨县政府推荐信，配套设施成熟，适合学生和家庭居住</li>
                        <li>随着洛杉矶发展东移，该区域成为潜力股，未来增值空间大</li>
                      </ul>
                      <p className="text-[#008080] font-medium">
                        投资教育与未来，坐享优质房产升值空间
                      </p>
                    </CardContent>
                  </AnimatedCard>
                </Link>
              </div>

              {/* Early Education Card */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-8 text-center">学前教育</h3>
                <Link href="/projects/kindergarten">
                  <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
                    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-lg">
                      <Image
                        src="/orange-county-kindergarten.png"
                        alt="orange-county-kindergarten"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-[#008080] flex items-center gap-2">
                        <span>🎨</span>
                        <span>橙县艺术幼儿园投资项目</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold mb-2">项目亮点：</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                        <li>位于洛杉矶橙县核心地段，毗邻全美顶尖教育资源</li>
                        <li>创造19个就业机会，符合EB-5投资移民要求</li>
                        <li>前期投入120万美元，年利润估算高达324万美元</li>
                      </ul>
                      <p className="text-[#008080] font-medium">
                        深耕优质教育市场，抢占高端幼教蓝海
                      </p>
                    </CardContent>
                  </AnimatedCard>
                </Link>
              </div>
            </div>
          </div>

          {/* Property Development and Medical Services */}
          <div className="mb-24">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Property Development Card */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-8 text-center">物业开发</h3>
                <Link href="/projects/fox-property">
                  <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
                    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-lg">
                      <Image
                        src="/san-bernardino.webp"
                        alt="Fox Property Development"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-[#008080] flex items-center gap-2">
                        <span>🏢</span>
                        <span>福克斯物业开发项目</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold mb-2">项目亮点：</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                        <li>位于南加州圣贝纳迪诺市核心地段，距离洛杉矶市中心仅一小时车程</li>
                        <li>TEA地区投资额低至80万美元，对比非TEA区域节省25万美元</li>
                        <li>市场估值1500万-2000万美元，项目潜力巨大，投资前景广阔</li>
                      </ul>
                      <p className="text-[#008080] font-medium">
                        核心商圈物业投资，TEA区域优势显著
                      </p>
                    </CardContent>
                  </AnimatedCard>
                </Link>
              </div>

              {/* Medical Services Card */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-8 text-center">医疗服务</h3>
                <Link href="/projects/american-ivf">
                  <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
                    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-lg">
                      <Image
                        src="/ivf-treatment.webp"
                        alt="IVF Treatment"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-[#008080] flex items-center gap-2">
                        <span>👶</span>
                        <span>高效赴美试管婴儿</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold mb-2">项目亮点：</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                        <li>与美国顶尖试管医生和诊所合作，确保专业医疗支持</li>
                        <li>一站式服务，从签证办理到医疗咨询全程陪同</li>
                        <li>提供个性化治疗方案，满足不同患者需求</li>
                      </ul>
                      <p className="text-[#008080] font-medium">专业医疗团队护航，助您圆梦好孕</p>
                    </CardContent>
                  </AnimatedCard>
                </Link>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-muted/50 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">为什么选择这些项目？</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <p className="text-4xl mb-4">🌟</p>
                <h4 className="font-semibold mb-2">安全稳健</h4>
                <p className="text-muted-foreground">项目筛选严谨，风险可控，投资回报透明可期</p>
              </div>
              <div className="text-center">
                <p className="text-4xl mb-4">🤝</p>
                <h4 className="font-semibold mb-2">全程协助</h4>
                <p className="text-muted-foreground">
                  提供从项目选择、实地考察到后续运营的全方位服务
                </p>
              </div>
              <div className="text-center">
                <p className="text-4xl mb-4">🌐</p>
                <h4 className="font-semibold mb-2">多领域覆盖</h4>
                <p className="text-muted-foreground">满足事业投资、资产配置、教育保障等多种需求</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              className="px-8 py-6 text-base bg-[#008080] hover:bg-[#008080] text-white"
              size="lg"
            >
              <Link href="/projects">了解更多投资项目，开启成功之路</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Global Network Section */}
      <section id="global-network" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">多时区团队协作</h2>
          <h3 className="text-2xl text-center mb-4">为您中美两岸一站式的全链路服务</h3>
          <p className="text-lg text-center mb-16">北京/成都/常州 - 旧金山/洛杉矶/波士顿/迈阿密</p>
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
    title: '首页 | 美域佳华',
  }
}
