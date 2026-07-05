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
 * 언어별 경로 접두사. 기본 언어(한국어)는 접두사 없음(''), 그 외는 `/{locale}`.
 * 링크 생성 시 `${localePrefix(locale)}/about/` 형태로 사용.
 */
export function localePrefix(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? '' : `/${locale}`;
}

/**
 * 현재 경로의 다른 언어 버전 URL 을 생성. hreflang 태그에 사용.
 * 기본 언어는 접두사 없이(/about/), 그 외는 접두사 포함(/zh/about/).
 */
export function alternateUrlFor(pathname: string, target: Locale): string {
  const parts = pathname.split('/').filter(Boolean);
  // 기존 언어 접두사가 있으면 제거 후 대상 언어 접두사로 재구성.
  if (isLocale(parts[0])) parts.shift();
  const prefix = localePrefix(target);
  if (parts.length === 0) return prefix + '/';
  return prefix + '/' + parts.join('/') + '/';
}

export const HTML_LANG: Record<Locale, string> = {
  ko: 'ko-KR',
  zh: 'zh-CN',
};
