import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

// 中文 RSS — 指南 + 博客整合 (Google · Baidu · Sogou 发现加速)
export async function GET(context: APIContext) {
  const guides = await getCollection('guides', (e) => e.data.locale === 'zh');
  const blogs = await getCollection('blog', (e) => e.data.locale === 'zh');

  const guideItems = guides.map((g) => ({
    title: g.data.title,
    pubDate: g.data.last_updated,
    description: g.data.summary,
    link: `/zh/guide/${g.slug.replace(/-zh$/, '')}/`,
    author: g.data.author,
    categories: [g.data.category, '指南'],
  }));

  const blogItems = blogs.map((b) => ({
    title: b.data.title,
    pubDate: b.data.last_updated,
    description: b.data.summary,
    link: `/zh/blog/${b.slug.replace(/-zh$/, '')}/`,
    author: b.data.author,
    categories: [b.data.category, '博客'],
  }));

  const items = [...guideItems, ...blogItems].sort(
    (a, b) => b.pubDate.getTime() - a.pubDate.getTime(),
  );

  const response = await rss({
    title: 'AsiaEduHub — 留学指南 · 博客 (中文)',
    description:
      '居住马来西亚的家长 David 独立整理的东南亚 · 韩国国际学校指南 + 学校访问记 · 站长专栏。IB · A-Level · AP · MM2H 签证等家长必备信息。',
    site: context.site!,
    items,
    customData: '<language>zh-CN</language>',
    stylesheet: false,
  });

  response.headers.set('Cache-Control', 'public, max-age=600, s-maxage=600');
  return response;
}
