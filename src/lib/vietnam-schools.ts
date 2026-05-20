/**
 * 베트남 국제학교 카탈로그.
 *
 * 학교명·위치·커리큘럼 = 공개 정보. 학비는 2025-2026 시점 추정 (USD/년).
 * 환율: USD 1 = VND 24,000~25,000 (2026-05 시점).
 *
 * 운영자(데이비드)는 KL 거주 — 베트남은 단기 출장·체류 + 학부모 커뮤니티 청취.
 *
 * 학교 약칭 다수가 학부모 커뮤니티에서 통용되는 표현으로, 정확한 위치·학년·학비는
 * 학교 공식 사이트에서 매년 확인 필요.
 */
import type { Locale } from './i18n';
import type { FinanceOverride } from './school-finance';

export type VnRegion = 'hanoi' | 'ho-chi-minh' | 'hai-phong' | 'da-nang';

export interface VnCurriculum {
  type: 'British' | 'American' | 'IB' | 'Canadian' | 'Singaporean' | 'Bilingual' | 'Mixed';
  programs_en: string[];
}

export interface VietnamSchool extends FinanceOverride {
  slug: string;
  region: VnRegion;
  name_en: string;
  name_ko: string;
  name_zh: string;
  abbreviation?: string;
  founded_year?: number;
  city_ko: string;
  city_zh: string;
  district_ko?: string;
  district_zh?: string;
  website: string;
  grade_range: string;
  curriculum: VnCurriculum;
  tuition_range_usd: [number, number];
  boarding?: boolean;
  highlights_ko: string[];
  highlights_zh: string[];
  summary_ko: string;
  summary_zh: string;
  operator_visited?: boolean;
  operator_note_ko?: string;
  operator_note_zh?: string;
}

export const VN_REGION_LABELS: Record<VnRegion, { ko: string; zh: string }> = {
  'hanoi': { ko: '하노이', zh: '河内' },
  'ho-chi-minh': { ko: '호치민', zh: '胡志明市' },
  'hai-phong': { ko: '하이퐁', zh: '海防' },
  'da-nang': { ko: '다낭', zh: '岘港' },
};

