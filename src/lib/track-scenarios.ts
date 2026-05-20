/**
 * 진학 트랙 시뮬레이터 시나리오 데이터.
 *
 * 사양상 검증되지 않은 입학 통계·합격률 단정은 위험하므로,
 * 여기엔 공개된 일반적 학년·시험 단계와 시장 학비 평균값(범위)만 포함합니다.
 * 운영자가 추후 학교 데이터·실제 합격 사례를 누적하면 정밀화 가능.
 */

import type { Locale } from './i18n';

export type TargetUniversity =
  | 'uk-oxbridge'
  | 'uk-russell'
  | 'us-ivy'
  | 'us-top30'
  | 'au-g8'
  | 'kr-sky'
  | 'asia-top';

export type Curriculum = 'IB' | 'British' | 'American';

export type BudgetTier = 'budget-friendly' | 'mid-range' | 'premium' | 'top-tier';

export type StartRegion =
  | 'sea-malaysia'
  | 'sea-thailand'
  | 'sea-singapore'
  | 'sea-vietnam'
  | 'kr-foreign-school'
  | 'kr-international-school'
  | 'uk-boarding'
  | 'us-boarding';

export interface TargetUniMeta {
  id: TargetUniversity;
  ko: string;
  zh: string;
  preferred_curriculum: Curriculum[];
  notes_ko: string;
  notes_zh: string;
}

export const TARGET_UNIVERSITIES: TargetUniMeta[] = [
  {
    id: 'uk-oxbridge',
    ko: '영국 옥스브리지 (Oxford · Cambridge)',
    zh: '英国牛剑(Oxford · Cambridge)',
    preferred_curriculum: ['IB', 'British'],
    notes_ko: 'A-Level 3과목 A*A*A* 또는 IB 40+ 권장. 과목별 학과 적합성 + 인터뷰 비중 큼.',
    notes_zh: 'A-Level 三门 A*A*A* 或 IB 40+。学科匹配度与面试占比高。',
  },
  {
    id: 'uk-russell',
    ko: '영국 러셀 그룹 (Imperial · UCL · LSE 등)',
    zh: '英国罗素集团(Imperial · UCL · LSE 等)',
    preferred_curriculum: ['IB', 'British'],
    notes_ko: 'A-Level AAA / IB 36~38 범위. 학과별 입학 점수 상이.',
    notes_zh: 'A-Level AAA / IB 36~38。各专业入学分数不同。',
  },
  {
    id: 'us-ivy',
    ko: '미국 아이비리그 (Harvard · Princeton · Yale 등)',
    zh: '美国常春藤(Harvard · Princeton · Yale 等)',
    preferred_curriculum: ['IB', 'American'],
    notes_ko: 'SAT 1500+ / IB 40+ / AP 다수, 비교과(과외·봉사·리더십)·에세이 비중 큼.',
    notes_zh: 'SAT 1500+ / IB 40+ / 多门 AP,课外活动与文书占比高。',
  },
  {
    id: 'us-top30',
    ko: '미국 USNews Top 30',
    zh: '美国 USNews Top 30',
    preferred_curriculum: ['IB', 'American'],
    notes_ko: 'SAT 1400+ / GPA 3.8+ / AP 4~6개. 전공별 맞춤 비교과.',
    notes_zh: 'SAT 1400+ / GPA 3.8+ / 4~6 门 AP。按专业方向匹配课外。',
  },
  {
    id: 'au-g8',
    ko: '호주 Group of 8 (Melbourne · Sydney · ANU 등)',
    zh: '澳大利亚八大(Melbourne · Sydney · ANU 等)',
    preferred_curriculum: ['IB', 'British', 'American'],
    notes_ko: 'ATAR 90+ 또는 IB 35+ 권장. 입학 문턱 비교적 낮으나 학과별 상이.',
    notes_zh: 'ATAR 90+ 或 IB 35+。门槛相对友好,各专业不同。',
  },
  {
    id: 'kr-sky',
    ko: '한국 SKY · KAIST · POSTECH',
    zh: '韩国 SKY · KAIST · POSTECH',
    preferred_curriculum: ['IB', 'American'],
    notes_ko: '재외국민 전형 활용 가능 (자격 요건 충족 시). IB 또는 SAT 점수 활용.',
    notes_zh: '可利用海外侨胞特殊招生(满足资格)。使用 IB 或 SAT 成绩。',
  },
  {
    id: 'asia-top',
    ko: '아시아 명문 (NUS · HKU · 도쿄대 등)',
    zh: '亚洲名校(NUS · HKU · 东京大学 等)',
    preferred_curriculum: ['IB', 'British', 'American'],
    notes_ko: 'IB 36+ / SAT 1400+ / A-Level AAA. 학과별 영어·중국어·일본어 요건 다름.',
    notes_zh: 'IB 36+ / SAT 1400+ / A-Level AAA。语言要求按学校不同。',
  },
];

