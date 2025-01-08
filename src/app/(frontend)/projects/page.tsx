import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AnimatedCard } from '@/components/ui/animated-elements'

import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'

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

      {/* Add Project Showcase Section */}
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
                Fedex Ground 联邦快递 <br /> 独立承包商项目
              </h2>
              <h2 className="text-2xl md:text-4xl font-medium mb-8 text-white/80">
                南加州最具影响力的 EB-5 项目公司
              </h2>
              <h3 className="text-2xl md:text-3xl mb-8">Fedex 项目 | 第一顺位 | 无排期</h3>
              <p className="text-lg md:text-xl mb-6">无排期南加州联邦快递承包项目全球首发</p>
              <p className="text-lg md:text-xl mb-12">526E 获批担保 / 低风险投资，稳健回报</p>
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
              </div>
            </div>
          </div>

          {/* Real Estate Projects */}
          <div className="mb-24">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Student Housing Card */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-8 text-center">学生公寓</h3>
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
              </div>

              {/* Early Education Card */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-8 text-center">学前教育</h3>
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
                    <p className="text-[#008080] font-medium">深耕优质教育市场，抢占高端幼教蓝海</p>
                  </CardContent>
                </AnimatedCard>
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
    </>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: '项目展示',
  }
}
