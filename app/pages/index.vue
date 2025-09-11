<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const { locale, setLocale, t, tm } = useI18n();
const { $colorMode } = useNuxtApp();
import MarkdownIt from "markdown-it";

const toggleLanguage = () => {
  setLocale(locale.value === "ko" ? "en" : "ko");
};

const handleVisit = (href: string) => {
  window.open(href, "_blank");
};

const toggleTheme = () => {
  $colorMode.preference = $colorMode.preference === "dark" ? "light" : "dark";
};

onMounted(() => {
  $colorMode.preference = "light";
  setLocale(locale.value);
});

const markdown = new MarkdownIt({
  html: false,
  linkify: true,
  breaks: true,
});

const renderMarkdown = (content: string): string => {
  if (!content) return "";
  return markdown.render(content);
};

type ExperienceDetail = {
  heading: string;
  subText?: string;
  detail: string; // markdown string
  isSmallText?: boolean;
};

type Experience = {
  companyKey: string;
  dateKey: string;
  borderColorClass: string;
  badgeKey?: string;
  sections: ExperienceDetail[];
};

type SkillCategory = {
  name: string;
  color: string;
  skills: string[];
};

type LocalizedText = string | { ko: string; en?: string };

type PortfolioItem = {
  titleKey?: string;
  title?: LocalizedText;
  subtitleKey?: string;
  subtitle?: LocalizedText;
  href: string;
};

type EducationItem = {
  schoolKey: string;
  dateKey: string;
  borderColorClass: string;
  description: string;
};

const getLocalizedText = (value?: LocalizedText): string => {
  if (!value) return "";
  if (typeof value === "string") return value;
  const currentLocale = (locale.value as "ko" | "en") || "ko";
  return value[currentLocale] || value.ko || "";
};

const tOrText = (key?: string, value?: LocalizedText): string => {
  return key ? t(key) : getLocalizedText(value);
};

const contactMethods = [
  { icon: "heroicons:phone", text: t("phone") },
  { icon: "heroicons:envelope", text: t("email") },
];

const aboutItems = [
  {
    ordinalKey: "about_content.first",
    contentKey: "about_content.first_content",
  },
  {
    ordinalKey: "about_content.second",
    contentKey: "about_content.second_content",
  },
  {
    ordinalKey: "about_content.third",
    contentKey: "about_content.third_content",
  },
  {
    ordinalKey: "about_content.fourth",
    contentKey: "",
  },
];

