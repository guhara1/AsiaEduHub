import koMessages from '../../messages/ko.json';
import zhMessages from '../../messages/zh.json';

export type Locale = 'ko' | 'zh';

export const SUPPORTED_LOCALES: readonly Locale[] = ['ko', 'zh'] as const;
export const DEFAULT_LOCALE: Locale = 'ko';

const messageMap = {
  ko: koMessages,
  zh: zhMessages,
} as const;

export type Messages = typeof koMessages;

export function getMessages(locale: Locale): Messages {
  return messageMap[locale];
}

export function isLocale(value: string | undefined): value is Locale {
  return value === 'ko' || value === 'zh';
}

/**
 * Astro 에서 현재 페이지 locale 을 안전하게 추출.
 * Astro.currentLocale 가 비어있을 때 URL 첫 세그먼트로 폴백.
 */
export function resolveLocale(currentLocale: string | undefined, pathname: string): Locale {
  if (isLocale(currentLocale)) return currentLocale;
  const seg = pathname.split('/').filter(Boolean)[0];
  return isLocale(seg) ? seg : DEFAULT_LOCALE;
}

/**
 * 현재 경로의 다른 언어 버전 URL 을 생성. hreflang 태그에 사용.
 */
export function alternateUrlFor(pathname: string, target: Locale): string {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length === 0) return `/${target}/`;
  if (isLocale(parts[0])) parts[0] = target;
  else parts.unshift(target);
  return '/' + parts.join('/') + (pathname.endsWith('/') ? '/' : '');
}

export const HTML_LANG: Record<Locale, string> = {
  ko: 'ko-KR',
  zh: 'zh-CN',
};
