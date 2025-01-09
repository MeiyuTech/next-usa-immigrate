import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AnimatedCard, AnimatedNumber } from '@/components/ui/animated-elements'

export default function KindergartenPage() {
  return (
    <>
      {/* Hero Section */}
      <main className="relative min-h-screen -mt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/orange-county-kindergarten.png"
            alt="Orange County Art Kindergarten"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="relative z-10 flex min-h-screen items-center pt-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">橙县艺术幼儿园</h1>
              <h2 className="text-2xl md:text-4xl font-medium mb-8">艺术与双语教育的完美结合</h2>
              <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto">
                为孩子提供高质量的艺术与双语教育，培养自信、创造力与社会责任感的未来公民
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
                <span>橙县艺术幼儿园</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold min-w-[100px]">项目地址：</span>
                <span>洛杉矶橙县</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold min-w-[100px]">前期投入：</span>
                <span>120万美元</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold min-w-[100px]">年利润估算：</span>
                <span>324万美元</span>
              </div>
            </div>

            {/* Investment Background */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">投资背景</h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  本项目将创造19个就业岗位，完全符合美国投资移民要求。项目位于发展迅速的洛杉矶橙县，
                  致力于为当地社区提供高质量的早期教育服务。
                </p>
                <p className="text-gray-700">
                  通过独特的艺术教育理念和双语教学模式，为孩子们打造全方位的成长环境，
                  同时创造可观的经济效益。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Analysis Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">园区经济测算</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Monthly Analysis */}
            <AnimatedCard className="p-6">
              <h3 className="text-xl font-semibold mb-4">月度收支</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">收入</span>
                  <span className="text-lg font-semibold text-[#008080]">
                    $<AnimatedNumber value={270000} />
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">支出</span>
                  <span className="text-lg font-semibold text-[#008080]/70">
                    $<AnimatedNumber value={99016} />
                  </span>
                </div>
                <div className="pt-2 border-t border-[#008080]/20">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">月净利润</span>
                    <span className="text-xl font-bold text-[#008080]">
                      $<AnimatedNumber value={170984} />
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedCard>

            {/* Annual Analysis */}
            <AnimatedCard className="p-6">
              <h3 className="text-xl font-semibold mb-4">年度收支</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">收入</span>
                  <span className="text-lg font-semibold text-[#008080]">
                    $<AnimatedNumber value={3240000} />
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">支出</span>
                  <span className="text-lg font-semibold text-[#008080]/70">
                    $<AnimatedNumber value={1188192} />
                  </span>
                </div>
                <div className="pt-2 border-t border-[#008080]/20">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">年净利润</span>
                    <span className="text-xl font-bold text-[#008080]">
                      $<AnimatedNumber value={2051808} />
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedCard>

            {/* Expense Breakdown */}
            <AnimatedCard className="p-6">
              <h3 className="text-xl font-semibold mb-4">支出明细</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-gray-600 mb-2">月度支出</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>人员费用</span>
                      <span className="font-semibold text-[#008080]/80">
                        $<AnimatedNumber value={67016} />
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>运营费用</span>
                      <span className="font-semibold text-[#008080]/80">
                        $<AnimatedNumber value={32000} />
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-gray-600 mb-2">年度支出</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>人员费用</span>
                      <span className="font-semibold text-[#008080]/80">
                        $<AnimatedNumber value={804192} />
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>运营费用</span>
                      <span className="font-semibold text-[#008080]/80">
                        $<AnimatedNumber value={384000} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Educational Philosophy Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">经营理念</h2>

          {/* Core Philosophy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <AnimatedCard className="p-8">
              <p className="text-lg text-center mb-6 text-[#008080] font-medium">
                爱与创造是橙县艺术幼儿园的核心精神
              </p>
              <p className="text-gray-700 leading-relaxed">
                我们追求尊重生命、启发创造力的教育理念，旨在培养孩子们成为有担当的社会公民与多领域的领袖人才。
                通过科学的课程设计和个性化的教育方法，全面满足儿童成长的需求。
              </p>
            </AnimatedCard>

            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/asian-kid-kindergarten.jpg"
                alt="Asian Kid Kindergarten"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8">课程设计与特色</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course Content */}
            <AnimatedCard className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-[#008080]">课程内容</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#008080]">•</span>
                  <span>主题探究课程：激发孩子对世界的好奇心和探索能力</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#008080]">•</span>
                  <span>中英双语课程：培养国际化语言能力</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#008080]">•</span>
                  <span>艺术课程：音乐、美术、舞台表演等艺术教育</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#008080]">•</span>
                  <span>品格培养课程：发展孩子的社交能力与责任感</span>
                </li>
              </ul>
            </AnimatedCard>

            {/* Course Schedule */}
            <AnimatedCard className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-[#008080]">课程时间</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#008080]">•</span>
                  <span>周一至周五上午：7:00 - 15:00 文化课</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#008080]">•</span>
                  <span>周一至周五下午：15:00 - 17:30 课后活动；或 15:00 - 20:00 艺术课程</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#008080]">•</span>
                  <span>周六全天：8:00 - 20:00 艺术指导与舞台展示</span>
                </li>
              </ul>
            </AnimatedCard>

            {/* Course Features */}
            <AnimatedCard className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-[#008080]">课程特色</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#008080]">1.</span>
                  <span>全天托管服务：最高13小时的全方位托管支持</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#008080]">2.</span>
                  <span>多样化艺术培养：包括音乐、美术等方向</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#008080]">3.</span>
                  <span>国际化双语教育：帮助孩子在全球化环境中胜出</span>
                </li>
              </ul>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Market Analysis Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">市场分析</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Industry Status */}
            <AnimatedCard className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-[#008080]">行业现状</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">美国学前教育市场潜力巨大</h4>
                  <p className="text-gray-700">
                    学前教育费用快速增长，尔湾地区年均学费轻松超过3万美元，市场需求旺盛。
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">学前教育资源紧缺</h4>
                  <p className="text-gray-700">
                    如当地知名的&quot;马可波罗幼儿园&quot;仅提供半托管服务，月收费$2800，但仍一位难求，反映了供不应求的局面。
                  </p>
                </div>
              </div>
            </AnimatedCard>

            {/* Target Audience */}
            <AnimatedCard className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-[#008080]">目标人群</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">五岁以下儿童</h4>
                  <p className="text-gray-700">
                    尔湾市有约19,000名幼儿园适龄儿童，覆盖临近城区后该数字将数倍增长。
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">高收入家庭</h4>
                  <p className="text-gray-700">
                    尔湾地区平均家庭年收入超过10万美元，亚裔居民占据主要比例，其中华裔尤为显著。
                  </p>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Regional Advantages Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">地区优势</h2>

          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedCard className="p-6">
                <div className="flex items-start gap-3">
                  <span className="text-3xl font-bold text-[#008080]">1</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">优质教育资源</h3>
                    <p className="text-gray-700">橙县最好的教育局，加州大学尔湾分校等顶尖学府。</p>
                  </div>
                </div>
              </AnimatedCard>

              <AnimatedCard className="p-6">
                <div className="flex items-start gap-3">
                  <span className="text-3xl font-bold text-[#008080]">2</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">安全且便利的居住环境</h3>
                    <p className="text-gray-700">尔湾连续多年被评为美国最安全的城市之一。</p>
                  </div>
                </div>
              </AnimatedCard>

              <AnimatedCard className="p-6">
                <div className="flex items-start gap-3">
                  <span className="text-3xl font-bold text-[#008080]">3</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">经济发展迅速</h3>
                    <p className="text-gray-700">
                      吸引世界500强企业和高薪职位，家庭教育支出能力强。
                    </p>
                  </div>
                </div>
              </AnimatedCard>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/irvine-big-picture.jpg"
                alt="Irvine City View"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: '橙县艺术幼儿园 (已完结) | 区域中心投资项目介绍 | 项目展示',
  }
}
