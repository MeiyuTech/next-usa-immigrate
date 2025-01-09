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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Video Background */}
            <div
              className="relative w-full rounded-lg overflow-hidden"
              style={{ aspectRatio: '9/16' }}
            >
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                playsInline
              >
                <source src="/videos/How Does IVF Work 240109.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Right Column - Content */}
            <div>
              <AnimatedCard className="bg-white p-8 rounded-xl shadow-md">
                <div className="space-y-8">
                  {/* Pre-treatment Preparation */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-[#008080]">前期准备</h3>
                    <div className="space-y-6">
                      {/* Medical Examinations */}
                      <div>
                        <h4 className="text-lg font-medium mb-3 text-gray-800">必要医学检查</h4>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-[#008080] rounded-full mt-2"></span>
                            <span>
                              女性激素六项检查（FSH、LH、E2、PRL、T、AMH）及妇科B超，需在月经第二天进行
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-[#008080] rounded-full mt-2"></span>
                            <span>男性精液分析和血常规检查，评估精子质量和身体状况</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-[#008080] rounded-full mt-2"></span>
                            <span>染色体检查（如有遗传疾病史），确保胚胎健康</span>
                          </li>
                        </ul>
                      </div>

                      {/* Cycle Adjustment */}
                      <div>
                        <h4 className="text-lg font-medium mb-3 text-gray-800">周期调整</h4>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-[#008080] rounded-full mt-2"></span>
                            <span>根据个人情况使用避孕药或促排药物，进行卵泡发育系统调整</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-[#008080] rounded-full mt-2"></span>
                            <span>制定个性化的营养补充方案，改善卵子和精子质量</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gray-100"></div>

                  {/* Treatment Process */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-[#008080]">治疗流程</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#008080]/10 flex items-center justify-center">
                          <span className="text-[#008080] font-medium">1</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium mb-2">医疗咨询与方案制定</h4>
                          <p className="text-gray-700 mb-2">
                            与美国顶尖试管医生进行一对一视频咨询，根据您的具体情况选择：
                          </p>
                          <ul className="space-y-2 text-gray-700 ml-4">
                            <li>• 长促方案：适用于卵巢储备正常的患者</li>
                            <li>• 短促方案：适用于高龄或卵巢储备下降患者</li>
                            <li>• 微促方案：适用于卵巢反应较弱的患者</li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#008080]/10 flex items-center justify-center">
                          <span className="text-[#008080] font-medium">2</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium mb-2">胚胎培养与筛查</h4>
                          <p className="text-gray-700 mb-2">
                            采用先进的胚胎培养技术，确保最佳培养环境：
                          </p>
                          <ul className="space-y-2 text-gray-700 ml-4">
                            <li>• 飞跃第五天培养，获得囊胚</li>
                            <li>• PGT-A基因检测（根据需求），筛查染色体异常</li>
                            <li>• 胚胎评级，选择最优质胚胎</li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#008080]/10 flex items-center justify-center">
                          <span className="text-[#008080] font-medium">3</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium mb-2">胚胎移植与追踪</h4>
                          <p className="text-gray-700 mb-2">
                            采用单胚胎移植策略，确保最佳妊娠结局：
                          </p>
                          <ul className="space-y-2 text-gray-700 ml-4">
                            <li>• 子宫内膜准备与评估</li>
                            <li>• 精确时间点的胚胎解冻与移植</li>
                            <li>• 移植后激素支持与监测</li>
                            <li>• 妊娠检测与早期孕期管理</li>
                          </ul>
                        </div>
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
    title: 'American IVF 美国生育医疗 | 项目介绍 | 项目展示',
  }
}
