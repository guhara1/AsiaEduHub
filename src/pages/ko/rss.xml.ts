import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const guides = await getCollection('guides', (e) => e.data.locale === 'ko');
  const items = guides
    .sort((a, b) => b.data.last_updated.getTime() - a.data.last_updated.getTime())
    .map((g) => ({
      title: g.data.title,
      pubDate: g.data.last_updated,
      description: g.data.summary,
      link: `/ko/guide/${g.slug.replace(/-ko$/, '')}/`,
      author: g.data.author,
      categories: [g.data.category],
    }));

  return rss({
    title: 'AsiaEduHub — 유학 가이드 (한국어)',
    description:
      '말레이시아 거주 학부모 데이비드가 직접 정리한 동남아·국내 국제학교 가이드. IB·A-Level·AP·MM2H 비자 등 학부모 필수 정보.',
    site: context.site!,
    items,
    customData: '<language>ko-KR</language>',
    stylesheet: false,
  });
}
