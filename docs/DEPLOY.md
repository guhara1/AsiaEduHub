# Cloudflare Pages 배포 가이드

이 저장소를 Cloudflare Pages 에 연결하면 GitHub push → 자동 빌드·배포 → 글로벌 CDN 으로 흐릅니다.
중국 본토 접속 개선·무료·HTTPS 자동 적용.

## 1. 첫 연결 (1회만)

1. https://dash.cloudflare.com → Workers & Pages → **Create application** → **Pages** → **Connect to Git**
2. GitHub 계정 인증 → 이 저장소(`AsiaEduHub`) 선택
3. **빌드 설정** — 정확히 다음 값으로:

   | 항목 | 값 |
   |---|---|
   | Framework preset | `Astro` |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Root directory | (비워둠) |
   | Node version | `20` (`.node-version` 파일로 자동 인식) |

4. **환경 변수**:

   - `SITE_URL` = `https://asiaeduhub.pages.dev` (런칭 전)
   - 도메인 연결 후: `SITE_URL` = `https://AsiaEduHub.com`

5. **Save and Deploy** → 2~3분 후 첫 배포 완료. `https://<프로젝트명>.pages.dev` URL 확인.

## 2. 자동 배포 흐름

```
로컬 코드 작성 → git push → GitHub → Cloudflare Pages 빌드 → CDN 배포
```

- `main` 푸시 → 프로덕션
- 그 외 브랜치·PR → 미리보기 URL 자동 생성 (검수용)
- 학교 1곳 추가 = `src/content/schools/{slug}-ko.mdx` + `{slug}-zh.mdx` 작성 → push → 2~3분 후 반영

## 3. 보안 헤더·캐시·리다이렉트

`/_headers`, `/_redirects` 파일은 Cloudflare Pages 가 자동 적용합니다 (코드 변경 불필요).

- `_headers` — CSP·HSTS·X-Frame-Options + `/assets/*`, `/_astro/*` immutable 캐시
- `_redirects` — `/` → `/ko/` 302

## 4. 도메인 연결 (런칭 직전)

사양상 도메인은 런칭 1~2주 전 결제·연결:

1. Namecheap 에서 `AsiaEduHub.com` 결제
2. Cloudflare Pages 프로젝트 → **Custom domains** → **Set up a custom domain**
3. `AsiaEduHub.com`, `www.AsiaEduHub.com` 둘 다 추가
4. Cloudflare 가 안내하는 네임서버 2개를 Namecheap 에서 변경 (24~48시간 전파)
5. 환경 변수 `SITE_URL` 을 `https://AsiaEduHub.com` 으로 변경 후 재배포
6. Google Search Console·GA4 에 새 도메인 등록

## 5. 런칭 후 체크리스트

- [ ] `https://AsiaEduHub.com/robots.txt` — 200, Sitemap URL 포함
- [ ] `https://AsiaEduHub.com/sitemap-index.xml` — 200, ko/zh 페이지 모두 포함
- [ ] `https://AsiaEduHub.com/ko/` 와 `/zh/` — hreflang 태그 상호 매칭 확인
- [ ] Lighthouse 모바일 점수 — LCP < 2.5s, INP < 200ms, CLS < 0.1
- [ ] Google Search Console — 도메인 속성 등록 + sitemap 제출
- [ ] GA4 — 측정 ID 환경 변수 추가 (스크립트는 `_headers` CSP 가 이미 google-tagmanager 허용)

## 6. 자주 묻는 문제

**Q. 빌드가 실패합니다.**
- 로컬에서 `npm run build` 를 먼저 통과시키세요. 같은 명령이 Cloudflare 에서도 실행됩니다.
- Node 버전 불일치면 `.node-version` 의 값을 Cloudflare 환경 변수 `NODE_VERSION` 으로 명시.

**Q. 미리보기 URL 을 외부에 공유해도 되나요?**
- 사양상 `*.pages.dev` 주소 외부 공유·홍보 금지 (SEO 자산 보호). 내부 검수 전용.

**Q. 환경 변수 바꿨는데 사이트가 그대로입니다.**
- Cloudflare Pages → Deployments → 최신 배포 → **Retry deployment** 로 새 빌드 트리거.
