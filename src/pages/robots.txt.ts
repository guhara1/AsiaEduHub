import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const sitemap = site ? new URL('sitemap-index.xml', site).href : '/sitemap-index.xml';
  const rssKo = site ? new URL('ko/rss.xml', site).href : '/ko/rss.xml';
  const rssZh = site ? new URL('zh/rss.xml', site).href : '/zh/rss.xml';
  const body = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /advertise/',
    '',
    '# AI 학습 크롤러 — 콘텐츠 무단 학습 차단 (사양상 운영자 1차 경험 보호)',
    'User-agent: GPTBot',
    'Disallow: /',
    '',
    'User-agent: CCBot',
    'Disallow: /',
    '',
    'User-agent: Google-Extended',
    'Disallow: /',
    '',
    'User-agent: anthropic-ai',
    'Disallow: /',
    '',
    'User-agent: ClaudeBot',
    'Disallow: /',
    '',
    `Sitemap: ${sitemap}`,
    `Sitemap: ${rssKo}`,
    `Sitemap: ${rssZh}`,
    '',
  ].join('\n');
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