export interface StartRegionMeta {
  id: StartRegion;
  ko: string;
  zh: string;
  /** 해당 출발지의 시장 학비 범위 (USD/년, 12~K12 평균) */
  tuition_range_usd: [number, number];
  /** 운영자 직접 거주·방문 가능 영역 표시 (E-E-A-T 신호) */
  operator_proximity: 'high' | 'medium' | 'low';
}

export const START_REGIONS: StartRegionMeta[] = [
  { id: 'sea-malaysia', ko: '동남아 — 말레이시아', zh: '东南亚 — 马来西亚', tuition_range_usd: [6000, 28000], operator_proximity: 'high' },
  { id: 'sea-thailand', ko: '동남아 — 태국', zh: '东南亚 — 泰国', tuition_range_usd: [8000, 32000], operator_proximity: 'high' },
  { id: 'sea-singapore', ko: '동남아 — 싱가포르', zh: '东南亚 — 新加坡', tuition_range_usd: [20000, 50000], operator_proximity: 'medium' },
  { id: 'sea-vietnam', ko: '동남아 — 베트남', zh: '东南亚 — 越南', tuition_range_usd: [10000, 30000], operator_proximity: 'medium' },
  { id: 'kr-foreign-school', ko: '한국 — 외국인학교 (SFS · YISS · 채드윅 송도 등)', zh: '韩国 — 外国人学校(SFS · YISS · Chadwick 等)', tuition_range_usd: [25000, 40000], operator_proximity: 'medium' },
  { id: 'kr-international-school', ko: '한국 — 제주 국제학교 (NLCS · KIS · BHA · SJA)', zh: '韩国 — 济州国际学校(NLCS · KIS · BHA · SJA)', tuition_range_usd: [30000, 45000], operator_proximity: 'medium' },
  { id: 'uk-boarding', ko: '영국 보딩스쿨', zh: '英国寄宿学校', tuition_range_usd: [45000, 70000], operator_proximity: 'low' },
  { id: 'us-boarding', ko: '미국 보딩스쿨', zh: '美国寄宿学校', tuition_range_usd: [55000, 80000], operator_proximity: 'low' },
];

/**
 * 일반화된 단계. 학년 진행과 시험 일정은 IB·British·American 시스템의 공개 기준.
 */
export interface StageTemplate {
  id: string;
  yearLabel_ko: string;
  yearLabel_zh: string;
  ageLabel_ko: string;
  ageLabel_zh: string;
  focus_ko: string[];
  focus_zh: string[];
  examsByCurriculum: Record<Curriculum, string[]>;
}

export const STAGE_TEMPLATES: StageTemplate[] = [
  {
    id: 'early-primary',
    yearLabel_ko: '저학년 (G1–G3 / 초1–초3)',
    yearLabel_zh: '低年级(G1–G3)',
    ageLabel_ko: '6–9세',
    ageLabel_zh: '6–9 岁',
    focus_ko: ['영어 환경 적응', '읽기·쓰기 기초', '문화 적응'],
    focus_zh: ['英语环境适应', '读写基础', '文化融入'],
    examsByCurriculum: { IB: [], British: [], American: [] },
  },
  {
    id: 'upper-primary',
    yearLabel_ko: '중학년 (G4–G6 / 초4–초6)',
    yearLabel_zh: '中年级(G4–G6)',
    ageLabel_ko: '9–12세',
    ageLabel_zh: '9–12 岁',
    focus_ko: ['학업 기초 견고화', '특기·예체능 탐색', '독서량 확보'],
    focus_zh: ['学业基础巩固', '特长与体育探索', '阅读量积累'],
    examsByCurriculum: { IB: ['PYP 종료 (선택)'], British: ['Cambridge Primary Checkpoint (선택)'], American: ['MAP / Stanford 10 (선택)'] },
  },
  {
    id: 'lower-secondary',
    yearLabel_ko: '중등 초기 (G7–G8 / 중1–중2)',
    yearLabel_zh: '初中(G7–G8)',
    ageLabel_ko: '12–14세',
    ageLabel_zh: '12–14 岁',
    focus_ko: ['커리큘럼 적응 (MYP/Lower Secondary)', '학과 적성 탐색'],
    focus_zh: ['课程过渡(MYP / Lower Secondary)', '学科兴趣探索'],
    examsByCurriculum: { IB: ['MYP 진행'], British: ['Lower Secondary 진행'], American: ['Middle School 진행'] },
  },
  {
    id: 'igcse',
    yearLabel_ko: 'IGCSE / 9–10학년 (중3–고1)',
    yearLabel_zh: 'IGCSE / G9–G10(初三–高一)',
    ageLabel_ko: '14–16세',
    ageLabel_zh: '14–16 岁',
    focus_ko: ['IGCSE 8~10과목 선택', 'GPA 관리', '학과 깊이 탐색'],
    focus_zh: ['IGCSE 8~10 门科目选择', 'GPA 管理', '学科深度探索'],
    examsByCurriculum: { IB: ['MYP eAssessment'], British: ['IGCSE 시험 (G10/G11)'], American: ['PSAT (G10)'] },
  },
  {
    id: 'diploma',
    yearLabel_ko: '디플로마 (G11–G12 / 고2–고3)',
    yearLabel_zh: '文凭阶段(G11–G12 / 高二–高三)',
    ageLabel_ko: '16–18세',
    ageLabel_zh: '16–18 岁',
    focus_ko: ['IB Diploma 6과목 + EE/TOK 또는 A-Level 3~4과목 또는 AP 5~7과목', '대학 지원 에세이·인터뷰 준비', 'IELTS/TOEFL'],
    focus_zh: ['IB Diploma 六科 + EE/TOK 或 A-Level 3~4 门或 AP 5~7 门', '大学申请文书·面试准备', 'IELTS/TOEFL'],
    examsByCurriculum: {
      IB: ['IB Diploma 시험 (G12 5월)', 'IELTS / TOEFL'],
      British: ['A-Level (G13 5–6월)', 'IELTS'],
      American: ['SAT / ACT', 'AP (5월)', 'TOEFL'],
    },
  },
  {
    id: 'application',
    yearLabel_ko: '대학 지원 (G12)',
    yearLabel_zh: '大学申请(G12)',
    ageLabel_ko: '17–18세',
    ageLabel_zh: '17–18 岁',
    focus_ko: ['지원서 작성·에세이', '추천서·인터뷰', '비교과 정리'],
    focus_zh: ['申请书与文书', '推荐信与面试', '课外活动整理'],
    examsByCurriculum: {
      IB: ['최종 IB 점수 (7월 발표)'],
      British: ['UCAS (10월 옥스브리지 / 1월 일반) + A-Level 결과'],
      American: ['Common App (Early 11월 / RD 1월)'],
    },
  },
];

