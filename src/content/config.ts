import { defineCollection, z } from 'astro:content';

/**
 * AsiaEduHub Content Collection 스키마
 * 사양서 CLAUDE.md "학교 데이터 필터 속성" 섹션을 그대로 코드화.
 * 새 학교 데이터 추가 시 이 스키마가 타입·필수 항목·열거값을 검증한다.
 */

// ─────────────────────────────────────────────────────────────
// 공통 enum
// ─────────────────────────────────────────────────────────────
const localeSchema = z.enum(['ko', 'zh']);

const budgetTierSchema = z.enum([
  'budget-friendly', // 연 1,000만원 이하
  'mid-range', // 1,000~2,000만원
  'premium', // 2,000~3,500만원
  'top-tier', // 3,500만원+
]);

const curriculumSchema = z.enum([
  'IB',
  'American',
  'British',
  'Australian',
  'Korean',
  'Chinese',
  'Other',
]);

const gradeLevelSchema = z.enum([
  'PK', 'KG',
  'G1', 'G2', 'G3', 'G4', 'G5', 'G6',
  'G7', 'G8', 'G9', 'G10', 'G11', 'G12',
]);

const ratio = z.number().min(0).max(1); // 0~1 사이 비율 (% 아님)
const percentage = z.number().min(0).max(100); // 0~100 (% 표시용)

// ─────────────────────────────────────────────────────────────
// 교사 구성 (학부모 1순위 관심사 — 국적별 분리 필수)
// ─────────────────────────────────────────────────────────────
const teachingStaffSchema = z.object({
  total_teachers: z.number().int().positive().optional(),

  native_english_speakers: z
    .object({
      usa: z.number().int().nonnegative().default(0),
      uk: z.number().int().nonnegative().default(0),
      canada: z.number().int().nonnegative().default(0),
      australia: z.number().int().nonnegative().default(0),
      new_zealand: z.number().int().nonnegative().default(0),
      ireland: z.number().int().nonnegative().default(0),
      subtotal_ratio: percentage.optional(),
    })
    .optional(),

  asian_english_teachers: z
    .object({
      india: z.number().int().nonnegative().default(0),
      philippines: z.number().int().nonnegative().default(0),
      singapore: z.number().int().nonnegative().default(0),
      malaysia: z.number().int().nonnegative().default(0),
      other: z.number().int().nonnegative().default(0),
      subtotal_ratio: percentage.optional(),
    })
    .optional(),

  other_teachers: z
    .object({
      korean: z.number().int().nonnegative().default(0),
      chinese: z.number().int().nonnegative().default(0),
      local: z.number().int().nonnegative().default(0),
      european: z.number().int().nonnegative().default(0),
      subtotal_ratio: percentage.optional(),
    })
    .optional(),

  with_teaching_license_ratio: percentage.optional(),
  average_experience_years: z.number().nonnegative().optional(),
  source: z.string().optional(),
  last_updated: z.coerce.date().optional(),
});

// ─────────────────────────────────────────────────────────────
// 학생 국적 구성 (본토 vs 화교 반드시 분리)
// ─────────────────────────────────────────────────────────────
const studentNationalitySchema = z.object({
  korean_ratio: percentage.optional(),
  chinese_mainland_ratio: percentage.optional(),
  chinese_overseas_ratio: percentage.optional(),
  other_asian_ratio: percentage.optional(),
  western_ratio: percentage.optional(),
  local_host_country_ratio: percentage.optional(),
  total_nationalities: z.number().int().positive().optional(),
  source: z.string().optional(),
  last_updated: z.coerce.date().optional(),
});

