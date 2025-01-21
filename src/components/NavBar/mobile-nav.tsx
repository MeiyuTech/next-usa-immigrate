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

  const handleLinkClick = () => {
    setIsOpenAction(false)
  }

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

        <div className="h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="flex flex-col p-4">
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
              <div className="space-y-6">
                {activeSection === '移民服务' && (
                  <>
                    <div>
                      <h3 className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-foreground/60">
                        <Link href="/services/eb-5-investment" onClick={handleLinkClick}>
                          投资移民 (EB-5)
                        </Link>
                      </h3>
                      <div className="grid gap-2">
                        <Button
                          variant="ghost"
                          className="justify-start px-0"
                          onClick={handleLinkClick}
                        >
                          <Link href="/posts/eb-5-introduction">政策介绍</Link>
                        </Button>
                        <Button
                          variant="ghost"
                          className="justify-start px-0"
                          onClick={handleLinkClick}
                        >
                          <Link href="/posts/eb-5-application">申请条件</Link>
                        </Button>
                        <Button
                          variant="ghost"
                          className="justify-start px-0"
                          onClick={handleLinkClick}
                        >
                          <Link href="/posts/eb-5-application">申请流程</Link>
                        </Button>
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-foreground/60">
                        职业移民 (EB-1/2/3)
                      </h3>
                      <div className="grid gap-2">
                        <Button
                          variant="ghost"
                          className="justify-start px-0"
                          onClick={handleLinkClick}
                        >
                          <Link href="/posts/eb-123">适用对象</Link>
                        </Button>
                        <Button
                          variant="ghost"
                          className="justify-start px-0"
                          onClick={handleLinkClick}
                        >
                          <Link href="/posts/eb-123">申请条件</Link>
                        </Button>
                        <Button
                          variant="ghost"
                          className="justify-start px-0"
                          onClick={handleLinkClick}
                        >
                          <Link href="/posts/eb-123">签证流程</Link>
                        </Button>
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-foreground/60">
                        其他服务
                      </h3>
                      <div className="grid gap-2">
                        <Button
                          variant="ghost"
                          className="justify-start px-0"
                          onClick={handleLinkClick}
                        >
                          <Link href="/posts/family-based-immigration-introduction">家庭移民</Link>
                        </Button>
                        <Button
                          variant="ghost"
                          className="justify-start px-0"
                          onClick={handleLinkClick}
                        >
                          <Link href="/posts/f-1-introduction">学生签证 （F-1）</Link>
                        </Button>
                        <Button
                          variant="ghost"
                          className="justify-start px-0"
                          onClick={handleLinkClick}
                        >
                          <Link href="/posts/j-1-introduction">访问学者 （J-1）</Link>
                        </Button>
                        <Button
                          variant="ghost"
                          className="justify-start px-0"
                          onClick={handleLinkClick}
                        >
                          <Link href="/posts/h-1b-introduction">工作签证 （H-1B）</Link>
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
                      <Button
                        variant="ghost"
                        className="h-auto justify-start px-0 py-2"
                        onClick={handleLinkClick}
                      >
                        <Link href="/about-us/contact">联系我们，立即评估</Link>
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
                        <Button
                          variant="ghost"
                          className="justify-start px-0"
                          onClick={handleLinkClick}
                        >
                          投资移民案例
                        </Button>
                        <Button
                          variant="ghost"
                          className="justify-start px-0"
                          onClick={handleLinkClick}
                        >
                          职业移民案例
                        </Button>
                        <Button
                          variant="ghost"
                          className="justify-start px-0"
                          onClick={handleLinkClick}
                        >
                          家庭移民案例
                        </Button>
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-foreground/60">
                        客户反馈
                      </h3>
                      <div className="grid gap-2">
                        <Button
                          variant="ghost"
                          className="justify-start px-0"
                          onClick={handleLinkClick}
                        >
                          服务评价
                        </Button>
                        <Button
                          variant="ghost"
                          className="justify-start px-0"
                          onClick={handleLinkClick}
                        >
                          客户推荐
                        </Button>
                        <Button
                          variant="ghost"
                          className="justify-start px-0"
                          onClick={handleLinkClick}
                        >
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
                      <Button
                        variant="ghost"
                        className="h-auto justify-start px-0 py-2"
                        onClick={handleLinkClick}
                      >
                        查看所有案例
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </>
                )}

                {activeSection === '项目展示' && (
                  <>
                    <div className="space-y-8">
                      <div>
                        <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-foreground/60">
                          当前投资项目
                        </h3>
                        <div className="space-y-4">
                          <Button
                            variant="ghost"
                            className="h-auto w-full px-0 hover:bg-foreground/5"
                            onClick={handleLinkClick}
                          >
                            <Link href="/projects/fedex" className="w-full text-left">
                              <div className="font-medium">联邦快递独立投资项目</div>
                              <div className="mt-1 text-xs text-foreground/60">
                                全球物流巨头并肩，220+国家网络覆盖
                              </div>
                            </Link>
                          </Button>
                          <Button
                            variant="ghost"
                            className="h-auto w-full px-0 hover:bg-foreground/5"
                            onClick={handleLinkClick}
                          >
                            <Link
                              href="/projects/vegetarian-restaurant"
                              className="w-full text-left"
                            >
                              <div className="font-medium">高级素食餐厅投资项目</div>
                              <div className="mt-1 text-xs text-foreground/60">
                                20年餐饮经验团队，打造高端美食品牌
                              </div>
                            </Link>
                          </Button>
                        </div>
                      </div>

                      <div>
                        <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-foreground/60">
                          竣工项目
                        </h3>
                        <div className="space-y-4">
                          <Button
                            variant="ghost"
                            className="h-auto w-full px-0 hover:bg-foreground/5"
                            onClick={handleLinkClick}
                          >
                            <Link href="/projects/ucr-student-housing" className="w-full text-left">
                              <div className="font-medium">加州大学河滨分校公寓项目</div>
                              <div className="mt-1 text-xs text-foreground/60">
                                优质学生住房，毗邻大型机场
                              </div>
                            </Link>
                          </Button>
                          <Button
                            variant="ghost"
                            className="h-auto w-full px-0 hover:bg-foreground/5"
                            onClick={handleLinkClick}
                          >
                            <Link href="/projects/kindergarten" className="w-full text-left">
                              <div className="font-medium">橙县艺术幼儿园项目</div>
                              <div className="mt-1 text-xs text-foreground/60">
                                EB-5认证教育投资，年利润324万美元
                              </div>
                            </Link>
                          </Button>
                          <Button
                            variant="ghost"
                            className="h-auto w-full px-0 hover:bg-foreground/5"
                            onClick={handleLinkClick}
                          >
                            <Link href="/projects/fox-property" className="w-full text-left">
                              <div className="font-medium">福克斯物业开发项目</div>
                              <div className="mt-1 text-xs text-foreground/60">
                                TEA区域优势显著，市场估值2000万美元
                              </div>
                            </Link>
                          </Button>
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-4 text-lg font-semibold leading-snug">
                          精选优质投资项目，
                          <br />
                          确保资金安全与投资回报。
                        </h4>
                        <Button
                          variant="ghost"
                          className="group h-auto px-0 text-foreground/70 hover:text-foreground"
                          onClick={handleLinkClick}
                        >
                          <Link
                            href="/projects#investment-projects"
                            className="inline-flex items-center"
                          >
                            了解更多项目
                            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                          </Link>
                        </Button>
                      </div>
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
                        <Button
                          variant="ghost"
                          className="justify-start px-0"
                          onClick={handleLinkClick}
                        >
                          签证类别介绍
                        </Button>
                        <Button
                          variant="ghost"
                          className="justify-start px-0"
                          onClick={handleLinkClick}
                        >
                          申请流程指南
                        </Button>
                        <Button
                          variant="ghost"
                          className="justify-start px-0"
                          onClick={handleLinkClick}
                        >
                          材料清单
                        </Button>
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-foreground/60">
                        政策解析
                      </h3>
                      <div className="grid gap-2">
                        <Button
                          variant="ghost"
                          className="justify-start px-0"
                          onClick={handleLinkClick}
                        >
                          最新政策动态
                        </Button>
                        <Button
                          variant="ghost"
                          className="justify-start px-0"
                          onClick={handleLinkClick}
                        >
                          政策影响分析
                        </Button>
                        <Button
                          variant="ghost"
                          className="justify-start px-0"
                          onClick={handleLinkClick}
                        >
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
                      <Button
                        variant="ghost"
                        className="h-auto justify-start px-0 py-2"
                        onClick={handleLinkClick}
                      >
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
                        <Button
                          variant="ghost"
                          className="justify-start px-0"
                          onClick={handleLinkClick}
                        >
                          <Link href="/about-us">集团介绍</Link>
                        </Button>
                        <Button
                          variant="ghost"
                          className="justify-start px-0"
                          onClick={handleLinkClick}
                        >
                          <Link href="/about-us#vision-and-strategy">愿景使命</Link>
                        </Button>
                        <Button
                          variant="ghost"
                          className="justify-start px-0"
                          onClick={handleLinkClick}
                        >
                          <Link href="/about-us#service-advantage">服务优势</Link>
                        </Button>
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-foreground/60">
                        专业团队
                      </h3>
                      <div className="grid gap-2">
                        <Button
                          variant="ghost"
                          className="justify-start px-0"
                          onClick={handleLinkClick}
                        >
                          顾问团队
                        </Button>
                        <Button
                          variant="ghost"
                          className="justify-start px-0"
                          onClick={handleLinkClick}
                        >
                          <Link href="/about-us/lawyers">法律团队</Link>
                        </Button>
                        <Button
                          variant="ghost"
                          className="justify-start px-0"
                          onClick={handleLinkClick}
                        >
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
                      <Button asChild variant="ghost" className="h-auto justify-start px-0 py-2">
                        <Link href="/contact" onClick={handleLinkClick}>
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
        </div>
      </SheetContent>
    </Sheet>
  )
}