const experiences: Experience[] = [
  {
    companyKey: "experience_items.super_run.company",
    dateKey: "experience_items.super_run.date",
    borderColorClass: "border-blue-500",
    badgeKey: "experience_items.super_run.badge",
    sections: [
      {
        heading: t("experience_items.super_run.projects.project1.heading"),
        subText: t("experience_items.super_run.projects.project1.description"),
        detail: t("experience_items.super_run.projects.project1.detail"),
      },
    ],
  },
  {
    companyKey: "experience_items.repich.company",
    dateKey: "experience_items.repich.date",
    borderColorClass: "border-blue-500",
    sections: [
      {
        heading: t("experience_items.repich.projects.project1.heading"),
        subText: t("experience_items.repich.projects.project1.description"),
        detail: t("experience_items.repich.projects.project1.detail"),
      },
      {
        heading: t("experience_items.repich.projects.project2.heading"),
        subText: t("experience_items.repich.projects.project2.description"),
        detail: t("experience_items.repich.projects.project2.detail"),
      },
      {
        heading: t("experience_items.repich.projects.project3.heading"),
        subText: t("experience_items.repich.projects.project3.description"),
        detail: t("experience_items.repich.projects.project3.detail"),
      },
      {
        heading: t("experience_items.repich.projects.project4.heading"),
        detail: t("experience_items.repich.projects.project4.detail"),
      },
    ],
  },
  {
    companyKey: "experience_items.eipgrid.company",
    dateKey: "experience_items.eipgrid.date",
    borderColorClass: "border-green-500",
    sections: [
      {
        heading: t("experience_items.eipgrid.projects.project1.heading"),
        subText: t("experience_items.eipgrid.projects.project1.link"),
        detail: t("experience_items.eipgrid.projects.project1.detail"),
      },
      {
        heading: t("experience_items.eipgrid.projects.project2.heading"),
        subText: t("experience_items.eipgrid.projects.project2.description"),
        detail: t("experience_items.eipgrid.projects.project2.detail"),
      },
      {
        heading: t("experience_items.eipgrid.projects.project3.heading"),
        subText: t("experience_items.eipgrid.projects.project3.description"),
        detail: t("experience_items.eipgrid.projects.project3.detail"),
      },
    ],
  },
  {
    companyKey: "experience_items.ion_communications.company",
    dateKey: "experience_items.ion_communications.date",
    borderColorClass: "border-green-500",
    sections: [
      {
        heading: t(
          "experience_items.ion_communications.projects.project1.heading"
        ),
        detail: t(
          "experience_items.ion_communications.projects.project1.detail"
        ),
      },
    ],
  },
  {
    companyKey: "experience_items.majoonsoft.company",
    dateKey: "experience_items.majoonsoft.date",
    borderColorClass: "border-purple-500",
    sections: [
      {
        heading: t("experience_items.majoonsoft.projects.project1.heading"),
        subText: t("experience_items.majoonsoft.projects.project1.description"),
        detail: t("experience_items.majoonsoft.projects.project1.detail"),
      },
      {
        heading: t("experience_items.majoonsoft.projects.project2.heading"),
        subText: t("experience_items.majoonsoft.projects.project2.description"),
        detail: t("experience_items.majoonsoft.projects.project2.detail"),
      },
    ],
  },
];

const skillCategories: SkillCategory[] = [
  {
    name: t("skill_categories.languages.name"),
    color: "bg-blue-500",
    skills: (tm("skill_categories.languages.skills") as unknown as any[]).map(
      (skill: any) => skill?.body?.static || skill.b.s as string
    ),
  },
  {
    name: t("skill_categories.frameworks.name"),
    color: "bg-green-500",
    skills: (tm("skill_categories.frameworks.skills") as unknown as any[]).map(
      (skill: any) => skill?.body?.static || skill.b.s as string || ''
    ),
  },
  {
    name: t("skill_categories.databases.name"),
    color: "bg-purple-500",
    skills: (tm("skill_categories.databases.skills") as unknown as any[]).map(
      (skill: any) => skill?.body?.static || skill.b.s as string || ''
    ),
  },
  {
    name: t("skill_categories.devops.name"),
    color: "bg-orange-500",
    skills: (tm("skill_categories.devops.skills") as unknown as any[]).map(
      (skill: any) => skill?.body?.s || skill.b.s as string || ''
    ),
  },
];

const educationItems: EducationItem[] = [
  {
    schoolKey: "education_items.ajou_university.school",
    dateKey: "education_items.ajou_university.date",
    borderColorClass: "border-blue-500",
    description: "education_items.ajou_university.description",
  },
  {
    schoolKey: "education_items.korea_aerospace_university.school",
    dateKey: "education_items.korea_aerospace_university.date",
    borderColorClass: "border-green-500",
    description: "education_items.korea_aerospace_university.description",
  },
];

