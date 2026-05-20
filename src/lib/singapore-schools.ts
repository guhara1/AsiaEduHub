/**
 * 싱가포르 국제학교 카탈로그.
 *
 * 학교명 · 공식 데이터(설립 · 위치 · 커리큘럼 · IB 평균 점수) = 공개 사실.
 * 학비는 2025-2026 시점 시장 추정 (USD/년, SGD 환산 1 USD ≈ 1.35 SGD).
 * 운영자(데이비드)는 KL 거주 — 싱가포르는 단기 출장 + 학부모 커뮤니티 청취.
 */
import type { Locale } from './i18n';
import type { FinanceOverride } from './school-finance';

export interface SgCurriculum {
  type: 'British' | 'American' | 'IB' | 'Australian' | 'Canadian' | 'Singaporean' | 'Mixed';
  programs_en: string[];
}

/** IB Diploma 학교별 평균·최고 점수 (공개 자료 기반) */
export interface IbStats {
  average?: number;        // 평균 (45점 만점)
  max?: number;            // 최고
  pass_rate?: number;      // 0~100 (%)
  candidates_per_year?: number;
}

export interface SingaporeSchool extends FinanceOverride {
  slug: string;
  name_en: string;
  name_ko: string;
  name_zh: string;
  abbreviation?: string;
  founded_year?: number;
  district_ko?: string;
  district_zh?: string;
  website: string;
  grade_range: string;
  curriculum: SgCurriculum;
  tuition_range_usd: [number, number];
  boarding?: boolean;
  ib_stats?: IbStats;
  highlights_ko: string[];
  highlights_zh: string[];
  summary_ko: string;
  summary_zh: string;
  operator_visited?: boolean;
  operator_note_ko?: string;
  operator_note_zh?: string;
}

