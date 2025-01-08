import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PerformanceChart } from '@/components/charts/performance-chart'
import { Button } from '@/components/ui/button'
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AnimatedCard, AnimatedNumber, AnimatedProgress } from '@/components/ui/animated-elements'

export default function FedexGroundPage() {
  return (
    <>
      <main className="relative min-h-screen -mt-16">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="object-cover w-full h-full">
            <source src="/videos/fedex20240106.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-h-screen items-center pt-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                Fedex Ground 联邦快递 <br /> 独立承包商项目
              </h1>
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
          <h2 className="text-4xl font-bold text-center mb-16">项目概述</h2>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Left: Image - 占据 3 列 */}
            <div className="md:col-span-3 sticky top-24">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/FedEx-P&D-section.jpg"
                  alt="FedEx Ground P&D Service"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right: Content - 占据 2 列 */}
            <div className="md:col-span-2 space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                美域佳华作为联邦快递 P&D 项目的独立承包商，深度参与 P&D 线路的交易和服务。
                这不仅体现了美域佳华在该领域的运营实力，也为投资人和企业家提供了稳健的商业机会。
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">我们负责：</h3>
                <ul className="space-y-3">
                  {/* 运营管理 */}
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 mt-1 text-[#008080] flex-shrink-0"
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
                    <div>
                      <span className="text-muted-foreground">运营管理</span>
                      <p className="text-sm text-muted-foreground/75">
                        配备专业团队进行线路运营管理，涵盖日常包裹量及线路分批，在线运营支持，工资结算，参加每周官方例会。{' '}
                      </p>
                    </div>
                  </li>

                  {/* 线路评估 */}
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 mt-1 text-[#008080] flex-shrink-0"
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
                    <div>
                      <span className="text-muted-foreground">线路评估</span>
                      <p className="text-sm text-muted-foreground/75">
                        对目标收购线路，或原有特许经营线路进行专业评估，通过民邦快速评估约定评估线路公平市场价值。
                      </p>
                    </div>
                  </li>

                  {/* 招聘培训 */}
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 mt-1 text-[#008080] flex-shrink-0"
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
                    <div>
                      <span className="text-muted-foreground">招聘培训</span>
                      <p className="text-sm text-muted-foreground/75">
                        对司机、AO运营主管、BC业务主管等岗位进行潜在招聘，指导相关人员完成培训调度及快速进入工作岗位。
                      </p>
                    </div>
                  </li>

                  {/* 配套服务 */}
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 mt-1 text-[#008080] flex-shrink-0"
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
                    <div>
                      <span className="text-muted-foreground">配套服务</span>
                      <p className="text-sm text-muted-foreground/75">
                        为运营服务的联邦快递 ISP 进行车辆维修，轮胎采购等业务提供全方位支持。
                      </p>
                    </div>
                  </li>

                  {/* 融资贷款 */}
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 mt-1 text-[#008080] flex-shrink-0"
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
                    <div>
                      <span className="text-muted-foreground">融资贷款</span>
                      <p className="text-sm text-muted-foreground/75">
                        为运营服务的联邦快递 ISP 进行再融资，包括但不限于合规的修民资金或 SBA
                        贷款等。
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <p className="text-lg leading-relaxed text-muted-foreground">
                除此之外，我们还致力于将业务扩展至 Linehaul 项目，进一步拓宽发展空间。
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Investment Advantages Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">投资亮点与优势</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Advantage 1: Business Model */}
            <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
              <CardHeader>
                <CardTitle className="text-2xl text-[#008080] flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#008080]/10">
                    1
                  </span>
                  稳健的商业模式，现金流充足
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  联邦快递独立承包商项目确保所有包裹交由我们递送，收入稳定可预测，极大降低市场波动带来的风险。
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
                      每周结算机制，结合固定费率和浮动费率，确保现金流稳定，配送量越多收入越高。
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
                    <span className="text-muted-foreground">
                      项目运营依赖实际包裹配送，需求长期存在，保障了业务的持续性和增长潜力。
                    </span>
                  </li>
                </ul>
              </CardContent>
            </AnimatedCard>

            {/* Advantage 2: Employment Creation */}
            <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
              <CardHeader>
                <CardTitle className="text-2xl text-[#008080] flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#008080]/10">
                    2
                  </span>
                  直接创造就业，满足移民需求
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  该项目对司机和管理岗位有持续性需求，每个司机负责{' '}
                  <span className="text-[#008080]">最后一公里</span>{' '}
                  配送任务，确保至少10人就业，有效降低失业和岗位流失风险。
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
                      投资者不仅能满足EB-5投资移民的就业要求，还能通过直接管理企业保障业务顺畅运行。
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
                    <span className="text-muted-foreground">
                      稳定合约和充足就业需求使项目低风险，符合移民局长期商业经营标准。
                    </span>
                  </li>
                </ul>
              </CardContent>
            </AnimatedCard>

            {/* Advantage 3: Investment Security */}
            <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
              <CardHeader>
                <CardTitle className="text-2xl text-[#008080] flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#008080]/10">
                    3
                  </span>
                  资金安全保障，投资回报可观
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  投资车辆和联邦快递承运合同作为抵押物，项目具有较高的资产安全性和变现能力。
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
                      合同为封闭式合约，除非发生重大违规，否则可持续增值，并在必要时出售或转让，实现资产变现。
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
                    <span className="text-muted-foreground">
                      年利润率预计在<span className="text-[#008080]"> 10%-20% </span>
                      之间，根据运营规模年收入可达 $100 万至 $133 万，投资回收期约为 5.3 年。
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
                    <span className="text-muted-foreground">
                      包裹量增长直接带动收入提升，使得项目风险相对较低，是稳定的长期投资选择。
                    </span>
                  </li>
                </ul>
              </CardContent>
            </AnimatedCard>

            {/* Advantage 4: Immigration Benefits */}
            <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
              <CardHeader>
                <CardTitle className="text-2xl text-[#008080] flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#008080]/10">
                    4
                  </span>
                  移民友好，快速通道
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  该项目不仅符合EB-5投资移民的要求，还适用于EB-1C高管移民计划，为投资者提供灵活的移民路径。
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
                      L1签证申请可快速获得批准，最快15天内获批，一年后转EB-1C直接申请永久绿卡，无需经历漫长排期。
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
                    <span className="text-muted-foreground">
                      L1签证持有者配偶可合法工作，子女享受美国公立教育或州内学费，进一步降低家庭移民成本和风险。
                    </span>
                  </li>
                </ul>
              </CardContent>
            </AnimatedCard>
          </div>
        </div>
      </section>
      {/* Service Area Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">服务区域</h2>
          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Left: Service Areas Description - 占据 2 列 */}

            <div className="md:col-span-2 space-y-6">
              <div className="space-y-6">
                {/* Bay Area */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#008080]"></span>
                    <span className="text-[#008080]">旧金山湾区南部</span>
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-[#008080]">•</span>
                      覆盖范围：圣克拉拉县、圣马特奥县等硅谷核心区域
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#008080]">•</span>
                      日均包裹量：4,000-5,000件
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#008080]">•</span>
                      服务对象：科技公司、高等院校及高净值居民区
                    </li>
                  </ul>
                </div>

                {/* LA & Orange County */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#008080]"></span>
                    <span className="text-[#008080]">洛杉矶-橙县都会区</span>
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-[#008080]">•</span>
                      覆盖范围：尔湾、新港滩、亨廷顿比奇等高端社区
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#008080]">•</span>
                      日均包裹量：3,500-4,500件
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#008080]">•</span>
                      特色：高端住宅区和商业区配送服务
                    </li>
                  </ul>
                </div>

                {/* Expansion Plans */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#008080/50]"></span>
                    计划扩展区域
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-[#008080]">•</span>
                      东湾区：奥克兰、伯克利等区域（2024年Q3）
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#008080]">•</span>
                      圣地亚哥县：拉霍亚、德尔马等高端区域（2024年Q4）
                    </li>
                  </ul>
                </div>

                {/* Key Advantages */}
                <div className="mt-8 p-4 bg-[#008080]/5 rounded-lg">
                  <h3 className="font-semibold mb-2">区位优势</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-[#008080]">✓</span>
                      覆盖加州两大经济中心，服务高科技和高净值人群
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#008080]">✓</span>
                      区域电商需求旺盛，包裹量稳定且持续增长
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#008080]">✓</span>
                      临近主要机场和港口，物流网络完善
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right: California Map - 占据 3 列 */}
            <div className="md:col-span-3 sticky top-24 md:order-last">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-xl bg-white">
                <Image
                  src="/california-service-area.jpg"
                  alt="FedEx Ground Service Areas in California"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Case Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">优质线路收购案例</h2>

          <div className="grid md:grid-cols-12 gap-8">
            {/* Left Side - Main Info Card */}
            <div className="md:col-span-5">
              <AnimatedCard className="h-full bg-[#008080] text-white">
                <CardHeader className="border-b border-white/20">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl">橙县 FedEx 项目</CardTitle>
                    <div className="space-y-1 text-sm opacity-90">
                      <p className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        洛杉矶橙县
                      </p>
                      <p className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        服务邮编：3个橙县邮编
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-4xl font-bold">
                      $<AnimatedNumber value={2520795} />
                    </span>
                    <div className="text-sm opacity-90">
                      <p>上一财年总收入</p>
                      <p>17条线路</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-2xl">
                    <span className="font-bold">$1.4M</span>
                    <div className="text-sm opacity-90">
                      <p>成交价</p>
                      <p className="line-through opacity-75">市场报价 $1.95M</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center p-4 bg-white/10 rounded-lg">
                      <p className="text-3xl font-bold">9</p>
                      <p className="text-sm opacity-90">收购线路数</p>
                    </div>
                    <div className="text-center p-4 bg-white/10 rounded-lg">
                      <p className="text-3xl font-bold">12</p>
                      <p className="text-sm opacity-90">车辆数量</p>
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>
            </div>

            {/* Right Side - Details Grid */}
            <div className="md:col-span-7 grid grid-cols-2 gap-6">
              {/* Vehicle Assets */}
              <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#008080]">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                    车辆资产
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-[#008080]">$400,000</p>
                  <p className="text-muted-foreground">12辆运营车辆总价值</p>
                </CardContent>
              </AnimatedCard>

              {/* Employment */}
              <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#008080]">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    就业创造
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <p className="text-2xl font-bold text-[#008080]">12</p>
                      <p className="text-muted-foreground">全职司机</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-[#008080]">1-2</p>
                      <p className="text-muted-foreground">高级经理人</p>
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>

              {/* Revenue Per Route */}
              <AnimatedCard className="col-span-2 transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#008080]">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    平均线路收益
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-8">
                    <div>
                      <p className="text-2xl font-bold text-[#008080]">
                        $<AnimatedNumber value={148282} />
                      </p>
                      <p className="text-muted-foreground">每条线路年均收入</p>
                    </div>
                    <div className="flex-1">
                      <AnimatedProgress value={85} />
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Report Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">财务报表分析</h2>
          <div className="text-center mb-4 text-muted-foreground">
            <p>Datamark Logistics, Inc.</p>
            <p>2018年10月 - 11月</p>
          </div>

          {/* Revenue Overview */}
          <div className="grid md:grid-cols-12 gap-8 mb-12">
            {/* Left: Key Metrics */}
            <div className="md:col-span-5 grid grid-cols-2 gap-4">
              <AnimatedCard className="col-span-2 bg-[#008080] text-white">
                <CardHeader>
                  <CardTitle>总收入</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-4xl font-bold">
                      $<AnimatedNumber value={2520795} />
                    </span>
                  </div>
                </CardContent>
              </AnimatedCard>

              <AnimatedCard className="bg-white">
                <CardHeader>
                  <CardTitle className="text-[#008080]">运营成本</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-[#008080]">
                    $<AnimatedNumber value={97824} />
                  </div>
                  <p className="text-sm text-muted-foreground">23.4% 占比</p>
                </CardContent>
              </AnimatedCard>

              <AnimatedCard className="bg-white">
                <CardHeader>
                  <CardTitle className="text-[#008080]">净利润</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-[#008080]">
                    $<AnimatedNumber value={42527} />
                  </div>
                  <p className="text-sm text-muted-foreground">10.2% 利润率</p>
                </CardContent>
              </AnimatedCard>
            </div>

            {/* Right: Cost Breakdown */}
            <div className="md:col-span-7">
              <AnimatedCard>
                <CardHeader>
                  <CardTitle>成本构成</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Payroll */}
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">员工工资支出</span>
                        <span className="font-medium">$223,682</span>
                      </div>
                      <AnimatedProgress value={80} />
                    </div>

                    {/* Insurance */}
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">保险费用</span>
                        <span className="font-medium">$40,808</span>
                      </div>
                      <AnimatedProgress value={15} />
                    </div>

                    {/* Maintenance */}
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">维修维护费</span>
                        <span className="font-medium">$45,983</span>
                      </div>
                      <AnimatedProgress value={17} />
                    </div>

                    {/* Fuel */}
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">燃油费</span>
                        <span className="font-medium">$26,636</span>
                      </div>
                      <div className="h-2 bg-[#008080]/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#008080] w-[10%] rounded-full animate-[progress_2s_ease-out]" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>
            </div>
          </div>

          {/* Detailed Analysis */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Revenue Analysis */}
            <AnimatedCard>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#008080]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                  收入分析
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-[#008080] mb-2">$6,952</div>
                  <p className="text-sm text-muted-foreground">日均收入</p>
                </div>
                <div className="h-[100px] bg-[#008080]/5 rounded-lg mt-4">
                  {/* 这里可以添加收入趋势图表 */}
                </div>
              </CardContent>
            </AnimatedCard>

            {/* Cost Structure */}
            <AnimatedCard>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#008080]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                    />
                  </svg>
                  成本结构
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">运营成本率</span>
                    <span className="text-[#008080] font-medium">23.4%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">人工成本率</span>
                    <span className="text-[#008080] font-medium">53.6%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">其他费用率</span>
                    <span className="text-[#008080] font-medium">23.0%</span>
                  </div>
                </div>
              </CardContent>
            </AnimatedCard>

            {/* Profitability */}
            <AnimatedCard>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#008080]"
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
                  盈利能力
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-[#008080] mb-2">10.2%</div>
                  <p className="text-sm text-muted-foreground">净利润率</p>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">毛利率</span>
                    <span className="font-medium">76.6%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">营业利润率</span>
                    <span className="font-medium">10.0%</span>
                  </div>
                </div>
              </CardContent>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Ongoing Projects Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">正在进行的项目</h2>

          {/* Performance Chart */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <PerformanceChart />
              {/* Summary Cards */}
              <AnimatedCard>
                <CardHeader>
                  <CardTitle>项目概览</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">总投资额</p>
                        <p className="text-2xl font-bold text-[#008080]">293万美元</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">总线路数</p>
                        <p className="text-2xl font-bold text-[#008080]">29条</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">平均盈亏平衡期</p>
                      <p className="text-xl font-bold text-[#008080]">1.1年</p>
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>

              <AnimatedCard>
                <CardHeader>
                  <CardTitle>2023年度表现</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">总营业额</p>
                      <p className="text-2xl font-bold text-[#008080]">$4,018,729</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">平均净利润率</p>
                      <p className="text-xl font-bold text-[#008080]">10.2%</p>
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>
            </div>
          </div>

          {/* Project Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <AnimatedCard className="transition-all duration-300 hover:scale-[1.02]">
              <CardHeader>
                <CardTitle className="text-xl">Ho**i**g fedex</CardTitle>
                <p className="text-sm text-muted-foreground">成立时间: 07/11/2017</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="font-medium">收购价格</p>
                      <p className="text-muted-foreground">84万美元</p>
                    </div>
                    <div>
                      <p className="font-medium">盈亏平衡期</p>
                      <p className="text-muted-foreground">1.3年</p>
                    </div>
                    <div>
                      <p className="font-medium">线路数量</p>
                      <p className="text-muted-foreground">12条</p>
                    </div>
                  </div>

                  {/* Financial Chart */}
                  <div className="pt-4">
                    <p className="text-sm font-medium mb-3">近三年财务状况</p>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">2023</span>
                          <span>$1,526,167</span>
                        </div>
                        <div className="h-2 bg-[#008080]/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#008080] rounded-full transition-all duration-1000"
                            style={{ width: '80%' }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">2022</span>
                          <span>$1,691,396</span>
                        </div>
                        <div className="h-2 bg-[#008080]/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#008080] rounded-full transition-all duration-1000"
                            style={{ width: '88%' }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">2021</span>
                          <span>$1,908,839</span>
                        </div>
                        <div className="h-2 bg-[#008080]/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#008080] rounded-full transition-all duration-1000"
                            style={{ width: '100%' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </AnimatedCard>

            {/* Project 2 */}
            <AnimatedCard className="transition-all duration-300 hover:scale-[1.02]">
              <CardHeader>
                <CardTitle className="text-xl">Ne**i fedex</CardTitle>
                <p className="text-sm text-muted-foreground">成立时间: 01/03/2022</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="font-medium">收购价格</p>
                      <p className="text-muted-foreground">69万美元</p>
                    </div>
                    <div>
                      <p className="font-medium">盈亏平衡期</p>
                      <p className="text-muted-foreground">当年即盈利</p>
                    </div>
                    <div>
                      <p className="font-medium">线路数量</p>
                      <p className="text-muted-foreground">8条</p>
                    </div>
                  </div>

                  {/* Financial Chart */}
                  <div className="pt-4">
                    <p className="text-sm font-medium mb-3">近两年财务状况</p>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">2023</span>
                          <span>$904,752</span>
                        </div>
                        <div className="h-2 bg-[#008080]/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#008080] rounded-full transition-all duration-1000"
                            style={{ width: '85%' }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">2022</span>
                          <span>$152,943</span>
                        </div>
                        <div className="h-2 bg-[#008080]/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#008080] rounded-full transition-all duration-1000"
                            style={{ width: '15%' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </AnimatedCard>

            {/* Project 3 */}
            <AnimatedCard className="transition-all duration-300 hover:scale-[1.02]">
              <CardHeader>
                <CardTitle className="text-xl">S**g**i</CardTitle>
                <p className="text-sm text-muted-foreground">成立时间: 10/26/2021</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="font-medium">收购价格</p>
                      <p className="text-muted-foreground">140万美元</p>
                    </div>
                    <div>
                      <p className="font-medium">盈亏平衡期</p>
                      <p className="text-muted-foreground">1年</p>
                    </div>
                    <div>
                      <p className="font-medium">线路数量</p>
                      <p className="text-muted-foreground">9条</p>
                    </div>
                  </div>

                  {/* Financial Chart */}
                  <div className="pt-4">
                    <p className="text-sm font-medium mb-3">近两年财务状况</p>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">2023</span>
                          <span>$1,587,810</span>
                        </div>
                        <div className="h-2 bg-[#008080]/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#008080] rounded-full transition-all duration-1000"
                            style={{ width: '100%' }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">2022</span>
                          <span>$803,012</span>
                        </div>
                        <div className="h-2 bg-[#008080]/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#008080] rounded-full transition-all duration-1000"
                            style={{ width: '50%' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </AnimatedCard>
          </div>
        </div>
      </section>
    </>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'Fedex Ground 联邦快递 | 独立承包商项目介绍 | 项目展示',
  }
}