// ─────────────────────────────────────────────────────────────
// 시설 (자체/공유/없음 — "있음" 만으로 표시 금지)
// ─────────────────────────────────────────────────────────────
const facilitiesSchema = z.object({
  swimming_pool: z.enum(['own', 'shared', 'none']).optional(),
  gymnasium: z.enum(['full-size', 'small', 'none']).optional(),
  sports_field: z.enum(['standard', 'small', 'shared', 'none']).optional(),
  tennis_court: z.number().int().nonnegative().optional(),
  basketball_court: z.enum(['indoor', 'outdoor', 'both', 'none']).optional(),

  library_size: z.enum(['large', 'medium', 'small']).optional(),
  science_labs: z.number().int().nonnegative().optional(),
  art_studio: z.boolean().optional(),
  music_room: z.boolean().optional(),
  performing_arts_theater: z.boolean().optional(),

  air_conditioning: z.enum(['full', 'partial', 'none']).optional(),
  cafeteria: z.boolean().optional(),
  school_bus: z.boolean().optional(),
  campus_size_acres: z.number().nonnegative().optional(),

  security_level: z.enum(['24h', 'school_hours', 'basic']).optional(),
});

const campusConditionSchema = z.object({
  building_age_years: z.number().nonnegative().optional(),
  major_renovation_year: z.number().int().optional(),
  campus_modernity: z.enum(['modern', 'recent', 'aging', 'dated']).optional(),
  operator_visited: z.boolean().default(false),
  operator_visit_date: z.coerce.date().optional(),
  operator_notes: z.string().optional(),
});

// ─────────────────────────────────────────────────────────────
// 식사 (저학년·종교 식단 학부모 핵심)
// ─────────────────────────────────────────────────────────────
const mealsSchema = z.object({
  morning_snack: z.enum(['provided', 'not-provided']).optional(),
  lunch_options: z
    .object({
      asian: z.boolean().optional(),
      western: z.boolean().optional(),
      halal: z.boolean().optional(),
      vegetarian: z.boolean().optional(),
      korean_friendly: z.boolean().optional(),
      chinese_friendly: z.boolean().optional(),
    })
    .optional(),
  lunch_cost: z.enum(['included', 'extra-cost']).optional(),
  monthly_meal_fee_usd: z.number().nonnegative().optional(),
  cafeteria_provider: z.enum(['in-house', 'outsourced']).optional(),
  allergy_accommodation: z.boolean().optional(),
  religious_meal_options: z
    .array(z.enum(['halal', 'kosher', 'hindu_vegetarian']))
    .optional(),
});

// ─────────────────────────────────────────────────────────────
// 커리큘럼 (고학년 학부모 핵심 — 시험 결과·대학 진학)
// ─────────────────────────────────────────────────────────────
const curriculumDataSchema = z.object({
  primary_curriculum: curriculumSchema,

  high_school_programs: z
    .object({
      ib_diploma: z.boolean().optional(),
      ap_courses: z.array(z.string()).optional(),
      a_levels: z.array(z.string()).optional(),
      igcse: z.boolean().optional(),
      sat_preparation: z.boolean().optional(),
    })
    .optional(),

  average_results: z
    .object({
      ib_average_score: z.number().min(0).max(45).optional(),
      ap_average_score: z.number().min(0).max(5).optional(),
      a_level_a_star_percentage: percentage.optional(),
      results_year: z.number().int().optional(),
    })
    .optional(),

  university_destinations: z
    .object({
      ivy_league_admissions: z.number().int().nonnegative().optional(),
      oxbridge_admissions: z.number().int().nonnegative().optional(),
      top_us_universities: z.array(z.string()).optional(),
      top_uk_universities: z.array(z.string()).optional(),
      asian_top_universities: z.array(z.string()).optional(),
      destinations_year: z.number().int().optional(),
    })
    .optional(),

  college_counseling: z.enum(['dedicated', 'shared', 'basic']).optional(),
  university_counselor_per_student_ratio: z.number().positive().optional(),
});

