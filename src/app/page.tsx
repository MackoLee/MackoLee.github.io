"use client";

import { useState } from "react";
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
import { DevEditor } from "@/components/dev-editor";
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

// 정적 import로 빌드 시 데이터 포함
import initialResumeData from "@/data/resume.json";

interface ResumeData {
  techStack: Record<string, string[]>;
  careers: {
    company: string;
    period: string;
    duration: string;
    role: string;
    description: string;
    projects: {
      name: string;
      period?: string;
      achievement?: string;
      highlights: string[];
    }[];
  }[];
  education: {
    school: string;
    period: string;
    major: string;
    status: string;
    achievement?: string;
  }[];
  sideProjects: {
    name: string;
    description: string;
    links: { label: string; url: string }[];
  }[];
  profile: {
    name: string;
    englishName: string;
    quote: string;
    phone: string;
    email: string;
    github: string;
    introduction: string[];
    totalCareerYears: string;
  };
}

export default function Home() {
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData as ResumeData);

  // 개발 모드: 데이터는 이미 번들에 포함되어 있음
  // 수정 후에는 페이지를 새로고침하면 최신 데이터가 반영됨

  const { techStack, careers, education, sideProjects, profile } = resumeData;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 max-w-4xl items-center justify-between px-4">
          <span className="font-semibold">{profile.englishName}</span>
          <ModeToggle />
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex-1">
              <h1 className="mb-2 text-4xl font-bold tracking-tight">{profile.name}</h1>
              <p className="mb-4 text-xl text-muted-foreground">{profile.englishName}</p>
              <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                {profile.quote}
              </blockquote>
            </div>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4" />
                {profile.phone}
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                {profile.email}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4" />
                {profile.github.replace("https://", "")}
              </a>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="mb-12">
          <Card>
            <CardContent className="pt-6">
              {profile.introduction.map((paragraph, idx) => (
                <div key={idx}>
                  <p className="leading-relaxed text-muted-foreground">{paragraph}</p>
                  {idx < profile.introduction.length - 1 && <Separator className="my-4" />}
                </div>
              ))}
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
            <Badge variant="outline">{profile.totalCareerYears}</Badge>
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
                            {project.period && (
                              <span className="text-xs text-muted-foreground">
                                {project.period}
                              </span>
                            )}
                          </div>
                          {project.achievement && (
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
          <p>© 2025 {profile.englishName}. All rights reserved.</p>
        </div>
      </footer>

      {/* Dev Editor - 개발 모드에서만 표시 */}
      <DevEditor
        data={resumeData as unknown as Record<string, unknown>}
        onSave={(data) => setResumeData(data as unknown as ResumeData)}
      />
    </div>
  );
}
