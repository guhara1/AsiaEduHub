# 학교 데이터 입력 가이드 (운영자용)

운영자가 직접 방문·검증한 학교 1곳을 사이트에 추가하는 방법.
한 학교당 **30~60분** 작업으로 끝납니다.

학교 데이터를 추가하면 다음 페이지가 자동으로 풍부해집니다:
- `/ko/abroad/{region}/{country}/{city}/{slug}/` — 학교 상세 페이지 자동 생성
- `/ko/abroad/` — 국가·도시 섹션에 카드 노출
- `/ko/tools/compare/#compare` — 학교 비교 도구 선택 항목에 추가
- 홈페이지 — 등록 학교 수 자동 반영

---

## 1단계. 학교 폴더 결정

학교 슬러그 결정 (예: UCSI International School Kuala Lumpur → `ucsi-kl`).
**규칙**: 소문자 + 하이픈, 학교 약자 + 도시 약자.

한국어와 중국어 둘 다 작성 (둘 다 같은 학교의 다른 언어 버전).

```
src/content/schools/ucsi-kl-ko.mdx   ← 한국어 버전
src/content/schools/ucsi-kl-zh.mdx   ← 중국어 버전
```

언더스코어 시작 파일(`_template-*.mdx`)은 빌드에서 제외됨. 실제 파일은 언더스코어 없이.

---

## 2단계. 템플릿 복사

기존 템플릿을 복사 후 학교 슬러그·언어로 이름 변경:

```bash
cp src/content/schools/_template-school-ko.mdx src/content/schools/ucsi-kl-ko.mdx
cp src/content/schools/_template-school-zh.mdx src/content/schools/ucsi-kl-zh.mdx
```

---

## 3단계. 학교 기본 정보 입력 (10분)

학교 공식 사이트에서 다음을 확인해 frontmatter 에 입력:

| 필드 | 어디서 얻나 |
|---|---|
| `id` | 슬러그와 동일 (예: `ucsi-kl`) |
| `name_ko` / `name_zh` / `name_en` | 학교 공식 이름 (한·중·영) |
| `country` | `malaysia` / `thailand` / `singapore` / `vietnam` 등 (소문자) |
| `city` | URL 슬러그 형태 (`kuala-lumpur`, `bangkok` 등) |
| `address` | 학교 공식 주소 |
| `website` | 학교 공식 사이트 URL |
| `grade_range` | `[최소학년, 최고학년]` 예: `[PK, G12]` |
| `boarding` | `day-only` / `boarding-optional` / `boarding-only` |
| `religious_affiliation` | `secular` / `christian` / `islamic` / `other` |
| `tuition_annual_usd` | 평균 학년의 연 학비 (USD) — 학교 공식 발표 |
| `budget_tier` | `budget-friendly` (<10K) / `mid-range` (10–20K) / `premium` (20–35K) / `top-tier` (35K+) |
| `summary` | 100~300자 한 줄 요약 (meta description 용) |
| `last_updated` | 데이터 수집 날짜 (`YYYY-MM-DD`) |

---

## 4단계. 학생 국적 구성 (10분)

학교 공식 통계 또는 운영자 직접 확인:

```yaml
student_nationality:
  korean_ratio: 8                  # 한국 학생 %
  chinese_mainland_ratio: 5        # 중국 본토
  chinese_overseas_ratio: 25       # 화교 (현지 중국계)
  other_asian_ratio: 20            # 일본·인도·태국·베트남 등
  western_ratio: 12                # 미국·유럽·호주
  local_host_country_ratio: 30     # 학교 소재국 현지
  total_nationalities: 32
  source: "학교 공식 자료 2025-2026"
  last_updated: 2026-05-20
```

**중요**: 본토 vs 화교는 반드시 분리. 학부모는 같은 데이터를 다르게 해석.

---

## 5단계. 교사 구성 (10분)

학교 공식 사이트의 Faculty 페이지 또는 입학 설명회 자료 참고. 국적별 분리 필수.

```yaml
teaching_staff:
  total_teachers: 80
  native_english_speakers:
    usa: 10
    uk: 8
    canada: 4
    australia: 3
    subtotal_ratio: 31      # 영어 모국어 국가 합계 %
  asian_english_teachers:
    india: 5
    philippines: 8
    singapore: 2
    malaysia: 20
    subtotal_ratio: 44      # 영어 가능 아시아 국가 합계 %
  other_teachers:
    korean: 2
    chinese: 4
    local: 10
    european: 4
    subtotal_ratio: 25
  with_teaching_license_ratio: 85
  average_experience_years: 9
  source: "학교 공식 자료 2025-2026"
  last_updated: 2026-05-20
```

**중요**: "원어민 교사" 정의는 학교마다 달라서 학부모가 오해함. 국적별 분리하면 명확.

