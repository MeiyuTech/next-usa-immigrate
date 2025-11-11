import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-6">隐私政策</h1>
          <p className="text-muted-foreground">最后更新时间：2025年1月14日</p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto prose prose-slate">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">1. 信息收集</h2>
            <p className="text-muted-foreground mb-4">我们收集的信息类型包括但不限于：</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>个人身份信息（姓名、电子邮件地址、电话号码等）</li>
              <li>投资相关信息</li>
              <li>网站使用数据（IP地址、浏览器类型、访问时间等）</li>
              <li>其他您主动提供给我们的信息</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">2. 信息使用</h2>
            <p className="text-muted-foreground mb-4">我们收集的信息将用于：</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>提供、维护和改进我们的服务</li>
              <li>处理您的投资申请和相关事务</li>
              <li>发送服务通知和更新信息</li>
              <li>回应您的询问和请求</li>
              <li>预防欺诈和增强安全性</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">3. 信息共享</h2>
            <p className="text-muted-foreground mb-4">
              我们不会出售或出租您的个人信息。但在以下情况下，我们可能会共享您的信息：
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>经您明确同意</li>
              <li>为完成投资业务所必需的合作伙伴</li>
              <li>遵守法律法规要求</li>
              <li>保护我们的合法权益</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">4. 信息安全</h2>
            <p className="text-muted-foreground mb-4">
              我们采取适当的技术和组织措施来保护您的个人信息，包括：
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>使用加密技术保护数据传输</li>
              <li>限制员工访问个人信息</li>
              <li>定期安全评估和更新</li>
              <li>物理安全措施</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">5. Cookie 使用</h2>
            <p className="text-muted-foreground mb-4">我们使用 Cookie 和类似技术来：</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>记住您的偏好设置</li>
              <li>分析网站流量和使用情况</li>
              <li>提供个性化的服务体验</li>
              <li>改进网站功能</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">6. 您的权利</h2>
            <p className="text-muted-foreground mb-4">关于您的个人信息，您有权：</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>访问和获取副本</li>
              <li>更正或更新</li>
              <li>要求删除</li>
              <li>限制处理</li>
              <li>反对处理</li>
              <li>数据可携带性</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">7. 政策更新</h2>
            <p className="text-muted-foreground mb-4">
              我们可能会不时更新本隐私政策。重大变更时，我们会通过网站通知或电子邮件通知您。继续使用我们的服务即表示您同意更新后的隐私政策。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">8. 联系我们</h2>
            <p className="text-muted-foreground mb-6">
              如果您对本隐私政策有任何疑问或需要行使您的权利，请通过以下方式联系我们：
            </p>
            <div className="space-y-6 pl-1">
              <div className="flex items-center gap-4 text-muted-foreground">
                <MapPin className="h-5 w-5 shrink-0" />
                <p className="text-base">19800 MacArthur Blvd Ste 570, Irvine CA 92612</p>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <Phone className="h-5 w-5 shrink-0" />
                <div className="space-y-2">
                  <p className="text-base">
                    中国直拨：
                    <a href="tel:167-6208-4336" className="hover:text-foreground hover:underline">
                      167-6208-4336
                    </a>
                  </p>
                  <p className="text-base">
                    美国电话：
                    <a href="tel:9499547996" className="hover:text-foreground hover:underline">
                      (949)954-7996
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <Mail className="h-5 w-5 shrink-0" />
                <a
                  href="mailto:ca2@aet21.com"
                  className="text-base hover:text-foreground hover:underline"
                >
                  ca2@aet21.com
                </a>
              </div>
              <div className="ml-9 space-y-2">
                <p className="text-base text-muted-foreground">微信：LA9499786699</p>
                <p className="text-base text-muted-foreground">
                  周一至周五 当地时间: 9:30 AM - 5:30 PM (PST)
                </p>
              </div>
              <div className="ml-9">
                <Link
                  href="/about-us/contact"
                  className="text-base text-muted-foreground hover:text-foreground hover:underline"
                >
                  查看更多办公室
                </Link>
              </div>
            </div>
          </section>

          {/* Back to Home Button */}
          <div className="mt-16 text-center">
            <Button className="bg-[#008080] hover:bg-[#008080]/90">
              <Link href="/" className="no-underline">
                返回首页
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: '隐私政策',
    description: '美域集团隐私政策，了解我们如何收集、使用和保护您的个人信息。',
  }
}
