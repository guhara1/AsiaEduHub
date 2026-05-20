/**
 * 사이트 메뉴와 abroad/ 페이지가 공유하는 국가·도시 카탈로그.
 * 사용자(운영자) 결정 메뉴 구조 기준.
 */
import type { Locale } from './i18n';

export interface CityRef {
  id: string; // URL slug · anchor id
  flag: string;
  ko: string;
  zh: string;
}

export interface CountryRef {
  id: string;
  flag: string;
  ko: string;
  zh: string;
  cities: CityRef[]; // 빈 배열 가능
}

export const SOUTHEAST_ASIA: CountryRef[] = [
  {
    id: 'malaysia',
    flag: '🇲🇾',
    ko: '말레이시아',
    zh: '马来西亚',
    cities: [
      { id: 'kuala-lumpur', flag: '🇲🇾', ko: '쿠알라룸푸르', zh: '吉隆坡' },
      { id: 'penang', flag: '🇲🇾', ko: '페낭', zh: '槟城' },
      { id: 'johor-bahru', flag: '🇲🇾', ko: '조호바루', zh: '新山' },
    ],
  },
  {
    id: 'thailand',
    flag: '🇹🇭',
    ko: '태국',
    zh: '泰国',
    cities: [
      { id: 'bangkok', flag: '🇹🇭', ko: '방콕', zh: '曼谷' },
      { id: 'pattaya', flag: '🇹🇭', ko: '파타야', zh: '芭提雅' },
      { id: 'phuket', flag: '🇹🇭', ko: '푸켓', zh: '普吉' },
      { id: 'chiang-mai', flag: '🇹🇭', ko: '치앙마이', zh: '清迈' },
    ],
  },
  {
    id: 'singapore',
    flag: '🇸🇬',
    ko: '싱가포르',
    zh: '新加坡',
    cities: [],
  },
  {
    id: 'vietnam',
    flag: '🇻🇳',
    ko: '베트남',
    zh: '越南',
    cities: [
      { id: 'hanoi', flag: '🇻🇳', ko: '하노이', zh: '河内' },
      { id: 'ho-chi-minh', flag: '🇻🇳', ko: '호치민', zh: '胡志明市' },
      { id: 'hai-phong', flag: '🇻🇳', ko: '하이퐁', zh: '海防' },
      { id: 'da-nang', flag: '🇻🇳', ko: '다낭', zh: '岘港' },
    ],
  },
];

export function countryName(c: CountryRef, locale: Locale): string {
  return locale === 'ko' ? c.ko : c.zh;
}
export function cityName(c: CityRef, locale: Locale): string {
  return locale === 'ko' ? c.ko : c.zh;
}

/**
 * 영미권 (프리미엄 톤). 동남아(가성비)와 시각·문구 분리하는 게 광고주 단가 차등에도 유리.
 */
export const ANGLOSPHERE: CountryRef[] = [
  { id: 'usa', flag: '🇺🇸', ko: '미국 (보딩스쿨·데이스쿨)', zh: '美国(寄宿·走读)', cities: [] },
  { id: 'uk', flag: '🇬🇧', ko: '영국 (보딩스쿨)', zh: '英国(寄宿)', cities: [] },
  { id: 'canada', flag: '🇨🇦', ko: '캐나다 (공립·사립)', zh: '加拿大(公立·私立)', cities: [] },
  { id: 'australia', flag: '🇦🇺', ko: '호주', zh: '澳大利亚', cities: [] },
];

/**
 * 학교 유형별 (커리큘럼·운영 형태). 학교 데이터 누적 시 자동 필터링.
 */
export interface SchoolType {
  id: 'boarding' | 'ib' | 'british' | 'american';
  ko: string;
  zh: string;
}
export const SCHOOL_TYPES: SchoolType[] = [
  { id: 'boarding', ko: '보딩스쿨 (기숙)', zh: '寄宿学校' },
  { id: 'ib', ko: 'IB 학교', zh: 'IB 学校' },
  { id: 'british', ko: '영국식 (A-Level · GCSE)', zh: '英式(A-Level · GCSE)' },
  { id: 'american', ko: '미국식 (AP)', zh: '美式(AP)' },
];

/**
 * 학교 비교 도구 카테고리. 인터랙티브 도구 자체는 React Island 후속 작업.
 */
export interface CompareTool {
  id: string;
  ko: string;
  zh: string;
}
export const COMPARE_TOOLS: CompareTool[] = [
  { id: 'compare', ko: '학교 비교 (최대 4개 선택)', zh: '学校对比(最多 4 所)' },
  { id: 'calculator', ko: '학비 계산기 (환율·기숙·항공권 포함)', zh: '学费计算器(汇率·寄宿·机票)' },
  { id: 'curriculum-guide', ko: '커리큘럼 가이드 (IB vs AP vs A-Level)', zh: '课程指南(IB vs AP vs A-Level)' },
  { id: 'track-simulator', ko: '진학 트랙 시뮬레이터 (예: 제주 NLCS → 옥스브리지)', zh: '升学路径模拟器(如:济州 NLCS → 牛剑)' },
  { id: 'calendar', ko: '입학 일정 캘린더', zh: '入学日历' },
];

