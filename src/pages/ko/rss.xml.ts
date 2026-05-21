import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

// 한국어 RSS — 가이드 + 블로그 통합 (구글 · 네이버 발견 가속)
export async function GET(context: APIContext) {
  const guides = await getCollection('guides', (e) => e.data.locale === 'ko');
  const blogs = await getCollection('blog', (e) => e.data.locale === 'ko');

  const guideItems = guides.map((g) => ({
    title: g.data.title,
    pubDate: g.data.last_updated,
    description: g.data.summary,
    link: `/ko/guide/${g.slug.replace(/-ko$/, '')}/`,
    author: g.data.author,
    categories: [g.data.category, '가이드'],
  }));

  const blogItems = blogs.map((b) => ({
    title: b.data.title,
    pubDate: b.data.last_updated,
    description: b.data.summary,
    link: `/ko/blog/${b.slug.replace(/-ko$/, '')}/`,
    author: b.data.author,
    categories: [b.data.category, '블로그'],
  }));

  const items = [...guideItems, ...blogItems].sort(
    (a, b) => b.pubDate.getTime() - a.pubDate.getTime(),
  );

  const response = await rss({
    title: 'AsiaEduHub — 유학 가이드 · 블로그 (한국어)',
    description:
      '말레이시아 거주 학부모 데이비드가 직접 정리한 동남아·국내 국제학교 가이드 + 학교 방문기·운영자 칼럼. IB·A-Level·AP·MM2H 비자 등 학부모 필수 정보.',
    site: context.site!,
    items,
    customData: '<language>ko-KR</language>',
    stylesheet: false,
  });

  // 검색엔진이 신선도를 빠르게 확인하도록 짧은 캐시
  response.headers.set('Cache-Control', 'public, max-age=600, s-maxage=600');
  return response;
}