const portfolioItems: PortfolioItem[] = (
  tm("portfolio_items") as unknown as any[]
).map((item: any) => {
	console.log(item);
  return {
    title: (item.title?.body?.static || item.title.b.s as string || '') as string,
    subtitle: (item.subtitle?.body?.static || item.subtitle.b.s as string || '').replace("/at/", "@") as string,
    href: (item.href?.body?.static || item.href.b.s as string || ''),
  };
});
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header with Language and Theme Toggle -->
    <header
      class="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700"
    >
      <div
        class="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center"
      >
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white" />
        <div class="flex gap-2">
          <UButton variant="outline" size="sm" @click="toggleTheme">
            <Icon
              :name="
                $colorMode.preference === 'dark'
                  ? 'heroicons:sun'
                  : 'heroicons:moon'
              "
            />
          </UButton>
          <UButton
            variant="outline"
            size="sm"
            :color="locale === 'ko' ? 'blue' : 'green'"
            @click="toggleLanguage"
          >
            {{ $t("language") }}
          </UButton>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-4xl mx-auto px-4 py-8">
      <!-- Contact Info -->
      <section class="mb-8">
        <UCard>
          <div class="flex justify-between">
            <div>
              <img
                src="/images/profile.png"
                alt="profile"
                class="h-48 rounded-lg shadow-sm"
              />
            </div>
            <div class="text-right flex flex-col">
              <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {{ $t("name") }}
              </h1>
              <a
                href="https://mackoLee.github.io"
                class="text-gray-600 dark:text-gray-300 mb-2"
              >
                https://mackoLee.github.io
              </a>
              <p class="text-xl text-gray-600 dark:text-gray-300 mb-4 mt-auto">
                {{ $t("job") }}
              </p>
              <div
                class="flex justify-center space-x-6 text-gray-600 dark:text-gray-300"
              >
                <div
                  v-for="(contact, idx) in contactMethods"
                  :key="idx"
                  class="flex items-center space-x-2"
                >
                  <Icon :name="contact.icon" />
                  <span>{{ contact.text }}</span>
                </div>
              </div>
            </div>
          </div>
        </UCard>
      </section>

      <section class="mb-8">
        <UCard>
          <template #header>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
              깊이있게 해결하였던 기술 문제
            </h2>
          </template>
          <div class="prose dark:prose-invert max-w-none">
            <div
              class="markdown-body [&>p]:m-0"
              v-html="
                renderMarkdown(`프론트엔드에서 API 재사용성을 높이고 REST API의 모든 데이터를 가져와오는 문제를 해결하기위해 어떻게하면 좋을까 고민을 하다가  
							nestjs에서 graphql을 통해 schema.gql 파일이 생성되는 것을 가지고 할 수 있을 것 같다고 생각하여, 구글링을 통해 검색을 하였고 codegen 이라는 것을 알게 되었습니다.
							곧바로 프로젝트 적용을 시도 하였지만, 여러 문제가 있었습니다.
							가장 큰 문제는 **GraphQL 쿼리의 복잡성**이었습니다. 클라이언트에서 필요한 데이터를 정확히 명시해야 했기 때문에, 처음에는 쿼리 작성이 어렵게 느껴졌습니다. 하지만 GraphQL의 타입 시스템과 codegen을 통해 자동으로 생성되는 TypeScript 타입 정의 덕분에, 쿼리 작성 시 발생할 수 있는 오류를 컴파일 타임에 미리 잡을 수 있게 되어 개발 생산성이 크게 향상되었습니다.
							또한, **REST API에 비해 초기 학습 곡선이 높다**는 점도 있었습니다. GraphQL의 개념과 쿼리 문법을 익히는 데 시간이 필요했지만, 한번 익숙해지니 데이터 요청 및 응답 처리가 훨씬 유연해졌습니다. 
							특히, 필요한 데이터만 선택적으로 가져올 수 있고 apollo-client에서 제공해주는 Preload Query를 통해 SSR을 적용하여 네트워크 오버헤드를 줄이고 애플리케이션의 성능을 최적화할 수 있었습니다.`)
              "
            />
          </div>
        </UCard>
      </section>

      <!-- About Me -->
      <section class="mb-8">
        <UCard>
          <template #header>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
              {{ $t("about") }}
            </h2>
          </template>
          <div class="prose dark:prose-invert max-w-none">
            <p class="text-lg leading-relaxed">
              {{ $t("about_content.title") }}
            </p>

            <div class="mt-6 space-y-4">
              <p v-for="item in aboutItems" :key="item.contentKey">
                {{ $t(item.ordinalKey) }},
                {{ $t(item.contentKey) }}
              </p>
            </div>
          </div>
        </UCard>
      </section>

      <!-- Experience -->
      <section class="mb-8">
        <UCard>
          <template #header>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
              {{ $t("experience") }}
            </h2>
          </template>

          <div class="space-y-8">
            <div
              v-for="exp in experiences"
              :key="exp.companyKey"
              :class="['border-l-4', exp.borderColorClass, 'pl-6']"
            >
              <div class="flex items-center mb-2 gap-4">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                  {{ $t(exp.companyKey) }}
                </h3>
                <UBadge v-if="exp.badgeKey" color="blue" variant="solid">
                  {{ $t(exp.badgeKey) }}
                </UBadge>
              </div>
              <p class="text-gray-600 dark:text-gray-300 mb-3">
                {{ $t(exp.dateKey) }}
              </p>

              <div class="space-y-4">
                <div
                  v-for="(section, sIdx) in exp.sections"
                  :key="sIdx"
                  class="border-t border-gray-200 dark:border-gray-700 pt-4"
                >
                  <h4
                    class="font-semibold text-gray-800 dark:text-gray-200 mb-2"
                  >
                    {{ section.heading }}
                  </h4>
                  <p
                    v-if="section.subText"
                    class="text-md text-gray-700 dark:text-gray-300 mb-2"
                  >
                    {{ section.subText }}
                  </p>
                  <div
                    class="markdown-body prose dark:prose-invert max-w-none [&>ol]:mb-0 [&>ol>li>p]:my-0 [&>ol>li>ul]:mt-0 [&>ol>li>ul>li]:my-1 [&>ol>li>ul]:pl-0 [&>ol>li>ul]:text-sm [&>ol>li>ul]:!text-gray-600"
                    v-html="renderMarkdown(section.detail)"
                  />
                </div>
              </div>
            </div>
          </div>
        </UCard>
      </section>

      <!-- Technical Skills -->
      <section class="mb-8">
        <UCard>
          <template #header>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
              {{ $t("skills") }}
            </h2>
          </template>

          <div class="grid md:grid-cols-2 gap-6">
            <div v-for="category in skillCategories" :key="category.name">
              <h3
                class="text-lg font-semibold text-gray-900 dark:text-white mb-3"
              >
                {{ category.name }}
              </h3>
              <div class="flex flex-wrap gap-2">
                <UBadge
                  v-for="skill in category.skills"
                  :key="skill"
                  variant="soft"
                  :class="category.color + ' text-white'"
                >
                  {{ skill }}
                </UBadge>
              </div>
            </div>
          </div>
        </UCard>
      </section>

      <!-- Portfolio Links -->
      <section class="mb-8">
        <UCard>
          <template #header>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
              {{ $t("portfolio") }}
            </h2>
          </template>

          <div class="grid gap-4">
            <div
              v-for="(item, idx) in portfolioItems"
              :key="idx"
              class="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              <div>
                <h3 class="font-medium text-gray-900 dark:text-white">
                  {{ tOrText(item.title) }}
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  {{ tOrText(item.subtitleKey, item.subtitle) }}
                </p>
              </div>
              <UButton size="sm" @click="handleVisit(item.href)">
                {{ $t("visit") }}
              </UButton>
            </div>
          </div>
        </UCard>
      </section>

      <!-- Education -->
      <section class="mb-8">
        <UCard>
          <template #header>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
              {{ $t("education") }}
            </h2>
          </template>

          <div class="space-y-6">
            <div
              v-for="edu in educationItems"
              :key="edu.schoolKey"
              :class="['border-l-4', edu.borderColorClass, 'pl-6']"
            >
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                🎓 {{ $t(edu.schoolKey) }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                {{ $t(edu.dateKey) }}
              </p>
              <p class="text-sm text-gray-700 dark:text-gray-300 mt-2">
                {{ $t(edu.description) }}
              </p>
            </div>
          </div>
        </UCard>
      </section>
    </main>

    <!-- Footer -->
    <footer
      class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16"
    >
      <div
        class="max-w-4xl mx-auto px-4 py-8 text-center text-gray-600 dark:text-gray-300"
      >
        <p>© 2025 {{ $t("name") }}. {{ $t("rights") }}</p>
      </div>
    </footer>
  </div>
</template>
