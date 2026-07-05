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
  intro_ko: string; intro_zh: string; detail_ko: string; detail_zh: string;
}> = {
  'budget-friendly': {
    ko: '가성비', zh: '高性价比', range_ko: '연 학비 $15,000 이하', range_zh: '年学费 < $15,000', emoji: '💰',
    intro_ko: '학비가 낮다고 교육 퀄리티가 낮은 건 아닙니다. 두 학교를 옮겨본 결과, 이 구간에도 시설·교사진이 충실한 학교가 있습니다. 다만 학비 외 부대비용을 반드시 함께 확인하세요.',
    intro_zh: '学费低不代表教育质量差。以我两次转学的经验,这一区间也有设施·师资扎实的学校。但请务必一并核实学费之外的附加费用。',
    detail_ko: '이 구간은 대개 이중언어(현지어 비중 있는) 학교나 신설·중소 규모 학교가 많습니다. 학비를 아낀 만큼 교사 국적 구성·시설 상태·영어 사용 비율을 직접 확인하는 것이 중요합니다. 저비용이 목적이라면 좋은 출발점이지만, "영어·다국적 환경"을 기대한다면 학생 국적 비율을 반드시 살펴보세요.',
    detail_zh: '这一区间多为双语(含本地语言比重)或新设 · 中小规模学校。省下学费的同时,务必亲自确认教师国籍构成 · 设施状态 · 英语使用比例。以省钱为目的是不错的起点,但若期待「英语 · 多国籍环境」,请务必查看学生国籍比例。',
  },
  'mid-range': {
    ko: '중간 예산', zh: '中等预算', range_ko: '연 학비 $15,000~22,000', range_zh: '年学费 $15,000~22,000', emoji: '⚖️',
    intro_ko: '동남아 국제학교에서 선택지가 가장 넓은 구간입니다. 커리큘럼·한국인 비율·통학 편의를 기준으로 비교하기 좋습니다.',
    intro_zh: '这是东南亚国际学校选择最多的区间。适合按课程·华人比例·通勤便利来比较。',
    detail_ko: '동남아 국제학교에서 선택지가 가장 두꺼운 구간이라, 같은 예산 안에서 커리큘럼(IB·영국식·미국식)과 지역·통학을 비교하기 좋습니다. 학교별 편차가 크니 학비 하나로 줄 세우지 말고, 한국인·중국인 비율과 원어민 교사 비율을 함께 보세요. 대부분의 가정에 현실적인 균형점이 이 구간에 있습니다.',
    detail_zh: '这是东南亚国际学校选择最多的区间,便于在同一预算内比较课程(IB · 英式 · 美式)与地区 · 通学。校际差异大,别只按学费排序,也要看华人/本地比例与母语英语教师比例。对多数家庭而言,现实的平衡点就在这一区间。',
  },
  'premium': {
    ko: '프리미엄', zh: '高端', range_ko: '연 학비 $22,000~30,000', range_zh: '年学费 $22,000~30,000', emoji: '✨',
    intro_ko: '시설·진학 실적이 강한 학교가 모이는 구간입니다. 다만 "학비=퀄리티"는 아니니, 실제 방문과 데이터로 검증하세요.',
    intro_zh: '设施·升学成绩较强的学校集中于此。但「学费=质量」并不成立,请以实地考察与数据验证。',
    detail_ko: '시설·진학 실적이 강한 학교가 모이지만, 표기 학비의 상단은 고학년 기준이라 실제 부담은 더 큽니다. 여기에 지원비·등록비·통학·활동비 등 부대비용을 더하면 총액은 표면 학비의 1.3~1.5배가 됩니다. 학비만 보고 "좋은 학교"라 단정하지 말고, 실제 방문과 진학 데이터로 검증하세요.',
    detail_zh: '设施 · 升学成绩较强的学校集中于此,但标示学费的上限按高年级计,实际负担更高。再加上报名费 · 注册费 · 通学 · 活动费等,总额约为表面学费的 1.3~1.5 倍。别只凭学费断定「好学校」,请以实地考察与升学数据验证。',
  },
  'top-tier': {
    ko: '최상위', zh: '顶级', range_ko: '연 학비 $30,000+', range_zh: '年学费 $30,000+', emoji: '👑',
    intro_ko: '지역 최상위 학비 구간입니다. 명문 진학 실적·캠퍼스 규모가 강점이지만, 투자 대비 실익을 냉정히 따져야 합니다.',
    intro_zh: '本地区最高学费区间。名校升学成绩·校园规模是强项,但需冷静权衡投入与实际回报。',
    detail_ko: '지역 최상위 학비 구간으로, 명문 진학 실적·넓은 캠퍼스·풍부한 프로그램이 강점입니다. 다만 학교당 가족 총부담이 크게 올라가므로, 투자 대비 실익(진학 목표·자녀 적합성)을 냉정히 따져야 합니다. 최상위 학비가 곧 최상의 적합성을 뜻하지는 않습니다 — 우리 아이에게 맞는지가 먼저입니다.',
    detail_zh: '本地区最高学费区间,名校升学 · 大校园 · 丰富项目是强项。但每所学校的家庭总负担明显上升,需冷静权衡投入与回报(升学目标 · 孩子适配)。最高学费并不等于最适合——先看是否适合自己孩子。',
  },
};

export function formatUsdRange(t: [number, number]): string {
  const f = (n: number) => '$' + n.toLocaleString('en-US');
  return `${f(t[0])} ~ ${f(t[1])}`;
}
