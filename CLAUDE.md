# 프로젝트: AsiaEduHub - 동남아 국제학교 허브

## 도메인 및 브랜드

- **메인 도메인**: AsiaEduHub.com (Namecheap 장바구니, 런칭 직전 결제)
- **임시 도메인**: asiaeduhub.pages.dev (Cloudflare Pages 무료, 개발용)
- **사이트명**:
  - 한국어: AsiaEduHub · 아시아 에듀 허브
  - 중국어: AsiaEduHub · 亚洲教育中心
  - 영어: AsiaEduHub
- **태그라인**:
  - 한국어: "동남아 국제학교, 학부모가 직접 정리한 진짜 정보"
  - 중국어: "亚洲国际学校,真实家长的真实经验"

## 도메인 연결 전략

- 개발·테스트: asiaeduhub.pages.dev 사용
- 런칭 직전(1~2주 전): AsiaEduHub.com 결제 후 즉시 연결
- 공식 런칭부터 모든 트래픽은 AsiaEduHub.com 으로 받음
- *.pages.dev 주소로는 외부 공유·홍보 금지 (SEO 자산 보호)

## 디자인 시스템 ⭐

### 색상 (신뢰 네이비 + 골드 강조)

```css
/* 메인 컬러 (네이비) */
--color-primary-900: #1E3A8A   /* 메인 네이비 (제목·CTA·로고) */
--color-primary-700: #1D4ED8   /* 링크·강조 */
--color-primary-100: #DBEAFE   /* 메인 컬러의 연한 배경 */

/* 강조 컬러 (골드) - 핵심 차별점에만 사용 */
--color-accent-700: #92400E    /* 골드 텍스트 (어두운 톤) */
--color-accent-500: #F59E0B    /* 골드 메인 */
--color-accent-100: #FEF3C7    /* 골드의 연한 배경 (강조 카드) */

/* 그레이 스케일 */
--color-text-primary: #111827
--color-text-secondary: #6B7280
--color-text-tertiary: #9CA3AF

/* 배경 */
--color-bg-primary: #FFFFFF
--color-bg-secondary: #F9FAFB
--color-bg-tertiary: #F3F4F6

/* 보더 */
--color-border-light: rgba(30, 58, 138, 0.08)
--color-border-medium: rgba(30, 58, 138, 0.15)

/* 시맨틱 */
--color-success: #047857       /* "방문 확인" 배지 등 */
--color-warning: #D97706
--color-danger: #DC2626
```

### 색상 사용 원칙

