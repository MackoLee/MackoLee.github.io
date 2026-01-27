"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Mail,
  Phone,
  Github,
  Briefcase,
  GraduationCap,
  Code2,
  Rocket,
  Award,
  ExternalLink,
} from "lucide-react";

const techStack = {
  Languages: ["Python", "JavaScript", "TypeScript", "Java", "C++"],
  Frontend: ["Unity", "Flutter", "React", "Next.js", "Vue.js", "Nuxt.js", "Tailwind CSS"],
  Backend: ["Spring Boot", "Flask", "FastAPI", "Nest.js", "GraphQL"],
  DevOps: ["AWS EC2", "Docker", "Nginx", "Git", "Jenkins", "CI/CD"],
  Database: ["PostgreSQL", "MySQL", "Redis"],
};

const careers = [
  {
    company: "리피치 그룹 (리피치 / 슈퍼런 / 팜큐)",
    period: "2024.06 - 현재",
    duration: "1년 8개월",
    role: "Technical Lead",
    description:
      "같은 오너가 운영하는 세 법인에서 Technical Lead로 활동하며 LMS 및 스마트 플레이어 개발을 주도하고 있습니다.",
    projects: [
			 {
        name: "멀티 플랫폼 플레이어 및 인프라 고도화 진행중",
        period: "2025.09 - 현재",
        achievement: "React Native 기반 멀티 플랫폼 아키텍처 설계",
        highlights: [
          "Web, Mobile, Desktop 단일 코드베이스 플레이어 설계",
          "자체 LLM 서버 구축 - AI 기능 내재화",
          "DevOps 체계 구축 - CI/CD 파이프라인 고도화",
        ],
      },
			{
        name: "창업지원사업 연구항목 리서치",
        period: "2024.06 - 현재",
        achievement: "TIPS 2건, 디딤돌 1건 선정 기여",
        highlights: [
          "Repeach Global TIPS 선정 - AI 기술 연구항목 탐색 및 정리",
          "팜큐 TIPS 선정 - 연구항목 탐색 및 정리",
          "Superlearn 디딤돌 선정 - 연구항목 탐색 및 정리",
        ],
      },
      {
        name: "GA4 데이터 분석 체계 구축",
        period: "2024.10 - 현재",
        achievement: "광고 키워드별 상담 전환률 추적 시스템 구축",
        highlights: [
          "GA4 이벤트 트래킹 설계 및 구현",
          "광고 키워드별 유입 및 상담 전환률 데이터 수집",
          "마케팅 ROI 분석을 위한 데이터 파이프라인 구축",
        ],
      },
			{
        name: "LMS 개발",
        period: "2024.11 - 2025.08",
        achievement: "강의 패키징 및 결제 시스템, Production/Staging 서버 분리, 배포 자동화",
        highlights: [
          "패키징 강의 진도 관리 기능",
          "KG inicis 결제 연동, Git Action 배포 자동화",
          "Nginx 와일드카드 도메인 및 SSL 적용",
        ],
      },

      {
        name: "관리자 페이지 개발 및 플레이어 고도화",
        period: "2024.10 - 2024.12",
        achievement: "플레이어 영상 업로드 및 STT 관리 기능 추가",
        highlights: [
          "SaaS 서비스 전환, Markdown 필기 기능 도입",
          "GraphQL 도입",
          "Google Cloud VM, Database, Storage 인프라 구축",
        ],
      },
      {
        name: "LG CNS 온디바이스 AI 챌린지",
        period: "2024.06 - 2024.09",
        achievement: "128개 기업 중 10개사 내 선정 및 부스 진행",
        highlights: [
          "스마트 플레이어 개발 - STT 자막, AI 영상 구간 생성, AI 요약, AI 질의응답 및 필기 기능",
          "Electron + Next.js(SPA) exe 어플리케이션 개발",
          "백엔드 및 영상 분석서버 개발 - Nest.js + FFmpeg + Google STT",
          "Kakao Cloud VM 활용 인프라 구축",
        ],
      },
    ],
  },
  {
    company: "아이온 그룹 (이아이피그리드 / 아이온커뮤니케이션즈)",
    period: "2021.12 - 2024.06",
    duration: "2년 7개월",
    role: "Software Engineer",
    description: "아이온커뮤니케이션즈 입사 후, 이아이피그리드 사업부로 스핀오프되어 에너지 관리 시스템 및 데이터 분석 툴 개발",
    projects: [
      {
        name: "분석용 어플리케이션 연구 개발",
        period: "2022.06 - 2024.04",
        highlights: [
          "ESS 충방전 관리 알고리즘 개발",
          "Vue2/Webpack → Vue3/Vite 마이그레이션",
          "일본 TIS와 협력하여 제품화 기획",
        ],
      },
      {
        name: "전기차 충전 관리 어플리케이션",
        period: "2023.11 - 2024.04",
        achievement: "트럭 배차 알고리즘 최적화: 14.5초 → 0.5초",
        highlights: [
          "백엔드(Java) REST API 설계 및 개발",
          "Vue 웹 어플리케이션 개발",
        ],
      },
      {
        name: "소매 VPP 어플리케이션",
        period: "2024.01 - 2024.04",
        highlights: [
          "Redis 활용 분산 스케줄링 로직 개발",
          "Flask → FastAPI 마이그레이션",
        ],
      },
    ],
  },
  {
    company: "마준소프트주식회사",
    period: "2020.11 - 2021.03",
    duration: "5개월",
    role: "Software Engineer",
    description: "관리사이트 보안 기능 개발 및 IDC 트래픽 관리",
    projects: [
      {
        name: "관리사이트 보안 기능 개발",
        highlights: [
          "로그인 보안 취약점 해결 (JWT 탈취 대응)",
          "중요정보 변경 시 비밀번호 재확인 기능",
        ],
      },
      {
        name: "트래픽관리 IDC",
        highlights: [
          "실시간 트래픽 모니터링 및 QoS 설정",
          "DDoS 공격 대응 (KT 협업)",
        ],
      },
    ],
  },
];

