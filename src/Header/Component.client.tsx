'use client'

import React, { useState, useRef } from 'react'
import { Menu } from 'lucide-react'
import Link from 'next/link'

import type { Header } from '@/payload-types'
import { cn } from 'src/utilities/cn'
import { HeaderNav } from './Nav'

// import { Logo } from '@/components/Logo/Logo'
import LogoMeiyu from '@/components/LogoMeiyu/Logo'
import { Button } from '@/components/ui/button'
import {
  ServiceMegaMenu,
  WhyPayloadMegaMenu,
  DevelopersMegaMenu,
  EnterpriseMegaMenu,
  DocsMegaMenu,
} from '@/components/NavBar/mega-menu'
import { MobileNav } from '@/components/NavBar/mobile-nav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (menu: string) => {
    setActiveMenu(menu)
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
  }

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null)
    }, 300)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-[#00808033] backdrop-blur-[12px]" />
      <div className="relative container mx-auto py-8 flex justify-between text-white">
        <Link href="/">
          <LogoMeiyu loading="eager" priority="high" />
        </Link>
        <nav className="container flex h-16 items-center justify-end">
          <div className="flex items-center gap-6">
            <div className="hidden items-center gap-6 lg:flex">
              {['移民服务', '成功案例', '项目展示', '移民知识', '关于我们'].map((item) => (
                <div
                  key={item}
                  onMouseEnter={() => handleMouseEnter(item)}
                  onMouseLeave={handleMouseLeave}
                  className="static"
                >
                  <button
                    className={cn(
                      'px-2 py-1 text-[15px] font-medium text-white/90 transition-colors hover:text-white',
                      activeMenu === item && 'text-white font-semibold'
                    )}
                  >
                    {item}
                  </button>
                  {activeMenu === item && (
                    <>
                      {item === '移民服务' && <ServiceMegaMenu />}
                      {item === '成功案例' && <WhyPayloadMegaMenu />}
                      {item === '项目展示' && <DevelopersMegaMenu />}
                      {item === '移民知识' && <EnterpriseMegaMenu />}
                      {item === '关于我们' && <DocsMegaMenu />}
                    </>
                  )}
                </div>
              ))}
            </div>
            <HeaderNav data={data} />
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <MobileNav isOpen={isMobileMenuOpen} setIsOpenAction={setIsMobileMenuOpen} />
      </div>
    </header>
  )
}
