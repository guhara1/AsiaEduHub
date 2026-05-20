# AsiaEduHub

동남아·국내·영미권 국제학교 정보 허브. 한국·중국 학부모 대상.
사이트 사양과 정책은 [`CLAUDE.md`](./CLAUDE.md) 참조.

## 기술 스택

- Astro 5 (정적 사이트)
- Tailwind CSS · MDX · zod (Content Collections)
- 다국어: `/ko/`, `/zh/` (Astro 내장 i18n)
- 호스팅: Cloudflare Pages

## 개발

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 정적 빌드 → dist/
npm run check    # 타입 + 콘텐츠 스키마 검증
```

## 폴더

```
src/
  content/        # 학교·경험담·가이드 MDX (스키마 검증)
  pages/
    ko/           # 한국어 페이지
    zh/           # 중국어 페이지
  layouts/        # 공용 레이아웃
  components/     # Astro/React 컴포넌트
  lib/i18n.ts     # 다국어 헬퍼
  styles/         # 글로벌 CSS (디자인 토큰)
messages/         # UI 다국어 텍스트
public/           # 정적 자산
_headers          # Cloudflare 보안 헤더
_redirects        # Cloudflare 리다이렉트
```

## 콘텐츠 추가

학교 1곳 추가는 `src/content/schools/` 에 MDX 파일 1개:

```mdx
---
id: iskl-kl
locale: ko
name: 쿠알라룸푸르 국제학교
name_en: International School of Kuala Lumpur
country: malaysia
city: kuala-lumpur
grade_range: [PK, G12]
tuition_annual_usd: 25000
budget_tier: top-tier
curriculum:
  primary_curriculum: IB
visited_by_operator: true
last_updated: 2026-05-20
summary: 운영자 직접 방문한 IB 강세 학교 ...
---

본문(운영자 1차 경험·분석) ...
```

zod 스키마(`src/content/config.ts`)가 필수 항목·열거값을 검증합니다.

## 배포

GitHub `main` 푸시 → Cloudflare Pages 자동 빌드 → CDN 배포.
빌드 명령: `npm run build`, 출력 디렉터리: `dist`.
