import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from './i18n';

export type SchoolEntry = CollectionEntry<'schools'>;
export type Region = 'southeast-asia' | 'anglosphere' | 'domestic';

/**
 * 사양서의 메뉴 그룹화에 따른 country → region 매핑.
 * URL `/[locale]/abroad/{region}/{country}/{city}/{slug}/` 생성 시 사용.
 */
export const COUNTRY_REGION: Record<string, Region> = {
  korea: 'domestic',
  malaysia: 'southeast-asia',
  thailand: 'southeast-asia',
  singapore: 'southeast-asia',
  vietnam: 'southeast-asia',
  indonesia: 'southeast-asia',
  philippines: 'southeast-asia',
  usa: 'anglosphere',
  uk: 'anglosphere',
  canada: 'anglosphere',
  australia: 'anglosphere',
};

export function getRegion(country: string): Region {
  return COUNTRY_REGION[country] ?? 'southeast-asia';
}

export const COUNTRY_LABEL: Record<Locale, Record<string, string>> = {
  ko: {
    korea: '한국',
    malaysia: '말레이시아',
    thailand: '태국',
    singapore: '싱가포르',
    vietnam: '베트남',
    indonesia: '인도네시아',
    philippines: '필리핀',
    usa: '미국',
    uk: '영국',
    canada: '캐나다',
    australia: '호주',
    other: '기타',
  },
  zh: {
    korea: '韩国',
    malaysia: '马来西亚',
    thailand: '泰国',
    singapore: '新加坡',
    vietnam: '越南',
    indonesia: '印度尼西亚',
    philippines: '菲律宾',
    usa: '美国',
    uk: '英国',
    canada: '加拿大',
    australia: '澳大利亚',
    other: '其他',
  },
};

export const REGION_LABEL: Record<Locale, Record<Region, string>> = {
  ko: {
    'southeast-asia': '동남아',
    anglosphere: '영미권',
    domestic: '국내',
  },
  zh: {
    'southeast-asia': '东南亚',
    anglosphere: '英美澳加',
    domestic: '韩国',
  },
};

export const BUDGET_LABEL: Record<Locale, Record<string, string>> = {
  ko: {
    'budget-friendly': '가성비',
    'mid-range': '중간 예산',
    premium: '프리미엄',
    'top-tier': '최상위',
  },
  zh: {
    'budget-friendly': '高性价比',
    'mid-range': '中等预算',
    premium: '高端',
    'top-tier': '顶级',
  },
};

/**
 * 컬렉션에서 특정 locale 의 학교만 반환. 파일명이 슬러그.
 */
export async function loadSchools(locale: Locale): Promise<SchoolEntry[]> {
  const all = await getCollection('schools', (entry) => entry.data.locale === locale);
  return all.sort((a, b) => a.data.name.localeCompare(b.data.name));
}

/**
 * URL 슬러그(파일명) 에서 locale suffix 를 제거. 예: 'iskl-kl-ko' → 'iskl-kl'
 * 같은 학교의 다른 언어 버전을 짝지을 때 사용.
 */
export function basePairKey(entry: SchoolEntry): string {
  return entry.data.hreflang_pair ?? entry.data.id;
}

/**
 * 학교의 정규 URL. 사양서 URL 구조에 일치.
 */
export function schoolUrl(entry: SchoolEntry): string {
  const region = getRegion(entry.data.country);
  return `/${entry.data.locale}/abroad/${region}/${entry.data.country}/${entry.data.city}/${entry.slug}/`;
}

export function formatUsd(amount: number, locale: Locale): string {
  return new Intl.NumberFormat(locale === 'ko' ? 'ko-KR' : 'zh-CN', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === 'ko' ? 'ko-KR' : 'zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}
