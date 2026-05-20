/**
 * 국내(한국) 외국인학교 · 국제학교 공개 정보 카탈로그.
 *
 * 사양 준수 원칙:
 *  - 학교 이름 · 설립 연도 · 위치 · 학년 범위 · 커리큘럼 · 공식 사이트 = 공개 사실
 *  - 학비 범위 = 일반 시장 추정 + "학교 공식 발표 확인" 디스클레이머
 *  - 강점 / 특징 = 학교 공식 자료(자기소개) 기반 객관 정리
 *  - 학교별 운영자 1차 경험 · 구체 학비 · 교사 국적 = 운영자 검증
 *    (content/schools/ MDX 매칭 시 학교 페이지 자동 풍부화)
 *
 * 정확한 최신 정보는 반드시 각 학교 공식 사이트에서 확인.
 */
import type { Locale } from './i18n';

export type DomesticCategory = 'foreign-schools' | 'international-schools';
export type DomesticRegion = 'seoul' | 'gyeonggi-incheon' | 'regional' | 'jeju' | 'songdo' | 'daegu-other';

export interface DomesticSchool {
  slug: string;
  category: DomesticCategory;
  region: DomesticRegion;
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
  grade_range: string;            // 예: "PreK–G12"
  curriculum_en: string[];        // 예: ["IB Diploma", "AP", "British"]
  tuition_range_usd: [number, number];
  highlights_ko: string[];
  highlights_zh: string[];
  summary_ko: string;
  summary_zh: string;
}

