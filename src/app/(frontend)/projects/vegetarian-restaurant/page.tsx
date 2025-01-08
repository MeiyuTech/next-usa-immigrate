import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AnimatedCard, AnimatedNumber, AnimatedProgress } from '@/components/ui/animated-elements'
import { FinancialChart } from '@/components/charts/financial-chart'
import { CostStructureChart } from '@/components/charts/cost-structure-chart'
import { MarketGrowthChart } from '@/components/charts/market-growth-chart'

export default function VegetarianRestaurantPage() {
  return (
    <>
      <main className="relative min-h-screen -mt-16">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="object-cover w-full h-full">
            <source src="/videos/vegetarian-restaurant.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-h-screen items-end pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                高端素食
                <br />
                餐饮品牌
              </h1>
              <h3 className="text-2xl md:text-3xl mb-8">健康养生 ｜ 快速赴美 ｜ 绿卡福利</h3>
              <Button
                className="px-8 py-6 text-base border-2 border-white 
                  bg-transparent text-white 
                  hover:bg-white/10 hover:backdrop-blur-sm hover:text-white
                  transition-all duration-300 
                  shadow-lg"
                variant="outline"
              >
                <Link href="#project-overview">查看详情</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Project Overview Section */}
      <section id="project-overview" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">品牌简介</h2>

          <div className="flex flex-col items-center max-w-5xl mx-auto">
            {/* Image */}
            <div className="w-full mb-12">
              <div className="relative aspect-[16/7] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/vegetarian-restaurant.jpg"
                  alt="vegetarian restaurant"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Content */}
            <div className="max-w-3xl text-center">
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                Taste of Beauty
                是美域集团旗下的高端素食餐厅品牌，以独特的植物性（plant-based）美食理念，
                融合亚洲风味与艺术烹饪，带来视觉与味觉的双重享受。餐厅秉持健康、环保、动物福利三大核心理念，
                为食客提供更加均衡、适度且富有生命力的餐饮体验。
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <div className="w-12 h-12 rounded-full bg-[#008080]/10 flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-[#008080]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg">健康养生</h3>
                  <p className="text-sm text-muted-foreground">
                    精选优质食材，科学搭配营养，为身心健康助力
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="w-12 h-12 rounded-full bg-[#008080]/10 flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-[#008080]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg">环境友好</h3>
                  <p className="text-sm text-muted-foreground">
                    践行可持续发展理念，减少碳排放，保护地球环境
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="w-12 h-12 rounded-full bg-[#008080]/10 flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-[#008080]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg">动物福利</h3>
                  <p className="text-sm text-muted-foreground">
                    提倡素食文化，尊重生命，促进人与自然和谐共处
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Advantages Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">投资亮点与优势</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Advantage 1: Market Potential */}
            <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
              <CardHeader>
                <CardTitle className="text-2xl text-[#008080] flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#008080]/10">
                    1
                  </span>
                  市场前景广阔
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  素食市场快速增长，全球素食和植物蛋白市场持续扩大，美国素食人口持续增长。
                </p>
                <div className="mt-4 p-4 bg-[#008080]/5 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    项目盈利后，资金将用于直营店和旗舰店扩张，持续提升市场份额和投资回报率。
                  </p>
                </div>
              </CardContent>
            </AnimatedCard>

            {/* Advantage 2: Exit Strategy */}
            <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
              <CardHeader>
                <CardTitle className="text-2xl text-[#008080] flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#008080]/10">
                    2
                  </span>
                  稳定的退出机制
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  初期投资人资金安全退出，引入新投资人，溢价回购比例不低于 105%，确保资金回报稳健。
                </p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="p-4 bg-[#008080]/5 rounded-lg text-center">
                    <p className="text-2xl font-bold text-[#008080]">105%</p>
                    <p className="text-sm text-muted-foreground">最低溢价回购</p>
                  </div>
                  <div className="p-4 bg-[#008080]/5 rounded-lg text-center">
                    <p className="text-2xl font-bold text-[#008080]">3年</p>
                    <p className="text-sm text-muted-foreground">预计退出周期</p>
                  </div>
                </div>
              </CardContent>
            </AnimatedCard>

            {/* Advantage 3: Dual Benefits */}
            <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
              <CardHeader>
                <CardTitle className="text-2xl text-[#008080] flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#008080]/10">
                    3
                  </span>
                  双重收益
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  投资者不仅获得经营利润分红，还能通过项目办理绿卡，实现资金与身份的双赢。
                </p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="p-4 bg-[#008080]/5 rounded-lg">
                    <svg
                      className="w-6 h-6 text-[#008080] mx-auto mb-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-sm text-center text-muted-foreground">经营利润分红</p>
                  </div>
                  <div className="p-4 bg-[#008080]/5 rounded-lg">
                    <svg
                      className="w-6 h-6 text-[#008080] mx-auto mb-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                    <p className="text-sm text-center text-muted-foreground">绿卡身份</p>
                  </div>
                </div>
              </CardContent>
            </AnimatedCard>

            {/* Advantage 4: Fast Immigration */}
            <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
              <CardHeader>
                <CardTitle className="text-2xl text-[#008080] flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#008080]/10">
                    4
                  </span>
                  快速身份规划
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  通过项目，投资人可办理 L1 签证或 EB-5 移民，无需排期，最快 2 年获得绿卡。
                </p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="p-4 bg-[#008080]/5 rounded-lg text-center">
                    <p className="text-2xl font-bold text-[#008080]">L1</p>
                    <p className="text-sm text-muted-foreground">快速工作签证</p>
                  </div>
                  <div className="p-4 bg-[#008080]/5 rounded-lg text-center">
                    <p className="text-2xl font-bold text-[#008080]">EB-5</p>
                    <p className="text-sm text-muted-foreground">投资移民</p>
                  </div>
                </div>
              </CardContent>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">服务区域</h2>

          <div className="max-w-7xl mx-auto">
            {/* Current Location - Fountain Valley */}
            <div className="grid md:grid-cols-2 gap-12 mb-24">
              <div className="space-y-6">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/Fountain-Valley.jpeg"
                    alt="Fountain Valley"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                    priority
                  />
                </div>
              </div>

              <div className="flex items-center">
                <AnimatedCard className="transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <h3 className="text-3xl font-bold text-[#008080] flex items-center gap-3">
                        <span className="w-4 h-4 rounded-full bg-[#008080]"></span>
                        芳泉谷 （Fountain Valley）
                      </h3>
                      <p className="text-lg leading-relaxed text-muted-foreground">
                        最近十年来，尔湾的华人居住人口剧增，相应的华人超市、书局、各种面向华人子弟的才艺学校如中文、舞蹈、音乐、绘画等都在尔湾市安家，给华人创造了更好更优的居住环境。
                      </p>
                      <p className="text-lg leading-relaxed text-muted-foreground">
                        除此之外，尔湾也是众多知名公司、企业的总部所在地。选择在尔湾附近开设素食中餐馆，绝对是个不错的选择。
                      </p>
                      <div className="p-4 bg-[#008080]/5 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          随着素食在尔湾市的普及，以及加州外州新移民日趋增多，而当地中式素菜馆数量少之又少的情况下，一家中高档中式素食馆必将产生巨大的发展潜力。
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </AnimatedCard>
              </div>
            </div>

            {/* West Hollywood */}
            <div className="grid md:grid-cols-3 gap-12 mb-24">
              <div className="md:col-span-2">
                <AnimatedCard className="h-full transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <h3 className="text-3xl font-bold text-[#008080] flex items-center gap-3">
                        <span className="w-4 h-4 rounded-full bg-[#008080]"></span>
                        西好莱坞 （West Hollywood）
                      </h3>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <p className="text-lg leading-relaxed text-muted-foreground">
                            西好莱坞地区有着富裕和艺术氛围的社区，这意味着高端素食餐厅可以吸引到富有和有品味的客户，包括名人、艺术家、文化爱好者和游客。高端素食餐厅可以提供更多的创意和独特性，从而吸引那些追求不寻常的用餐体验的顾客。此外，这种餐厅可以建立高品质、高利润环保的品牌形象，吸引注重健康和可持续性的客户。高端素食餐厅还可以提供更高水平的客户体验，包括优质的服务、精致的用餐环境和特别的餐饮活动，如主题晚宴、美食品鉴活动等。
                          </p>
                          <div className="p-4 bg-[#008080]/5 rounded-lg">
                            <h4 className="font-semibold mb-2">目标客群</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li>• 名人艺术家</li>
                              <li>• 文化爱好者</li>
                              <li>• 高端游客</li>
                              <li>• 素食主义者</li>
                            </ul>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <p className="text-lg leading-relaxed text-muted-foreground">
                            此外，高端素食餐厅可以采用更高的定价策略，实现更高的盈利能力，因为顾客通常愿意为高品质的素食美食支付更高的价格。随着素食主义和纯素主义在全球范围内的兴起，高端素食餐厅也有望获得增长机会。最后，西好莱坞作为名人和社交媒体影响者聚集的地方，高端素食厅可以成为名人光顾的场所，从而增加知名度和社交影响力。虽然开设高端素食厅需要更多的资源和努力，但如果能够成功执行，它在西好莱坞这样的地区可能会有很大的商业潜力。
                          </p>
                          <div className="p-4 bg-[#008080]/5 rounded-lg">
                            <h4 className="font-semibold mb-2">特色服务</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li>• 主题晚宴</li>
                              <li>• 美食品鉴</li>
                              <li>• 私人定制</li>
                              <li>• 艺术展览</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </AnimatedCard>
              </div>
              <div className="relative">
                <div className="sticky top-24 space-y-6">
                  <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/west-hollywood.jpg"
                      alt="West Hollywood"
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-700"
                      priority
                    />
                  </div>
                  <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/taste-of-beauty.jpg"
                      alt="Taste of Beauty"
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-700"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Future Plans */}
            <AnimatedCard className="transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-8">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                  <h3 className="text-3xl font-bold text-[#008080]">未来扩展蓝图</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    计划在洛杉矶 Hollywood 或 Pasadena
                    等地区开设分店，进一步覆盖更多城市核心商圈，拓展高端市场。
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-[#008080]/5 rounded-xl">
                      <h4 className="text-xl font-semibold mb-4">旗舰店战略</h4>
                      <p className="text-muted-foreground">顶级定位，核心商圈，高消费群体</p>
                    </div>
                    <div className="p-6 bg-[#008080]/5 rounded-xl">
                      <h4 className="text-xl font-semibold mb-4">直营店布局</h4>
                      <p className="text-muted-foreground">
                        分布于各大城市核心区域，提升品牌影响力
                      </p>
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-[#008080]/10 to-transparent rounded-xl mt-8">
                    <p className="text-lg text-muted-foreground">
                      Taste of Beauty 以南加州为核心基地，逐步向美国其他素食文化盛行的地区扩展，
                      服务范围涵盖高端社区及重要城市商圈，抢占市场先机。
                    </p>
                  </div>
                </div>
              </CardContent>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Market Analysis Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">市场分析</h2>

          <div className="max-w-6xl mx-auto space-y-16">
            {/* Market Overview Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Population Base */}
              <AnimatedCard className="p-8">
                <div className="text-center space-y-8">
                  <div>
                    <div className="text-4xl font-bold text-[#008080] mb-2">3366.7万</div>
                    <div className="text-lg font-medium mb-4">美国素食人口基数</div>
                    <div className="text-sm text-muted-foreground">
                      持续增长，预计2024年突破3500万
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* 素食主义者 */}
                    <div className="relative">
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="text-sm text-muted-foreground">素食主义者</span>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-[#008080]">2020万</div>
                          <div className="text-sm text-[#008080]/80">
                            <span className="inline-flex items-center">
                              <svg
                                className="w-4 h-4 mr-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                />
                              </svg>
                              年增长12.4%
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="absolute -left-2 -right-2 top-1/2 -translate-y-1/2 h-12 bg-[#008080]/5 rounded-lg -z-10" />
                    </div>

                    {/* 纯素食者 */}
                    <div className="relative">
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="text-sm text-muted-foreground">纯素食者</span>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-[#008080]">1346万</div>
                          <div className="text-sm text-[#008080]/80">
                            <span className="inline-flex items-center">
                              <svg
                                className="w-4 h-4 mr-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                />
                              </svg>
                              年增长15.2%
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="absolute -left-2 -right-2 top-1/2 -translate-y-1/2 h-12 bg-[#008080]/5 rounded-lg -z-10" />
                    </div>
                  </div>
                </div>
              </AnimatedCard>

              {/* Growth Rate */}
              <AnimatedCard className="p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-[#008080] mb-2">
                    <AnimatedNumber value={17.5} />%
                  </div>
                  <div className="text-lg font-medium">年度增长率</div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-[#008080]/5 rounded-lg">
                    <p className="text-sm text-center text-muted-foreground">
                      2023年素食订单数量较前年显著增长
                    </p>
                  </div>
                  <div className="p-4 bg-[#008080]/5 rounded-lg">
                    <p className="text-sm text-center text-muted-foreground">
                      预计美国素食消费人群将突破2200万
                    </p>
                  </div>
                </div>
              </AnimatedCard>

              {/* Market Size */}
              <AnimatedCard className="p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-[#008080] mb-2">928亿</div>
                  <div className="text-lg font-medium">2030年市场规模</div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-[#008080]/5 rounded-lg text-center">
                    <div className="text-2xl font-bold text-[#008080] mb-1">18.9%</div>
                    <p className="text-sm text-muted-foreground">年复合增长率</p>
                  </div>
                  <div className="p-4 bg-[#008080]/5 rounded-lg text-center">
                    <div className="text-2xl font-bold text-[#008080] mb-1">3倍</div>
                    <p className="text-sm text-muted-foreground">超过整体食品类别增速</p>
                  </div>
                </div>
              </AnimatedCard>
            </div>

            {/* Market Growth Chart & Segments */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Market Growth Chart */}
              <AnimatedCard className="p-8">
                <h3 className="text-2xl font-bold mb-8">市场规模增长趋势</h3>
                <div className="space-y-6">
                  <div className="h-[300px]">
                    <MarketGrowthChart />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-[#008080]/5 rounded-lg text-center">
                      <p className="text-sm text-muted-foreground mb-1">近三年增长率</p>
                      <div className="text-2xl font-bold text-[#008080]">54%</div>
                    </div>
                    <div className="p-4 bg-[#008080]/5 rounded-lg text-center">
                      <p className="text-sm text-muted-foreground mb-1">对比传统食品</p>
                      <div className="text-2xl font-bold text-[#008080]">3x增速</div>
                    </div>
                  </div>
                </div>
              </AnimatedCard>

              {/* Market Segments */}
              <AnimatedCard className="p-8">
                <h3 className="text-2xl font-bold mb-8">细分市场分析</h3>
                <div className="space-y-8">
                  {/* Plant-based Milk */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-medium">植物奶市场</h4>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-[#008080]">26亿美元</div>
                        <div className="text-sm text-muted-foreground">占牛奶总销售额 16%</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-[#008080]/5 rounded-lg text-center">
                        <div className="text-xl font-bold text-[#008080] mb-1">33%</div>
                        <p className="text-sm text-muted-foreground">三年增长率</p>
                      </div>
                      <div className="p-4 bg-[#008080]/5 rounded-lg text-center">
                        <div className="text-xl font-bold text-[#008080] mb-1">17%</div>
                        <p className="text-sm text-muted-foreground">燕麦奶市占率</p>
                      </div>
                    </div>
                  </div>

                  {/* Plant-based Meat */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-medium">植物肉市场</h4>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-[#008080]">14亿美元</div>
                        <div className="text-sm text-muted-foreground">家庭渗透率 19%</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-[#008080]/5 rounded-lg text-center">
                        <div className="text-xl font-bold text-[#008080] mb-1">74%</div>
                        <p className="text-sm text-muted-foreground">三年增长率</p>
                      </div>
                      <div className="p-4 bg-[#008080]/5 rounded-lg text-center">
                        <div className="text-xl font-bold text-[#008080] mb-1">8.2x</div>
                        <p className="text-sm text-muted-foreground">传统肉类增速</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'Taste of Beauty 高端素食餐饮品牌 | 独立投资项目介绍 | 项目展示',
  }
}
