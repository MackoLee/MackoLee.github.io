import type { NextConfig } from 'next';

const isDev = process.env.NODE_ENV === 'development';

// 기본 확장자
const baseExtensions = ['tsx', 'ts', 'jsx', 'js'];

// 개발 모드에서만 .dev.ts/.dev.tsx 확장자 인식
const pageExtensions = isDev 
  ? ['dev.tsx', 'dev.ts', ...baseExtensions] 
  : baseExtensions;

const nextConfig: NextConfig = {
  // 개발 모드: SSR (API Route 사용 가능)
  // 빌드 모드: 정적 export (API Route 제외)
  ...(isDev ? {} : { output: 'export' }),
  pageExtensions,
  images: {
    unoptimized: true,
  },
  experimental: {
    /* experimental options here */
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