// ─────────────────────────────────────────────────────────────────────────
// 외국인학교 — 외국인학교법 적용 (외국 국적 · 재외국민 자녀 대상)
// ─────────────────────────────────────────────────────────────────────────
export const FOREIGN_SCHOOLS: DomesticSchool[] = [
  // 서울
  {
    slug: 'sfs', category: 'foreign-schools', region: 'seoul',
    name_en: 'Seoul Foreign School', name_ko: '서울외국인학교', name_zh: '首尔外国人学校',
    abbreviation: 'SFS', founded_year: 1912,
    city_ko: '서울', city_zh: '首尔', district_ko: '서대문구 연희동', district_zh: '西大门区 延禧洞',
    website: 'https://www.seoulforeign.org',
    grade_range: 'PreK–G12',
    curriculum_en: ['IB PYP', 'IB MYP', 'IB Diploma', 'AP', 'British (Year 1–13)'],
    tuition_range_usd: [28000, 42000],
    highlights_ko: [
      '한국 최초·최대 외국인학교 (1912 설립)',
      'IB 와 영국식(British) 두 시스템 병행 운영',
      '60+ 국적 다국적 환경',
      'IB Diploma · AP · A-Level 모두 응시 가능',
      '캠퍼스 9.5에이커 (서울 외국인학교 최대 규모)',
    ],
    highlights_zh: [
      '韩国最古老·最大外国人学校(1912 创立)',
      'IB 与英式(British)双系统并行',
      '60+ 国籍多元环境',
      'IB Diploma · AP · A-Level 均可应试',
      '校园 9.5 英亩(首尔外国人学校最大规模)',
    ],
    summary_ko: '1912년 설립된 한국 최초·최대 외국인학교. IB · 영국식 두 트랙 병행, 서대문구 연희동 캠퍼스 9.5에이커. 자녀 학교 선택 시 가장 먼저 거론되는 학교 중 하나.',
    summary_zh: '1912 年创立的韩国最古老·最大外国人学校。IB · 英式双轨并行,西大门区延禧洞 9.5 英亩校园。家长择校时最常被讨论的学校之一。',
  },
  {
    slug: 'yiss', category: 'foreign-schools', region: 'seoul',
    name_en: 'Yongsan International School of Seoul', name_ko: '용산국제학교', name_zh: '龙山国际学校',
    abbreviation: 'YISS', founded_year: 2006,
    city_ko: '서울', city_zh: '首尔', district_ko: '용산구', district_zh: '龙山区',
    website: 'https://www.yisseoul.org',
    grade_range: 'PreK–G12',
    curriculum_en: ['American', 'AP'],
    tuition_range_usd: [27000, 40000],
    highlights_ko: [
      '미국식 정통 커리큘럼 + AP 다수 과목',
      '기독교 미션 학교 (비기독교인 입학 가능)',
      '용산 미군기지 근접, 한미 기업 임원 자녀 다수',
      'WASC 인증 (미국 대학 진학 인증)',
      '소규모 학급 운영',
    ],
    highlights_zh: [
      '美式正统课程 + 多门 AP',
      '基督教使命学校(非教徒可入读)',
      '近龙山美军基地,韩美企业高管子女较多',
      'WASC 认证(美国大学认证)',
      '小班教学',
    ],
    summary_ko: '2006년 설립. 용산 위치, 미국식 + AP 중심, 기독교 미션 학교. 한미 기업 임원 자녀 비율 높은 학교.',
    summary_zh: '2006 年成立。位于龙山,美式 + AP 为主,基督教使命学校。韩美企业高管子女比例较高。',
  },
  {
    slug: 'kis-seoul', category: 'foreign-schools', region: 'seoul',
    name_en: 'Korea International School Seoul', name_ko: 'KIS 서울', name_zh: 'KIS 首尔',
    abbreviation: 'KIS Seoul',
    city_ko: '서울', city_zh: '首尔', district_ko: '강남', district_zh: '江南',
    website: 'https://www.kis.ac',
    grade_range: 'PK–G12',
    curriculum_en: ['American', 'AP'],
    tuition_range_usd: [26000, 38000],
    highlights_ko: [
      'KIS 그룹 (서울·분당·제주) 의 서울 캠퍼스',
      '미국식 + AP 다수 과목',
      'WASC 인증',
      '대학 진학 카운슬링 전담',
    ],
    highlights_zh: [
      'KIS 集团(首尔·盆唐·济州)首尔校区',
      '美式 + 多门 AP',
      'WASC 认证',
      '专职升学辅导',
    ],
    summary_ko: 'KIS 그룹의 서울 캠퍼스. 강남 위치, 미국식 + AP, WASC 인증. 분당·제주 캠퍼스 간 일부 교사·자원 공유.',
    summary_zh: 'KIS 集团首尔校区。江南位置,美式 + AP,WASC 认证。与盆唐·济州校区共享部分师资。',
  },
  {
    slug: 'dwight-seoul', category: 'foreign-schools', region: 'seoul',
    name_en: 'Dwight School Seoul', name_ko: '드와이트 스쿨 서울', name_zh: '德怀特学校首尔',
    founded_year: 2012,
    city_ko: '서울', city_zh: '首尔', district_ko: '마포구 상암동', district_zh: '麻浦区 上岩洞',
    website: 'https://www.dwight.or.kr',
    grade_range: 'PreK–G12',
    curriculum_en: ['IB PYP', 'IB MYP', 'IB Diploma'],
    tuition_range_usd: [30000, 42000],
    highlights_ko: [
      'IB 전 단계 인증 (PYP · MYP · DP 모두)',
      'Dwight School (1872, 뉴욕) 자매 학교',
      '상암 디지털 미디어 시티(DMC) 내 위치',
      '글로벌 캠퍼스 네트워크 (NY · 런던 · 상하이 등)',
    ],
    highlights_zh: [
      '获 IB 全阶段认证(PYP · MYP · DP)',
      'Dwight School(1872 纽约)姐妹校',
      '位于上岩数字媒体城(DMC)',
      '全球校园网络(纽约 · 伦敦 · 上海 等)',
    ],
    summary_ko: '2012년 설립. IB 전 단계 인증, 뉴욕 Dwight School 자매 학교. 마포 상암 DMC 내 위치, 글로벌 네트워크 강점.',
    summary_zh: '2012 年成立。IB 全阶段认证,纽约 Dwight School 姐妹校。位于麻浦 DMC,全球网络是优势。',
  },
  {
    slug: 'dulwich-seoul', category: 'foreign-schools', region: 'seoul',
    name_en: 'Dulwich College Seoul', name_ko: '덜위치 칼리지 서울', name_zh: '德威国际学校首尔',
    founded_year: 2010,
    city_ko: '서울', city_zh: '首尔', district_ko: '서초구', district_zh: '瑞草区',
    website: 'https://www.dulwich-seoul.kr',
    grade_range: 'Year 1–13',
    curriculum_en: ['British', 'IGCSE', 'A-Level'],
    tuition_range_usd: [29000, 42000],
    highlights_ko: [
      'Dulwich College London (1619 설립) 자매 학교',
      '영국식 정통 — IGCSE + A-Level',
      'Dulwich 글로벌 네트워크 (상하이·베이징·싱가포르 등)',
      'A-Level 응시 환경 우수, 옥스브리지 진학 트랙',
    ],
    highlights_zh: [
      '伦敦 Dulwich College(1619 创立)姐妹校',
      '英式正统 — IGCSE + A-Level',
      'Dulwich 全球网络(上海·北京·新加坡 等)',
      'A-Level 应试环境优,牛剑升学路径',
    ],
    summary_ko: '2010년 설립. 영국 Dulwich College 자매 학교, 영국식 IGCSE + A-Level 정통. 옥스브리지 진학을 고려하는 학부모용.',
    summary_zh: '2010 年成立。英国 Dulwich College 姐妹校,英式 IGCSE + A-Level 正统。考虑牛剑升学的家长优选。',
  },

  // 경기 · 인천
  {
    slug: 'kis-pangyo', category: 'foreign-schools', region: 'gyeonggi-incheon',
    name_en: 'Korea International School Pangyo', name_ko: 'KIS 분당', name_zh: 'KIS 盆唐',
    abbreviation: 'KIS Pangyo', founded_year: 2008,
    city_ko: '경기 성남', city_zh: '京畿 城南', district_ko: '판교', district_zh: '盆唐',
    website: 'https://www.kis.ac',
    grade_range: 'PK–G12',
    curriculum_en: ['American', 'AP'],
    tuition_range_usd: [27000, 39000],
    highlights_ko: [
      'KIS 그룹의 분당(판교) 캠퍼스 (2008 설립)',
      '미국식 + AP, WASC 인증',
      '판교 IT 단지 임원 자녀 비율 높음',
      '대규모 캠퍼스 + 스포츠 시설',
    ],
    highlights_zh: [
      'KIS 集团盆唐(板桥)校区(2008 成立)',
      '美式 + AP,WASC 认证',
      '板桥 IT 园区高管子女比例高',
      '大型校园 + 体育设施',
    ],
    summary_ko: 'KIS 그룹의 판교 캠퍼스. 미국식 + AP, IT 임원 자녀 다수, 대규모 캠퍼스. 분당·강남권 학부모용.',
    summary_zh: 'KIS 集团板桥校区。美式 + AP,IT 高管子女多,大型校园。盆唐·江南地区家长适配。',
  },
  {
    slug: 'gsis', category: 'foreign-schools', region: 'gyeonggi-incheon',
    name_en: 'Gyeonggi Suwon International School', name_ko: '경기수원외국인학교', name_zh: '京畿水原外国人学校',
    abbreviation: 'GSIS', founded_year: 2006,
    city_ko: '경기 수원', city_zh: '京畿 水原',
    website: 'https://www.gsis.sc.kr',
    grade_range: 'PK–G12',
    curriculum_en: ['American', 'AP'],
    tuition_range_usd: [25000, 36000],
    highlights_ko: [
      '경기 남부(수원) 위치 외국인학교',
      '미국식 + AP',
      '삼성 등 기업 임원 자녀 다수',
      'WASC 인증',
    ],
    highlights_zh: [
      '京畿南部(水原)外国人学校',
      '美式 + AP',
      '三星等企业高管子女较多',
      'WASC 认证',
    ],
    summary_ko: '2006년 설립, 수원 위치. 미국식 + AP, 삼성 등 수원 기업 임원 자녀 비율 높은 학교.',
    summary_zh: '2006 年创立,位于水原。美式 + AP,三星等水原企业高管子女比例较高。',
  },
  {
    slug: 'ics-pyeongtaek', category: 'foreign-schools', region: 'gyeonggi-incheon',
    name_en: 'International Christian School Pyeongtaek', name_ko: 'ICS 평택', name_zh: 'ICS 平泽',
    abbreviation: 'ICS Pyeongtaek',
    city_ko: '경기 평택', city_zh: '京畿 平泽',
    website: 'https://www.icspy.org',
    grade_range: 'PK–G12',
    curriculum_en: ['American', 'AP'],
    tuition_range_usd: [22000, 32000],
    highlights_ko: [
      '평택 미군기지 인근 외국인학교',
      '미국식 + AP, 기독교 학교',
      '미군 가족 자녀 비율 높음',
      'ACSI · WASC 인증',
    ],
    highlights_zh: [
      '平泽美军基地附近的外国人学校',
      '美式 + AP,基督教学校',
      '美军家庭子女比例高',
      'ACSI · WASC 认证',
    ],
    summary_ko: '평택 위치, 미국식 기독교 학교. 인근 미군기지 가족 자녀 비율 높음.',
    summary_zh: '位于平泽的美式基督教学校。附近美军家庭子女比例高。',
  },

  // 지방 (부산 · 대구 등)
  {
    slug: 'isb-busan', category: 'foreign-schools', region: 'regional',
    name_en: 'International School of Busan', name_ko: '부산국제외국인학교', name_zh: '釜山国际外国人学校',
    abbreviation: 'ISB', founded_year: 1980,
    city_ko: '부산', city_zh: '釜山', district_ko: '기장군', district_zh: '机张郡',
    website: 'https://www.isbusan.org',
    grade_range: 'PK–G12',
    curriculum_en: ['IB PYP', 'IB MYP', 'IB Diploma'],
    tuition_range_usd: [24000, 36000],
    highlights_ko: [
      '1980년 설립, 부산 최대 외국인학교',
      'IB 전 단계 인증 (PYP · MYP · DP)',
      '40+ 국적, 기장군 위치 (해운대 인근)',
      '바다 인접 캠퍼스',
    ],
    highlights_zh: [
      '1980 年创立,釜山最大外国人学校',
      'IB 全阶段认证(PYP · MYP · DP)',
      '40+ 国籍,位于机张郡(海云台附近)',
      '濒海校园',
    ],
    summary_ko: '부산 최대 외국인학교 (1980 설립). IB 전 단계 인증, 해운대 인근 기장군 바다 인접 캠퍼스.',
    summary_zh: '釜山最大外国人学校(1980 创立)。IB 全阶段认证,海云台附近机张郡濒海校园。',
  },
  {
    slug: 'dis-daegu', category: 'foreign-schools', region: 'regional',
    name_en: 'Daegu International School', name_ko: '대구국제학교', name_zh: '大邱国际学校',
    abbreviation: 'DIS', founded_year: 2010,
    city_ko: '대구', city_zh: '大邱',
    website: 'https://www.dis.sc.kr',
    grade_range: 'PK–G12',
    curriculum_en: ['American', 'AP'],
    tuition_range_usd: [22000, 32000],
    highlights_ko: [
      '2010년 설립, 대구 위치',
      '미국식 + AP',
      'WASC 인증',
      '대구·경북 지역 외국인학교',
    ],
    highlights_zh: [
      '2010 年创立,位于大邱',
      '美式 + AP',
      'WASC 认证',
      '大邱·庆北地区外国人学校',
    ],
    summary_ko: '2010년 설립, 대구 미국식 외국인학교. 대구·경북 지역 거주 학부모용.',
    summary_zh: '2010 年创立,大邱美式外国人学校。大邱·庆北地区家长适配。',
  },
  {
    slug: 'bfs', category: 'foreign-schools', region: 'regional',
    name_en: 'Busan Foreign School', name_ko: '부산외국인학교', name_zh: '釜山外国人学校',
    abbreviation: 'BFS', founded_year: 1996,
    city_ko: '부산', city_zh: '釜山',
    website: 'https://www.bfs.or.kr',
    grade_range: 'PK–G12',
    curriculum_en: ['British', 'IGCSE'],
    tuition_range_usd: [20000, 30000],
    highlights_ko: [
      '1996년 설립, 부산 외국인학교',
      '영국식 IGCSE',
      '소규모 학교',
      '부산 도심 인근',
    ],
    highlights_zh: [
      '1996 年创立,釜山外国人学校',
      '英式 IGCSE',
      '小规模学校',
      '釜山市区附近',
    ],
    summary_ko: '1996년 설립, 부산 영국식 외국인학교. 소규모 학급, 부산 도심 위치.',
    summary_zh: '1996 年创立,釜山英式外国人学校。小班教学,釜山市区。',
  },
];

