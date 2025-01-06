import type { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">EB-5 简介</h2>
            <p className="text-lg text-center mb-16 max-w-3xl mx-auto">
              EB-5
              是美国政府推出的投资移民项目，旨在通过外资促进美国经济增长并创造就业机会。投资者在满足规定的投资金额和创造就业条件后，可申请获得美国永久居留权（绿卡）。
            </p>
          </div>

          {/* AmCan Advantages */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              美域佳华 EB-5 的项目优势
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

              {/* Advantage 4 - 已获得美国移民局批准 */}
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <CardTitle className="text-xl mb-2">已获得美国移民局批准</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    南加州最大的投资移民区域中心之一，少数获得永久绿卡批准(I-829)的区域中心之一
                  </p>
                </CardContent>
              </Card>

              {/* Advantage 5 - 政府支持 */}
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
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <CardTitle className="text-xl mb-2">政府支持</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    配合当地政府推动都市开发项目，获得联邦、州及市政府的支持
                  </p>
                </CardContent>
              </Card>

              {/* Advantage 6 - 成功经验 */}
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
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <CardTitle className="text-xl mb-2">成功经验</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    自 xxxx 年起，已经成功完成超过 xxxx 期项目
                    <br />
                    符合条件的投资人获得临时绿卡(I-526E)和永久绿卡(I-829)申请保持{' '}
                    <span className="text-[#d4b675]">100%</span> 通过率
                    <br />
                    超过 xxxx 位投资人已收回投资款
                  </p>
                </CardContent>
              </Card>

              {/* Advantage 7 - 就业机会 */}
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
                        d="M16 8v8m-4-5v5M8 8v8m-4-5v5m0-5h20"
                      />
                    </svg>
                  </div>
                  <CardTitle className="text-xl mb-2">就业机会</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    按过去经验，成功创造超过移民局要求的就业机会，
                    <span className="text-[#d4b675]">为投资人提供更多保障</span>
                  </p>
                </CardContent>
              </Card>

              {/* Advantage 8 - 合作伙伴 */}
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
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <CardTitle className="text-xl mb-2">合作伙伴</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    与美国大型连锁零售企业有紧密的合作关系，
                    <span className="text-[#d4b675]">确保项目稳定运营</span>
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

      {/* Investment Projects Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">多领域投资项目</h2>
          <p className="text-lg text-center mb-16 max-w-3xl mx-auto">
            美域佳华不仅专注于移民服务，更致力于为客户提供涵盖投资、商业运营和教育等多维度的项目支持。
            无论您处于事业初创期、扩展期，或是希望为家人提供更优质的教育与生活条件，我们都能为您匹配合适的项目，
            助力您和家人的长远发展。
          </p>

          {/* Business Investment Projects */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Local Logistics Card */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-8 text-center">本地物流</h3>
                <Card className="transition-all duration-300 hover:scale-[1.02] hover:border-[#d4b675]/30 border border-transparent">
                  <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-lg">
                    <Image
                      src="/fedex.png"
                      alt="fedex"
                      fill
                      className="object-cover object-[center_25px]"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-[#d4b675] flex items-center gap-2">
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
                    <p className="text-[#d4b675] font-medium">
                      与全球物流巨头并肩，构建可持续收益体系
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Health Food Card */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-8 text-center">健康餐饮</h3>
                <Card className="transition-all duration-300 hover:scale-[1.02] hover:border-[#d4b675]/30 border border-transparent">
                  <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-lg">
                    <Image
                      src="/taste-of-beauty.jpg"
                      alt="taste-of-beauty"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-[#d4b675] flex items-center gap-2">
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
                    <p className="text-[#d4b675] font-medium">创新餐饮投资，把握健康潮流新机遇</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Real Estate Projects */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Student Housing Card */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-8 text-center">学生公寓</h3>
                <Card className="transition-all duration-300 hover:scale-[1.02] hover:border-[#d4b675]/30 border border-transparent">
                  <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-lg">
                    <Image
                      src="/uc-student-housing.jpg"
                      alt="uc-student-housing"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-[#d4b675] flex items-center gap-2">
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
                    <p className="text-[#d4b675] font-medium">
                      投资教育与未来，坐享优质房产升值空间
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Early Education Card */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-8 text-center">学前教育</h3>
                <Card className="transition-all duration-300 hover:scale-[1.02] hover:border-[#d4b675]/30 border border-transparent">
                  <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-lg">
                    <Image
                      src="/orange-county-kindergarten.png"
                      alt="orange-county-kindergarten"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-[#d4b675] flex items-center gap-2">
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
                    <p className="text-[#d4b675] font-medium">深耕优质教育市场，抢占高端幼教蓝海</p>
                  </CardContent>
                </Card>
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
              className="px-8 py-6 text-base bg-[#d4b675] hover:bg-[#c4a665] text-white"
              size="lg"
            >
              了解更多投资项目，开启成功之路
            </Button>
          </div>
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