export const VIETNAM_SCHOOLS: VietnamSchool[] = [
  // ─── 하노이 (Hanoi) ────────────────────────────────────────────
  {
    slug: 'bis-hanoi',
    region: 'hanoi',
    name_en: 'British International School Hanoi',
    name_ko: 'BIS — 영국 국제학교 하노이',
    name_zh: 'BIS — 河内英国国际学校',
    abbreviation: 'BIS', founded_year: 2012,
    city_ko: '하노이', city_zh: '河内',
    district_ko: 'Long Bien · Vinhomes Riverside', district_zh: 'Long Bien · Vinhomes Riverside',
    website: 'https://www.nordangliaeducation.com/bis-hanoi',
    grade_range: 'Year 1–13',
    curriculum: { type: 'British', programs_en: ['EYFS', 'IGCSE', 'A-Level', 'IB Diploma'] },
    tuition_range_usd: [18000, 30000],
    highlights_ko: [
      'Nord Anglia Education 글로벌 그룹',
      'A-Level + IB Diploma 듀얼 트랙',
      'Long Bien Vinhomes 단지 인근',
      '영국·호주·말레이시아 외교관 자녀 다수',
    ],
    highlights_zh: [
      'Nord Anglia Education 全球集团',
      'A-Level + IB Diploma 双轨',
      'Long Bien Vinhomes 园区附近',
      '英澳马来外交家庭众多',
    ],
    summary_ko: 'Nord Anglia 그룹 하노이 캠퍼스. A-Level + IB 듀얼 트랙. 하노이 영국식 1순위.',
    summary_zh: 'Nord Anglia 集团河内校区。A-Level + IB 双轨。河内英式首选。',
  },
  {
    slug: 'dwight-hanoi',
    region: 'hanoi',
    name_en: 'Dwight School Hanoi',
    name_ko: 'DWIGHT — 드와이트 스쿨 하노이',
    name_zh: 'DWIGHT — 道尔顿学校 河内',
    abbreviation: 'DWIGHT', founded_year: 2017,
    city_ko: '하노이', city_zh: '河内',
    district_ko: 'Tay Ho · 서호 외국인 클러스터', district_zh: 'Tay Ho · 西湖外国人聚集区',
    website: 'https://www.dwight.edu/hanoi',
    grade_range: 'PreK–G12',
    curriculum: { type: 'IB', programs_en: ['IB PYP', 'IB MYP', 'IB Diploma'] },
    tuition_range_usd: [20000, 32000],
    highlights_ko: [
      '뉴욕 Dwight School 자매학교',
      'IB 전 단계 (PYP·MYP·DP) 인증',
      'Tay Ho 서호 외국인 거주 1순위 지역',
      '미국·UK·외교관 가족 다수',
    ],
    highlights_zh: [
      '纽约 Dwight School 姊妹校',
      'IB 全阶段 (PYP · MYP · DP) 认证',
      'Tay Ho 西湖外国人居住首选区',
      '美国 · 英国 · 外交家庭众多',
    ],
    summary_ko: '뉴욕 Dwight 자매학교. IB 전 단계 정통. 하노이 서호 외국인 거주권 핵심.',
    summary_zh: '纽约 Dwight 姊妹校。IB 全阶段正统。河内西湖外国人聚集区核心。',
  },
  {
    slug: 'st-paul-hanoi',
    region: 'hanoi',
    name_en: 'St. Paul American School Hanoi',
    name_ko: 'ST.PAUL — 세인트 폴 미국학교',
    name_zh: 'ST.PAUL — 圣保罗美国学校',
    abbreviation: 'St. Paul',
    city_ko: '하노이', city_zh: '河内',
    district_ko: 'Tay Ho · Ciputra', district_zh: 'Tay Ho · Ciputra',
    website: 'https://stpaulhanoi.edu.vn',
    grade_range: 'PreK–G12',
    curriculum: { type: 'American', programs_en: ['American', 'AP'] },
    tuition_range_usd: [16000, 26000],
    highlights_ko: [
      '미국식 K-12 + AP',
      'Ciputra 외국인 클러스터',
      '미국 대학 진학 트랙 강점',
    ],
    highlights_zh: [
      '美式 K-12 + AP',
      'Ciputra 外国人聚集区',
      '美国大学升学路径优势',
    ],
    summary_ko: '하노이 미국식 K-12 + AP. Ciputra 외국인 단지 인근.',
    summary_zh: '河内美式 K-12 + AP。Ciputra 外国人小区附近。',
  },
  {
    slug: 'bcvn-hanoi',
    region: 'hanoi',
    name_en: 'BIS Canada Vietnam (BCVN)',
    name_ko: 'BCVN — 캐나다 베트남 국제학교',
    name_zh: 'BCVN — 加拿大越南国际学校',
    abbreviation: 'BCVN',
    city_ko: '하노이', city_zh: '河内',
    district_ko: 'Hanoi', district_zh: '河内',
    website: 'https://bcvn.edu.vn',
    grade_range: 'K–G12',
    curriculum: { type: 'Canadian', programs_en: ['Canadian', 'Ontario'] },
    tuition_range_usd: [13000, 20000],
    highlights_ko: [
      '캐나다 Ontario 커리큘럼',
      'OSSD 졸업장 발급',
      '가성비 캐나다 트랙',
    ],
    highlights_zh: [
      '加拿大 Ontario 课程',
      'OSSD 毕业证',
      '性价比加拿大路径',
    ],
    summary_ko: '하노이 캐나다 Ontario 커리큘럼 학교. OSSD 졸업장.',
    summary_zh: '河内加拿大 Ontario 课程学校。OSSD 毕业证。',
  },
  {
    slug: 'tnis-hanoi',
    region: 'hanoi',
    name_en: 'TH School (TNIS)',
    name_ko: 'TNIS — TH 스쿨',
    name_zh: 'TNIS — TH 学校',
    abbreviation: 'TNIS / TH',
    city_ko: '하노이', city_zh: '河内',
    district_ko: 'Hanoi', district_zh: '河内',
    website: 'https://www.thschool.edu.vn',
    grade_range: 'Year 1–13',
    curriculum: { type: 'British', programs_en: ['IGCSE', 'A-Level'] },
    tuition_range_usd: [12000, 20000],
    highlights_ko: [
      'TH Group (베트남 대기업) 운영',
      '영국 커리큘럼 정통',
      'Cambridge International',
    ],
    highlights_zh: [
      'TH Group(越南大企业)运营',
      '英国课程正统',
      'Cambridge International',
    ],
    summary_ko: 'TH Group 운영 영국식 학교. Cambridge IGCSE·A-Level 인증.',
    summary_zh: 'TH Group 运营英式学校。Cambridge IGCSE · A-Level 认证。',
  },
  {
    slug: 'bvis-hanoi',
    region: 'hanoi',
    name_en: 'British Vietnamese International School Hanoi',
    name_ko: 'BVIS — 영국·베트남 국제학교 하노이',
    name_zh: 'BVIS — 英越国际学校 河内',
    abbreviation: 'BVIS', founded_year: 2012,
    city_ko: '하노이', city_zh: '河内',
    district_ko: 'Royal City, Thanh Xuan', district_zh: 'Royal City, Thanh Xuan',
    website: 'https://www.nordangliaeducation.com/bvis-hanoi',
    grade_range: 'EY–Y13',
    curriculum: { type: 'Bilingual', programs_en: ['Cambridge', 'Vietnamese MOET'] },
    tuition_range_usd: [10000, 18000],
    highlights_ko: [
      'Nord Anglia 그룹 바이링궐 (영·베)',
      '베트남 MOET + Cambridge 듀얼 커리큘럼',
      'Royal City Vinhomes 단지 인근',
    ],
    highlights_zh: [
      'Nord Anglia 集团双语(英 · 越)',
      '越南 MOET + Cambridge 双课程',
      'Royal City Vinhomes 园区附近',
    ],
    summary_ko: 'Nord Anglia 그룹 영·베 바이링궐 학교. 베트남어 유지 + 영국식.',
    summary_zh: 'Nord Anglia 集团英越双语学校。保持越南语 + 英式。',
  },
  {
    slug: 'wis-hanoi',
    region: 'hanoi',
    name_en: 'Wellspring International Bilingual School',
    name_ko: 'WIS — 웰스프링 국제학교',
    name_zh: 'WIS — 春泉国际学校',
    abbreviation: 'WIS', founded_year: 2011,
    city_ko: '하노이', city_zh: '河内',
    district_ko: 'Long Bien · Hanoi', district_zh: 'Long Bien · 河内',
    website: 'https://wellspring.edu.vn',
    grade_range: 'K–G12',
    curriculum: { type: 'Bilingual', programs_en: ['Cambridge', 'Vietnamese MOET'] },
    tuition_range_usd: [8000, 15000],
    highlights_ko: [
      '베트남 명문 바이링궐 학교',
      'Cambridge + 베트남 MOET',
      '베트남 부유층 가족 다수',
    ],
    highlights_zh: [
      '越南名校双语学校',
      'Cambridge + 越南 MOET',
      '越南富裕家庭众多',
    ],
    summary_ko: '베트남 명문 바이링궐 학교. Cambridge + 베트남 정규.',
    summary_zh: '越南名校双语。Cambridge + 越南正规。',
  },
  {
    slug: 'hts-hanoi',
    region: 'hanoi',
    name_en: 'Hanoi Toronto School (HTS)',
    name_ko: 'HTS — 하노이 토론토 스쿨',
    name_zh: 'HTS — 河内多伦多学校',
    abbreviation: 'HTS',
    city_ko: '하노이', city_zh: '河内',
    district_ko: 'Hanoi', district_zh: '河内',
    website: 'https://hts.edu.vn',
    grade_range: 'K–G12',
    curriculum: { type: 'Canadian', programs_en: ['Ontario', 'OSSD'] },
    tuition_range_usd: [10000, 18000],
    highlights_ko: [
      'Toronto District Ontario 커리큘럼',
      'OSSD 졸업장 발급',
      '캐나다 대학 직접 진학',
    ],
    highlights_zh: [
      '多伦多 Ontario 课程',
      'OSSD 毕业证',
      '加拿大大学直升',
    ],
    summary_ko: '캐나다 Ontario 커리큘럼 학교. OSSD 졸업장으로 캐나다 대학 직접 진학.',
    summary_zh: '加拿大 Ontario 课程学校。OSSD 毕业证直升加拿大大学。',
  },
  {
    slug: 'dewey-hanoi',
    region: 'hanoi',
    name_en: 'The Dewey Schools',
    name_ko: 'DEWEY — 듀이 스쿨',
    name_zh: 'DEWEY — 杜威学校',
    abbreviation: 'Dewey', founded_year: 2011,
    city_ko: '하노이', city_zh: '河内',
    district_ko: 'Tay Ho · 다수 캠퍼스', district_zh: 'Tay Ho · 多校区',
    website: 'https://thedeweyschools.edu.vn',
    grade_range: 'K–G12',
    curriculum: { type: 'Bilingual', programs_en: ['American', 'Vietnamese MOET'] },
    tuition_range_usd: [7000, 14000],
    highlights_ko: [
      '베트남 미국식 바이링궐 그룹',
      '하노이 다수 캠퍼스 운영',
      '베트남 부유층 학부모 다수',
      'John Dewey 교육철학 기반',
    ],
    highlights_zh: [
      '越南美式双语集团',
      '河内多校区运营',
      '越南富裕家长众多',
      '约翰 · 杜威教育理念',
    ],
    summary_ko: 'John Dewey 교육철학 기반 베트남 미국식 바이링궐. 하노이 다수 캠퍼스.',
    summary_zh: '基于约翰 · 杜威教育理念的越南美式双语。河内多校区。',
  },
  {
    slug: 'isph-hanoi',
    region: 'hanoi',
    name_en: 'International School of Park City Hanoi (ISPH)',
    name_ko: 'ISPH — ParkCity 국제학교 하노이',
    name_zh: 'ISPH — ParkCity 国际学校 河内',
    abbreviation: 'ISPH',
    city_ko: '하노이', city_zh: '河内',
    district_ko: 'ParkCity Hanoi · Ha Dong', district_zh: 'ParkCity Hanoi · Ha Dong',
    website: 'https://www.isph.edu.vn',
    grade_range: 'EY–Y13',
    curriculum: { type: 'British', programs_en: ['EYFS', 'IGCSE', 'A-Level'] },
    tuition_range_usd: [12000, 20000],
    highlights_ko: [
      'ParkCity Hanoi 게이트 단지 내',
      '말레이시아 ISP(파크시티) 자매 콘셉트',
      'Cambridge 영국식',
    ],
    highlights_zh: [
      'ParkCity Hanoi 封闭社区内',
      '马来 ISP(ParkCity)姊妹概念',
      'Cambridge 英式',
    ],
    summary_ko: 'ParkCity Hanoi 게이트 단지 내. Cambridge 영국식 정통.',
    summary_zh: 'ParkCity Hanoi 封闭社区内。Cambridge 英式正统。',
  },
  {
    slug: 'horizon-hanoi',
    region: 'hanoi',
    name_en: 'Horizon International Bilingual School',
    name_ko: 'HORIZON — 호라이즌 국제학교',
    name_zh: 'HORIZON — 地平线国际学校',
    abbreviation: 'Horizon',
    city_ko: '하노이', city_zh: '河内',
    district_ko: 'Tu Liem · Hanoi', district_zh: 'Tu Liem · 河内',
    website: 'https://horizon.edu.vn',
    grade_range: 'K–G12',
    curriculum: { type: 'Bilingual', programs_en: ['American', 'Vietnamese MOET'] },
    tuition_range_usd: [8000, 14000],
    highlights_ko: [
      '베트남 미국식 바이링궐',
      '터키 출신 교육그룹 운영 배경',
      '가성비 + 글로벌 표준',
    ],
    highlights_zh: [
      '越南美式双语',
      '土耳其裔教育集团运营',
      '性价比 + 全球标准',
    ],
    summary_ko: '베트남 바이링궐 가성비 학교. 미국식 + 베트남 MOET.',
    summary_zh: '越南双语性价比学校。美式 + 越南 MOET。',
  },

  // ─── 호치민 (Ho Chi Minh) ──────────────────────────────────────
  {
    slug: 'abcis-hcmc',
    region: 'ho-chi-minh',
    name_en: 'ABC International School (ABCIS)',
    name_ko: 'ABCIS — ABC 국제학교',
    name_zh: 'ABCIS — ABC 国际学校',
    abbreviation: 'ABCIS',
    city_ko: '호치민', city_zh: '胡志明市',
    district_ko: 'District 7 · Phu My Hung', district_zh: '第七区 · 富美兴',
    website: 'https://theabcis.com',
    grade_range: 'Nursery–Y13',
    curriculum: { type: 'British', programs_en: ['EYFS', 'IGCSE', 'A-Level'] },
    tuition_range_usd: [12000, 20000],
    highlights_ko: [
      'Phu My Hung 외국인 단지 인근',
      'Cambridge 영국식 정통',
      '호치민 가성비 영국식',
    ],
    highlights_zh: [
      '富美兴外国人小区附近',
      'Cambridge 英式正统',
      '胡志明性价比英式',
    ],
    summary_ko: '호치민 영국식 가성비 학교. Phu My Hung 외국인 거주권.',
    summary_zh: '胡志明英式性价比学校。富美兴外国人居住区。',
  },
  {
    slug: 'eis-hcmc',
    region: 'ho-chi-minh',
    name_en: 'European International School HCMC',
    name_ko: 'EIS — 유럽 국제학교 호치민',
    name_zh: 'EIS — 胡志明欧洲国际学校',
    abbreviation: 'EIS', founded_year: 2006,
    city_ko: '호치민', city_zh: '胡志明市',
    district_ko: 'District 2 · Thao Dien', district_zh: '第二区 · Thao Dien',
    website: 'https://eishcmc.com',
    grade_range: 'EY–G12',
    curriculum: { type: 'IB', programs_en: ['IB PYP', 'IB MYP', 'IB Diploma'] },
    tuition_range_usd: [18000, 28000],
    highlights_ko: [
      'IB World School (PYP·MYP·DP)',
      'Thao Dien 외교관·유럽 가족 클러스터',
      'IB Diploma 평균 성과 안정',
    ],
    highlights_zh: [
      'IB World School (PYP · MYP · DP)',
      'Thao Dien 外交 · 欧洲家庭聚集',
      'IB Diploma 平均成绩稳定',
    ],
    summary_ko: 'Thao Dien 외국인 거주권 IB 정통. PYP·MYP·DP 전 단계.',
    summary_zh: 'Thao Dien 外国人居住区 IB 正统。PYP · MYP · DP 全阶段。',
  },
  {
    slug: 'ishcmc',
    region: 'ho-chi-minh',
    name_en: 'International School Ho Chi Minh City',
    name_ko: 'ISHCMC — 호치민 국제학교',
    name_zh: 'ISHCMC — 胡志明国际学校',
    abbreviation: 'ISHCMC', founded_year: 1993,
    city_ko: '호치민', city_zh: '胡志明市',
    district_ko: 'District 2 · An Phu', district_zh: '第二区 · An Phu',
    website: 'https://www.ishcmc.com',
    grade_range: 'EY–G12',
    curriculum: { type: 'IB', programs_en: ['IB PYP', 'IB MYP', 'IB Diploma'] },
    tuition_range_usd: [20000, 32000],
    highlights_ko: [
      'Cognita Schools 그룹 (영국)',
      '호치민 최초·최고 IB 학교',
      'IB Diploma 평균 35점+ 안정',
      '60+ 국적 학생',
    ],
    highlights_zh: [
      'Cognita Schools 集团(英国)',
      '胡志明最早 · 顶级 IB 学校',
      'IB Diploma 平均 35+ 稳定',
      '60+ 国籍学生',
    ],
    summary_ko: 'Cognita 그룹 호치민 최초·최고 IB 학교. IB 평균 35점+. 60+ 국적.',
    summary_zh: 'Cognita 集团胡志明最早 · 顶级 IB 学校。IB 平均 35+。60+ 国籍。',
  },
  {
    slug: 'riss-saigon',
    region: 'ho-chi-minh',
    name_en: 'Renaissance International School Saigon',
    name_ko: 'RISS — 르네상스 국제학교 사이공',
    name_zh: 'RISS — 文艺复兴国际学校 西贡',
    abbreviation: 'RISS', founded_year: 2008,
    city_ko: '호치민', city_zh: '胡志明市',
    district_ko: 'District 7 · Phu My Hung', district_zh: '第七区 · 富美兴',
    website: 'https://www.renaissance.edu.vn',
    grade_range: 'EY–Y13',
    curriculum: { type: 'British', programs_en: ['IGCSE', 'A-Level', 'IB Diploma'] },
    tuition_range_usd: [17000, 26000],
    highlights_ko: [
      'British International 그룹',
      'A-Level + IB Diploma 듀얼',
      'Phu My Hung 외국인 클러스터',
    ],
    highlights_zh: [
      'British International 集团',
      'A-Level + IB Diploma 双轨',
      '富美兴外国人聚集',
    ],
    summary_ko: 'Phu My Hung 영국식 학교. A-Level + IB Diploma 듀얼.',
    summary_zh: '富美兴英式学校。A-Level + IB Diploma 双轨。',
  },
  {
    slug: 'bvis-hcmc',
    region: 'ho-chi-minh',
    name_en: 'British Vietnamese International School HCMC',
    name_ko: 'BVIS — 영국·베트남 국제학교 호치민',
    name_zh: 'BVIS — 英越国际学校 胡志明',
    abbreviation: 'BVIS', founded_year: 2009,
    city_ko: '호치민', city_zh: '胡志明市',
    district_ko: 'Binh Thanh · District 2', district_zh: 'Binh Thanh · 第二区',
    website: 'https://www.nordangliaeducation.com/bvis-hcmc',
    grade_range: 'EY–Y13',
    curriculum: { type: 'Bilingual', programs_en: ['Cambridge', 'Vietnamese MOET'] },
    tuition_range_usd: [10000, 18000],
    highlights_ko: [
      'Nord Anglia 그룹 영·베 바이링궐',
      '베트남 MOET + Cambridge',
      '베트남어 유지 학부모 1순위',
    ],
    highlights_zh: [
      'Nord Anglia 集团英越双语',
      '越南 MOET + Cambridge',
      '保持越南语家长首选',
    ],
    summary_ko: 'Nord Anglia 그룹 영·베 바이링궐. 베트남어 유지 + 영국식.',
    summary_zh: 'Nord Anglia 集团英越双语。保持越南语 + 英式。',
  },
  {
    slug: 'tas-hcmc',
    region: 'ho-chi-minh',
    name_en: 'The American School (TAS)',
    name_ko: 'TAS — 디 아메리칸 스쿨',
    name_zh: 'TAS — 美国学校',
    abbreviation: 'TAS', founded_year: 2006,
    city_ko: '호치민', city_zh: '胡志明市',
    district_ko: 'District 2 · Thao Dien', district_zh: '第二区 · Thao Dien',
    website: 'https://www.tas.edu.vn',
    grade_range: 'PreK–G12',
    curriculum: { type: 'American', programs_en: ['American', 'AP'] },
    tuition_range_usd: [15000, 24000],
    highlights_ko: [
      '미국식 K-12 + AP',
      'Thao Dien 외교관 가족',
      'WASC 인증',
    ],
    highlights_zh: [
      '美式 K-12 + AP',
      'Thao Dien 外交家庭',
      'WASC 认证',
    ],
    summary_ko: 'Thao Dien 미국식 K-12 + AP. WASC 인증.',
    summary_zh: 'Thao Dien 美式 K-12 + AP。WASC 认证。',
  },
  {
    slug: 'cis-hcmc',
    region: 'ho-chi-minh',
    name_en: 'Canadian International School HCMC',
    name_ko: 'CIS — 캐나다 국제학교 호치민',
    name_zh: 'CIS — 胡志明加拿大国际学校',
    abbreviation: 'CIS', founded_year: 2009,
    city_ko: '호치민', city_zh: '胡志明市',
    district_ko: 'District 7 · Phu My Hung', district_zh: '第七区 · 富美兴',
    website: 'https://www.cis.edu.vn',
    grade_range: 'K–G12',
    curriculum: { type: 'Canadian', programs_en: ['Canadian', 'Ontario', 'OSSD'] },
    tuition_range_usd: [14000, 22000],
    highlights_ko: [
      '캐나다 Ontario 정통 커리큘럼',
      'OSSD 졸업장 — 캐나다 대학 직접 진학',
      'Phu My Hung 외국인 단지',
    ],
    highlights_zh: [
      '加拿大 Ontario 正统课程',
      'OSSD 毕业证 — 加拿大大学直升',
      '富美兴外国人小区',
    ],
    summary_ko: '캐나다 Ontario 정통 + OSSD 졸업장. 캐나다 대학 직접 진학.',
    summary_zh: '加拿大 Ontario 正统 + OSSD 毕业证。加拿大大学直升。',
  },
  {
    slug: 'ais-hcmc',
    region: 'ho-chi-minh',
    name_en: 'American International School Saigon',
    name_ko: 'AIS — 미국 국제학교 사이공',
    name_zh: 'AIS — 西贡美国国际学校',
    abbreviation: 'AIS', founded_year: 2006,
    city_ko: '호치민', city_zh: '胡志明市',
    district_ko: 'District 2 · An Phu', district_zh: '第二区 · An Phu',
    website: 'https://www.ais.edu.vn',
    grade_range: 'PreK–G12',
    curriculum: { type: 'American', programs_en: ['American', 'AP'] },
    tuition_range_usd: [13000, 22000],
    highlights_ko: [
      '미국식 K-12 + AP',
      'District 2 외교관·미국 가족',
      'WASC 인증',
    ],
    highlights_zh: [
      '美式 K-12 + AP',
      '第二区外交 · 美国家庭',
      'WASC 认证',
    ],
    summary_ko: 'District 2 미국식 K-12. WASC 인증.',
    summary_zh: '第二区美式 K-12。WASC 认证。',
  },
  {
    slug: 'sna-hcmc',
    region: 'ho-chi-minh',
    name_en: 'Saigon Newport Academy (SNA)',
    name_ko: 'SNA — 사이공 뉴포트 아카데미',
    name_zh: 'SNA — 西贡 Newport 学院',
    abbreviation: 'SNA',
    city_ko: '호치민', city_zh: '胡志明市',
    district_ko: 'District 7 · Phu My Hung', district_zh: '第七区 · 富美兴',
    website: 'https://snaacademy.edu.vn',
    grade_range: 'K–G12',
    curriculum: { type: 'Bilingual', programs_en: ['American', 'Vietnamese MOET'] },
    tuition_range_usd: [10000, 16000],
    highlights_ko: [
      '미국식 + 베트남 MOET 바이링궐',
      'Phu My Hung 외국인 단지',
      '가성비 + 미국식',
    ],
    highlights_zh: [
      '美式 + 越南 MOET 双语',
      '富美兴外国人小区',
      '性价比 + 美式',
    ],
    summary_ko: 'Phu My Hung 미국식 + 베트남 바이링궐. 가성비.',
    summary_zh: '富美兴美式 + 越南双语。性价比。',
  },

  // ─── 하이퐁 (Hai Phong) ───────────────────────────────────────
  {
    slug: 'ssm-vietnam-haiphong',
    region: 'hai-phong',
    name_en: 'Singapore Vietnam International School Hai Phong',
    name_ko: 'SSM Vietnam — 싱가포르 베트남 국제학교 하이퐁',
    name_zh: 'SSM Vietnam — 新加坡越南国际学校 海防',
    abbreviation: 'SSM Vietnam',
    city_ko: '하이퐁', city_zh: '海防',
    district_ko: 'Hai Phong', district_zh: '海防',
    website: 'https://ssmvietnam.edu.vn',
    grade_range: 'K–G12',
    curriculum: { type: 'Singaporean', programs_en: ['Singapore Math', 'Cambridge'] },
    tuition_range_usd: [7000, 12000],
    highlights_ko: [
      '싱가포르 수학 + Cambridge',
      '하이퐁 (북부 항만 도시) 유일 국제학교',
      '베트남·중국·한국 가족',
    ],
    highlights_zh: [
      '新加坡数学 + Cambridge',
      '海防(北部港口城市)唯一国际学校',
      '越南 · 中国 · 韩国家庭',
    ],
    summary_ko: '하이퐁 항만 도시 유일 국제학교. 싱가포르 수학 + Cambridge 영국식.',
    summary_zh: '海防港口城市唯一国际学校。新加坡数学 + Cambridge 英式。',
  },

  // ─── 다낭 (Da Nang) ──────────────────────────────────────────
  {
    slug: 'apu-danang',
    region: 'da-nang',
    name_en: 'APU American International School Da Nang',
    name_ko: 'APU — APU 국제학교 다낭',
    name_zh: 'APU — APU 国际学校 岘港',
    abbreviation: 'APU',
    city_ko: '다낭', city_zh: '岘港',
    district_ko: 'Da Nang · Son Tra', district_zh: '岘港 · Son Tra',
    website: 'https://apuschool.edu.vn',
    grade_range: 'K–G12',
    curriculum: { type: 'American', programs_en: ['American', 'AP'] },
    tuition_range_usd: [9000, 16000],
    highlights_ko: [
      '다낭 미국식 K-12',
      '해변 도시 — 디지털 노마드 가족',
      '한국·일본·중국 가족 신규 이주 다수',
    ],
    highlights_zh: [
      '岘港美式 K-12',
      '海滨城市 — 数字游牧家庭',
      '韩日中家庭新迁入多',
    ],
    summary_ko: '다낭 해변 도시 미국식 K-12. 디지털 노마드·한국 신규 이주 가족 1순위.',
    summary_zh: '岘港海滨城市美式 K-12。数字游牧 · 韩国新迁家庭首选。',
  },
];

export function getVietnamSchool(slug: string): VietnamSchool | undefined {
  return VIETNAM_SCHOOLS.find((s) => s.slug === slug);
}
