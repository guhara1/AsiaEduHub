import { MALAYSIA_SCHOOLS } from './malaysia-schools';
import { THAILAND_SCHOOLS } from './thailand-schools';
import { VIETNAM_SCHOOLS } from './vietnam-schools';
import { SINGAPORE_SCHOOLS } from './singapore-schools';

export type BudgetTier = 'budget-friendly' | 'mid-range' | 'premium' | 'top-tier';

export const BUDGET_TIERS: BudgetTier[] = ['budget-friendly', 'mid-range', 'premium', 'top-tier'];

// 연 학비(USD) 중앙값 기준 구간. 동남아 국제학교 실제 학비 분포($8k~$35k)에 맞춰 각 구간이
// 충분히 채워지도록 설정 (가성비 32 · 중간 27 · 프리미엄 16 · 최상위 5곳 수준).
export function tierOf(mid: number): BudgetTier {
  if (mid < 15000) return 'budget-friendly';
  if (mid < 22000) return 'mid-range';
  if (mid < 30000) return 'premium';
  return 'top-tier';
}

export interface BudgetSchool {
  slug: string;
  name_ko: string;
  name_zh: string;
  country_ko: string;
  country_zh: string;
  flag: string;
  url: string;
  tuition: [number, number];
  mid: number;
}

function mid(t: [number, number]): number {
  return Math.round((t[0] + t[1]) / 2);
}

/** 동남아 4개국 학교를 학비 기준 통합 리스트로 반환 (학비 데이터 없는 학교는 제외). */
export function allBudgetSchools(): BudgetSchool[] {
  const out: BudgetSchool[] = [];
  for (const s of MALAYSIA_SCHOOLS) {
    if (!s.tuition_range_usd) continue;
    out.push({ slug: s.slug, name_ko: s.name_ko, name_zh: s.name_zh, country_ko: '말레이시아', country_zh: '马来西亚', flag: '🇲🇾', url: `/abroad/malaysia/${s.slug}/`, tuition: s.tuition_range_usd, mid: mid(s.tuition_range_usd) });
  }
  for (const s of SINGAPORE_SCHOOLS) {
    if (!s.tuition_range_usd) continue;
    out.push({ slug: s.slug, name_ko: s.name_ko, name_zh: s.name_zh, country_ko: '싱가포르', country_zh: '新加坡', flag: '🇸🇬', url: `/abroad/singapore/${s.slug}/`, tuition: s.tuition_range_usd, mid: mid(s.tuition_range_usd) });
  }
  for (const s of THAILAND_SCHOOLS) {
    if (!s.tuition_range_usd) continue;
    out.push({ slug: s.slug, name_ko: s.name_ko, name_zh: s.name_zh, country_ko: '태국', country_zh: '泰国', flag: '🇹🇭', url: `/abroad/thailand/${s.region}/${s.slug}/`, tuition: s.tuition_range_usd, mid: mid(s.tuition_range_usd) });
  }
  for (const s of VIETNAM_SCHOOLS) {
    if (!s.tuition_range_usd) continue;
    out.push({ slug: s.slug, name_ko: s.name_ko, name_zh: s.name_zh, country_ko: '베트남', country_zh: '越南', flag: '🇻🇳', url: `/abroad/vietnam/${s.region}/${s.slug}/`, tuition: s.tuition_range_usd, mid: mid(s.tuition_range_usd) });
  }
  return out;
}

export function budgetSchoolsByTier(tier: BudgetTier): BudgetSchool[] {
  return allBudgetSchools()
    .filter((s) => tierOf(s.mid) === tier)
    .sort((a, b) => a.mid - b.mid);
}

export const TIER_META: Record<BudgetTier, {
  ko: string; zh: string; range_ko: string; range_zh: string; emoji: string;
  intro_ko: string; intro_zh: string;
}> = {
  'budget-friendly': {
    ko: '가성비', zh: '高性价比', range_ko: '연 학비 $15,000 이하', range_zh: '年学费 < $15,000', emoji: '💰',
    intro_ko: '학비가 낮다고 교육 퀄리티가 낮은 건 아닙니다. 두 학교를 옮겨본 결과, 이 구간에도 시설·교사진이 충실한 학교가 있습니다. 다만 학비 외 부대비용을 반드시 함께 확인하세요.',
    intro_zh: '学费低不代表教育质量差。以我两次转学的经验,这一区间也有设施·师资扎实的学校。但请务必一并核实学费之外的附加费用。',
  },
  'mid-range': {
    ko: '중간 예산', zh: '中等预算', range_ko: '연 학비 $15,000~22,000', range_zh: '年学费 $15,000~22,000', emoji: '⚖️',
    intro_ko: '동남아 국제학교에서 선택지가 가장 넓은 구간입니다. 커리큘럼·한국인 비율·통학 편의를 기준으로 비교하기 좋습니다.',
    intro_zh: '这是东南亚国际学校选择最多的区间。适合按课程·华人比例·通勤便利来比较。',
  },
  'premium': {
    ko: '프리미엄', zh: '高端', range_ko: '연 학비 $22,000~30,000', range_zh: '年学费 $22,000~30,000', emoji: '✨',
    intro_ko: '시설·진학 실적이 강한 학교가 모이는 구간입니다. 다만 "학비=퀄리티"는 아니니, 실제 방문과 데이터로 검증하세요.',
    intro_zh: '设施·升学成绩较强的学校集中于此。但「学费=质量」并不成立,请以实地考察与数据验证。',
  },
  'top-tier': {
    ko: '최상위', zh: '顶级', range_ko: '연 학비 $30,000+', range_zh: '年学费 $30,000+', emoji: '👑',
    intro_ko: '지역 최상위 학비 구간입니다. 명문 진학 실적·캠퍼스 규모가 강점이지만, 투자 대비 실익을 냉정히 따져야 합니다.',
    intro_zh: '本地区最高学费区间。名校升学成绩·校园规模是强项,但需冷静权衡投入与实际回报。',
  },
};

export function formatUsdRange(t: [number, number]): string {
  const f = (n: number) => '$' + n.toLocaleString('en-US');
  return `${f(t[0])} ~ ${f(t[1])}`;
}