- 골드(#F59E0B)는 사이트 핵심 차별점에만 사용:
  - "두 번 옮긴 운영자 경험" 배지
  - "운영자 방문 확인" 배지
  - 편집부 추천 표시 (광고 아닌 추천)
- 네이비는 모든 제목·CTA·강조·로고에 일관 사용
- 회색 톤은 보조 정보(연도, 라벨)에만

### 폰트 시스템

- 한국어: **Pretendard** (1순위) 또는 Noto Sans KR
- 중국어: **Noto Sans SC** (간체)
- 영어 UI: **Inter**
- 폰트 가중치: 400 (Regular) + 500 (Medium)만 사용
- 700+ 가중치 금지 (디자인 무거워짐)

### 운영자 정체성 인포그래픽 (About Hero)

- 디자인 방향: **격자형 (3×2 또는 2×3)**
- 구성 6개 셀:
  1. 2024 — 말레이시아 이주
  2. 자녀 2명 — UCSI 재학
  3. **학교 2회 이전** ⭐ (골드 강조) — 사이트 핵심 차별점
  4. 한·중·영 — 3개 언어
  5. 온라인 마케팅 — 12년+ 경력
  6. 쿠알라룸푸르 — 현지 거주

- 상단: D 모노그램 원형 (네이비 배경, 흰 글자) + 데이비드 이름 + [본명]
- 하단: 네이비 박스 + 미션 한 줄

### D 모노그램 활용처

- About Hero
- 사이트 로고 (작은 아이콘 형태)
- 광고 미디어 키트
- SNS 프로필 이미지
- 학교 페이지 "운영자가 본 학교" 박스

## 🚨 최우선 원칙: 구글 검색 1위를 위한 정책 카테고리

**모든 의사결정·기능·콘텐츠는 다음 우선순위에 따라 평가한다.**
**아래 정책과 충돌하는 어떤 결정도 내리지 않는다.**

### 1순위: E-E-A-T 'Experience' 증명 (YMYL 사이트 절대 1위)
- 모든 페이지에 저자 바이라인 (운영자 Person schema 포함)
- 운영자 직접 방문 학교에 ⭐ "현장 취재" 배지 + 방문 사진
- 1차 경험 콘텐츠 (시그니처 시리즈)는 AI 생성 절대 금지
- /about/ 페이지에 운영자 신원·이력·자녀 학교 재학 사실 공개

### 2순위: '도움되는 콘텐츠' 사이트 단위 신호 관리
- 저품질 콘텐츠 발행 자체 금지 (1,500자 미만 정보 페이지 ❌)
- AI 생성 본문 절대 금지 (AI는 번역·편집·구조화에만)
- 빈 카테고리·"준비 중" 페이지 만들지 않음 → 메뉴에서 제외
- 분기별 트래픽 0 페이지 검토·삭제

### 3순위: 'Information Gain' — 다른 사이트에 없는 가치
- 모든 페이지에 운영자 1인칭 분석 또는 1차 경험 한 단락 필수
- 위키·학교 공식 사이트 정보 그대로 복붙 금지
- 학부모만 아는 비공식 정보 (한·중 비율, 시설 공유 여부, 노후도 등) 적극 발굴
- 콘텐츠 발행 전 체크리스트:
  - [ ] 다른 사이트에 없는 정보 1개 이상 포함?
  - [ ] 운영자 1인칭 경험·관점 포함?
  - [ ] 사실 데이터 출처 명시?
  - [ ] 마지막 업데이트 날짜 표시?

### 4순위: 'Who, How, Why' 원칙 (투명성)
- /editorial-policy/ 페이지 필수 (편집 원칙·AI 사용 범위·광고 분리 정책)
- 광고 콘텐츠는 "SPONSORED" 배지로 명확 표시
- 콘텐츠 출처 명시 (학교 공식 자료 / 운영자 직접 확인 등)
- 검증 방법·업데이트 정책 공개

### 5순위: 기술 SEO 기초
- Core Web Vitals 통과 (LCP < 2.5s, INP < 200ms, CLS < 0.1)
- 모바일 우선 (트래픽 70~80% 모바일)
- HTTPS + 보안 헤더
- schema.org 구조화 데이터 (페이지 유형별)
- og:image + schema.image (2026년 3월 신규 정책)
- hreflang 태그 (ko/zh 상호 매칭)

### 6순위: 스팸 정책 — 절대 금지 (레드라인)
- AI 자동 대량 페이지 생성 ❌
- 타 사이트 콘텐츠 복붙 ❌
- 키워드 스터핑 ❌
- 클로킹 ❌
- 대량 백링크 ❌
- 만료 도메인 사용 ❌
- 광고를 콘텐츠로 위장 ❌

### 7순위: 발행 빈도·신선도
- 시작 3개월: 주 2~3개 글 (품질 우선)
- 안정기: 주 1~2개 글 + 기존 글 업데이트
- 모든 페이지 "마지막 업데이트" 날짜 표시
- 학교 데이터 분기별 검증
- 계절성 콘텐츠 (입학 시즌·신학기·학년 말)

---

## 사이트 정체성

한국·중국 학부모를 위한 국내외 국제학교 종합 정보 플랫폼.
운영자는 말레이시아 거주 한국인 학부모로, 자녀를 국제학교에 보내며 직접 2개 학교를 옮긴 1차 경험 보유.

## 운영자 정보 (About 페이지 핵심)

- 본명: [채워넣을 부분 — 사이트 제작 시 입력]
- 닉네임: 데이비드
- 거주: 말레이시아 쿠알라룸푸르 (2024년 이주)
- 자녀: 2명 (한국에서 5살·6살에 이주)
- 현재 자녀 재학 학교: UCSI International School Kuala Lumpur
- 이전 학교: 첫 학교 (옮긴 이유 — 학비 + 한국인 비율 폭증)
- 직업: 온라인 마케팅 (한국·해외 모두 진행)
- 언어: 한국어(모국어) · 중국어(어린 시절 북경 거주) · 영어
- 검토했으나 선택하지 않은 지역: 태국 방콕(교통), 파타야(환경)

## 본명·닉네임 운영 규칙 ⭐ (사생활 보호)

### 본명 노출 (제한적)
- About 페이지 본문에만
- /editorial-policy/ 페이지 책임자 표기
- 광고 미디어 키트 (비공개 영업용)
- 법적 페이지 (개인정보처리방침)

### 닉네임 "데이비드 / David" 노출 (기본)
- 한국어 페이지: "데이비드"
- 중국어 페이지: "David" (영문 그대로, 중국식 음역 안 함)
- 영어 컨텍스트: "David"
- 모든 일반 글의 저자 바이라인
- 학교 페이지·가이드·경험담 글
- SNS·외부 기고
- meta title·description
- 검색엔진 노출용 텍스트

### 운영자 시각 자료 정책 ⭐
- 운영자 얼굴 사진 사용 안 함 (사생활 보호)
- 대신 사용:
  1. 운영자 정체성 인포그래픽 (Hero Section)
  2. 학교 방문 시 뒷모습·실루엣·캠퍼스 사진 (1차 경험 증명)
  3. 1차 자료 사진 (학교 안내문, 입학 서류 등 - 개인정보 가린 후)
  4. 일러스트 아바타 (선택)
- 일관성 유지: 사이트 전체에서 같은 시각 정체성 사용

### 기술적 처리
- About 페이지 meta title: "운영자 소개 · 데이비드"
- 본명은 본문에만, 메타데이터·OG 태그에는 닉네임만
- 본명이 다른 페이지 메타데이터에 노출되지 않도록 일관 관리

## 핵심 차별점 (E-E-A-T 'Experience')

- 운영자가 실제 국제학교 학부모
- 말레이시아·태국 학교 직접 방문·체험
- 유학원 이용 경험 (좋았던 점·실수 포함)
- 한국어·중국어 양방향 1:1 상담 가능 (전화·WeChat)

## 수익 모델

1차: 유학원 배너 광고 + 학교/MM2H 에이전시 협력
2차: CPL (Cost Per Lead) 리드 판매
3차: 운영자 직접 컨설팅 + 학교/유학원 수익 쉐어

## 타겟 사용자

- 1차: 한국 학부모 (국내 국제학교 → 동남아 → 영미권 검토)
- 2차: 중국·대만·홍콩·동남아 화교 학부모 (동남아·한국 국제학교 관심)

## 언어별 콘텐츠 전략 ⭐ (한국어 ≠ 중국어 단순 번역)

같은 사실·데이터지만 언어별로 강조점과 신뢰 전략이 달라야 함:

### 한국어 페이지 (`/ko/`)
- 신뢰 전략: "같은 한국 학부모" 동질감
- Hero 첫 메시지: 한국 학부모 공감 포인트 (영어유치원 비용 등)
- 연락 채널: 이메일·카카오톡 (페이지 하단)
- 데이터 강조: 한국인 학생 비율, 영어 환경
- 톤: 1:1 학부모 대화체

### 중국어 페이지 (`/zh/`, 간체 우선)
- 신뢰 전략: "중국어 가능한 외국인 + 말레이시아 현지 거주자"
- Hero 첫 메시지: 중국어 능력 출처(북경 거주) 즉시 증명
- 연락 채널: WeChat 우선·즉시 노출 (Hero Section + 모든 CTA)
- 데이터 강조: 본토 vs 화교 학생 분리, 중국어 학습 환경
- 톤: 운영자의 객관적 정보 제공자 + 친근한 中文 가능 지원자
- 추가 콘텐츠: 화교 vs 본토 차이 설명 (한국 페이지에 없음)

### 공통 핵심 메시지
- "학비 비싸다고 다 좋은 학교 아니다" (양쪽 모두 강조)
- "운영자 직접 경험, 두 번 옮긴 학부모"
- 동남아 국제학교 허브 비전

## 콘텐츠 검수 원칙

- 한국어: 운영자 직접 작성·검수
- 중국어: 운영자 1차 검수 + 사이트 런칭 전 네이티브 추가 검수 권장
- 모든 새 콘텐츠는 양 언어 검수 후 동시 발행

## 상단 메뉴 구조

1. 국내 국제학교
   - 외국인학교 (서울 / 경기·인천 / 지방)
   - 국제학교 (제주 / 송도·대구)
   - 영어유치원·국제유치원
   - 입학 자격·서류 가이드

2. 해외 국제학교
   - 동남아 (현지 방문 취재 ⭐)
     - 🇲🇾 말레이시아: 쿠알라룸푸르 / 페낭 / 조호바루
     - 🇹🇭 태국: 방콕 / 치앙마이 / 파타야
     - 🇸🇬 싱가포르
     - 🇻🇳 베트남: 호치민 / 하노이
   - 영미권
     - 🇺🇸 미국 (보딩스쿨·데이스쿨)
     - 🇬🇧 영국 (보딩스쿨)
     - 🇨🇦 캐나다
     - 🇦🇺 호주
   - 학교 유형별 (IB / AP / A-Level / 보딩스쿨)

3. 학교 비교
   - 학교 비교 도구 (최대 4개 선택)
   - 학비 계산기 (총비용·환율 포함)
   - 💰 예산별 학교 추천 (사용자 진입 유도용 핵심 페이지)
     - 가성비 (연 1,000만원 이하)
     - 중간 예산 (1,000~2,000만원)
     - 프리미엄 (2,000~3,500만원)
     - 최상위 (3,500만원+)
   - 🎯 한국인 비율 기반 추천 ⭐ (운영자 1차 경험 활용)
     - 한국인 비율 낮은 학교 (영어 환경 우선)
     - 한국인 커뮤니티 적정 학교 (적응 도움)
     - 다국적 균형 학교 (글로벌 환경)
   - 🌏 중국인 비율 기반 추천 (중국어 페이지 우선)
     - 본토 학생 적은 학교 (영어 환경 우선)
     - 화교 비율 높은 학교 (다국어 환경)
     - 중국어 학습 환경 우수 학교
   - 👨‍🏫 원어민 교사 비율 기반 추천 ⭐ (학부모 1순위 관심사)
     - 영어 모국어 교사 비율 높은 학교
     - 영국식 교사 중심 학교
     - 미국식 교사 중심 학교
   - 🏫 시설별 학교 찾기
     - 수영장 있는 학교
     - 풀사이즈 체육관·운동장 (스포츠 강한 학교)
     - 음악·미술 시설 우수 학교
     - 캠퍼스 큰 학교 (10에이커+)
     - STEM·과학 시설 우수 학교
   - 🎓 고등·대학 진학 (고학년 학부모용 ⭐)
     - IB 디플로마 강한 학교 (점수순)
     - A-Level 강한 학교 (A* 비율순)
     - AP 풍부한 학교
     - 영미권 대학 진학률 우수 학교
     - Ivy League 합격생 배출 학교
     - Oxbridge 합격생 배출 학교
   - 🍱 식사·식단 기반 (저학년·종교 식단 학부모용)
     - 한식·아시아식 옵션 좋은 학교
     - 할랄 식단 제공 학교
     - 알레르기 대응 학교
   - 커리큘럼 비교 (IB vs AP vs A-Level)
   - 입학 일정 캘린더
4. 유학 가이드 (입학·학비·비자·MM2H·태국 엘리트 비자·생활)
5. 실제 경험담 ⭐ (사이트 핵심 차별화 자산)
   - 두 번 옮긴 학부모의 솔직한 기록 (시그니처 시리즈)
   - 학교 방문기 (직접 다녀온 학교)
   - 학부모·학생 인터뷰
   - 유학원 이용 후기 (좋았던 점·실수)
   - 학교 옮기기 가이드 (체크리스트·비용·절차)
6. 무료 상담 (CTA 버튼, WeChat 노출)
7. 언어 전환

## URL 구조 규칙

- /ko/domestic/foreign-schools/{city}/{school-slug}/
- /ko/domestic/international-schools/{region}/{school-slug}/
- /ko/abroad/{region}/{country}/{city}/{school-slug}/
- /ko/experience/{category}/{post-slug}/
- /ko/guide/{category}/{post-slug}/
- /ko/tools/compare/, /ko/tools/calculator/
- /ko/tools/budget/{budget-friendly|mid-range|premium|top-tier}/

## 학교 데이터 필터 속성 (필수)

모든 학교 데이터에 다음 필터 속성을 포함하여 학비 필터·정렬·예산별 페이지 자동 생성:

- tuition_annual_usd (필수, 연 학비 USD 기준)
- budget_tier: budget-friendly | mid-range | premium | top-tier (자동 계산)

### 교사 구성 데이터 ⭐ (학부모 1순위 관심사)

"원어민 교사"는 학교마다 정의가 다르므로 국적별 분리 필수:

```yaml
teaching_staff:
  total_teachers: number

  # 국적 분류 (반드시 분리)
  native_english_speakers:        # 영어 모국어 국가 (미·영·호·뉴·캐·아일랜드)
    usa: number
    uk: number
    canada: number
    australia: number
    new_zealand: number
    subtotal_ratio: percentage

  asian_english_teachers:         # 영어 가능 아시아 국가 (인도·필리핀·싱가포르 등)
    india: number
    philippines: number
    singapore: number
    malaysia: number
    other: number
    subtotal_ratio: percentage

  other_teachers:
    korean: number
    chinese: number
    local: number
    european: number
    subtotal_ratio: percentage

  # 자격 정보
  with_teaching_license_ratio: percentage  # 정식 교원 자격증 보유율
  average_experience_years: number
  source: string
  last_updated: date
```

### 학생 국적 구성 ⭐ (핵심 차별화 데이터)

단순 "외국인 비율"이 아닌 상세 분류 필수. 한국·중국 학부모는 같은 데이터를 다르게 해석하므로 분리해서 표시:

```yaml
student_nationality:
  korean_ratio: percentage
  chinese_mainland_ratio: percentage      # 중국 본토 학생
  chinese_overseas_ratio: percentage      # 화교 (말레이시아·싱가포르 등 현지 중국계)
  other_asian_ratio: percentage           # 일본·인도·태국·베트남 등
  western_ratio: percentage               # 미국·유럽·호주 등
  local_host_country_ratio: percentage    # 학교 소재국 현지 학생
  total_nationalities: number             # 전체 국적 수
  source: string                          # 출처 (학교 공식 / 운영자 확인 등)
  last_updated: date
```

### 시설 데이터 ⭐ (말레이시아·동남아 학부모 핵심 관심사)

```yaml
facilities:
  # 스포츠 시설
  swimming_pool: own | shared | none      # 자체 / 공유 / 없음
  gymnasium: full-size | small | none
  sports_field: standard | small | shared | none
  tennis_court: number
  basketball_court: indoor | outdoor | both | none

  # 학습·예술 시설
  library_size: large | medium | small
  science_labs: number
  art_studio: boolean
  music_room: boolean
  performing_arts_theater: boolean

  # 환경
  air_conditioning: full | partial | none
  cafeteria: boolean
  school_bus: boolean
  campus_size_acres: number

  # 보안
  security_level: 24h | school_hours | basic

# 캠퍼스 상태 (학비-퀄리티 미신 깨기용 데이터)
campus_condition:
  building_age_years: number
  major_renovation_year: number
  campus_modernity: modern | recent | aging | dated
  operator_visited: boolean
  operator_notes: string                  # 운영자 방문 후 객관 평가
```

### 식사 데이터 ⭐ (저학년 학부모·종교 식단 학부모 핵심 관심사)

```yaml
meals:
  morning_snack: provided | not-provided
  lunch_options:
    asian: boolean
    western: boolean
    halal: boolean
    vegetarian: boolean
    korean_friendly: boolean
    chinese_friendly: boolean
  lunch_cost: included | extra-cost
  monthly_meal_fee_usd: number
  cafeteria_provider: in-house | outsourced
  allergy_accommodation: boolean
  religious_meal_options: [halal, kosher, hindu_vegetarian]
```

### 커리큘럼 데이터 ⭐ (고학년 학부모 핵심 관심사)

```yaml
curriculum:
  primary_curriculum: IB | American | British | Australian | 기타

  high_school_programs:
    ib_diploma: boolean
    ap_courses: list_of_subjects
    a_levels: list_of_subjects
    igcse: boolean
    sat_preparation: boolean

  # 시험 결과 (고학년 학부모의 핵심 데이터)
  average_results:
    ib_average_score: number              # 만점 45
    ap_average_score: number              # 5점 만점
    a_level_a_star_percentage: number

  # 대학 진학 (가장 강력한 검색 키워드)
  university_destinations:
    ivy_league_admissions: number_per_year
    oxbridge_admissions: number_per_year
    top_us_universities: list             # USNews Top 30
    top_uk_universities: list             # Russell Group
    asian_top_universities: list          # 도쿄대·서울대·홍콩대 등

  college_counseling: dedicated | shared | basic
  university_counselor_per_student_ratio: number
```

### 기타 필터 메타

- 학년 범위: [최소학년, 최고학년]
- 기숙 여부: day-only | boarding-optional | boarding-only
- 종교 계열: secular | christian | islamic | 기타
- 입학 난이도: low | medium | high | very-high

## 홈페이지 사용자 진입 구조 (Persona-based Entry)

저학년·중학년·고학년 학부모는 학교를 보는 기준이 완전히 다름. 같은 학교 데이터라도 진입 경로별로 다른 큐레이션 노출:

### 1. 자녀 학년별 진입
- 유치원~초3 (저학년): 환경·시설·식사·한국인 비율 중심
- 초4~중2 (중학년): 학업 환경 + 커리큘럼 진입 기준
- 중3~고등 (고학년): 커리큘럼·시험 결과·대학 진학 중심

### 2. 목적별 진입
- 처음 유학 알아보기 → 입문 가이드 + 운영자 경험담
- 학교 옮기기 → 운영자 옮긴 경험 시리즈 + 체크리스트
- 대학 진학 준비 → 영미권 입시 가이드 + 진학 우수 학교

### 3. 예산별 진입 (기존)
- 예산별 학교 추천 4개 카테고리

### 4. 지역별 진입 (기존)
- 국가·도시별 학교 리스트

## 콘텐츠 독립성 원칙 (광고-콘텐츠 분리)

광고주(유학원·학교)와 편집 콘텐츠의 갈등 방지:

- "추천" 단어 대신 "학부모 관점 분석", "가성비 분석" 등 중립 표현 사용
- 광고 콘텐츠는 명확히 표시 ("SPONSORED" 배지)
- 광고주 학교와 편집 추천 학교를 다른 페이지에 분리
- 편집 정책 페이지 (/editorial-policy/) 에 광고-콘텐츠 분리 정책 명시
- "학비 vs 교육 퀄리티는 비례하지 않는다"는 운영자 분석 시리즈 유지
- 학교 노후도·시설 실태 등 부정적 정보도 운영자 방문 시 솔직히 기록

### 한국·중국 학생 비율 표시 원칙

- 모든 데이터에 출처 명시 ("학교 공식 자료 2025-2026", "운영자 직접 확인" 등)
- 업데이트 날짜 표기 필수
- "낮음·보통·높음" 같은 주관적 라벨 대신 정확한 % 사용
- "한국인 비율 높음 ≠ 부정적"이라는 균형 잡힌 맥락 함께 제공
- 운영자 1인칭 경험으로 트레이드오프 설명

### 중국계 학생 데이터 표시 원칙 ⭐

- 중국 본토 학생과 화교(현지 중국계)는 반드시 분리
- 한국어 페이지: "본토 vs 화교 차이" 설명 추가
- 중국어 페이지: 본토 학부모 관점에서 "本地华人(현지 화교)와 中国大陆学生(본토 학생)"으로 명확히 구분
- 말레이시아·싱가포르 등 화교 비율 높은 국가는 "이건 자연스러운 현상"이라는 맥락 제공

### 시설 데이터 검증 원칙

- "있음"이라고만 표시하지 말고 자체/공유/임대 구분
- 가능하면 운영자 직접 방문 확인 표시 (⭐ 방문 검증 배지)
- 학부모 후기에서 자주 언급되는 시설 이슈는 별도 메모

## 기술 스택 (확정)

- **프레임워크**: Astro 5 (정적 사이트 생성)
- **UI 인터랙티브**: React Island (학교 비교 도구, 필터 등 필요한 곳만)
- **콘텐츠**: MDX (Astro Content Collections)
- **데이터 검증**: zod 스키마 (학교 데이터 타입 안전)
- **스타일**: Tailwind CSS
- **다국어**: Astro 내장 i18n (`/ko/`, `/zh/`)
- **호스팅**: Cloudflare Pages (GitHub 연동 자동 배포, 무료)
- **CDN**: Cloudflare (호스팅 일체, 중국 본토 접속 개선)
- **이미지**: Astro Image (자동 최적화)
- **분석**: GA4 + Google Search Console
- **폼**: Cloudflare Pages Functions 또는 외부 폼 서비스
- **Schema**: astro-seo + 자체 JSON-LD

## 배포 흐름

```
로컬 코드 작성 → git push → GitHub → Cloudflare Pages 자동 빌드 → 전 세계 CDN 배포
```

학교 정보 1곳 추가 = MDX 파일 1개 작성 + git push → 2~3분 후 자동 반영

## 폴더 구조

```
international-schools-site/
├── CLAUDE.md
├── about-final-ko.md
├── about-final-zh.md
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
├── _headers              # Cloudflare 보안 헤더
├── _redirects            # Cloudflare 리다이렉트
│
├── src/
│   ├── content/          # 모든 콘텐츠 (운영자가 수정)
│   │   ├── config.ts     # Content Collection 스키마
│   │   ├── schools/      # 학교 데이터 MDX
│   │   ├── experiences/  # 운영자 시그니처 시리즈
│   │   ├── guides/       # 유학 가이드
│   │   └── pages/        # About, Editorial Policy 등 정적 페이지
│   │
│   ├── components/       # Astro·React 컴포넌트
│   ├── layouts/          # 페이지 레이아웃
│   ├── pages/            # 라우팅 (Astro 파일 기반)
│   │   ├── [locale]/
│   │   │   ├── index.astro
│   │   │   ├── about.astro
│   │   │   ├── abroad/
│   │   │   ├── domestic/
│   │   │   ├── tools/
│   │   │   ├── guide/
│   │   │   └── experience/
│   │   ├── sitemap-index.xml.ts
│   │   └── robots.txt.ts
│   │
│   └── lib/              # 유틸리티 함수
│
├── public/               # 정적 자산
└── messages/             # 다국어 UI 텍스트 (ko.json, zh.json)
```

## SEO 필수 요소 (구글 정책 2026 기준)

### 페이지 단위
- 모든 페이지: meta title, description, og:image, schema.org
- 학교 페이지: EducationalOrganization schema
- 가이드 페이지: Article schema + author
- 경험담 페이지: Review schema
- 비교 도구: WebApplication schema
- 모든 페이지: breadcrumb schema

### 사이트 단위
- hreflang 태그 (ko/zh 페이지 상호 연결)
- sitemap.xml (언어별 분리)
- robots.txt
- Core Web Vitals 최적화 (LCP < 2.5s, INP < 200ms, CLS < 0.1)
- 모바일 우선 (트래픽 70~80% 모바일)
- HTTPS 필수

### 신뢰 신호 (필수 페이지)
- /about/ : 운영자 소개 (사진·본명·이력)
- /editorial-policy/ : 편집 원칙
- /contact/ : 연락처
- /advertise/ : 광고 문의 + 미디어 키트
- /privacy/, /terms/ : 법적 페이지

### 콘텐츠 표시
- 실제 방문 콘텐츠: ⭐ "현장 취재" 배지
- 광고/스폰서 콘텐츠: 명확히 표시
- 모든 글에 저자 바이라인 (실명·약력 링크)
- 마지막 업데이트 날짜 표시

## 절대 금지 (구글 스팸 정책 위반)

- AI 자동 생성 글 그대로 게재 (반드시 검수·1차 경험 추가)
- 키워드 스터핑
- 클로킹
- 도어웨이 페이지
- 만료 도메인 매입 후 무관 콘텐츠
- 광고 콘텐츠를 정보 콘텐츠로 위장

## 데이터 구조

학교 데이터는 JSON/MDX로 구조화:

```yaml
school:
  id: iskl-kl
  name_ko: 쿠알라룸푸르 국제학교
  name_zh: 吉隆坡国际学校
  name_en: International School of Kuala Lumpur
  country: malaysia
  city: kuala-lumpur
  curriculum: [IB, AP]
  grade_range: [PK, 12]
  tuition_annual_usd: 25000
  korean_student_ratio: 0.05
  visited_by_operator: true
  last_updated: 2026-05-20
```

이 구조로 학교 페이지 자동 생성, 비교 도구 데이터 소스, 다국어 자동 매칭.