// ─────────────────────────────────────────────────────────────────────────
// 국제학교 — 제주특별자치도 특별법 · 인천경제자유구역법 (내국인 입학 가능)
// ─────────────────────────────────────────────────────────────────────────
export const INTERNATIONAL_SCHOOLS: DomesticSchool[] = [
  // 제주영어교육도시
  {
    slug: 'nlcs-jeju', category: 'international-schools', region: 'jeju',
    name_en: 'North London Collegiate School Jeju', name_ko: 'NLCS 제주', name_zh: 'NLCS 济州',
    abbreviation: 'NLCS Jeju', founded_year: 2011,
    city_ko: '제주 서귀포', city_zh: '济州 西归浦', district_ko: '영어교육도시', district_zh: '英语教育城',
    website: 'https://www.nlcsjeju.kr',
    grade_range: 'Year 1–13',
    curriculum_en: ['British', 'IGCSE', 'A-Level', 'IB Diploma'],
    tuition_range_usd: [32000, 45000],
    highlights_ko: [
      '영국 NLCS (1850 설립) 자매 학교',
      '영국식 + IB 둘 다 선택 가능',
      '제주영어교육도시 4개 국제학교 중 영국식 대표',
      '옥스브리지 진학 우수',
      '보딩(기숙) + 데이 옵션',
    ],
    highlights_zh: [
      '英国 NLCS(1850 创立)姐妹校',
      '英式 + IB 双选',
      '济州英语教育城 4 所中英式代表',
      '牛剑升学优势',
      '寄宿 + 走读选项',
    ],
    summary_ko: '2011년 개교, 영국 NLCS 자매 학교. 영국식 IGCSE / A-Level + IB Diploma 모두 운영. 옥스브리지 진학 트랙 강점.',
    summary_zh: '2011 年开校,英国 NLCS 姐妹校。英式 IGCSE / A-Level + IB Diploma 均开设。牛剑升学优势。',
  },
  {
    slug: 'kis-jeju', category: 'international-schools', region: 'jeju',
    name_en: 'Korea International School Jeju', name_ko: 'KIS 제주', name_zh: 'KIS 济州',
    abbreviation: 'KIS Jeju', founded_year: 2011,
    city_ko: '제주 서귀포', city_zh: '济州 西归浦', district_ko: '영어교육도시', district_zh: '英语教育城',
    website: 'https://www.kis.ac',
    grade_range: 'PK–G12',
    curriculum_en: ['American', 'AP', 'IB Diploma'],
    tuition_range_usd: [30000, 42000],
    highlights_ko: [
      'KIS 그룹 제주 캠퍼스 (2011 개교)',
      '미국식 + AP + IB Diploma 병행',
      '제주영어교육도시 4개 국제학교 중 미국식 대표',
      '미국 대학 진학 트랙',
      '보딩 + 데이',
    ],
    highlights_zh: [
      'KIS 集团济州校区(2011 开校)',
      '美式 + AP + IB Diploma 并行',
      '济州英语教育城 4 所中美式代表',
      '美国大学升学路径',
      '寄宿 + 走读',
    ],
    summary_ko: '2011년 개교, KIS 그룹 제주 캠퍼스. 미국식 + AP + IB 병행. 미국 대학 진학 트랙 강점.',
    summary_zh: '2011 年开校,KIS 集团济州校区。美式 + AP + IB 并行。美国大学升学路径强项。',
  },
  {
    slug: 'bha', category: 'international-schools', region: 'jeju',
    name_en: 'Branksome Hall Asia', name_ko: '브랭섬홀 아시아', name_zh: 'Branksome Hall Asia',
    abbreviation: 'BHA', founded_year: 2012,
    city_ko: '제주 서귀포', city_zh: '济州 西归浦', district_ko: '영어교육도시', district_zh: '英语教育城',
    website: 'https://www.branksome.asia',
    grade_range: 'JK–G12',
    curriculum_en: ['IB PYP', 'IB MYP', 'IB Diploma'],
    tuition_range_usd: [32000, 45000],
    highlights_ko: [
      '캐나다 Branksome Hall (1903) 자매 학교',
      '여학교 (Junior School 만 남녀공학)',
      'IB 전 단계 (PYP · MYP · DP)',
      '제주영어교육도시 유일한 여학교',
      '보딩 + 데이',
    ],
    highlights_zh: [
      '加拿大 Branksome Hall(1903)姐妹校',
      '女校(仅 Junior School 男女混合)',
      'IB 全阶段(PYP · MYP · DP)',
      '济州英语教育城唯一女校',
      '寄宿 + 走读',
    ],
    summary_ko: '2012년 개교, 캐나다 Branksome Hall 자매 학교. 제주 유일 여학교, IB 전 단계.',
    summary_zh: '2012 年开校,加拿大 Branksome Hall 姐妹校。济州唯一女校,IB 全阶段。',
  },
  {
    slug: 'sja-jeju', category: 'international-schools', region: 'jeju',
    name_en: 'St. Johnsbury Academy Jeju', name_ko: 'SJA 제주', name_zh: 'SJA 济州',
    abbreviation: 'SJA Jeju', founded_year: 2017,
    city_ko: '제주 서귀포', city_zh: '济州 西归浦', district_ko: '영어교육도시', district_zh: '英语教育城',
    website: 'https://www.sjajeju.kr',
    grade_range: 'PK–G12',
    curriculum_en: ['American', 'AP'],
    tuition_range_usd: [30000, 42000],
    highlights_ko: [
      '미국 St. Johnsbury Academy (1842) 자매 학교',
      '미국식 + AP 다수',
      '제주영어교육도시 4개 국제학교 중 가장 최근 (2017 개교)',
      '미국 보딩 트래디션 적용',
      '보딩 + 데이',
    ],
    highlights_zh: [
      '美国 St. Johnsbury Academy(1842)姐妹校',
      '美式 + 多门 AP',
      '济州英语教育城 4 所中最新(2017 开校)',
      '美国寄宿传统',
      '寄宿 + 走读',
    ],
    summary_ko: '2017년 개교, 미국 SJA(1842) 자매 학교. 제주 4개 학교 중 가장 최근, 미국 보딩 전통.',
    summary_zh: '2017 年开校,美国 SJA(1842)姐妹校。济州 4 所中最新,美国寄宿传统。',
  },
  // 송도
  {
    slug: 'chadwick-songdo', category: 'international-schools', region: 'songdo',
    name_en: 'Chadwick International', name_ko: '채드윅 송도', name_zh: 'Chadwick 松岛',
    abbreviation: 'Chadwick', founded_year: 2010,
    city_ko: '인천 송도', city_zh: '仁川 松岛', district_ko: '글로벌캠퍼스', district_zh: '全球校园',
    website: 'https://www.chadwickschool.org/songdo',
    grade_range: 'JK–G12',
    curriculum_en: ['IB PYP', 'IB MYP', 'IB Diploma'],
    tuition_range_usd: [32000, 45000],
    highlights_ko: [
      '미국 Chadwick School (1935, LA) 자매 학교',
      'IB 전 단계 (PYP · MYP · DP)',
      '송도 글로벌캠퍼스 내 유일한 국제학교',
      '내국인 입학 가능 (송도 거주 요건 없음)',
      'IB 평균 점수 우수 (학교 공식 발표 참고)',
    ],
    highlights_zh: [
      '美国 Chadwick School(1935 洛杉矶)姐妹校',
      'IB 全阶段(PYP · MYP · DP)',
      '松岛全球校园内唯一国际学校',
      '本国学生可入读(无松岛居住要求)',
      'IB 平均分优(详见学校公告)',
    ],
    summary_ko: '2010년 개교, 미국 Chadwick School 자매 학교. 송도글로벌캠퍼스 유일한 국제학교, IB 전 단계, 내국인 입학 가능.',
    summary_zh: '2010 年开校,美国 Chadwick School 姐妹校。松岛全球校园唯一国际学校,IB 全阶段,本国学生可入读。',
  },
];