const education = [
  {
    school: "아주대학교 정보통신대학원",
    period: "2018.03 - 2020.02",
    major: "정보통신공학과 지능형소프트웨어",
    status: "수료",
  },
  {
    school: "한국항공대학교",
    period: "2012.03 - 2016.02",
    major: "소프트웨어학과",
    status: "졸업",
    achievement: "졸업 프로젝트 최우수상 - 자전거 네비게이션 (Android + Arduino 레이저 통신)",
  },
];

const sideProjects = [
  {
    name: "스킬북",
    description: "Todo 앱 (Flutter, 1인 개발) - AI 스킬 생성기능 및 광고",
    links: [
      { label: "iOS", url: "https://apps.apple.com/kr/app/skillbook/id6755327760" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=com.travel.skillbook" },
    ],
  },
  {
    name: "트래블듀오",
    description: "여행기록 앱 (Flutter, 2인 개발)",
    links: [
      { label: "iOS", url: "https://apps.apple.com/kr/app/트래블듀오/id6670733527" },
    ],
  },
  {
    name: "Unity 게임",
    description: "게임 개발 중",
    links: [],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 max-w-4xl items-center justify-between px-4">
          <span className="font-semibold">Macko Lee</span>
          <ModeToggle />
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex-1">
              <h1 className="mb-2 text-4xl font-bold tracking-tight">이윤건</h1>
              <p className="mb-4 text-xl text-muted-foreground">Macko Lee</p>
              <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                가치를 배우고 성장하는 개발자 이윤건입니다.
              </blockquote>
            </div>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a
                href="tel:+821025272927"
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4" />
                +82 10-2527-2927
              </a>
              <a
                href="mailto:sangok1993@naver.com"
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                sangok1993@naver.com
              </a>
              <a
                href="https://github.com/MackoLee"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4" />
                github.com/MackoLee
              </a>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="mb-12">
          <Card>
            <CardContent className="pt-6">
              <p className="leading-relaxed text-muted-foreground">
                앱 및 웹앱 개발 프로젝트를 주도하며 설계부터 구현, 자동화까지 전반적인 과정을 성공적으로 이끌었습니다.
                단일 플랫폼에 국한되지 않고 Web, Mobile, Desktop 등 다양한 플랫폼을 직접 개발해보며
                각 플랫폼의 장단점을 분석하고 최적의 기술 선택을 위한 노하우를 쌓고 있습니다.
                공군 장교로 복무하며 쌓은 리더십과 책임감을 바탕으로 팀을 이끌고 있습니다.
              </p>
              <Separator className="my-4" />
              <p className="leading-relaxed text-muted-foreground">
                2021년 GitHub Copilot 출시부터 AI 기술을 적극적으로 사용하고 Cursor 와 Antigravity 초기부터 두 IDE 활용하여 개발하는 등,
								새로운 AI 기술이 나올 때마다 실제 프로젝트에 도입하여 노하우를 쌓아왔습니다.
                이러한 AI 활용 경험을 바탕으로 TIPS 연구항목을 성공적으로 탐색하고 정리하여 선정에 기여했습니다.
                비즈니스 목표를 이해하고 기술로 가치를 더하는 개발자가 되기 위해 노력하고 있습니다.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-2">
            <Code2 className="h-6 w-6" />
            <h2 className="text-2xl font-bold">기술 스택</h2>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="grid gap-4">
                {Object.entries(techStack).map(([category, techs]) => (
                  <div key={category} className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <span className="min-w-[100px] font-medium">{category}</span>
                    <div className="flex flex-wrap gap-2">
                      {techs.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Career */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-2">
            <Briefcase className="h-6 w-6" />
            <h2 className="text-2xl font-bold">경력</h2>
            <Badge variant="outline">4년 3개월</Badge>
          </div>
          <div className="space-y-6">
            {careers.map((career, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <CardTitle className="text-xl">{career.company}</CardTitle>
                      <CardDescription className="mt-1">
                        {career.role} | {career.duration}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {career.period}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{career.description}</p>
                </CardHeader>
                {career.projects.length > 0 && (
                  <CardContent>
                    <div className="space-y-6">
                      {career.projects.map((project, pidx) => (
                        <div key={pidx} className="border-l-2 border-muted pl-4">
                          <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                            <h4 className="font-semibold">{project.name}</h4>
                            {"period" in project && project.period && (
                              <span className="text-xs text-muted-foreground">
                                {project.period}
                              </span>
                            )}
                          </div>
                          {"achievement" in project && project?.achievement && (
                            <p className="mb-2 text-sm font-medium text-primary">
                              {project.achievement}
                            </p>
                          )}
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {project.highlights.map((highlight, hidx) => (
                              <li key={hidx} className="flex gap-2">
                                <span className="text-primary">•</span>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-2">
            <GraduationCap className="h-6 w-6" />
            <h2 className="text-2xl font-bold">학력</h2>
          </div>
          <div className="space-y-4">
            {education.map((edu, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <CardTitle className="text-lg">{edu.school}</CardTitle>
                      <CardDescription>
                        {edu.major} | {edu.status}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {edu.period}
                    </Badge>
                  </div>
                  {edu.achievement && (
                    <p className="text-sm text-primary">{edu.achievement}</p>
                  )}
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Military Service */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-2">
            <Award className="h-6 w-6" />
            <h2 className="text-2xl font-bold">교육 및 자격</h2>
          </div>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <CardTitle className="text-lg">대한민국 공군 장교</CardTitle>
                    <CardDescription>장교 전역 (3년)</CardDescription>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    2016.03 - 2019.02
                  </Badge>
                </div>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    소대장 및 팀 리더로서 인원 관리 및 임무 수행
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    리더십과 책임감 함양
                  </li>
                </ul>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <CardTitle className="text-lg">KOSA - 아이온커뮤니케이션즈 채용확정형 교육</CardTitle>
                    <CardDescription>Spring Boot, Oracle, Vue 교육</CardDescription>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    2021.09
                  </Badge>
                </div>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    반장 및 팀장 역할, 23명 중 우수인원 선발
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    카드사 홈페이지 개발 프로젝트 (6개 팀 중 3등)
                  </li>
                </ul>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Side Projects */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-2">
            <Rocket className="h-6 w-6" />
            <h2 className="text-2xl font-bold">사이드 프로젝트</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sideProjects.map((project, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                {project.links.length > 0 && (
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.links.map((link, lidx) => (
                        <Button key={lidx} variant="outline" size="sm" asChild>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            {link.label}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container mx-auto max-w-4xl px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 Macko Lee. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
