import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AnimatedCard } from '@/components/ui/animated-elements'

export default function UCRStudentHousingPage() {
  return (
    <>
      {/* Hero Section */}
      <main className="relative min-h-screen -mt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/uc-student-housing-hero-section.jpg"
            alt="UCR Student Housing"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 flex min-h-screen items-center pt-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">北美投资移民新机遇</h1>
              <h2 className="text-2xl md:text-4xl font-medium mb-8">稳定资产与绿卡双赢</h2>
              <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto">
                通过购买房产抵押贷款，再将资金投资于实业项目，实现投资移民目标
              </p>
              <Button
                className="px-8 py-6 text-base border-2 border-white 
                  bg-transparent text-white 
                  hover:bg-white/10 hover:backdrop-blur-sm hover:text-white
                  transition-all duration-300 
                  shadow-lg"
                variant="outline"
              >
                <Link href="#project-overview">了解更多</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Project Overview Section */}
      <section id="project-overview" className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">项目概述</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Basic Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <span className="font-semibold min-w-[100px]">项目名称：</span>
                <span>UCR大学酒店公寓</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold min-w-[100px]">项目地址：</span>
                <span>洛杉矶河滨县</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold min-w-[100px]">投资费用：</span>
                <span>80万美元（目标就业区）</span>
              </div>
            </div>

            {/* Investment Background */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">投资背景</h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  本项目符合EB-5投资移民计划，申请人通过区域中心投资80万美元，即可申请绿卡。该投资需满足&quot;直接或间接创造十个就业机会&quot;的要求，且享受目标就业区(TEA)的政策优惠。
                </p>
                <p className="text-gray-700">
                  EB-5项目受到
                  <span className="font-semibold">
                    美国移民局(USCIS)、证券交易委员会(SEC)、国税局(IRS)、联邦调查局(FBI)和国土安全局(DHS)
                  </span>
                  的严格监管，保障资金安全与合法合规性。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">项目详情</h2>

          {/* Building Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">建筑规划</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 顶层：屋顶花园 / 酒吧</li>
                  <li>• 3-6层：花园酒店（140间酒店式公寓）</li>
                  <li>• 1-2层：酒店入口、大厅、餐厅、会议中心</li>
                  <li>• 地下二层：停车场</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">项目规模</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 占地面积：36,500平方英尺</li>
                  <li>• 建筑面积：198,000平方英尺</li>
                </ul>
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/uc-student-housing.jpg"
                alt="UC Student Housing"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Additional Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Government Support */}
            <div className="space-y-4">
              <div className="relative h-[350px] rounded-lg overflow-hidden">
                <Image
                  src="/uc-student-housing-gov.png"
                  alt="Government Support"
                  fill
                  className="object-contain bg-white"
                />
              </div>
              <h3 className="text-xl font-semibold">政府支持</h3>
              <p className="text-gray-700">
                项目获得河滨县政府大力支持，确保项目顺利进行和长期发展。
              </p>
            </div>

            {/* Location Advantage */}
            <div className="space-y-4">
              <div className="relative h-[350px] rounded-lg overflow-hidden">
                <Image
                  src="/uc-student-housing-location.png"
                  alt="Strategic Location"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">地理优势</h3>
              <p className="text-gray-700">位于洛杉矶河滨县核心区域，交通便利，配套设施完善。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Highlights Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">项目亮点</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedCard className="p-6">
              <h3 className="text-xl font-semibold mb-4">高端住宿体验</h3>
              <p className="text-gray-700">
                140套精装修酒店式公寓，专为加州大学河滨分校(UCR)师生及商务旅客打造舒适居住空间。
              </p>
            </AnimatedCard>

            <AnimatedCard className="p-6">
              <h3 className="text-xl font-semibold mb-4">完善设施配套</h3>
              <p className="text-gray-700">
                多功能娱乐中心、健身房、游泳池、餐厅及会议中心，为入住者提供全方位生活服务。
              </p>
            </AnimatedCard>

            <AnimatedCard className="p-6">
              <h3 className="text-xl font-semibold mb-4">交通便捷，配套成熟</h3>
              <p className="text-gray-700">
                步行可至周边商业社区，毗邻繁华地段，坐享河滨县繁荣与发展潜力。
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Investment Advantages Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">投资优势</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedCard className="p-6">
              <h3 className="text-xl font-semibold mb-4">名校核心地段</h3>
              <p className="text-gray-700">
                项目位于世界百强名校加州大学河滨分校(UCR)校区内。UCR始建于1954年，现有学生超过30,000人，教育及研究水平位列全球前列。该校被时代周刊及华盛顿月刊评为全美最具影响力的高等学府之一。
              </p>
            </AnimatedCard>

            <AnimatedCard className="p-6">
              <h3 className="text-xl font-semibold mb-4">黄金地理位置</h3>
              <p className="text-gray-700">
                项目坐落于洛杉矶河滨县，毗邻60号和91号高速公路交汇处，是距离安大略国际机场最近的繁华区域。洛杉矶整体发展东移，河滨县凭借优越区位和逐渐完善的基础设施，成为洛杉矶发展最快的地区之一。
              </p>
            </AnimatedCard>

            <AnimatedCard className="p-6">
              <h3 className="text-xl font-semibold mb-4">政府政策支持</h3>
              <p className="text-gray-700">
                本项目得到河滨县政府大力支持，并获得官方推荐信。河滨县作为加州最大的农业县，在未来几年内将成为洛杉矶重要的发展区域。
              </p>
            </AnimatedCard>

            <AnimatedCard className="p-6">
              <h3 className="text-xl font-semibold mb-4">投资安全保障</h3>
              <p className="text-gray-700">
                房产投资可接受人民币付款，解决资金出境难题。投资方可在房产证上加名，与项目方共享产权，确保资金安全，即使投资失败，房产增值也能弥补损失。
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Back Button Section */}
      <section className="pb-24">
        <div className="container mx-auto px-4 text-center">
          <Button
            className="px-8 py-6 text-base 
              bg-[#008080] text-white hover:bg-[#008080]/90
              transition-all duration-300 
              shadow-lg"
          >
            <Link href="/projects">返回项目列表</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'UCR Student Housing 加州大学学生公寓 (已完结) | 区域中心投资项目介绍 | 项目展示',
  }
}
