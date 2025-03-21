import Image from "next/image"
import Link from "next/link"
import { Phone, ArrowUp, CheckCircle, Mail, MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col relative">
      {/* 상단 이동 버튼 */}
      <a
        href="#top"
        className="fixed bottom-6 right-6 z-50 p-2 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all"
        aria-label="맨 위로 이동"
      >
        <ArrowUp className="h-6 w-6" />
      </a>

      {/* 헤더 */}
      <header id="top" className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <Phone className="h-6 w-6 text-primary" />
              <span className="inline-block font-bold text-xl">텔레코드(Tel Record)</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#home" className="text-sm font-medium hover:text-primary transition-colors">
              홈
            </Link>
            <Link href="#event" className="text-sm font-medium hover:text-primary transition-colors">
              이벤트
            </Link>
            <Link href="#recording" className="text-sm font-medium hover:text-primary transition-colors">
              녹취기능
            </Link>
            <Link href="#reasons" className="text-sm font-medium hover:text-primary transition-colors">
              사용이유
            </Link>
            <Link href="#cases" className="text-sm font-medium hover:text-primary transition-colors">
              활용사례
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              온라인 접수
            </Link>
          </nav>
          <Button className="md:hidden" variant="outline" size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="sr-only">메뉴 열기</span>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* 홈 섹션 */}
        <section id="home" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">텔레코드(Tel Record)</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  텔레코드는 사무실의 인터넷 전화 통화를 녹음해서 들을 수 있는 솔루션 입니다.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="#event">이벤트 확인하기</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#contact">온라인 접수</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] relative">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  width={500}
                  height={500}
                  alt="헤드셋을 착용한 고객 서비스 담당자"
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* 이벤트 섹션 */}
        <section id="event" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  오픈 이벤트
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  오픈 이벤트 50% 할인 행사
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  지금 가입하시면 50% 할인된 가격으로 이용 할 수 있습니다.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="grid gap-8 md:grid-cols-2">
                {/* 10대 가격 카드 */}
                <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                  <div className="absolute -right-12 top-6 rotate-45 bg-primary px-10 py-1 text-xs font-semibold text-primary-foreground">
                    50% 할인
                  </div>
                  <div className="flex flex-col p-6">
                    <h3 className="text-2xl font-bold">10대</h3>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-4xl font-extrabold">₩40,000</span>
                      <span className="ml-1 text-xl text-muted-foreground">/월</span>
                    </div>
                    <div className="mt-1 flex items-center">
                      <span className="text-sm text-muted-foreground line-through">₩80,000</span>
                      <span className="ml-2 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                        50% 절약
                      </span>
                    </div>
                    <div className="mt-6 space-y-4">
                      <div className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                        <span>10대 전화 녹취 지원</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                        <span>무료 기술 지원</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                        <span>간편한 설치</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Button className="w-full" size="lg">
                        지금 신청하기
                      </Button>
                    </div>
                  </div>
                </div>

                {/* 20대 가격 카드 */}
                <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                  <div className="absolute -right-12 top-6 rotate-45 bg-primary px-10 py-1 text-xs font-semibold text-primary-foreground">
                    50% 할인
                  </div>
                  <div className="flex flex-col p-6">
                    <h3 className="text-2xl font-bold">20대</h3>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-4xl font-extrabold">₩70,000</span>
                      <span className="ml-1 text-xl text-muted-foreground">/월</span>
                    </div>
                    <div className="mt-1 flex items-center">
                      <span className="text-sm text-muted-foreground line-through">₩140,000</span>
                      <span className="ml-2 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                        50% 절약
                      </span>
                    </div>
                    <div className="mt-6 space-y-4">
                      <div className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                        <span>20대 전화 녹취 지원</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                        <span>우선 기술 지원</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                        <span>간편한 설치 및 관리</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Button className="w-full" size="lg">
                        지금 신청하기
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-8 font-medium">
                이벤트는 예고 없이 종료 될 수 있습니다
              </p>
            </div>
          </div>
        </section>

        {/* 녹취기능 섹션 */}
        <section id="recording" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">녹취기능</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="flex flex-col items-center text-center p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-primary"
                  >
                    <path d="M16 2v5h5" />
                    <path d="M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17l4 4z" />
                    <path d="M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15" />
                    <path d="M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">녹취 가능 통신사</h3>
                <p className="mt-2 text-muted-foreground">LG / KT / SK 모두 녹취가 가능합니다(기타 통신사 별도 문의)</p>
              </Card>
              <Card className="flex flex-col items-center text-center p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-primary"
                  >
                    <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" />
                    <path d="M10 19v-3.96 3.15" />
                    <path d="M7 19h5" />
                    <rect width="6" height="10" x="16" y="12" rx="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">여러 통신사 동시가능</h3>
                <p className="mt-2 text-muted-foreground">
                  사무실 전화기가 LG / SK / KT 가 같이 있을 경우에도 녹음이 가능합니다
                </p>
              </Card>
              <Card className="flex flex-col items-center text-center p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-primary"
                  >
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">통신사 API 충돌</h3>
                <p className="mt-2 text-muted-foreground">
                  녹취에 통신사 API를 사용하지 않기 때문에 기존 프로그램과 충돌이 나지 않습니다.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* 사용이유 섹션 */}
        <section id="reasons" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                전화 녹취를 사용해야하는 이유
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                    <path d="M12 18V6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">초기 비용 부담 없음</h3>
                <p className="mt-2 text-muted-foreground">초기 비용 없이 구축하고</p>
                <p className="text-muted-foreground">저렴한 요금으로 비용 절감</p>
              </Card>
              <Card className="flex flex-col p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary"
                  >
                    <path d="M20 7h-9" />
                    <path d="M14 17H5" />
                    <circle cx="17" cy="17" r="3" />
                    <circle cx="7" cy="7" r="3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">맞춤 설치 및 구축</h3>
                <p className="mt-2 text-muted-foreground">기업 상황에 맞게 임대형</p>
                <p className="text-muted-foreground">또는 구축 및 설치</p>
              </Card>
              <Card className="flex flex-col p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary"
                  >
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">녹취 시스템</h3>
                <p className="mt-2 text-muted-foreground">보안, 시스템 관리등</p>
                <p className="text-muted-foreground">국내 최고의 콜센터 서비스</p>
              </Card>
              <Card className="flex flex-col p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">신뢰도 높은 A/S</h3>
                <p className="mt-2 text-muted-foreground">신뢰 높은 A/S 서비스로</p>
                <p className="text-muted-foreground">안정적인 운영</p>
              </Card>
              <Card className="flex flex-col p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary"
                  >
                    <path d="M12 2a8 8 0 0 1 8 8v12a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-6H7v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V10a8 8 0 0 1 8-8z" />
                    <path d="M20 14h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2" />
                    <path d="M16 6h-2a4 4 0 0 0-4 4v4h6v-4a4 4 0 0 0-4-4h-2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">AICC</h3>
                <p className="mt-2 text-muted-foreground">업무의 효율성을 상승시킬</p>
                <p className="text-muted-foreground">수 있는 자동화 AI솔루션</p>
              </Card>
              <Card className="flex flex-col p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary"
                  >
                    <path d="M12 2v8" />
                    <path d="m4.93 10.93 1.41 1.41" />
                    <path d="M2 18h2" />
                    <path d="M20 18h2" />
                    <path d="m19.07 10.93-1.41 1.41" />
                    <path d="M22 22H2" />
                    <path d="m16 6-4 4-4-4" />
                    <path d="M16 18a4 4 0 0 0-8 0" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">신속한 설치</h3>
                <p className="mt-2 text-muted-foreground">고객들의 일정에 맞춘</p>
                <p className="text-muted-foreground">간단하고 신속한 설치</p>
              </Card>
            </div>
          </div>
        </section>

        {/* 활용사례 섹션 */}
        <section id="cases" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                설치와 사용까지 편리한 전화 녹취 설치사례
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary"
                  >
                    <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
                    <path d="m8 16 4-4 4 4" />
                    <path d="M16 16v6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">보안 관제센터</h3>
                <p className="mt-2 text-muted-foreground">
                  비상 상황 발생 시 해당 기업의 콜센터를 통해 빠르게 해결 가능
                </p>
              </Card>
              <Card className="flex flex-col p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">병원</h3>
                <p className="mt-2 text-muted-foreground">
                  병원 예약 및 퇴원, 질병 문의 등 전화로 상담하고 해결하기에 탁월
                </p>
              </Card>
              <Card className="flex flex-col p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary"
                  >
                    <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                    <path d="M13 5v2" />
                    <path d="M13 17v2" />
                    <path d="M13 11v2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">보험사</h3>
                <p className="mt-2 text-muted-foreground">
                  보험접수/해지 및 가입 문의 등 직접 가지 않아도 바로 처리 가능
                </p>
              </Card>
              <Card className="flex flex-col p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary"
                  >
                    <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                    <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                    <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                    <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                    <path d="M8 14h.01" />
                    <path d="M12 14h.01" />
                    <path d="M16 14h.01" />
                    <path d="M8 10h.01" />
                    <path d="M12 10h.01" />
                    <path d="M16 10h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">서비스업</h3>
                <p className="mt-2 text-muted-foreground">오픈/마감시간 및 각종 문의 등의 전화를 쉽고 빠르게 응대</p>
              </Card>
              <Card className="flex flex-col p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">아파트 관리실</h3>
                <p className="mt-2 text-muted-foreground">
                  녹취 기능을 통한 악성 민원의 사전 예방과 내선전화로 편리하게 이용
                </p>
              </Card>
              <Card className="flex flex-col p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">학교 / 학원</h3>
                <p className="mt-2 text-muted-foreground">
                  내선전화 및 통화녹취로 안전한 상담과 각 교무실 간 쉬운 연결 가능
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* 온라인 접수 섹션 */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">녹취 상담 접수</h2>
              <p className="text-muted-foreground">(신청 하시면 신청 순서에 따라 연락드리겠습니다)</p>
            </div>
            <div className="mx-auto max-w-3xl">
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="business-number">사업자번호</Label>
                        <Input id="business-number" placeholder="000-00-00000" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="representative">대표자명</Label>
                        <Input id="representative" placeholder="홍길동" />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="telecom">사용중통신사</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="통신사 선택" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="kt">KT</SelectItem>
                            <SelectItem value="lg">LG</SelectItem>
                            <SelectItem value="sk">SK</SelectItem>
                            <SelectItem value="other">기타</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company-name">회사이름</Label>
                        <Input id="company-name" placeholder="(주)텔레코드" />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">연락처</Label>
                        <Input id="phone" placeholder="010-0000-0000" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">서비스신청</Label>
                        <Select defaultValue="recording">
                          <SelectTrigger>
                            <SelectValue placeholder="서비스 선택" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="recording">녹취</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address1">주소</Label>
                      <Input id="address1" placeholder="주소입력" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address2">상세주소</Label>
                      <Input id="address2" placeholder="상세주소" />
                    </div>
                    <Button type="submit" className="w-full">
                      접수하기
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-6 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-base font-medium">직통전화: 010-7472-7564</p>
              <p className="text-sm text-muted-foreground mt-2">
                상호 비에쓰 | 사업자번호 259-15-01605 | Email bs_0503@naver.com
              </p>
              <p className="text-sm text-muted-foreground mt-1">주소 인천 남동구 남동대로239번길 68, 2층 202호</p>
            </div>
            <div className="flex justify-start md:justify-end items-end">
              <p className="text-sm text-muted-foreground">COPYRIGHT©2025, PKNURI CO.,LTD All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