// ─────────────────────────────────────────────────────────────
// 학교 컬렉션
// ─────────────────────────────────────────────────────────────
const schools = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      // 식별
      id: z.string().min(1), // 예: iskl-kl
      locale: localeSchema, // 'ko' | 'zh' — 같은 학교의 ko/zh 파일은 id 공유
      hreflang_pair: z.string().optional(), // 다른 언어 동일 학교 슬러그

      // 이름
      name: z.string(), // 현재 locale 의 이름
      name_ko: z.string().optional(),
      name_zh: z.string().optional(),
      name_en: z.string(),

      // 위치
      country: z.enum([
        'korea',
        'malaysia',
        'thailand',
        'singapore',
        'vietnam',
        'indonesia',
        'philippines',
        'usa',
        'uk',
        'canada',
        'australia',
        'other',
      ]),
      region: z.string().optional(),
      city: z.string(),
      address: z.string().optional(),
      lat: z.number().optional(),
      lng: z.number().optional(),
      website: z.string().url().optional(),

      // 학년·기숙
      grade_range: z.tuple([gradeLevelSchema, gradeLevelSchema]),
      boarding: z
        .enum(['day-only', 'boarding-optional', 'boarding-only'])
        .default('day-only'),
      religious_affiliation: z
        .enum(['secular', 'christian', 'islamic', 'other'])
        .default('secular'),
      admission_difficulty: z
        .enum(['low', 'medium', 'high', 'very-high'])
        .optional(),

      // 학비 (USD 기준 필수)
      tuition_annual_usd: z.number().positive(),
      budget_tier: budgetTierSchema, // 자동 계산값을 명시 저장
      tuition_year: z.number().int().optional(),
      tuition_notes: z.string().optional(),

      // 구성 데이터
      curriculum: curriculumDataSchema,
      teaching_staff: teachingStaffSchema.optional(),
      student_nationality: studentNationalitySchema.optional(),
      facilities: facilitiesSchema.optional(),
      campus_condition: campusConditionSchema.optional(),
      meals: mealsSchema.optional(),

      // E-E-A-T 신호
      visited_by_operator: z.boolean().default(false),
      sponsored: z.boolean().default(false), // 광고 콘텐츠 표시
      hero_image: image().optional(),
      gallery: z.array(image()).optional(),

      // 메타
      author: z.string().default('데이비드'),
      published_at: z.coerce.date().optional(),
      last_updated: z.coerce.date(),
      summary: z.string().min(20).max(300), // meta description 용
    }),
});

// ─────────────────────────────────────────────────────────────
// 경험담 (시그니처 시리즈) — AI 생성 금지, 운영자 1차 경험 필수
// ─────────────────────────────────────────────────────────────
const experiences = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      locale: localeSchema,
      category: z.enum([
        'school-switch', // 두 번 옮긴 시리즈
        'school-visit', // 학교 방문기
        'parent-interview',
        'student-interview',
        'agency-review', // 유학원 후기
        'switch-guide', // 옮기기 가이드
      ]),
      related_schools: z.array(z.string()).optional(),
      author: z.string().default('데이비드'),
      hero_image: image().optional(),
      cover_alt: z.string().optional(),
      summary: z.string().min(20).max(300),
      published_at: z.coerce.date(),
      last_updated: z.coerce.date(),
      operator_first_person: z.literal(true), // 1차 경험만 허용
      visited_at: z.coerce.date().optional(),
    }),
});

// ─────────────────────────────────────────────────────────────
// 유학 가이드
// ─────────────────────────────────────────────────────────────
const guides = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      locale: localeSchema,
      category: z.enum([
        'admission',
        'tuition',
        'visa',
        'mm2h',
        'thai-elite-visa',
        'life',
        'curriculum-compare',
      ]),
      author: z.string().default('데이비드'),
      hero_image: image().optional(),
      summary: z.string().min(20).max(300),
      published_at: z.coerce.date(),
      last_updated: z.coerce.date(),
      sources: z
        .array(z.object({ label: z.string(), url: z.string().url().optional() }))
        .optional(),
    }),
});

// ─────────────────────────────────────────────────────────────
// 정적 페이지 (About, Editorial Policy 등)
// ─────────────────────────────────────────────────────────────
const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    locale: localeSchema,
    slug: z.string(),
    summary: z.string().optional(),
    last_updated: z.coerce.date(),
    show_in_footer: z.boolean().default(false),
  }),
});

export const collections = {
  schools,
  experiences,
  guides,
  pages,
};
