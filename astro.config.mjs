import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

const SITE_URL = process.env.SITE_URL ?? 'https://asiaeduhub.pages.dev';

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
      // 검색엔진 인덱스에서 제외할 경로 패턴.
      //  - /advertise/ : 광고주 영업용, 학부모 검색 노출 불필요
      //  - /experts/   : 콘텐츠 0건 시 빈 인덱스 (콘텐츠 누적 후 제외 패턴에서 제거)
      filter: (page) => {
        return !/\/(advertise|experts)\/?$/.test(page);
      },
    }),
  ],
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
