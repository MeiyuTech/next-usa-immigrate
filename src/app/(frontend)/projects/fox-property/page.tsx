import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AnimatedCard } from '@/components/ui/animated-elements'

export default function FoxPropertyPage() {
  return (
    <>
      {/* Hero Section */}
      <main className="relative min-h-screen -mt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/san-bernardino.webp"
            alt="San Bernardino"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        <div className="relative z-10 flex min-h-screen items-center pt-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">福克斯物业开发项目</h1>
              <h2 className="text-2xl md:text-4xl font-medium mb-8">EB-5 TEA地区投资移民</h2>
              <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto">
                位于南加州圣贝纳迪诺市核心地段的优质物业开发项目，为投资者提供可靠的投资移民机会
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
                <span>福克斯物业开发</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold min-w-[100px]">项目地址：</span>
                <span>南加州圣贝纳迪诺市</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold min-w-[100px]">项目费用：</span>
                <span>8万美元</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold min-w-[100px]">投资费用：</span>
                <span>80万美元（对比非TEA区域投资金额为105万美元）</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold min-w-[100px]">市场估值：</span>
                <span>1500万 - 2000万美元</span>
              </div>
            </div>

            {/* Investment Background */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">项目介绍</h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  福克斯物业位于南加州圣贝纳迪诺市的核心地段，拥有多栋建筑，构成本市最中心的街区。
                  距离洛杉矶市中心仅一小时车程，周边交通便利，通达棕榈泉、箭头湖和大熊湖等热门区域。
                </p>
                <p className="text-gray-700">
                  项目潜力巨大，投资前景广阔。作为TEA地区投资项目，投资人可以较低的投资金额获得投资移民机会。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">项目详细介绍</h2>

          {/* Geographic Advantages */}
          <AnimatedCard className="p-8 mb-8">
            <h3 className="text-2xl font-semibold mb-6 text-[#008080]">地理位置优势</h3>
            <p className="text-gray-700 leading-relaxed">
              福克斯物业靠近210号、10号、60号、215号、15号高速公路网，交通枢纽地位显著。
              此外，洛杉矶轻轨金线北部支线延伸至圣贝纳迪诺，项目附近设站点，使得从好莱坞到达仅需30分钟左右。
            </p>
          </AnimatedCard>

          {/* Building Highlights */}
          <AnimatedCard className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-[#008080]">特色建筑亮点</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <h4 className="text-xl font-semibold">Fox Theater</h4>
                <p className="text-gray-700">历史悠久的福克斯剧场（建于1929年）</p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xl font-semibold">Gym Center</h4>
                <p className="text-gray-700">拳王阿里曾在此练拳的健身中心</p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xl font-semibold">福克斯大学校舍</h4>
                <p className="text-gray-700">已建成的170间公寓，用于投资保障</p>
              </div>
            </div>
          </AnimatedCard>

          {/* Building Composition */}
          <div className="space-y-8 mb-8">
            <AnimatedCard className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-[#008080]">建筑组成与面积</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Main Building */}
                <div className="space-y-3">
                  <h4 className="text-xl font-semibold">主楼</h4>
                  <div className="space-y-3 text-gray-700">
                    <p>地址：399 ND St. 和 398 W Court St., San Bernardino, CA 92401</p>
                    <p>包含：主楼/教学楼、体育中心、餐厅、福克斯剧场</p>
                    <p className="font-medium">总建筑面积：140,000 平方英尺</p>
                  </div>
                </div>

                {/* Science Building */}
                <div className="space-y-3">
                  <h4 className="text-xl font-semibold">科学楼</h4>
                  <div className="space-y-3 text-gray-700">
                    <p>地址：398 W 4th St., San Bernardino, CA 92401</p>
                    <p className="font-medium">建筑面积：24,000 平方英尺</p>
                  </div>
                </div>

                {/* Dormitory Building */}
                <div className="space-y-3">
                  <h4 className="text-xl font-semibold">宿舍楼</h4>
                  <div className="space-y-3 text-gray-700">
                    <p>地址：340 W 4th St., San Bernardino, CA 92401</p>
                    <p className="font-medium">建筑面积：55,000 平方英尺</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-lg font-medium text-[#008080]">
                  总计建筑面积：219,000 平方英尺，占地3.5英亩
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Regional Advantages Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">项目优势</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* LA Region Advantages */}
            <AnimatedCard className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-[#008080]">
                洛杉矶的区域经济与文化优势
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#008080]/10 flex items-center justify-center">
                    <span className="text-2xl text-[#008080]">1</span>
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      加州是世界第五大经济体，洛杉矶是加州的经济核心。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#008080]/10 flex items-center justify-center">
                    <span className="text-2xl text-[#008080]">2</span>
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      全美约520万华人中，200万人居住在洛杉矶，是全球最大的海外华人聚居地。
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedCard>

            {/* San Bernardino Investment Highlights */}
            <AnimatedCard className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-[#008080]">圣贝纳迪诺的投资亮点</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#008080]/10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#008080]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">物流重镇</h4>
                    <p className="text-gray-700 leading-relaxed">
                      亚马逊将其物流中心设于圣贝纳迪诺，为当地带来大量就业机会，显著提升区域房产价值。
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#008080]/10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#008080]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">航空货运中心</h4>
                    <p className="text-gray-700 leading-relaxed">
                      圣贝纳迪诺国际机场由军用转为货运枢纽，已开通多条国际航线，未来将成为西部最大航空货运基地。
                      福克斯物业距离机场仅3.2英里。
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Investment Security Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">投资保障与移民优势</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* TEA Investment Advantages */}
            <AnimatedCard className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-[#008080]">TEA地区投资优势</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#008080]/10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#008080]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">快速办理绿卡</h4>
                    <p className="text-gray-700 leading-relaxed">
                      TEA地区EB-5项目专享快速通道，无排期限制，预计投资者可在项目开启12个月内获得临时绿卡。
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#008080]/10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#008080]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">政策支持</h4>
                    <p className="text-gray-700 leading-relaxed">
                      投资人享受3200个签证预留名额，减少等待时间。
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedCard>

            {/* Fund Security */}
            <AnimatedCard className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-[#008080]">资金安全与企业担保</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#008080]/10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#008080]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">诚信基金</h4>
                    <p className="text-gray-700 leading-relaxed">
                      区域中心每年向诚信基金捐款，项目透明且监管严格。
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#008080]/10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#008080]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">资产保障</h4>
                    <p className="text-gray-700 leading-relaxed">
                      投资者如遇资金逾期，项目方提供福克斯大学公寓产权作为保障，确保投资安全。
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>
    </>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'Fox Property 福克斯物业开发 (已完结) | 区域中心投资项目介绍 | 项目展示',
  }
}
