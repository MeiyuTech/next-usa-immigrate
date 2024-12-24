'use client'

import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useHeaderTheme } from '@/providers/HeaderTheme'
import type { Header } from '@/payload-types'

// import { Logo } from '@/components/Logo/Logo'
import LogoMeiyu from '@/components/LogoMeiyu/Logo'
import { HeaderNav } from './Nav'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  ProductMegaMenu,
  WhyPayloadMegaMenu,
  DevelopersMegaMenu,
  EnterpriseMegaMenu,
  DocsMegaMenu,
} from '@/components/NavBar/mega-menu'
import { MobileNav } from '@/components/NavBar/mobile-nav'
// import { NavBar } from '@/components/NavBar/nav-bar'
import { cn } from 'src/utilities/cn'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

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
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[#00808033] backdrop-blur-[12px]"
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="container mx-auto py-8 flex justify-between">
        <Link href="/">
          <LogoMeiyu loading="eager" priority="high" />
        </Link>
        <nav className="container flex h-16 items-center justify-end">
          <div className="flex items-center gap-6">
            <div className="hidden items-center gap-6 lg:flex">
              {['Product', 'Why Payload', 'Developers', 'Enterprise', 'Docs'].map((item) => (
                <div
                  key={item}
                  onMouseEnter={() => handleMouseEnter(item)}
                  onMouseLeave={handleMouseLeave}
                  className="static"
                >
                  <button
                    className={cn(
                      'px-2 py-1 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground',
                      activeMenu === item && 'text-foreground'
                    )}
                  >
                    {item}
                  </button>
                  {activeMenu === item && (
                    <>
                      {item === 'Product' && <ProductMegaMenu />}
                      {item === 'Why Payload' && <WhyPayloadMegaMenu />}
                      {item === 'Developers' && <DevelopersMegaMenu />}
                      {item === 'Enterprise' && <EnterpriseMegaMenu />}
                      {item === 'Docs' && <DocsMegaMenu />}
                    </>
                  )}
                </div>
              ))}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <MobileNav isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
      </div>
    </header>
  )
}