export const SINGAPORE_SCHOOLS: SingaporeSchool[] = [
  {
    slug: 'sais-stamford',
    name_en: 'Stamford American International School',
    name_ko: 'SAIS — 스탬포드 아메리칸 국제학교',
    name_zh: 'SAIS — 斯坦福美国国际学校',
    abbreviation: 'SAIS', founded_year: 2009,
    district_ko: 'Woodleigh · 도심 접근권', district_zh: 'Woodleigh · 市中心圈',
    website: 'https://www.sais.edu.sg',
    grade_range: 'Nursery–G12',
    curriculum: { type: 'American', programs_en: ['American', 'IB Diploma', 'AP'] },
    tuition_range_usd: [25000, 37000],
    ib_stats: { average: 34.2, pass_rate: 97 },
    highlights_ko: [
      'IB Diploma + AP 트랙 선택 가능',
      '도심 접근성 — 주재원 학부모 선호 1순위',
      'IB 평균 34.2점 · 합격률 97%',
      'Nursery 부터 G12까지 한 캠퍼스',
    ],
    highlights_zh: [
      'IB Diploma + AP 双轨可选',
      '市中心通勤 — 派驻员家庭首选',
      'IB 平均 34.2 分 · 通过率 97%',
      'Nursery 到 G12 一站式校园',
    ],
    summary_ko: '도심 인접 미국식 대형 캠퍼스. IB Diploma와 AP 중 선택해 진로 맞춤 트랙 가능. 주재원 가족 만족도 최상위.',
    summary_zh: '市中心邻近的美式大型校区。IB Diploma 与 AP 可二选一,定制升学路径。派驻家庭满意度极高。',
  },
  {
    slug: 'cis-canadian',
    name_en: 'Canadian International School (Lakeside)',
    name_ko: 'CIS — 캐나다 국제학교',
    name_zh: 'CIS — 加拿大国际学校',
    abbreviation: 'CIS', founded_year: 1990,
    district_ko: 'Lakeside · 싱가포르 서부', district_zh: 'Lakeside · 新加坡西部',
    website: 'https://www.cis.edu.sg',
    grade_range: 'PreK–G12',
    curriculum: { type: 'IB', programs_en: ['IB PYP', 'IB MYP', 'IB Diploma'] },
    tuition_range_usd: [25000, 36000],
    ib_stats: { average: 35, max: 44 },
    highlights_ko: [
      '캐나다 정통 + IB 전 단계 (PYP·MYP·DP)',
      '영어·중국어 바이링궐(이중언어) 프로그램 강점',
      '서부 통합 대형 캠퍼스 (구 도심 캠퍼스 통합)',
      '부킷티마 한인 거주권 — 스쿨버스 통학 다수',
    ],
    highlights_zh: [
      '加拿大正统 + IB 全阶段 (PYP · MYP · DP)',
      '英中双语项目优势',
      '西部整合大型校区(原市中心校区合并)',
      'Bukit Timah 韩国家长居住区 — 校车通学多',
    ],
    summary_ko: '캐나다 IB 정통 + 영중 바이링궐. 부킷티마 인접 서부 대형 캠퍼스. 중국어 강화를 원하는 학부모 1순위.',
    summary_zh: '加拿大 IB 正统 + 英中双语。Bukit Timah 邻近西部大型校区。强化中文的家长首选。',
  },
  {
    slug: 'nexus-singapore',
    name_en: 'NEXUS International School Singapore',
    name_ko: 'NEXUS — 넥서스 국제학교',
    name_zh: 'NEXUS — 国际学校',
    abbreviation: 'NEXUS', founded_year: 1991,
    district_ko: 'Aljunied · 동부', district_zh: 'Aljunied · 东部',
    website: 'https://www.nexus.edu.sg',
    grade_range: 'PreK–G12',
    curriculum: { type: 'IB', programs_en: ['IB PYP', 'IB MYP', 'IB Diploma'] },
    tuition_range_usd: [23000, 33000],
    ib_stats: { average: 35, max: 45 },
    highlights_ko: [
      'IB 전 단계 — 매년 안정적 성과',
      '영국·호주·뉴질랜드 학생 다수 — 영연방 환경',
      '졸업생 영국·캐나다·호주 대학 진학 다수',
      '쾌적한 캠퍼스 + 우수 시설',
    ],
    highlights_zh: [
      'IB 全阶段 — 每年成绩稳定',
      '英澳新学生众多 — 英联邦氛围',
      '毕业生升入英国 · 加拿大 · 澳大利亚高校多',
      '校园舒适 + 设施优秀',
    ],
    summary_ko: '안정적 IB 성과 + 영연방 학생 다수. 시내 동쪽 쾌적한 캠퍼스. 영국·호주 대학 진학 트랙 학부모 선호.',
    summary_zh: '稳定的 IB 成绩 + 英联邦学生众多。市区东部舒适校园。英澳升学家长偏好。',
  },
  {
    slug: 'ais-australian',
    name_en: 'Australian International School Singapore',
    name_ko: 'AIS — 호주 국제학교',
    name_zh: 'AIS — 澳大利亚国际学校',
    abbreviation: 'AIS', founded_year: 1993,
    district_ko: 'Lorong Chuan · 시내 근접 주거지', district_zh: 'Lorong Chuan · 市区近郊',
    website: 'https://www.ais.com.sg',
    grade_range: 'PreK–Y12',
    curriculum: { type: 'IB', programs_en: ['IB PYP', 'IB MYP', 'IB Diploma', 'HSC NSW'] },
    tuition_range_usd: [23000, 33000],
    ib_stats: { average: 33.3, max: 45 },
    highlights_ko: [
      '호주 학생 비율 약 40% — 영연방 다국적 환경',
      '한국인 비율 낮음 → 자연스러운 영어 환경',
      '한국 학부모 커뮤니티는 안정적 운영 중',
      '엘리트 선별보다 폭넓은 입학 + 체계적 학업 견인',
    ],
    highlights_zh: [
      '澳大利亚学生约 40% — 英联邦多元国籍',
      '韩国学生比例低 → 自然英语环境',
      '韩国家长社群稳定运营',
      '非顶尖筛选 + 系统化教学引导成长',
    ],
    summary_ko: '호주식 + IB. 한국인 비율 낮아 영어 노출 최대. 호주 학생 40% — 영연방 다국적. 한국 학부모 커뮤니티는 별도 안정적.',
    summary_zh: '澳式 + IB。韩国比例低,英语沉浸最大化。澳大利亚学生 40% — 英联邦多元。韩国家长社群另成稳定圈。',
  },
  {
    slug: 'hcis-hwa-chong',
    name_en: 'Hwa Chong International School',
    name_ko: 'HCIS — 화총 국제학교',
    name_zh: 'HCIS — 华侨中学(国际)',
    abbreviation: 'HCIS', founded_year: 2005,
    district_ko: 'Bukit Timah · 화총 교육 단지', district_zh: 'Bukit Timah · 华中教育园区',
    website: 'https://www.hcis.edu.sg',
    grade_range: 'Y7–Y12 (중·고)',
    curriculum: { type: 'IB', programs_en: ['IGCSE', 'IB Diploma'] },
    tuition_range_usd: [18000, 25000], boarding: true,
    ib_stats: { average: 37.9, max: 44 },
    highlights_ko: [
      '화총 100년+ 명문 교육 그룹 일원',
      '싱가포르 TOP 3 국제학교 손꼽힘',
      '학생 기본 보딩(기숙) 제도 — 집중도 최상',
      'IB 평균 37.9점 — 싱가포르 국제학교 최상위',
    ],
    highlights_zh: [
      '华侨中学百年 + 名校教育集团',
      '新加坡 TOP 3 国际学校之一',
      '学生基本寄宿 — 专注度极高',
      'IB 平均 37.9 分 — 新加坡国际学校顶尖',
    ],
    summary_ko: '화총 그룹 100년+ 명문. 싱가포르 IB 최상위 (37.9). 보딩 중심 — 학업 집중 환경. 중·고등 학년만.',
    summary_zh: '华侨中学百年名校集团。新加坡 IB 顶尖 (37.9)。以寄宿为主 — 学业专注。仅中学 · 高中。',
  },
  {
    slug: 'xcl-world-academy',
    name_en: 'XCL World Academy',
    name_ko: 'XCL 월드 아카데미',
    name_zh: 'XCL 世界学院',
    abbreviation: 'XCL WA', founded_year: 2010,
    district_ko: 'Jurong · 서부 신규 캠퍼스', district_zh: 'Jurong · 西部新校区',
    website: 'https://www.xwa.edu.sg',
    grade_range: 'PreK–G12',
    curriculum: { type: 'IB', programs_en: ['IB PYP', 'IB MYP', 'IB Diploma'] },
    tuition_range_usd: [21000, 31000],
    ib_stats: { average: 35 },
    highlights_ko: [
      'AI·로봇 등 미래 교육 커리큘럼 강조',
      '최신 캠퍼스 + 넓은 시설',
      'IB 평균 35점대',
      '주변 거주비 비교적 합리적',
      '친절한 교사진 — 학생 케어 우수',
    ],
    highlights_zh: [
      'AI · 机器人等未来教育课程强调',
      '新建校园 + 宽敞设施',
      'IB 平均 35 分',
      '周边居住成本相对合理',
      '教师亲切 — 学生关怀优秀',
    ],
    summary_ko: 'AI·로봇 등 미래 교육 특화 IB 학교. 신축 캠퍼스 + 친절한 교사진. 서부 주거비도 합리적.',
    summary_zh: 'AI · 机器人等未来教育特色 IB 学校。新建校园 + 教师亲切。西部居住成本合理。',
  },
  {
    slug: 'uwc-sea',
    name_en: 'United World College of South East Asia',
    name_ko: 'UWC SEA — 동남아 UWC',
    name_zh: 'UWC SEA — 东南亚联合世界书院',
    abbreviation: 'UWC SEA', founded_year: 1971,
    district_ko: 'Dover (서부) + Tampines (동부) 2 캠퍼스', district_zh: 'Dover (西部) + Tampines (东部) 双校区',
    website: 'https://www.uwcsea.edu.sg',
    grade_range: 'K–G12',
    curriculum: { type: 'IB', programs_en: ['IB PYP', 'IB MYP', 'IB Diploma'] },
    tuition_range_usd: [28000, 37000], boarding: true,
    ib_stats: { average: 36.3, max: 45, pass_rate: 98.7, candidates_per_year: 605 },
    highlights_ko: [
      '글로벌 UWC 네트워크 (미국·스위스·네덜란드 등) 일원',
      '이사회에 세계적 인사 참여 — 교육 신뢰도·영향력 최상',
      'IB 평균 36.3점 · 합격률 98.7% · 연 605명 응시',
      'Dover + Tampines 2 캠퍼스 운영',
      'UWC 네트워크 중 싱가포르 IB 점수 최상위권',
    ],
    highlights_zh: [
      '全球 UWC 网络(美国 · 瑞士 · 荷兰等)成员',
      '理事会汇集世界名流 — 教育信誉 · 影响力顶尖',
      'IB 平均 36.3 · 通过率 98.7% · 年 605 名考生',
      'Dover + Tampines 双校区',
      'UWC 网络中新加坡 IB 成绩名列前茅',
    ],
    summary_ko: '글로벌 UWC 네트워크 일원. IB 평균 36.3 (네트워크 최상위). Dover · Tampines 2 캠퍼스. 학업 분위기 매우 진지, 명문 대학 진학 다수.',
    summary_zh: '全球 UWC 网络成员。IB 平均 36.3(网络顶尖)。Dover · Tampines 双校区。学业氛围严肃,名校升学多。',
  },
  {
    slug: 'sas-singapore-american',
    name_en: 'Singapore American School',
    name_ko: 'SAS — 싱가포르 미국학교',
    name_zh: 'SAS — 新加坡美国学校',
    abbreviation: 'SAS', founded_year: 1956,
    district_ko: 'Woodlands · 북부 미국 가족 클러스터', district_zh: 'Woodlands · 北部美国家庭聚集区',
    website: 'https://www.sas.edu.sg',
    grade_range: 'PreK–G12',
    curriculum: { type: 'American', programs_en: ['American', 'AP', 'College Credit'] },
    tuition_range_usd: [28000, 41000],
    highlights_ko: [
      '미국 K-12 정통 + AP 29과목 (싱가포르 최다)',
      '대학 진학률 거의 100%',
      '하버드·유펜·코넬 등 아이비리그 합격생 정기 배출',
      '학생 다수 진학지 — NYU',
      'SAT/ACT 시험 + 컬리지 크레딧 동시 준비',
      '⚠ 입학 우선순위: 미국 시민권 > 미국계 회사 주재원 자녀 > 일반 유학생 → 자리 매우 제한',
    ],
    highlights_zh: [
      '美国 K-12 正统 + AP 29 门(新加坡最多)',
      '大学升学率近 100%',
      '哈佛 · 宾大 · 康奈尔等常春藤稳定录取',
      '学生最多升入 — NYU',
      'SAT/ACT + College Credit 同步准备',
      '⚠ 入学优先级:美国公民 > 美企派驻子女 > 普通留学生 → 名额极少',
    ],
    summary_ko: '미국 정통 K-12 + AP 29과목. 아이비리그 진학 정기. 단 미국 시민권자·미국계 주재원 자녀 우선 입학 — 일반 유학생 자리 매우 제한.',
    summary_zh: '美式正统 K-12 + AP 29 门。常春藤升学稳定。但美国公民 · 美企派驻子女优先 — 普通留学生名额极少。',
  },
  {
    slug: 'sfms-methodist',
    name_en: 'St Francis Methodist School',
    name_ko: 'SFMS — 세인트 프란시스 메소디스트 스쿨',
    name_zh: 'SFMS — 圣弗朗西斯卫理学校',
    abbreviation: 'SFMS', founded_year: 1960,
    district_ko: 'Stevens Road · 중심부', district_zh: 'Stevens Road · 中心区',
    website: 'https://www.sfms.edu.sg',
    grade_range: 'Sec 1–Year 12',
    curriculum: { type: 'Singaporean', programs_en: ['Singapore O-Level', 'WACE (Western Australia)'] },
    tuition_range_usd: [9000, 14000],
    highlights_ko: [
      '싱가포르 정규 사립학교 (국제학교 아님)',
      '감리교 재단 운영 — 캠퍼스 내 교회 (별도 건물)',
      '싱가포르 학사일정 (1월 시작 · 11월 졸업)',
      '10학년까지 싱가포르 시스템 + 11~12학년 호주 WACE 졸업과정',
      '국제학교 대비 학비 1/2~1/3 가성비',
    ],
    highlights_zh: [
      '新加坡正规私立学校(非国际学校)',
      '卫理公会运营 — 校内独立教堂',
      '新加坡学年(1 月开学 · 11 月毕业)',
      '10 年级前新加坡系统 + 11-12 年级澳大利亚 WACE 毕业课程',
      '学费仅国际学校 1/2-1/3',
    ],
    summary_ko: '싱가포르 정규 사립학교 (국제학교 아님). 감리교 재단. 학사일정 1월~11월. 10학년까지 싱가포르 시스템 + 11~12학년 호주 WACE 옵션. 가성비.',
    summary_zh: '新加坡正规私立学校(非国际学校)。卫理公会运营。学年 1 月-11 月。10 年级前新加坡系统 + 11-12 年级澳大利亚 WACE 选项。性价比。',
  },
];

export function getSingaporeSchool(slug: string): SingaporeSchool | undefined {
  return SINGAPORE_SCHOOLS.find((s) => s.slug === slug);
}

export function singaporeSchoolName(s: SingaporeSchool, locale: Locale): string {
  return locale === 'ko' ? s.name_ko : s.name_zh;
}
