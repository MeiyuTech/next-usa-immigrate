import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-6">服务条款</h1>
          <p className="text-muted-foreground">最后更新时间：2024年1月14日</p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto prose prose-slate">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">1. 服务范围</h2>
            <p className="text-muted-foreground mb-4">美域集团提供的服务包括但不限于：</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>投资移民咨询与服务 (EB-5)</li>
              <li>职业移民咨询与服务 (EB-1/2/3)</li>
              <li>家庭移民咨询</li>
              <li>留学服务 (F-1)</li>
              <li>工作签证服务 (H-1B)</li>
              <li>投资项目管理与咨询</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">2. 服务协议</h2>
            <p className="text-muted-foreground mb-4">在使用我们的服务时，您同意：</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>提供真实、准确、完整的个人信息</li>
              <li>遵守所有适用的法律法规</li>
              <li>及时支付相关服务费用</li>
              <li>配合提供必要的文件和信息</li>
              <li>遵守保密协议条款</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">3. 费用与支付</h2>
            <p className="text-muted-foreground mb-4">关于服务费用：</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>具体费用将在服务协议中明确列出</li>
              <li>支付方式包括银行转账、信用卡等</li>
              <li>部分服务可能需要预付款</li>
              <li>退款政策将在具体服务协议中说明</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">4. 责任限制</h2>
            <p className="text-muted-foreground mb-4">我们将尽最大努力提供优质服务，但：</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>不对签证或移民申请结果做出保证</li>
              <li>不对第三方服务提供商的行为负责</li>
              <li>不对不可抗力因素导致的延误负责</li>
              <li>对投资项目的回报不做保证</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">5. 保密条款</h2>
            <p className="text-muted-foreground mb-4">我们承诺：</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>严格保护客户隐私信息</li>
              <li>未经授权不向第三方披露客户信息</li>
              <li>采取必要措施保护客户资料</li>
              <li>遵守相关数据保护法规</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">6. 终止条款</h2>
            <p className="text-muted-foreground mb-4">服务可能在以下情况下终止：</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>双方协商一致</li>
              <li>客户违反服务协议</li>
              <li>服务目标已完成</li>
              <li>不可抗力因素导致无法继续服务</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">7. 法律适用</h2>
            <p className="text-muted-foreground mb-4">
              本服务条款受美国加利福尼亚州法律管辖，任何争议应通过友好协商解决。如协商不成，同意提交加利福尼亚州有管辖权的法院处理。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">8. 联系我们</h2>
            <p className="text-muted-foreground mb-6">
              如果您对本服务条款有任何疑问，请通过以下方式联系我们：
            </p>
            <div className="space-y-6 pl-1">
              <div className="flex items-center gap-4 text-muted-foreground">
                <MapPin className="h-5 w-5 shrink-0" />
                <p className="text-base">19800 MacArthur Blvd Ste 420, Irvine CA 92612</p>
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
                <p className="text-base text-muted-foreground">微信：LA9499547996</p>
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
    title: '服务条款',
    description: '美域集团服务条款，了解我们的服务范围、责任和义务。',
  }
}
