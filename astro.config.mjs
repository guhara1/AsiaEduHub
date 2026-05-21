import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

const SITE_URL = process.env.SITE_URL ?? 'https://asiaeduhub.com';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'zh'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    react(),
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'ko',
        locales: {
          ko: 'ko-KR',
          zh: 'zh-CN',
        },
      },
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // 검색엔진 인덱스에서 제외할 경로 패턴.
      //  - /advertise/ : 광고주 영업용, 학부모 검색 노출 불필요
      //  - /experts/   : 콘텐츠 0건 시 빈 인덱스 (콘텐츠 누적 후 제외 패턴에서 제거)
      filter: (page) => {
        return !/\/(advertise|experts)\/?$/.test(page);
      },
      // URL 별 priority 차등 — 학교·가이드 페이지가 가장 중요
      serialize: (item) => {
        const url = item.url;
        // 메인 페이지 — 최고 우선순위
        if (/\/(ko|zh)\/?$/.test(url)) {
          item.priority = 1.0;
          item.changefreq = 'daily';
        }
        // 학교 detail 페이지 — 핵심 콘텐츠
        else if (/\/(abroad\/(malaysia|thailand|singapore|vietnam)|domestic\/(foreign|international)-schools)\/[^/]+\//.test(url)) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        }
        // 영어유치원 · 입학 자격 · 영미권 · 학교 유형 · MM2H 토픽 · 가이드 카테고리 — high-intent SEO 페이지
        else if (/\/domestic\/(kindergarten|admission-guide)\/|\/abroad\/(anglosphere|types)\/|\/mm2h\/[^/]+\/|\/guide\/(admission|tuition-scholarship|visa-residence|curriculum-compare|track-reviews)\//.test(url)) {
          item.priority = 0.85;
          item.changefreq = 'monthly';
        }
        // 블로그 상세 — 신선도 우선 (가이드보다 약간 높게)
        else if (/\/blog\/[^/]+\//.test(url)) {
          item.priority = 0.85;
          item.changefreq = 'weekly';
        }
        // 블로그 인덱스
        else if (/\/blog\/?$/.test(url)) {
          item.priority = 0.9;
          item.changefreq = 'daily';
        }
        // 가이드 상세 · 카탈로그 인덱스
        else if (/\/(guide|domestic|abroad|mm2h)\//.test(url)) {
          item.priority = 0.8;
        }
        // 도구·계산기 (커리큘럼 가이드·진학 시뮬레이터·캘린더는 high-intent SEO)
        else if (/\/tools\/(curriculum-guide|track-simulator|calendar|calculator)\//.test(url)) {
          item.priority = 0.85;
          item.changefreq = 'monthly';
        }
        else if (/\/(tools|experts)\//.test(url)) {
          item.priority = 0.7;
        }
        // 신뢰 페이지
        else if (/\/(about|contact|editorial-policy)\//.test(url)) {
          item.priority = 0.6;
        }
        return item;
      },
    }),
  ],
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