export interface ComputedPlan {
  curriculum: Curriculum;
  targetMeta: TargetUniMeta;
  startMeta: StartRegionMeta;
  stages: {
    template: StageTemplate;
    exams: string[];
    included: boolean; // 사용자 현재 학년 이후만 표시
  }[];
  estimatedTotalUsd: { min: number; max: number };
  yearsRemaining: number;
}

export function computePlan(input: {
  currentGrade: number; // 0 = 유치원, 1~12
  target: TargetUniversity;
  start: StartRegion;
  budget: BudgetTier;
}): ComputedPlan {
  const targetMeta = TARGET_UNIVERSITIES.find((t) => t.id === input.target)!;
  const startMeta = START_REGIONS.find((s) => s.id === input.start)!;
  // 권장 커리큘럼: 출발지가 영국식 보딩이면 British, 미국 보딩이면 American, 그 외 IB 디폴트
  const curriculum: Curriculum = input.start === 'uk-boarding'
    ? 'British'
    : input.start === 'us-boarding'
      ? 'American'
      : targetMeta.preferred_curriculum.includes('IB')
        ? 'IB'
        : targetMeta.preferred_curriculum[0];

  const stages = STAGE_TEMPLATES.map((template) => {
    const exams = template.examsByCurriculum[curriculum];
    const startGrade =
      template.id === 'early-primary' ? 1 :
      template.id === 'upper-primary' ? 4 :
      template.id === 'lower-secondary' ? 7 :
      template.id === 'igcse' ? 9 :
      template.id === 'diploma' ? 11 :
      template.id === 'application' ? 12 : 1;
    const endGrade =
      template.id === 'early-primary' ? 3 :
      template.id === 'upper-primary' ? 6 :
      template.id === 'lower-secondary' ? 8 :
      template.id === 'igcse' ? 10 :
      template.id === 'diploma' ? 12 :
      template.id === 'application' ? 12 : 12;
    const included = input.currentGrade <= endGrade;
    return { template, exams, included };
  });

  // 비용 추정: 출발지 평균(예산 티어로 가중) × 남은 학년
  const yearsRemaining = Math.max(1, 13 - Math.max(0, input.currentGrade));
  const [minTuit, maxTuit] = startMeta.tuition_range_usd;
  const budgetMultiplier: Record<BudgetTier, [number, number]> = {
    'budget-friendly': [0.0, 0.3],
    'mid-range': [0.25, 0.6],
    premium: [0.5, 0.85],
    'top-tier': [0.75, 1.0],
  };
  const [lo, hi] = budgetMultiplier[input.budget];
  const minYear = Math.round(minTuit + (maxTuit - minTuit) * lo);
  const maxYear = Math.round(minTuit + (maxTuit - minTuit) * hi);
  return {
    curriculum,
    targetMeta,
    startMeta,
    stages,
    estimatedTotalUsd: { min: minYear * yearsRemaining, max: maxYear * yearsRemaining },
    yearsRemaining,
  };
}

export function pickLabel(locale: Locale, ko: string, zh: string): string {
  return locale === 'ko' ? ko : zh;
}
