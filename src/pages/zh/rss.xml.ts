import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const guides = await getCollection('guides', (e) => e.data.locale === 'zh');
  const items = guides
    .sort((a, b) => b.data.last_updated.getTime() - a.data.last_updated.getTime())
    .map((g) => ({
      title: g.data.title,
      pubDate: g.data.last_updated,
      description: g.data.summary,
      link: `/zh/guide/${g.slug.replace(/-zh$/, '')}/`,
      author: g.data.author,
      categories: [g.data.category],
    }));

  return rss({
    title: 'AsiaEduHub — 留学指南 (中文)',
    description:
      '居住马来西亚的家长 David 独立整理的东南亚 · 韩国国际学校指南。IB · A-Level · AP · MM2H 签证等家长必备信息。',
    site: context.site!,
    items,
    customData: '<language>zh-CN</language>',
    stylesheet: false,
  });
}
