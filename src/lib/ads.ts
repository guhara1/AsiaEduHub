/**
 * 광고 데이터 타입. 광고 체결 시 props 또는 collection 으로 주입.
 *
 * 사양:
 *  - 직접 광고 / 제휴 광고만 사용 (자동 광고 네트워크는 별도 슬롯)
 *  - 모든 광고에 SPONSORED 라벨 명시 (사양 4순위 — 광고-콘텐츠 분리)
 *  - 광고 링크는 rel="sponsored noopener", target="_blank"
 */
export interface AdCreative {
  /** 클릭 시 이동 URL (제휴사·광고주). UTM 권장. */
  href: string;
  /** 배너 이미지 (없으면 텍스트 광고로 표시). 슬롯 사이즈와 동일한 png/webp 권장. */
  image_src?: string;
  /** 접근성·SEO 용 alt 텍스트. 이미지·텍스트 광고 모두 필수. */
  alt: string;
  /** 광고주 이름 (작게 표시) */
  sponsor: string;
  /** 텍스트 광고 — 제목 */
  headline?: string;
  /** 텍스트 광고 — 본문 한 줄 */
  body?: string;
}