---

## 6단계. 시설 (5분)

학교 투어 또는 공식 사이트 시설 페이지 확인. **자체/공유/없음** 구분 필수.

```yaml
facilities:
  swimming_pool: own              # own | shared | none
  gymnasium: full-size            # full-size | small | none
  sports_field: standard
  tennis_court: 4
  basketball_court: both          # indoor | outdoor | both | none
  library_size: large             # large | medium | small
  science_labs: 6
  art_studio: true
  music_room: true
  performing_arts_theater: true
  air_conditioning: full          # full | partial | none
  cafeteria: true
  school_bus: true
  campus_size_acres: 12
  security_level: 24h             # 24h | school_hours | basic
```

---

## 7단계. 운영자 방문 메모 ⭐ (필수, 운영자만 작성)

**이 필드는 AI 가 절대 채울 수 없는 운영자 1차 경험 영역.** 직접 방문한 경우에만 `operator_visited: true` 로 표시.

```yaml
campus_condition:
  building_age_years: 15
  major_renovation_year: 2022
  campus_modernity: recent        # modern | recent | aging | dated
  operator_visited: true          # ⭐ 실제 방문 시에만 true
  operator_visit_date: 2025-11-20
  operator_notes: "본관·체육관·수영장 모두 자체. 캠퍼스 보존 상태 양호. 입학설명회 시 학교 측 응대 친절."
```

`operator_visited: true` 면 학교 카드·상세 페이지에 **⭐ "운영자 방문 확인" 골드 배지** 자동 표시. 사이트 핵심 차별화 신호.

---

## 8단계. 식사 (5분)

자녀 또는 운영자 직접 식사 경험 또는 학교 공식 점심 메뉴 확인.

```yaml
meals:
  morning_snack: provided         # provided | not-provided
  lunch_options:
    asian: true
    western: true
    halal: true
    vegetarian: true
    korean_friendly: false        # 한식 친화 (운영자 판단)
    chinese_friendly: true        # 중식 친화
  lunch_cost: extra-cost          # included | extra-cost
  monthly_meal_fee_usd: 120
  cafeteria_provider: outsourced  # in-house | outsourced
  allergy_accommodation: true
  religious_meal_options: [halal]
```

---

## 9단계. 커리큘럼·진학 (10분, 선택)

가능한 만큼만. 데이터 있는 필드만 채우고 나머지는 비워둠.

```yaml
curriculum:
  primary_curriculum: IB          # IB | American | British | Australian | Other
  high_school_programs:
    ib_diploma: true
    igcse: true
    sat_preparation: true
  average_results:
    ib_average_score: 35          # IB 평균 점수
    results_year: 2025
  college_counseling: dedicated   # dedicated | shared | basic
```

---

## 10단계. 본문 작성 (운영자 1인칭, 필수)

frontmatter 아래 마크다운 본문에 운영자가 직접 작성. **AI 가 채우면 안 되는 영역.**

```markdown
## 운영자 방문기 (1인칭)

(언제 누구와 방문했고, 무엇을 보았으며, 학부모로서 어떤 인상을 받았는지)

## 학비 vs 퀄리티 분석

(이 학비에 이 퀄리티가 합당한가에 대한 운영자 분석)

## 비교 대상 학교

- 같은 도시·학년대·예산의 다른 학교 2~3곳과의 트레이드오프
```

---

## 11단계. 빌드 검증 + 푸시

로컬에서 빌드 통과 확인:

```bash
npm run build
# 22+ 페이지 빌드 + 학교 상세 페이지 신규 추가 확인
```

검증 통과 후 push → Cloudflare 자동 배포 (2~3분).

```bash
git add src/content/schools/ucsi-kl-ko.mdx src/content/schools/ucsi-kl-zh.mdx
git commit -m "content: UCSI International School Kuala Lumpur 데이터 추가"
git push
```

---

## 정책 체크리스트 (발행 전 자가 점검)

- [ ] 학교 공식 사이트와 학비·학년·주소 일치 확인
- [ ] 학생 국적 비율 출처 명시
- [ ] 교사 국적 정보 출처 명시 (학교 공식 / 운영자 직접 확인)
- [ ] 시설 자체/공유 구분 명확
- [ ] `operator_visited: true` 는 실제 방문한 경우만
- [ ] 운영자 1인칭 본문 작성 (AI 자동 생성 금지)
- [ ] `last_updated` 오늘 날짜로
- [ ] 한국어·중국어 둘 다 동시 발행

---

## 광고주 학교 표시

학교가 광고비를 받은 경우:

```yaml
sponsored: true
```

자동으로 **SPONSORED 배지** 표시. 광고비를 받았더라도 운영자가 방문 시 발견한 단점은 그대로 기록 (사양 4순위 — 광고-콘텐츠 분리).
