import Link from 'next/link'

interface MegaMenuWrapperProps {
  children: React.ReactNode
}

function MegaMenuWrapper({ children }: MegaMenuWrapperProps) {
  return (
    <div className="absolute left-0 right-0 top-full">
      <div className="absolute inset-0 bg-[#00808033] backdrop-blur-[12px]" />
      <div className="relative mega-menu-enter">
        <div className="container mx-auto grid grid-cols-3 gap-8 py-8 text-[15px] text-white">
          {children}
        </div>
      </div>
    </div>
  )
}

export function ServiceMegaMenu() {
  return (
    <MegaMenuWrapper>
      <div>
        <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-white/60">
          投资移民 (EB-5)
        </h3>
        <div className="space-y-3">
          <Link
            href="/posts/eb-5-introduction"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            政策介绍
          </Link>
          <Link
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            申请条件
          </Link>
          <Link
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            {/* 申请流程： 境内申请流程，境外申请流程 */}
            申请流程
          </Link>
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-white/60">
          职业移民 (EB-1/2/3)
        </h3>
        <div className="space-y-3">
          <Link
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            适用对象
          </Link>
          <Link
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            申请条件
          </Link>
          <Link
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            签证流程
          </Link>
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-white/60">
          在线评估
        </h3>
        <div className="space-y-4">
          <h4 className="text-[22px] font-semibold leading-tight text-white">
            只需 10 分钟，
            <br />
            快速了解最适合您的移民项目。
          </h4>
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium text-white/70 hover:text-white"
          >
            立即评估
            <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-white/60">
          其他服务
        </h3>
        <div className="space-y-3">
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            家庭移民
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            学生签证 （F-1）
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            访问学者 （J-1）
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            工作签证 （H-1B）
          </a>
        </div>
      </div>
    </MegaMenuWrapper>
  )
}

export function SuccessStoriesMegaMenu() {
  return (
    <MegaMenuWrapper>
      <div>
        <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-white/60">
          成功案例
        </h3>
        <div className="space-y-3">
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            投资移民案例
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            职业移民案例
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            家庭移民案例
          </a>
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-white/60">
          客户反馈
        </h3>
        <div className="space-y-3">
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            服务评价
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            客户推荐
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            成功数据
          </a>
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-white/60">
          了解更多
        </h3>
        <div className="space-y-4">
          <h4 className="text-[22px] font-semibold leading-tight text-white">
            探索我们的成功故事，
            <br />
            了解客户如何实现移民梦想。
          </h4>
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium text-white/70 hover:text-white"
          >
            查看所有案例
            <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </MegaMenuWrapper>
  )
}

export function ProjectShowcaseMegaMenu() {
  return (
    <MegaMenuWrapper>
      <div>
        <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-white/60">
          热门项目
        </h3>
        <div className="space-y-3">
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            区域中心项目
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            直接投资项目
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            特殊人才机会
          </a>
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-white/60">
          项目分析
        </h3>
        <div className="space-y-3">
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            投资回报分析
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            风险评估报告
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            项目进度追踪
          </a>
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-white/60">
          最新动态
        </h3>
        <div className="space-y-4">
          <h4 className="text-[22px] font-semibold leading-tight text-white">
            发现最新的投资机会，
            <br />
            助您实现事业和移民双赢。
          </h4>
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium text-white/70 hover:text-white"
          >
            浏览所有项目
            <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </MegaMenuWrapper>
  )
}

export function ImmigrationResourcesMegaMenu() {
  return (
    <MegaMenuWrapper>
      <div>
        <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-white/60">
          移民百科
        </h3>
        <div className="space-y-3">
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            签证类别介绍
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            申请流程指南
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            材料清单
          </a>
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-white/60">
          政策解析
        </h3>
        <div className="space-y-3">
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            最新政策动态
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            政策影响分析
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            常见问题解答
          </a>
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-white/60">
          专业文章
        </h3>
        <div className="space-y-4">
          <h4 className="text-[22px] font-semibold leading-tight text-white">
            深入了解美国移民，
            <br />
            获取最新资讯与专业指导。
          </h4>
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium text-white/70 hover:text-white"
          >
            阅读更多
            <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </MegaMenuWrapper>
  )
}

export function AboutUsMegaMenu() {
  return (
    <MegaMenuWrapper>
      <div>
        <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-white/60">
          公司介绍
        </h3>
        <div className="space-y-3">
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            公司历史
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            愿景使命
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            服务优势
          </a>
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-white/60">
          专业团队
        </h3>
        <div className="space-y-3">
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            顾问团队
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            法律团队
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            合作伙伴
          </a>
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-white/60">
          联系我们
        </h3>
        <div className="space-y-4">
          <h4 className="text-[22px] font-semibold leading-tight text-white">
            专业团队随时为您服务，
            <br />
            开启您的移民之旅。
          </h4>
          <Link
            href="/contact"
            className="inline-flex items-center text-sm font-medium text-white/70 hover:text-white"
          >
            预约咨询
            <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </MegaMenuWrapper>
  )
}
