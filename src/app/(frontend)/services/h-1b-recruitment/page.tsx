import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AnimatedCard } from '@/components/ui/animated-elements'
import { CheckCircle2 } from 'lucide-react'

export default function H1BRecruitmentPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">H1B 猎头委托招聘服务</h1>
            <p className="text-xl text-muted-foreground mb-8">
              专业的 H1B 雇主匹配服务，助您实现职业发展目标
            </p>
            <Button className="bg-[#008080] hover:bg-[#008080]/90">
              <Link href="/about-us/contact" className="no-underline">
                立即咨询
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">服务优势</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
                <CardHeader className="text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                    <CheckCircle2 className="h-6 w-6 text-[#008080]" />
                  </div>
                  <CardTitle className="text-xl mb-2">专业匹配</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    根据您的专业背景和职业发展需求，匹配最适合的 H1B 雇主
                  </p>
                </CardContent>
              </AnimatedCard>

              {/* Card 2 */}
              <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
                <CardHeader className="text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                    <CheckCircle2 className="h-6 w-6 text-[#008080]" />
                  </div>
                  <CardTitle className="text-xl mb-2">多年经验</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    拥有丰富的 H1B 申请经验和广泛的雇主资源网络
                  </p>
                </CardContent>
              </AnimatedCard>

              {/* Card 3 */}
              <AnimatedCard className="transition-all duration-300 hover:scale-[1.02] hover:border-[#008080]/30 border border-transparent">
                <CardHeader className="text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                    <CheckCircle2 className="h-6 w-6 text-[#008080]" />
                  </div>
                  <CardTitle className="text-xl mb-2">全程服务</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    从简历优化到面试辅导，提供完整的求职支持
                  </p>
                </CardContent>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">服务流程</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#008080] text-white flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">资质评估</h3>
                    <p className="text-muted-foreground">
                      提供学历、简历、相关证书等材料，我们的专业团队将评估您的 H1B 申请资质
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#008080] text-white flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">职位匹配</h3>
                    <p className="text-muted-foreground">
                      根据您的背景和期望，推荐最多三家愿意提供 H1B 支持的公司
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#008080] text-white flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">面试准备</h3>
                    <p className="text-muted-foreground">提供面试指导和模拟训练，提高面试成功率</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#008080] text-white flex items-center justify-center flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">抽签支持</h3>
                    <p className="text-muted-foreground">
                      协助完成 H1B 抽签注册，如未中签可继续提供后续两年的抽签支持
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/h1b-service.jpg"
                  alt="H1B Service Process"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">常见问题</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">服务费用包含哪些内容？</h3>
                <p className="text-muted-foreground">
                  服务费用主要用于为您寻找合适的 H1B
                  雇主和相关的抽签注册服务。不包含后续的律师费用和政府规费等。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">如果第一年没有中签怎么办？</h3>
                <p className="text-muted-foreground">
                  如果首次抽签未中签，我们将继续为您提供后续两年的抽签支持，无需额外付费。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">薪资待遇如何确定？</h3>
                <p className="text-muted-foreground">
                  具体薪资由您与意向雇主直接协商确定，我们会确保待遇符合行业标准。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">开启您的职业新篇章</h2>
            <p className="text-xl text-muted-foreground mb-8">
              专业的团队为您提供一站式 H1B 求职服务
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-[#008080] hover:bg-[#008080]/90">
                <Link href="/about-us/contact" className="no-underline">
                  立即咨询
                </Link>
              </Button>
              <Button variant="outline" className="border-[#008080] text-[#008080]">
                <Link href="/posts/h1b-guide" className="no-underline">
                  了解更多
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'H1B 猎头委托招聘服务 | 服务项目',
    description:
      '专业的 H1B 雇主匹配服务，助您实现职业发展目标。提供资质评估、职位匹配、面试辅导等全方位服务。',
  }
}
