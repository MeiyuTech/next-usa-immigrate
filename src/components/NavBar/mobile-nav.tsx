'use client'

import { useState } from 'react'
import { ChevronRight, X } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

interface MobileNavProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export function MobileNav({ isOpen, setIsOpen }: MobileNavProps) {
  const [showProduct, setShowProduct] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right" className="w-full border-none bg-background p-0">
        <SheetHeader className="border-b border-border/10 p-4">
          <SheetTitle className="flex items-center justify-between">
            {showProduct ? (
              <Button
                variant="ghost"
                className="flex items-center gap-2 px-0 font-normal"
                onClick={() => setShowProduct(false)}
              >
                <ChevronRight className="h-4 w-4 rotate-180" />
                Back
              </Button>
            ) : (
              <span className="text-base font-normal">Menu</span>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col">
          {!showProduct ? (
            <>
              <Button
                variant="ghost"
                className="flex items-center justify-between rounded-none px-4 py-6"
                onClick={() => setShowProduct(true)}
              >
                Product
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="ghost" className="justify-start rounded-none px-4 py-6">
                Why Payload
              </Button>
              <Button variant="ghost" className="justify-start rounded-none px-4 py-6">
                Developers
              </Button>
              <Button variant="ghost" className="justify-start rounded-none px-4 py-6">
                Enterprise
              </Button>
              <Button variant="ghost" className="justify-start rounded-none px-4 py-6">
                Docs
              </Button>
              <Button variant="ghost" className="justify-start rounded-none px-4 py-6">
                Login
              </Button>
            </>
          ) : (
            <div className="space-y-6 p-4">
              <div>
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground/50">
                  Use Cases
                </h3>
                <div className="grid gap-2">
                  <Button variant="ghost" className="justify-start px-0">
                    Headless CMS
                  </Button>
                  <Button variant="ghost" className="justify-start px-0">
                    Enterprise App Builder
                  </Button>
                  <Button variant="ghost" className="justify-start px-0">
                    Headless E-Commerce
                  </Button>
                  <Button variant="ghost" className="justify-start px-0">
                    Digital Asset Management
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground/50">
                  Features
                </h3>
                <div className="grid gap-2">
                  <Button variant="ghost" className="justify-start px-0">
                    Multi-Tenancy
                  </Button>
                  <Button variant="ghost" className="justify-start px-0">
                    White Label
                  </Button>
                  <Button variant="ghost" className="justify-start px-0">
                    Localization
                  </Button>
                  <Button variant="ghost" className="justify-start px-0">
                    Access Control
                  </Button>
                  <Button variant="ghost" className="justify-start px-0">
                    Auth
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground/50">
                  Case Studies
                </h3>
                <h4 className="mb-2 text-lg font-semibold">
                  See what others are building with Payload.
                </h4>
                <Button variant="ghost" className="h-auto justify-start px-0 py-2">
                  Browse Case Studies
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
