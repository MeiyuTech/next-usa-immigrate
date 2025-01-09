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
        {/* Video Background */}
        <div className="absolute inset-0 z-0 bg-black">
          <div className="absolute inset-0 flex justify-center">
            <video autoPlay loop muted playsInline className="h-full w-auto">
              <source src="/videos/How Does IVF Work 240109.mp4" type="video/mp4" />
            </video>
          </div>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/20" />
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
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">项目概述</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Basic Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <span className="font-semibold min-w-[100px]">停留时间：</span>
                <span>单次最长6个月，可延期至12个月</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold min-w-[100px]">治疗周期：</span>
                <span>通常需要2-3个周期</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold min-w-[100px]">服务内容：</span>
                <span>签证支持、医疗咨询、胚胎筛查、试管移植</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold min-w-[100px]">特色优势：</span>
                <span>全程陪伴、专业翻译、顶尖医疗资源</span>
              </div>
            </div>

            {/* Service Introduction */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">服务介绍</h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  我们专注于为客户提供全流程、一站式的赴美试管婴儿服务。与美国顶尖试管诊所合作，
                  如CCRM、Shady Grove Fertility，确保您获得最专业的医疗支持。
                </p>
                <p className="text-gray-700">
                  从签证办理到治疗全过程，配备专业翻译及顾问团队，让您的赴美试管之旅无忧无虑。
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

          {/* Pre-treatment Preparation */}
          <AnimatedCard className="p-8 mb-8">
            <h3 className="text-2xl font-semibold mb-6 text-[#008080]">前期准备</h3>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                • 女性需在月经第二天进行激素六项检查及妇科B超 • 男性需进行精液和血常规检查 •
                如有遗传疾病，建议进行染色体检查 • 进行周期调整，为赴美治疗做好准备
              </p>
            </div>
          </AnimatedCard>

          {/* Treatment Process */}
          <AnimatedCard className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-[#008080]">治疗流程</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <h4 className="text-xl font-semibold">医疗咨询</h4>
                <p className="text-gray-700">与美国顶尖试管医生视频咨询，制定个性化治疗方案</p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xl font-semibold">胚胎筛查</h4>
                <p className="text-gray-700">根据需求进行PGT-A检测，确保胚胎质量</p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xl font-semibold">胚胎移植</h4>
                <p className="text-gray-700">建议单胚胎移植，确保母婴安全</p>
              </div>
            </div>
          </AnimatedCard>
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
