'use client'

import { useState, useRef } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { MegaMenu } from './mega-menu'
import { MobileNav } from './mobile-nav'
import { cn } from 'src/utilities/cn'

export function NavBar() {
  const [_activeMenu, setActiveMenu] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 lg:flex">
            <div
              onMouseEnter={() => {
                setActiveMenu('product')
                setIsHovering(true)
                if (hoverTimeoutRef.current) {
                  clearTimeout(hoverTimeoutRef.current)
                }
              }}
              onMouseLeave={() => {
                hoverTimeoutRef.current = setTimeout(() => {
                  setActiveMenu(null)
                  setIsHovering(false)
                }, 300)
              }}
              className="static"
            >
              <button
                className={cn(
                  'px-2 py-1 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground',
                  isHovering && 'text-foreground'
                )}
              >
                Product
              </button>
              {isHovering && <MegaMenu setIsHovering={setIsHovering} />}
            </div>
            <a href="#" className="text-sm font-medium text-foreground/70 hover:text-foreground">
              Why Payload
            </a>
            <a href="#" className="text-sm font-medium text-foreground/70 hover:text-foreground">
              Developers
            </a>
            <a href="#" className="text-sm font-medium text-foreground/70 hover:text-foreground">
              Enterprise
            </a>
            <a href="#" className="text-sm font-medium text-foreground/70 hover:text-foreground">
              Docs
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
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
    </header>
  )
}