/**
 * MM2H · 이주 카테고리. 국제학교(30~40대 학부모) 와 별도 타겟
 * (50~60대 / 자산가 — 은퇴·자산 이주).
 */
export interface Mm2hTopic {
  id: string;
  ko: string;
  zh: string;
}
export const MM2H_TOPICS: Mm2hTopic[] = [
  { id: 'malaysia-mm2h', ko: '말레이시아 MM2H', zh: '马来西亚 MM2H' },
  { id: 'thai-visa', ko: '태국 엘리트 · LTR 비자', zh: '泰国 Elite · LTR 签证' },
  { id: 'singapore-pr', ko: '싱가포르 영주권 · EP', zh: '新加坡 PR · EP' },
  { id: 'agencies', ko: '추천 에이전시', zh: '推荐中介' },
  { id: 'housing', ko: '부동산 · 거주지 가이드', zh: '房产 · 居住地指南' },
];

/**
 * 가이드 카테고리 (SEO 트래픽 엔진). 사용자 결정 5개.
 * guides Content Collection 의 category enum 과 동일 키.
 */
export interface GuideCategory {
  id: 'admission' | 'tuition-scholarship' | 'visa-residence' | 'curriculum-compare' | 'track-reviews' | 'expert-columns';
  ko: string;
  zh: string;
}
export const GUIDE_CATEGORIES: GuideCategory[] = [
  { id: 'admission', ko: '입학 준비 (시험·인터뷰·서류)', zh: '入学准备(考试·面试·文件)' },
  { id: 'tuition-scholarship', ko: '학비 & 장학금', zh: '学费与奖学金' },
  { id: 'visa-residence', ko: '비자 & 거주 (국가별)', zh: '签证与居住(按国家)' },
  { id: 'curriculum-compare', ko: '커리큘럼 비교 (IB · AP · A-Level)', zh: '课程对比(IB · AP · A-Level)' },
  { id: 'track-reviews', ko: '진학 사례 · 후기', zh: '升学案例 · 评价' },
  { id: 'expert-columns', ko: '전문가 칼럼 (교사·입학사정관·컨설턴트)', zh: '专家专栏(教师·招生官·顾问)' },
];

/**
 * 국내(한국) 국제학교 분류. "외국인학교"와 "국제학교"는 법적 지위·입학 자격이 다름.
 * 분리 표기 자체가 전문성 신호.
 *  - 외국인학교: 재외국민·외국인 자녀 대상 (입학 자격 제한)
 *  - 국제학교(IB/Foreign Curriculum 인가): 내국인 입학 가능
 */
export interface DomesticRegion {
  id: string;
  ko: string;
  zh: string;
}
export interface DomesticGroup {
  id: 'foreign-schools' | 'international-schools' | 'kindergarten' | 'admission-guide';
  ko: string;
  zh: string;
  ko_sub?: string;
  zh_sub?: string;
  regions?: DomesticRegion[];
}
export const DOMESTIC_KOREA: DomesticGroup[] = [
  {
    id: 'foreign-schools',
    ko: '외국인학교',
    zh: '外国人学校',
    ko_sub: '재외국민·외국인 자녀',
    zh_sub: '归侨与外籍子女',
    regions: [
      { id: 'seoul', ko: '서울 (SFS · YISS · KIS 등)', zh: '首尔(SFS · YISS · KIS 等)' },
      { id: 'gyeonggi-incheon', ko: '경기·인천 (채드윅 송도 · 인천외국인학교 등)', zh: '京畿·仁川(Chadwick · 仁川外国人学校 等)' },
      { id: 'regional', ko: '지방 (대구·부산 등)', zh: '其他地区(大邱·釜山 等)' },
    ],
  },
  {
    id: 'international-schools',
    ko: '국제학교',
    zh: '国际学校',
    ko_sub: '내국인 입학 가능',
    zh_sub: '本国学生可申请',
    regions: [
      { id: 'jeju', ko: '제주 (NLCS · KIS · BHA · SJA)', zh: '济州(NLCS · KIS · BHA · SJA)' },
      { id: 'songdo', ko: '송도 (채드윅 송도)', zh: '松岛(Chadwick 송도)' },
      { id: 'daegu-other', ko: '대구·기타', zh: '大邱·其他' },
    ],
  },
  {
    id: 'kindergarten',
    ko: '영어유치원 · 국제유치원',
    zh: '英语幼儿园 · 国际幼儿园',
  },
  {
    id: 'admission-guide',
    ko: '입학 자격 · 서류 가이드',
    zh: '入学资格 · 文件指南',
  },
];
