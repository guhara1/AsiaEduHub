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

// ─────────────────────────────────────────────────────────────────────────
// 지역별 FAQ (인덱스 + 학교 페이지에 표시, FAQPage schema 적용)
// ─────────────────────────────────────────────────────────────────────────
export interface RegionFaq {
  q_ko: string; a_ko: string;
  q_zh: string; a_zh: string;
}

export const REGION_FAQS: Record<DomesticRegion, RegionFaq[]> = {
  seoul: [
    {
      q_ko: 'SFS · YISS · KIS Seoul · Dwight · Dulwich 중 자녀에게 어느 학교가?',
      a_ko: '커리큘럼 우선순위로 보면: IB + 영국식 둘 다는 SFS, 미국식 + AP 중심은 YISS / KIS Seoul, IB 전 단계 인증은 Dwight, 영국식 정통(A-Level)은 Dulwich. 거주 지역(서대문·용산·강남·마포·서초)도 통학 시간에 영향.',
      q_zh: 'SFS · YISS · KIS Seoul · Dwight · Dulwich 中,孩子适合哪所?',
      a_zh: '按课程优先看:IB + 英式双轨为 SFS,美式 + AP 为 YISS / KIS Seoul,IB 全阶段认证为 Dwight,英式 A-Level 正统为 Dulwich。居住区(西大门·龙山·江南·麻浦·瑞草)也影响通学时间。',
    },
    {
      q_ko: '서울 외국인학교 연 학비는 평균 얼마?',
      a_ko: '연 학비 평균 $27,000~$42,000(2025–2026 추정). SFS·Dwight·Dulwich가 다소 높고, YISS·KIS Seoul은 중간. 학비 외 입학금(연 학비 10~30%), 시설비, 교복, 스쿨버스, 식비 등이 추가로 15~25% 발생.',
      q_zh: '首尔外国人学校年学费平均多少?',
      a_zh: '年学费平均 $27,000~$42,000(2025–2026 估算)。SFS · Dwight · Dulwich 略高,YISS · KIS Seoul 居中。注册费(年学费 10~30%)、设施费、校服、校车、餐费等再加 15~25%。',
    },
    {
      q_ko: '서울 외국인학교 입학 시험은 학교마다 다른가?',
      a_ko: '예. 학교별로 다른 영어 능력 시험 사용 — SFS는 WIDA, YISS·KIS Seoul·KIS Pangyo는 MAP, Dwight는 CAT4 + 인터뷰, Dulwich는 CEM + 인터뷰가 일반적. 정확한 시험 종류와 합격선은 학교 공식 입학 페이지에서 확인.',
      q_zh: '首尔外国人学校入学考试是否各异?',
      a_zh: '是。各校使用不同英语测试 — SFS 用 WIDA,YISS · KIS 用 MAP,Dwight 用 CAT4 + 面试,Dulwich 用 CEM + 面试。准确测试种类与合格线请查阅学校官方招生页面。',
    },
    {
      q_ko: '내국인이 서울 외국인학교에 입학할 수 있는 방법은?',
      a_ko: '외국인학교법에 따라 외국 국적이거나 재외국민(외국 거주 3년 이상)인 경우만 입학 가능. 단순 영어 환경 목적이면 제주·송도 국제학교가 자격 요건 없이 입학 가능하므로 그쪽을 검토하는 것이 합법적.',
      q_zh: '本国学生能否入读首尔外国人学校?',
      a_zh: '依据《外国人学校法》,需外籍或归侨(海外居住 3 年以上)。仅为英语环境的话,济州·松岛国际学校无资格限制,建议优先考虑。',
    },
    {
      q_ko: '서울 외국인학교 졸업생들은 주로 어느 대학으로?',
      a_ko: 'SFS · Dwight 는 미국 아이비 · Top 30 + 영국 옥스브리지 합격생 정기 배출. YISS · KIS Seoul 는 미국 명문 + 한국 SKY(재외국민 특별전형) 진학 다수. Dulwich Seoul 는 옥스브리지 + 영국 명문 비중 높음. 정확한 진학 통계는 각 학교 공식 발표 참고.',
      q_zh: '首尔外国人学校毕业生主要去向?',
      a_zh: 'SFS · Dwight 定期产出美国常春藤 · Top 30 + 英国牛剑录取。YISS · KIS Seoul 美国名校 + 韩国 SKY(海外侨胞特殊招生)较多。Dulwich Seoul 牛剑 + 英国名校比重高。准确数据请参考各校官方发布。',
    },
  ],
  'gyeonggi-incheon': [
    {
      q_ko: 'KIS Pangyo · GSIS · ICS Pyeongtaek 중 어느 게 우리 지역에서 가깝나?',
      a_ko: '분당·판교 거주 → KIS Pangyo, 수원·삼성 임원 → GSIS, 평택·미군기지 인근 → ICS Pyeongtaek 이 통학 거리 면에서 자연스러움. 학교 셔틀버스 정류장은 각 학교 공식 사이트에서 확인.',
      q_zh: 'KIS Pangyo · GSIS · ICS Pyeongtaek 我家最近的哪所?',
      a_zh: '盆唐·板桥居住 → KIS Pangyo,水原·三星员工 → GSIS,平泽·美军基地附近 → ICS Pyeongtaek 通学距离最自然。校车站点查阅各校官网。',
    },
    {
      q_ko: 'KIS Pangyo(분당)와 KIS Seoul(강남)의 차이는?',
      a_ko: '둘 다 KIS 그룹이지만 별도 캠퍼스·별도 운영. 커리큘럼 기본 골격은 비슷(미국식 + AP)하나 학생 구성·시설·학비가 다소 다름. 일부 교사·자원 공유. 자녀 통학·지역 기반으로 선택.',
      q_zh: 'KIS Pangyo(盆唐)与 KIS Seoul(江南)区别?',
      a_zh: '同属 KIS 集团但独立运营。课程框架相似(美式 + AP),学生构成 · 设施 · 学费有差异,部分师资共享。按通学与居住选择即可。',
    },
    {
      q_ko: '미군 가족 자녀 비율 높은 학교는?',
      a_ko: 'ICS Pyeongtaek(평택 캠프 험프리스 미군기지 인근)이 가장 높음. SFS(용산)·YISS(용산) 도 한미 군·기업 임원 자녀 비율이 일정 수준 있음.',
      q_zh: '美军家庭子女比例高的学校?',
      a_zh: 'ICS Pyeongtaek(平泽 Camp Humphreys 美军基地附近)最高。SFS(龙山)· YISS(龙山)的韩美军 · 企业高管子女也较多。',
    },
    {
      q_ko: '경기·인천 외국인학교 학비는 서울권보다 저렴한가?',
      a_ko: '대체로 1,000~3,000 USD/년 정도 낮은 편이지만 학교별 격차가 큼. ICS Pyeongtaek 이 가장 저렴, KIS Pangyo · GSIS 는 서울 KIS Seoul · YISS 와 유사한 수준.',
      q_zh: '京畿·仁川外国人学校学费比首尔便宜吗?',
      a_zh: '一般低 1,000~3,000 USD/年,但因校而异。ICS Pyeongtaek 最低,KIS Pangyo · GSIS 与首尔 KIS Seoul · YISS 接近。',
    },
    {
      q_ko: '분당·판교에 사는데 자녀 학교 선택은?',
      a_ko: '분당·판교 거주 + 외국인학교 자격 충족 시 KIS Pangyo가 통학 면에서 자연스러움. 자격 미충족이면 송도 Chadwick(국제학교, 내국인 입학 가능) 검토 또는 분당↔강남 통학 가능한 SFS·KIS Seoul.',
      q_zh: '住在盆唐·板桥的择校建议?',
      a_zh: '居住盆唐·板桥 + 满足外国人学校资格 → KIS Pangyo 通学最便利。资格未满足 → 松岛 Chadwick(国际学校,本国学生可入读)或盆唐↔江南通学的 SFS · KIS Seoul。',
    },
  ],
  regional: [
    {
      q_ko: '부산 ISB와 BFS의 차이는?',
      a_ko: 'ISB(1980 설립, 기장)는 부산 최대 외국인학교로 IB 전 단계 인증, 40+ 국적. BFS(1996, 부산 도심)는 영국식 IGCSE 중심의 소규모 학교. 자녀가 IB 트랙이면 ISB, 영국식 + 소규모 학급 선호면 BFS.',
      q_zh: '釜山 ISB 与 BFS 区别?',
      a_zh: 'ISB(1980 创立,机张)是釜山最大外国人学校,IB 全阶段认证,40+ 国籍。BFS(1996,釜山市区)是英式 IGCSE 小规模学校。IB 选 ISB,英式 + 小班选 BFS。',
    },
    {
      q_ko: '대구 DIS 입학 자격은 외국인학교법 일반과 같은가?',
      a_ko: '예. DIS Daegu도 외국인학교법(2009) 적용 — 부모 외국 국적 또는 학생 외국 3년+ 거주가 입학 자격. 단 학교별로 영어 능력 검증·인터뷰 추가 요건 존재.',
      q_zh: '大邱 DIS 入学资格与外国人学校法通用条件相同吗?',
      a_zh: '是。DIS Daegu 同样适用《外国人学校法》(2009)— 父母外籍或学生海外 3 年+ 居住为资格。各校英语测试 · 面试附加要求另议。',
    },
    {
      q_ko: '지방 외국인학교 학비는 서울 대비 얼마나 저렴?',
      a_ko: '연 학비 평균 $20,000~$36,000으로 서울 평균보다 약 20~25% 저렴. 다만 부대 비용·통학 거리·주거지 옵션을 같이 고려해야 함.',
      q_zh: '其他地区外国人学校学费比首尔便宜多少?',
      a_zh: '年学费平均 $20,000~$36,000,比首尔便宜约 20~25%。但附加费用 · 通学距离 · 居住选择需一起考量。',
    },
    {
      q_ko: '지방 외국인학교도 한국 학력 인정?',
      a_ko: '아닙니다. 외국인학교는 위치에 무관하게 모두 한국 정규 학력으로 직접 인정되지 않으며, 한국 대학 진학 시 재외국민 특별전형 또는 검정고시 활용. 외국 대학 진학은 학교 커리큘럼 인증(WASC · IB 등)으로 OK.',
      q_zh: '其他地区外国人学校获韩国学历认定吗?',
      a_zh: '不获。外国人学校(无论地区)均非韩国正规学历直接认定,韩国大学申请需海外侨胞特殊招生或自学考试。外国大学申请按学校认证(WASC · IB 等)正常。',
    },
    {
      q_ko: '부산·대구 졸업생들의 진학 성과는 서울 대비?',
      a_ko: 'ISB·DIS는 IB · AP 평균 점수가 서울 명문 외국인학교와 유사한 수준의 졸업생을 정기 배출 (학교 공식 발표 기준). 미국 명문 · 영국 명문 합격 사례 모두 존재. 학교 규모와 진학 성과는 별개.',
      q_zh: '釜山·大邱毕业生升学成果与首尔相比?',
      a_zh: 'ISB · DIS 的 IB · AP 平均分与首尔名校外国人学校接近(详见学校公告),美国名校 · 英国名校录取案例皆有。学校规模与升学成果是两回事。',
    },
  ],
  jeju: [
    {
      q_ko: 'NLCS · KIS Jeju · BHA · SJA 4개 학교 중 어느 학교가?',
      a_ko: '커리큘럼 우선: 영국식(A-Level + IB) → NLCS, 미국식(AP + IB) → KIS Jeju / SJA, 캐나다 IB 여학교 → BHA. 자녀가 여학생이면 BHA 옵션 검토. 옥스브리지 진학 목표면 NLCS, 미국 대학이면 KIS Jeju 또는 SJA.',
      q_zh: 'NLCS · KIS Jeju · BHA · SJA 4 所怎么选?',
      a_zh: '按课程优先:英式(A-Level + IB)→ NLCS,美式(AP + IB)→ KIS Jeju / SJA,加拿大 IB 女校 → BHA。女生考虑 BHA。牛剑选 NLCS,美国大学选 KIS Jeju 或 SJA。',
    },
    {
      q_ko: '제주 국제학교 보딩(기숙)과 데이 중 어느 게?',
      a_ko: '저학년·중학년은 가족 동반 데이가 일반적, 고학년(G9+)부터 보딩이 효율적. 보딩비는 연 학비의 30~50% 추가. 학부모 거주는 제주 시내 또는 영어교육도시 인근.',
      q_zh: '济州国际学校寄宿与走读怎么选?',
      a_zh: '低中年级一般家庭同住走读,高年级(G9+)寄宿更高效。寄宿费为学费的 30~50% 附加。家长可住济州市区或英语教育城附近。',
    },
    {
      q_ko: '제주 국제학교 학비 + 기숙비 총합?',
      a_ko: '데이(통학): 연 $30,000~$45,000. 데이 + 부대 약 $38,000~$55,000. 보딩(기숙): 학비 + 기숙비 = 연 $45,000~$65,000 + 부대. 학교·학년·옵션별 큰 격차.',
      q_zh: '济州国际学校学费 + 寄宿费总额?',
      a_zh: '走读:年 $30,000~$45,000,含附加约 $38,000~$55,000。寄宿:学费 + 寄宿费 = 年 $45,000~$65,000 + 附加。因校 · 年级 · 选项差异大。',
    },
    {
      q_ko: '내국인 자녀가 제주 국제학교 입학 시험은 어느 정도?',
      a_ko: '학교별 영어 시험(MAP · CAT4 · WIDA 등) + 인터뷰. 초등 저학년은 영어 환경 적응 가능성 평가, 고학년은 기존 성적 + 영어 능력 + 인터뷰 종합. 합격선은 학년·학교별 다름.',
      q_zh: '本国学生入读济州国际学校的入学考试难度?',
      a_zh: '各校英语测试(MAP · CAT4 · WIDA)+ 面试。小学低年级评估英语适应力,高年级综合考察既有成绩 + 英语 + 面试。合格线因年级 · 学校而异。',
    },
    {
      q_ko: '옥스브리지·아이비 진학에 어느 학교가 강한가?',
      a_ko: '옥스브리지 트랙은 NLCS Jeju(영국식 A-Level + IB) 가 가장 자연스러움. 미국 아이비 트랙은 KIS Jeju · SJA(미국식 + AP + IB). BHA(여학교)도 두 트랙 모두 합격생 배출. 정확한 합격 통계는 각 학교 공식 University Destinations 페이지 참고.',
      q_zh: '哪所学校在牛剑·常春藤升学上更强?',
      a_zh: '牛剑路径 NLCS Jeju(英式 A-Level + IB)最自然。美国常春藤 KIS Jeju · SJA(美式 + AP + IB)。BHA(女校)两路径均有录取案例。准确数据见各校 University Destinations 页。',
    },
  ],
  songdo: [
    {
      q_ko: 'Chadwick Songdo 입학 자격은 외국인학교와 같은가?',
      a_ko: '아닙니다. Chadwick Songdo는 인천경제자유구역 관련 법에 의한 "국제학교" 로 내국인 단독 입학 가능. 외국 거주 이력 없어도 자격 충족. 한국 학력 인정.',
      q_zh: 'Chadwick Songdo 入学资格与外国人学校相同吗?',
      a_zh: '不同。Chadwick Songdo 依据仁川经济自由区相关法属「国际学校」,本国学生可独立入读。无海外居住经历也合格,获韩国学历认定。',
    },
    {
      q_ko: '송도 거주 필수인가?',
      a_ko: '필수 아님. 인천·서울 강남·분당 등 서울 수도권 통학 가능. 학교 스쿨버스 노선 활용. 다만 송도 글로벌캠퍼스 인근(스마트시티 · 센트럴파크 인근) 거주가 통학 시간 단축.',
      q_zh: '是否必须居住松岛?',
      a_zh: '不必。可从仁川·首尔江南·盆唐通学,使用校车。但居住松岛全球校园附近(智慧城市 · 中央公园)可缩短通学时间。',
    },
    {
      q_ko: 'Chadwick LA 본교와의 관계는?',
      a_ko: 'Chadwick School (1935, LA, 캘리포니아) 의 자매 학교. 본교 노하우·교육 철학 공유하며 교환 프로그램·교사 연수 협력. 단 별도 법인·별도 학력 운영.',
      q_zh: '与 Chadwick LA 本校的关系?',
      a_zh: 'Chadwick School(1935 加州洛杉矶)姐妹校。共享办学理念与教学经验,交换项目 · 教师培训合作。但为独立法人 · 独立学历。',
    },
    {
      q_ko: 'Chadwick Songdo IB 평균 점수와 진학은?',
      a_ko: 'IB Diploma 평균 점수가 우수한 학교로 알려져 있으며 (학교 공식 발표 참고), 미국 명문 · 영국 옥스브리지 · 한국 SKY 합격생 정기 배출. 정확한 합격 통계는 학교 공식 University Counseling 자료 참고.',
      q_zh: 'Chadwick Songdo IB 平均分与升学?',
      a_zh: 'IB Diploma 平均分被认为优秀(详见学校公告),美国名校 · 英国牛剑 · 韩国 SKY 录取定期产出。准确数据请见学校官方 University Counseling 资料。',
    },
    {
      q_ko: '학비 + 부대 비용 총합?',
      a_ko: '연 학비 $32,000~$45,000 + 부대 비용 약 15~25%(입학금·시설·교복·식비·스쿨버스). 즉 연 총 $38,000~$55,000 수준이 일반적. 정확한 금액은 학교 공식 입학 비용 안내 참고.',
      q_zh: '学费 + 附加费用总额?',
      a_zh: '年学费 $32,000~$45,000 + 附加约 15~25%(注册 · 设施 · 校服 · 餐 · 校车)。年总额约 $38,000~$55,000。准确金额请参考学校官方招生费用指南。',
    },
  ],
  'daegu-other': [
    {
      q_ko: '대구에 진짜 "국제학교(내국인 입학 가능)" 가 있나?',
      a_ko: '현재 한국 정부가 인가한 "국제학교 (내국인 입학 가능)" 는 제주영어교육도시(4곳)과 송도글로벌캠퍼스(1곳)에만 존재. 대구의 DIS는 외국인학교법 적용 학교로 입학 자격이 외국인·재외국민에 제한됨.',
      q_zh: '大邱有真正的「国际学校(本国学生可入读)」吗?',
      a_zh: '目前韩国政府认证「国际学校(本国学生可入读)」仅存于济州英语教育城(4 所)与松岛全球校园(1 所)。大邱 DIS 适用《外国人学校法》,本国学生入学受限。',
    },
    {
      q_ko: '대구 거주 학부모 자녀를 국제학교에 보내려면?',
      a_ko: '외국 국적·재외국민 자격이 있으면 DIS Daegu(대구 외국인학교). 자격 없으면 자녀 단독 입학 가능한 제주영어교육도시 4개 학교(NLCS · KIS Jeju · BHA · SJA) 보딩(기숙) 검토.',
      q_zh: '居住大邱的家长想让孩子入读国际学校?',
      a_zh: '若符合外籍·归侨资格 → DIS Daegu。若不符 → 子女可独立入读的济州英语教育城 4 校(NLCS · KIS Jeju · BHA · SJA)寄宿。',
    },
    {
      q_ko: '추가 국제학교 인가 계획은?',
      a_ko: '정부·지자체에서 부산·세종·기타 지역에 국제학교 인가를 논의해 왔으나 2026년 5월 현재까지 추가 인가 확정 사항 없음. 운영자가 정책 변경 시 본 페이지를 업데이트.',
      q_zh: '是否有新国际学校认证计划?',
      a_zh: '政府 · 地方政府讨论过在釜山 · 世宗 · 其他地区新增认证,但截至 2026 年 5 月尚无确定。政策变更时站长会更新本页。',
    },
  ],
};

export function getRegionFaqs(region: DomesticRegion): RegionFaq[] {
  return REGION_FAQS[region] ?? [];
}

/** 커리큘럼 프로그램 이름 → 색상 tone 자동 분류 */
export function curriculumTone(label: string): 'IB' | 'British' | 'American' | 'Australian' | 'Canadian' | undefined {
  const l = label.toLowerCase();
  if (l.includes('ib')) return 'IB';
  if (l.includes('british') || l.includes('a-level') || l.includes('igcse') || l.includes('gcse')) return 'British';
  if (l.includes('american') || l.includes('ap') || l.includes('sat')) return 'American';
  if (l.includes('australian') || l.includes('nsw') || l.includes('vce') || l.includes('atar')) return 'Australian';
  if (l.includes('canadian') || l.includes('ossd') || l.includes('ontario')) return 'Canadian';
  return undefined;
}
