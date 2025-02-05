import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AnimatedCard } from '@/components/ui/animated-elements'
import { InvestmentProjectsSection } from '@/components/sections/InvestmentProjectsSection'

export default function EB5InvestmentPage() {
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
            {/* Details Button */}
            <div className="text-center mt-12">
              <Link href="/posts/eb-5-introduction">
                <Button
                  variant="outline"
                  className="px-8 py-2 border-[#008080] text-[#008080] hover:bg-[#008080] hover:text-white transition-all duration-300"
                >
                  具体政策介绍
                </Button>
              </Link>
            </div>
          </div>

          {/* EB-5 Application Process */}
          <div className="max-w-6xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              EB-5 投资移民申请流程
            </h2>

            <Tabs defaultValue="overseas" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-[400px] grid-cols-2">
                  <TabsTrigger value="overseas">美国境外申请</TabsTrigger>
                  <TabsTrigger value="domestic">美国境内申请</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="overseas" className="mt-0">
                <div className="relative">
                  {/* Process Steps - Overseas Application */}
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
                    {/* Step 1 */}
                    <div className="relative group">
                      <div className="bg-[#008080] text-white p-2 clip-path-triangle mb-4">
                        <span className="font-medium">第一步</span>
                      </div>
                      <div className="bg-white p-4 shadow-md min-h-[100px] flex items-center justify-center text-center relative z-[1]">
                        <p>投资已获准的美国项目</p>
                      </div>
                      <div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-[2]">
                        <svg
                          className="w-6 h-6 text-[#008080]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                        </svg>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative group">
                      <div className="bg-[#008080] text-white p-2 clip-path-triangle mb-4">
                        <span className="font-medium">第二步</span>
                      </div>
                      <div className="bg-white p-4 shadow-md min-h-[100px] flex items-center justify-center text-center relative z-[1]">
                        <p>提交 I-526E/I-526 （移民申请书）</p>
                      </div>
                      <div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-[2]">
                        <svg
                          className="w-6 h-6 text-[#008080]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                        </svg>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative group">
                      <div className="bg-[#008080] text-white p-2 clip-path-triangle mb-4">
                        <span className="font-medium">第三步</span>
                      </div>
                      <div className="bg-white p-4 shadow-md min-h-[100px] flex items-center justify-center text-center relative z-[1]">
                        <p>前往领事馆移民面签</p>
                      </div>
                      <div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-[2]">
                        <svg
                          className="w-6 h-6 text-[#008080]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                        </svg>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative group">
                      <div className="bg-[#008080] text-white p-2 clip-path-triangle mb-4">
                        <span className="font-medium">第四步</span>
                      </div>
                      <div className="bg-white p-4 shadow-md min-h-[100px] flex items-center justify-center text-center relative z-[1]">
                        <p>提交 I-829 （撤销条件申请书）</p>
                      </div>
                      <div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-[2]">
                        <svg
                          className="w-6 h-6 text-[#008080]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                        </svg>
                      </div>
                    </div>

                    {/* Step 5 */}
                    <div className="relative group">
                      <div className="bg-[#008080] text-white p-2 clip-path-triangle mb-4">
                        <span className="font-medium">第五步</span>
                      </div>
                      <div className="bg-white p-4 shadow-md min-h-[100px] flex items-center justify-center text-center relative z-[1]">
                        <p>收到永久绿卡</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="domestic" className="mt-0">
                <div className="relative">
                  {/* Process Steps - Domestic Application */}
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
                    {/* Step 1 */}
                    <div className="relative group">
                      <div className="bg-[#008080] text-white p-2 clip-path-triangle mb-4">
                        <span className="font-medium">第一步</span>
                      </div>
                      <div className="bg-white p-4 shadow-md min-h-[100px] flex items-center justify-center text-center relative z-[1]">
                        <p>投资已获准的美国项目</p>
                      </div>
                      <div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-[2]">
                        <svg
                          className="w-6 h-6 text-[#008080]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                        </svg>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative group">
                      <div className="bg-[#008080] text-white p-2 clip-path-triangle mb-4">
                        <span className="font-medium">第二步</span>
                      </div>
                      <div className="bg-white p-4 shadow-md min-h-[100px] flex items-center justify-center text-center relative z-[1]">
                        <p>提交 I-526E/I-526 （移民申请书）</p>
                      </div>
                      <div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-[2]">
                        <svg
                          className="w-6 h-6 text-[#008080]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                        </svg>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative group">
                      <div className="bg-[#008080] text-white p-2 clip-path-triangle mb-4">
                        <span className="font-medium">第三步</span>
                      </div>
                      <div className="bg-white p-4 shadow-md min-h-[100px] flex items-center justify-center text-center relative z-[1]">
                        <p>提交 I-485 （身份调整申请）</p>
                      </div>
                      <div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-[2]">
                        <svg
                          className="w-6 h-6 text-[#008080]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                        </svg>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative group">
                      <div className="bg-[#008080] text-white p-2 clip-path-triangle mb-4">
                        <span className="font-medium">第四步</span>
                      </div>
                      <div className="bg-white p-4 shadow-md min-h-[100px] flex items-center justify-center text-center relative z-[1]">
                        <p>提交 I-829 （撤销条件申请书）</p>
                      </div>
                      <div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-[2]">
                        <svg
                          className="w-6 h-6 text-[#008080]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                        </svg>
                      </div>
                    </div>

                    {/* Step 5 */}
                    <div className="relative group">
                      <div className="bg-[#008080] text-white p-2 clip-path-triangle mb-4">
                        <span className="font-medium">第五步</span>
                      </div>
                      <div className="bg-white p-4 shadow-md min-h-[100px] flex items-center justify-center text-center relative z-[1]">
                        <p>收到永久绿卡</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* Details Button */}
            <div className="text-center mt-12">
              <Link href="/posts/eb-5-application">
                <Button
                  variant="outline"
                  className="px-8 py-2 border-[#008080] text-[#008080] hover:bg-[#008080] hover:text-white transition-all duration-300"
                >
                  详情
                </Button>
              </Link>
            </div>
          </div>

          {/* AmCan Advantages */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              美域佳华 EB-5 的项目优势
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Advantage 1 */}
              <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
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
                    美域佳华提供 EB-5 <span className="text-[#008080]">独立投资项目</span> 和
                    <span className="text-[#008080]">区域中心投资项目</span>{' '}
                    的双重选择，满足不同投资人的需求。
                  </p>
                </CardContent>
              </AnimatedCard>

              {/* Advantage 2 */}
              <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
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
                    美域佳华独有的 <span className="text-[#008080]">EB-5</span> 与
                    <span className="text-[#008080]">L1/EB-1C</span> 跨国高管移民结合策略，100
                    万美元投资可为 2-3 位投资者同步办理绿卡，一举多得。
                  </p>
                </CardContent>
              </AnimatedCard>

              {/* Advantage 3 */}
              <Link href="/#global-network">
                <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
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
                      <span className="text-[#008080]">中美两岸全链路服务</span>
                      ，包括项目选择、投资、移民、税务规划、子女教育、生活规划等。
                    </p>
                  </CardContent>
                </AnimatedCard>
              </Link>

              {/* Advantage 4 - 已获得美国移民局批准 */}
              <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
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
              </AnimatedCard>

              {/* Advantage 5 - 政府支持 */}
              <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
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
              </AnimatedCard>

              {/* Advantage 6 - 成功经验 */}
              <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
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
                    符合条件的投资人获得临时绿卡(I-526E/I-526)和永久绿卡(I-829)申请保持{' '}
                    <span className="text-[#008080]">100%</span> 通过率
                    <br />
                    超过 xxxx 位投资人已收回投资款
                  </p>
                </CardContent>
              </AnimatedCard>

              {/* Advantage 7 - 就业机会 */}
              <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
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
                    成功创造远超移民局要求的就业机会，
                    <span className="text-[#008080]">为投资人提供更多保障</span>
                  </p>
                </CardContent>
              </AnimatedCard>

              {/* Advantage 8 - 合作伙伴 */}
              <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
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
                    与美国大型物流企业有紧密的合作关系，公司持续壮大，
                    <span className="text-[#008080]">确保项目稳定运营</span>
                  </p>
                </CardContent>
              </AnimatedCard>

              {/* Advantage - 施工竣工保证 */}
              <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <CardTitle className="text-xl mb-2">施工竣工保证</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    开发商拥有<span className="text-[#008080]">100%完工纪录</span>， 项目享受
                    <span className="text-[#008080]">开发商完工担保</span>， 确保项目顺利完成
                  </p>
                </CardContent>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

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
                Fedex Ground 联邦快递 <br /> 独立投资项目
              </h2>
              <h2 className="text-2xl md:text-4xl font-medium mb-8 text-white/80">
                南加州最具影响力的 EB-5 项目公司
              </h2>
              <h3 className="text-2xl md:text-3xl mb-8">Fedex 项目 | 第一顺位 | 无排期</h3>
              <p className="text-lg md:text-xl mb-6">无排期南加州联邦快递承包项目全球首发</p>
              <p className="text-lg md:text-xl mb-12">526 获批担保 / 低风险投资，稳健回报</p>
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
    title: '投资移民 (EB-5)',
  }
}
