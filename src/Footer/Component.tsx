import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

import type { Footer } from '@/payload-types'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
// import { Logo } from '@/components/Logo/Logo'
import LogoMeiyuTitle from '@/components/LogoMeiyuTitle/Logo'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []
  return (
    <footer className="border-t border-border bg-black text-white">
      <div className="container py-12">
        {/* Top Bar with Theme Selector and CMS Links */}
        <div className="mb-12 flex flex-col items-end gap-4 md:flex-row md:justify-end md:items-center">
          <nav className="flex flex-wrap gap-4">
            {navItems.map(({ link }, i) => {
              return (
                <CMSLink className="text-sm text-white/70 hover:text-white" key={i} {...link} />
              )
            })}
          </nav>
          <ThemeSelector />
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Company Info */}
          <div className="space-y-6">
            <Link href="/" className="block">
              <LogoMeiyuTitle />
            </Link>
            <p className="text-sm text-white/70">
              美域佳华是您值得信赖的美国移民顾问，我们提供专业的投资移民、职业移民等服务，助您实现美国梦。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-white/60">
              快速链接
            </h3>
            <nav className="grid gap-2">
              <Link href="/services" className="text-sm text-white/70 hover:text-white">
                移民服务
              </Link>
              <Link href="/cases" className="text-sm text-white/70 hover:text-white">
                成功案例
              </Link>
              <Link href="/projects" className="text-sm text-white/70 hover:text-white">
                项目展示
              </Link>
              <Link href="/resources" className="text-sm text-white/70 hover:text-white">
                移民知识
              </Link>
              <Link href="/about" className="text-sm text-white/70 hover:text-white">
                关于我们
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-white/60">
              服务项目
            </h3>
            <nav className="grid gap-2">
              <Link href="/services/eb5" className="text-sm text-white/70 hover:text-white">
                投资移民 (EB-5)
              </Link>
              <Link href="/services/eb1" className="text-sm text-white/70 hover:text-white">
                杰出人才 (EB-1)
              </Link>
              <Link href="/services/eb2" className="text-sm text-white/70 hover:text-white">
                职业移民 (EB-2)
              </Link>
              <Link href="/services/family" className="text-sm text-white/70 hover:text-white">
                家庭移民
              </Link>
              <Link href="/services/student" className="text-sm text-white/70 hover:text-white">
                留学服务
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-white/60">
              联系我们
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="h-5 w-5 shrink-0" />
                <p>美国华盛顿州西雅图市第五大道1234号，邮编98101</p>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="h-5 w-5" />
                <a href="tel:+1234567890" className="hover:text-white">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Mail className="h-5 w-5" />
                <a href="mailto:info@meiyugroup.org" className="hover:text-white">
                  info@meiyugroup.org
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/60 md:flex-row">
            <p>© {new Date().getFullYear()} 美域佳华. 保留所有权利.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white">
                隐私政策
              </Link>
              <Link href="/terms" className="hover:text-white">
                服务条款
              </Link>
              <Link href="/sitemap" className="hover:text-white">
                网站地图
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
