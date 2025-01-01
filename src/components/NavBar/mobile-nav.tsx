'use client'

import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface MobileNavProps {
  isOpen: boolean
  setIsOpenAction: (open: boolean) => void
}

export function MobileNav({ isOpen, setIsOpenAction }: MobileNavProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpenAction}>
      <SheetContent side="right" className="w-full border-none bg-background p-0">
        <SheetHeader className="border-b border-border/10 p-4">
          <SheetTitle className="flex items-center justify-between">
            {activeSection ? (
              <Button
                variant="ghost"
                className="flex items-center gap-2 px-0 font-medium text-[15px]"
                onClick={() => setActiveSection(null)}
              >
                <ChevronRight className="h-4 w-4 rotate-180" />
                返回
              </Button>
            ) : (
              <span className="text-[15px] font-medium">菜单</span>
            )}
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col">
          {!activeSection ? (
            <>
              <Button
                variant="ghost"
                className="flex items-center justify-between rounded-none px-4 py-6"
                onClick={() => setActiveSection('移民服务')}
              >
                移民服务
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                className="flex items-center justify-between rounded-none px-4 py-6"
                onClick={() => setActiveSection('成功案例')}
              >
                成功案例
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                className="flex items-center justify-between rounded-none px-4 py-6"
                onClick={() => setActiveSection('项目展示')}
              >
                项目展示
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                className="flex items-center justify-between rounded-none px-4 py-6"
                onClick={() => setActiveSection('移民知识')}
              >
                移民知识
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                className="flex items-center justify-between rounded-none px-4 py-6"
                onClick={() => setActiveSection('关于我们')}
              >
                关于我们
                <ChevronRight className="h-4 w-4" />
              </Button>
            </>
          ) : (
            <div className="space-y-6 p-4">
              {activeSection === '移民服务' && (
                <>
                  <div>
                    <h3 className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-foreground/60">
                      投资移民 (EB-5)
                    </h3>
                    <div className="grid gap-2">
                      <Button variant="ghost" className="justify-start px-0">
                        <Link href="/posts/eb-5-introduction">政策介绍</Link>
                      </Button>
                      <Button variant="ghost" className="justify-start px-0">
                        申请条件
                      </Button>
                      <Button variant="ghost" className="justify-start px-0">
                        申请流程
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-foreground/60">
                      职业移民 (EB-1/2/3)
                    </h3>
                    <div className="grid gap-2">
                      <Button variant="ghost" className="justify-start px-0">
                        适用对象
                      </Button>
                      <Button variant="ghost" className="justify-start px-0">
                        申请条件
                      </Button>
                      <Button variant="ghost" className="justify-start px-0">
                        签证流程
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-foreground/60">
                      其他服务
                    </h3>
                    <div className="grid gap-2">
                      <Button variant="ghost" className="justify-start px-0">
                        家庭移民
                      </Button>
                      <Button variant="ghost" className="justify-start px-0">
                        学生签证 （F-1）
                      </Button>
                      <Button variant="ghost" className="justify-start px-0">
                        访问学者 （J-1）
                      </Button>
                      <Button variant="ghost" className="justify-start px-0">
                        工作签证 （H-1B）
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-foreground/60">
                      在线评估
                    </h3>
                    <h4 className="mb-2 text-lg font-semibold">
                      只需 10 分钟，快速了解最适合您的移民项目。
                    </h4>
                    <Button variant="ghost" className="h-auto justify-start px-0 py-2">
                      立即评估
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </>
              )}

              {activeSection === '成功案例' && (
                <>
                  <div>
                    <h3 className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-foreground/60">
                      成功案例
                    </h3>
                    <div className="grid gap-2">
                      <Button variant="ghost" className="justify-start px-0">
                        投资移民案例
                      </Button>
                      <Button variant="ghost" className="justify-start px-0">
                        职业移民案例
                      </Button>
                      <Button variant="ghost" className="justify-start px-0">
                        家庭移民案例
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-foreground/60">
                      客户反馈
                    </h3>
                    <div className="grid gap-2">
                      <Button variant="ghost" className="justify-start px-0">
                        服务评价
                      </Button>
                      <Button variant="ghost" className="justify-start px-0">
                        客户推荐
                      </Button>
                      <Button variant="ghost" className="justify-start px-0">
                        成功数据
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-foreground/60">
                      了解更多
                    </h3>
                    <h4 className="mb-2 text-lg font-semibold">
                      探索我们的成功故事，了解客户如何实现移民梦想。
                    </h4>
                    <Button variant="ghost" className="h-auto justify-start px-0 py-2">
                      查看所有案例
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </>
              )}

              {activeSection === '项目展示' && (
                <>
                  <div>
                    <h3 className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-foreground/60">
                      热门项目
                    </h3>
                    <div className="grid gap-2">
                      <Button variant="ghost" className="justify-start px-0">
                        区域中心项目
                      </Button>
                      <Button variant="ghost" className="justify-start px-0">
                        直接投资项目
                      </Button>
                      <Button variant="ghost" className="justify-start px-0">
                        特殊人才机会
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-foreground/60">
                      项目分析
                    </h3>
                    <div className="grid gap-2">
                      <Button variant="ghost" className="justify-start px-0">
                        投资回报分析
                      </Button>
                      <Button variant="ghost" className="justify-start px-0">
                        风险评估报告
                      </Button>
                      <Button variant="ghost" className="justify-start px-0">
                        项目进度追踪
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-foreground/60">
                      最新动态
                    </h3>
                    <h4 className="mb-2 text-lg font-semibold">
                      发现最新的投资机会，助您实现事业和移民双赢。
                    </h4>
                    <Button variant="ghost" className="h-auto justify-start px-0 py-2">
                      浏览所有项目
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </>
              )}

              {activeSection === '移民知识' && (
                <>
                  <div>
                    <h3 className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-foreground/60">
                      移民百科
                    </h3>
                    <div className="grid gap-2">
                      <Button variant="ghost" className="justify-start px-0">
                        签证类别介绍
                      </Button>
                      <Button variant="ghost" className="justify-start px-0">
                        申请流程指南
                      </Button>
                      <Button variant="ghost" className="justify-start px-0">
                        材料清单
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-foreground/60">
                      政策解析
                    </h3>
                    <div className="grid gap-2">
                      <Button variant="ghost" className="justify-start px-0">
                        最新政策动态
                      </Button>
                      <Button variant="ghost" className="justify-start px-0">
                        政策影响分析
                      </Button>
                      <Button variant="ghost" className="justify-start px-0">
                        常见问题解答
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-foreground/60">
                      专业文章
                    </h3>
                    <h4 className="mb-2 text-lg font-semibold">
                      深入了解美国移民，获取最新资讯与专业指导。
                    </h4>
                    <Button variant="ghost" className="h-auto justify-start px-0 py-2">
                      阅读更多
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </>
              )}

              {activeSection === '关于我们' && (
                <>
                  <div>
                    <h3 className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-foreground/60">
                      公司介绍
                    </h3>
                    <div className="grid gap-2">
                      <Button variant="ghost" className="justify-start px-0">
                        公司历史
                      </Button>
                      <Button variant="ghost" className="justify-start px-0">
                        愿景使命
                      </Button>
                      <Button variant="ghost" className="justify-start px-0">
                        服务优势
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-foreground/60">
                      专业团队
                    </h3>
                    <div className="grid gap-2">
                      <Button variant="ghost" className="justify-start px-0">
                        顾问团队
                      </Button>
                      <Button variant="ghost" className="justify-start px-0">
                        法律团队
                      </Button>
                      <Button variant="ghost" className="justify-start px-0">
                        合作伙伴
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-foreground/60">
                      联系我们
                    </h3>
                    <h4 className="mb-2 text-lg font-semibold">
                      专业团队随时为您服务，开启您的移民之旅。
                    </h4>
                    <Button
                      asChild
                      variant="ghost"
                      className="h-auto justify-start px-0 py-2"
                      onClick={() => setIsOpenAction(false)}
                    >
                      <Link href="/contact">
                        预约咨询
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