export const ALL_DOMESTIC_SCHOOLS = [...FOREIGN_SCHOOLS, ...INTERNATIONAL_SCHOOLS];

// ─────────────────────────────────────────────────────────────────────────
// 카테고리 + 지역 메타
// ─────────────────────────────────────────────────────────────────────────
export interface RegionMeta {
  id: DomesticRegion;
  category: DomesticCategory;
  ko: string;
  zh: string;
  intro_ko: string;
  intro_zh: string;
}

export const REGION_METAS: RegionMeta[] = [
  {
    id: 'seoul', category: 'foreign-schools',
    ko: '서울 외국인학교', zh: '首尔外国人学校',
    intro_ko: '서울에는 5개 주요 외국인학교가 있습니다. SFS(1912)·YISS(2006)·KIS Seoul·Dwight·Dulwich. 미국식(YISS · KIS)·영국식(Dulwich)·IB+영국식(SFS)·IB(Dwight) 등 커리큘럼이 다양합니다.',
    intro_zh: '首尔有 5 所主要外国人学校:SFS(1912)· YISS(2006)· KIS Seoul · Dwight · Dulwich。课程涵盖美式(YISS · KIS)、英式(Dulwich)、IB + 英式(SFS)、IB(Dwight)。',
  },
  {
    id: 'gyeonggi-incheon', category: 'foreign-schools',
    ko: '경기·인천 외국인학교', zh: '京畿·仁川外国人学校',
    intro_ko: '경기·인천 권역 외국인학교는 KIS Pangyo(2008)·GSIS(2006)·ICS Pyeongtaek 등이 있습니다. 분당 IT 임원·삼성 임원·미군 가족 자녀 비율이 학교별로 다릅니다.',
    intro_zh: '京畿·仁川区域外国人学校包括 KIS Pangyo(2008)、GSIS(2006)、ICS Pyeongtaek。盆唐 IT 高管·三星员工·美军家庭子女比例因校而异。',
  },
  {
    id: 'regional', category: 'foreign-schools',
    ko: '지방 외국인학교 (부산 · 대구)', zh: '其他地区外国人学校(釜山 · 大邱)',
    intro_ko: '서울·경기 외 지역의 외국인학교는 부산(ISB · BFS)과 대구(DIS) 위주입니다. ISB 는 1980년 설립으로 부산 최대.',
    intro_zh: '首尔·京畿之外的外国人学校以釜山(ISB · BFS)与大邱(DIS)为主。ISB 1980 年创立,釜山规模最大。',
  },
  {
    id: 'jeju', category: 'international-schools',
    ko: '제주 국제학교 (영어교육도시)', zh: '济州国际学校(英语教育城)',
    intro_ko: '제주영어교육도시는 NLCS Jeju·KIS Jeju·BHA·SJA 4개 학교로 구성. 영국식(NLCS)·미국식(KIS·SJA)·캐나다 IB 여학교(BHA) 등 다양한 트랙. 내국인 단독 입학 가능.',
    intro_zh: '济州英语教育城由 NLCS Jeju · KIS Jeju · BHA · SJA 4 所组成。英式(NLCS)、美式(KIS · SJA)、加拿大 IB 女校(BHA)等多元路径。本国学生可独立入读。',
  },
  {
    id: 'songdo', category: 'international-schools',
    ko: '송도 국제학교', zh: '松岛国际学校',
    intro_ko: '인천 송도글로벌캠퍼스 내 Chadwick International (2010) 단일 학교. 미국 LA Chadwick School 자매. IB 전 단계, 내국인 입학 가능.',
    intro_zh: '仁川松岛全球校园内 Chadwick International(2010)单校。美国 LA Chadwick School 姐妹校。IB 全阶段,本国学生可入读。',
  },
  {
    id: 'daegu-other', category: 'international-schools',
    ko: '대구·기타 국제학교', zh: '大邱·其他国际学校',
    intro_ko: '현재 한국 정부 인가 "국제학교(내국인 입학 가능)"는 제주·송도에만 존재합니다. 대구·기타 지역의 국제학교형 학교는 외국인학교 카테고리로 등록되어 있습니다 (DIS Daegu 등).',
    intro_zh: '当前韩国政府认证「国际学校(本国学生可入读)」仅存于济州·松岛。大邱·其他地区的国际型学校归类于外国人学校(如 DIS Daegu)。',
  },
];

