import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AnimatedCard } from '@/components/ui/animated-elements'

export default function AmericanIVFPage() {
  return (
    <>
      {/* Hero Section */}
      <main className="relative min-h-screen -mt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/ivf-treatment.webp"
            alt="IVF Treatment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        <div className="relative z-10 flex min-h-screen items-center pt-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">高效赴美试管婴儿</h1>
              <h2 className="text-2xl md:text-4xl font-medium mb-8">一站式赴美试管服务</h2>
              <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto">
                从前期咨询、医疗检查到赴美试管治疗，我们的服务覆盖您所需要的每一个环节，确保您的治疗过程顺利无忧
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
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">服务概览</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Service Process & Timeline */}
            <AnimatedCard className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#008080]/10 flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-[#008080]"
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
                <h3 className="text-xl font-semibold mb-2">服务流程与时间安排</h3>
              </div>
              <div className="space-y-6">
                {/* Process Steps with Timeline */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-24 text-[#008080] text-sm text-right pt-1">
                      1-2个月
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#008080] rounded-full"></span>
                        <span className="text-gray-600">前期远程咨询与评估</span>
                      </div>
                      <div className="ml-4 mt-1 text-sm text-gray-500">
                        包括医疗档案评估、制定初步方案
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-24 text-[#008080] text-sm text-right pt-1">
                      1个月
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#008080] rounded-full"></span>
                        <span className="text-gray-600">国内检查与准备</span>
                      </div>
                      <div className="ml-4 mt-1 text-sm text-gray-500">
                        进行必要的医疗检查，调整身体状态
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-24 text-[#008080] text-sm text-right pt-1">
                      2-4周
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#008080] rounded-full"></span>
                        <span className="text-gray-600">赴美签证办理</span>
                      </div>
                      <div className="ml-4 mt-1 text-sm text-gray-500">
                        专业团队协助办理签证相关事宜
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-24 text-[#008080] text-sm text-right pt-1">
                      2-3个月
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#008080] rounded-full"></span>
                        <span className="text-gray-600">美国医院治疗</span>
                      </div>
                      <div className="ml-4 mt-1 text-sm text-gray-500">
                        专业医疗团队一对一服务，全程双语陪同
                      </div>
                    </div>
                  </div>
                </div>

                {/* Total Timeline */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center text-gray-600">
                    <span>总体周期</span>
                    <span className="text-[#008080] font-medium">3-6个月</span>
                  </div>
                </div>
              </div>
            </AnimatedCard>

            {/* Service Features */}
            <AnimatedCard className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#008080]/10 flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-[#008080]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">服务特色</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#008080] rounded-full"></span>
                  <span>顶级医疗资源对接</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#008080] rounded-full"></span>
                  <span>全程双语陪同服务</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#008080] rounded-full"></span>
                  <span>一对一专属顾问</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#008080] rounded-full"></span>
                  <span>签证文件专业指导</span>
                </li>
              </ul>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">项目详细介绍</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center">
            {/* Video Card */}
            <div>
              <AnimatedCard
                className="bg-white rounded-xl shadow-md overflow-hidden"
                style={{
                  width: '360px',
                  height: '640px',
                }}
              >
                <div className="relative w-full h-full">
                  <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    playsInline
                  >
                    <source src="/videos/How Does IVF Work 240109.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-b " />
                  <div className="relative p-6">
                    <h3 className="text-2xl font-semibold mb-4 text-[#008080]">IVF 流程介绍</h3>
                  </div>
                </div>
              </AnimatedCard>
            </div>

            {/* Medical Examinations Card */}
            <div>
              <AnimatedCard
                className="bg-white p-6 rounded-xl shadow-md"
                style={{
                  width: '360px',
                  height: '640px',
                }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-[#008080]">必要医学检查</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium mb-4 text-gray-800">女性检查项目</h4>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-[#008080] rounded-full mt-2"></span>
                        <span>激素六项检查：</span>
                      </li>
                      <li className="ml-5 space-y-2">
                        <p>• FSH (卵泡刺激素)</p>
                        <p>• LH (黄体生成素)</p>
                        <p>• E2 (雌二醇)</p>
                        <p>• PRL (泌乳素)</p>
                        <p>• T (睾酮)</p>
                        <p>• AMH (抗缪勒氏管激素)</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-[#008080] rounded-full mt-2"></span>
                        <span>妇科B超检查</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-4 text-gray-800">男性检查项目</h4>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-[#008080] rounded-full mt-2"></span>
                        <span>精液分析：精子数量、活力、形态等指标</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-[#008080] rounded-full mt-2"></span>
                        <span>血常规检查</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </AnimatedCard>
            </div>

            {/* Treatment Process Card 1 */}
            <div>
              <AnimatedCard
                className="bg-white p-8 rounded-xl shadow-md"
                style={{
                  width: '360px',
                  height: '640px',
                }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-[#008080]">促排卵方案</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium mb-4">长促方案</h4>
                    <p className="text-gray-700 mb-4">适用于卵巢储备正常的患者</p>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-[#008080] rounded-full mt-2"></span>
                        <span>前周期中黄期使用GnRH-a抑制垂体</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-[#008080] rounded-full mt-2"></span>
                        <span>月经第2-3天开始Gn促排卵</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-4">短促方案</h4>
                    <p className="text-gray-700 mb-4">适用于高龄或卵巢储备下降患者</p>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-[#008080] rounded-full mt-2"></span>
                        <span>月经第2-3天同时使用GnRH-a和Gn</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-4">微刺激方案</h4>
                    <p className="text-gray-700 mb-4">适用于卵巢反应较弱的患者</p>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-[#008080] rounded-full mt-2"></span>
                        <span>使用较小剂量的促排卵药物</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-[#008080] rounded-full mt-2"></span>
                        <span>减少患者用药负担</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </AnimatedCard>
            </div>

            {/* Treatment Process Card 2 */}
            <div>
              <AnimatedCard
                className="bg-white p-8 rounded-xl shadow-md"
                style={{
                  width: '360px',
                  height: '640px',
                }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-[#008080]">胚胎培养与移植</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium mb-4">胚胎培养</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-[#008080] rounded-full mt-2"></span>
                        <span>采用先进培养系统，全程监控胚胎发育</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-[#008080] rounded-full mt-2"></span>
                        <span>飞跃第五天培养，获得高质量囊胚</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-4">PGT-A基因检测</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-[#008080] rounded-full mt-2"></span>
                        <span>筛查染色体异常</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-[#008080] rounded-full mt-2"></span>
                        <span>提高妊娠成功率</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-[#008080] rounded-full mt-2"></span>
                        <span>降低流产风险</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-4">胚胎移植</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-[#008080] rounded-full mt-2"></span>
                        <span>子宫内膜准备与评估</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-[#008080] rounded-full mt-2"></span>
                        <span>单胚胎移植策略</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-[#008080] rounded-full mt-2"></span>
                        <span>移植后激素支持</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-[#008080] rounded-full mt-2"></span>
                        <span>早期孕期管理</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </AnimatedCard>
            </div>
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
    title: 'American IVF 美国生育医疗 | 项目介绍 | 项目展示',
  }
}