export function getSchool(category: DomesticCategory, region: DomesticRegion, slug: string): DomesticSchool | undefined {
  const list = category === 'foreign-schools' ? FOREIGN_SCHOOLS : INTERNATIONAL_SCHOOLS;
  return list.find((s) => s.region === region && s.slug === slug);
}

export function getSchoolsByRegion(category: DomesticCategory, region: DomesticRegion): DomesticSchool[] {
  const list = category === 'foreign-schools' ? FOREIGN_SCHOOLS : INTERNATIONAL_SCHOOLS;
  return list.filter((s) => s.region === region);
}

export function getRegionMeta(category: DomesticCategory, region: DomesticRegion): RegionMeta | undefined {
  return REGION_METAS.find((r) => r.category === category && r.id === region);
}

// 카테고리별 공통 입학 자격
export const COMMON_ELIGIBILITY = {
  'foreign-schools': {
    ko: [
      '부모 중 한 명 이상이 외국 국적자',
      '학생이 외국에서 3년 이상 거주한 재외국민 (귀국 후 3년 이내)',
      '외국 국적 학생',
    ],
    zh: [
      '父母至少一方为外籍',
      '在国外居住 3 年以上的归侨学生(回国 3 年内)',
      '外籍学生',
    ],
  },
  'international-schools': {
    ko: [
      '내국인 단독 입학 가능 (외국 거주 요건 없음)',
      '외국 국적 학생도 가능',
      '학생 본인 입학 시험 통과',
    ],
    zh: [
      '本国学生可独立入学(无海外居住要求)',
      '外籍学生亦可',
      '学生通过入学考试',
    ],
  },
} as const;

export const COMMON_ADMISSION_PROCESS = {
  ko: [
    '11–12월: 지원서 접수 시작',
    '1–3월: 입학 시험(WIDA · MAP · CAT4 등) · 인터뷰',
    '3월: 합격 발표 · 등록비 납부',
    '8월(가을) 또는 3월(봄): 입학',
  ],
  zh: [
    '11–12 月:开始接受申请',
    '1–3 月:入学考试(WIDA · MAP · CAT4 等)· 面试',
    '3 月:录取通知 · 缴注册费',
    '8 月(秋季)或 3 月(春季):入学',
  ],
} as const;
