/**
 * 태국 국제학교 카탈로그 (공개 정보 기반).
 *
 * 학교 정보(이름·설립 연도·위치·커리큘럼·공식 사이트)는 공개 사실.
 * 학비 범위는 2025-2026 시점 일반 시장 추정(USD/년) — 정확한 금액은 학교 공식 발표 확인.
 * 환율: USD 1 = THB 35~36 (2026-05 시점).
 *
 * 운영자(데이비드)는 쿠알라룸푸르 거주 — 방콕·파타야는 단기 출장·체류 1차 정보 보유.
 */
import type { Locale } from './i18n';
import type { FinanceOverride } from './school-finance';

export type ThaiRegion = 'bangkok' | 'pattaya' | 'phuket' | 'chiang-mai';

export interface ThaiCurriculum {
  type: 'British' | 'American' | 'IB' | 'Singaporean' | 'French' | 'Mixed';
  programs_en: string[];
}

export interface ThailandSchool extends FinanceOverride {
  slug: string;
  region: ThaiRegion;
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
  curriculum: ThaiCurriculum;
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

export const REGION_LABELS: Record<ThaiRegion, { ko: string; zh: string; flag?: string }> = {
  'bangkok': { ko: '방콕', zh: '曼谷' },
  'pattaya': { ko: '파타야', zh: '芭提雅' },
  'phuket': { ko: '푸켓', zh: '普吉' },
  'chiang-mai': { ko: '치앙마이', zh: '清迈' },
};

export const THAILAND_SCHOOLS: ThailandSchool[] = [
  // ─── 방콕 (Bangkok) ────────────────────────────────────────────
  {
    slug: 'shrewsbury-riverside',
    region: 'bangkok',
    name_en: 'Shrewsbury International School Bangkok — Riverside',
    name_ko: '슈루즈베리 국제학교 방콕 (리버사이드)',
    name_zh: '什鲁斯伯里国际学校 曼谷(河畔校区)',
    abbreviation: 'STA Riverside', founded_year: 2003,
    city_ko: '방콕', city_zh: '曼谷',
    district_ko: 'Charoen Krung · 차오프라야 강변', district_zh: 'Charoen Krung · 湄南河畔',
    website: 'https://www.shrewsbury.ac.th',
    grade_range: 'Year 1–13',
    curriculum: { type: 'British', programs_en: ['EYFS', 'IGCSE', 'A-Level'] },
    tuition_range_usd: [20000, 30000],
    highlights_ko: [
      '영국 Shrewsbury School(1552 설립) 자매학교',
      '차오프라야 강변 메인 캠퍼스',
      'A-Level 정통 트랙 — 옥스브리지 진학 정기',
      '방콕 영국식 국제학교 1순위',
    ],
    highlights_zh: [
      '英国 Shrewsbury School (1552 创立) 姊妹校',
      '湄南河畔主校区',
      'A-Level 正统路径 — 牛剑录取稳定',
      '曼谷英式国际学校首选',
    ],
    summary_ko: '방콕 영국식 국제학교의 표준. 차오프라야 강변 메인 캠퍼스. A-Level 정통 트랙으로 옥스브리지 진학 정기.',
    summary_zh: '曼谷英式国际学校标杆。湄南河畔主校区。A-Level 正统路径,牛剑录取稳定。',
  },
  {
    slug: 'shrewsbury-city',
    region: 'bangkok',
    name_en: 'Shrewsbury International School Bangkok — City Campus (S107)',
    name_ko: '슈루즈베리 국제학교 방콕 (시티 / S107)',
    name_zh: '什鲁斯伯里国际学校 曼谷(City 校区 / S107)',
    abbreviation: 'STA S107', founded_year: 2018,
    city_ko: '방콕', city_zh: '曼谷',
    district_ko: 'Sukhumvit Soi 107 · BTS Bearing 인근', district_zh: 'Sukhumvit Soi 107 · BTS Bearing 邻近',
    website: 'https://www.shrewsbury.ac.th',
    grade_range: 'Year 1–8 (초·중학)',
    curriculum: { type: 'British', programs_en: ['EYFS', 'KS1', 'KS2', 'KS3'] },
    tuition_range_usd: [18000, 25000],
    highlights_ko: [
      'Shrewsbury 그룹 Sukhumvit 캠퍼스 (초·중학 전용)',
      'BTS Bearing 도보권',
      '초등 중심 학부모 — 한국·일본·중국 가족 다수',
      'Year 9 부터 Riverside 본 캠퍼스 진학',
    ],
    highlights_zh: [
      'Shrewsbury 集团 Sukhumvit 校区(小学 · 初中专属)',
      'BTS Bearing 步行可达',
      '小学家庭 — 韩日中家长众多',
      'Year 9 起升至 Riverside 主校区',
    ],
    summary_ko: 'Shrewsbury 그룹 Sukhumvit 캠퍼스. 초·중학(Year 1-8) 전용. Year 9 부터 Riverside 본 캠퍼스로 진학.',
    summary_zh: 'Shrewsbury 集团 Sukhumvit 校区。小学 · 初中(Year 1-8)专属。Year 9 起升至 Riverside 主校区。',
  },
  {
    slug: 'asb-sukhumvit',
    region: 'bangkok',
    name_en: 'American School of Bangkok — Sukhumvit',
    name_ko: '미국학교 방콕 (수쿰빗)',
    name_zh: '曼谷美国学校(素坤逸校区)',
    abbreviation: 'ASB', founded_year: 1983,
    city_ko: '방콕', city_zh: '曼谷',
    district_ko: 'Sukhumvit Soi 49 · Phrom Phong', district_zh: 'Sukhumvit Soi 49 · Phrom Phong',
    website: 'https://www.asb.ac.th',
    grade_range: 'PreK–G12',
    curriculum: { type: 'American', programs_en: ['American', 'AP', 'High School Diploma'] },
    tuition_range_usd: [17000, 27000],
    highlights_ko: [
      '미국 WASC 인증 K-12',
      'Phrom Phong 도심 캠퍼스',
      'AP 코스 다수 운영',
      '한국·일본 가족 비율 높음',
    ],
    highlights_zh: [
      '美国 WASC 认证 K-12',
      'Phrom Phong 市中心校区',
      'AP 课程多',
      '韩日家庭比例高',
    ],
    summary_ko: '방콕 미국식 K-12 학교. Phrom Phong 도심. AP 코스 정통. 한국 학부모 클러스터.',
    summary_zh: '曼谷美式 K-12 学校。Phrom Phong 市中心。AP 课程正统。韩国家长聚集。',
  },
  {
    slug: 'asb-green-valley',
    region: 'bangkok',
    name_en: 'American School of Bangkok — Green Valley',
    name_ko: '미국학교 방콕 (그린밸리)',
    name_zh: '曼谷美国学校(Green Valley 校区)',
    abbreviation: 'ASB GV',
    city_ko: '방콕', city_zh: '曼谷',
    district_ko: 'Bang Na-Trad KM7 (방콕 동부)', district_zh: 'Bang Na-Trad KM7 (曼谷东部)',
    website: 'https://www.asb.ac.th',
    grade_range: 'PreK–G12',
    curriculum: { type: 'American', programs_en: ['American', 'AP'] },
    tuition_range_usd: [14000, 22000],
    highlights_ko: [
      'ASB 그룹 Bang Na 캠퍼스 (대규모 부지)',
      '수영장·운동장 등 시설 우수',
      '미국식 + 보딩 옵션 일부',
      '방콕 동부 신도시 가족',
    ],
    highlights_zh: [
      'ASB 集团 Bang Na 校区(大型校园)',
      '游泳池 · 运动场设施优秀',
      '美式 + 部分寄宿选项',
      '曼谷东部新城家庭',
    ],
    summary_ko: 'ASB 그룹 Bang Na 캠퍼스. 대규모 부지·시설. 미국식 K-12. 방콕 동부 가족 1순위.',
    summary_zh: 'ASB 集团 Bang Na 校区。大型校园 · 设施。美式 K-12。曼谷东部家庭首选。',
  },
  {
    slug: 'bangkok-prep',
    region: 'bangkok',
    name_en: 'Bangkok International Preparatory & Secondary School',
    name_ko: '방콕 프렙 국제학교',
    name_zh: '曼谷 Prep 国际学校',
    abbreviation: 'PREP / Bangkok Prep', founded_year: 2003,
    city_ko: '방콕', city_zh: '曼谷',
    district_ko: 'Sukhumvit 53 · Phrom Phong', district_zh: 'Sukhumvit 53 · Phrom Phong',
    website: 'https://www.bkkprep.ac.th',
    grade_range: 'Year 1–13',
    curriculum: { type: 'British', programs_en: ['IGCSE', 'A-Level'] },
    tuition_range_usd: [15000, 22000],
    highlights_ko: [
      '영국식 정통 (IGCSE · A-Level)',
      'Phrom Phong BTS 도심',
      'Cambridge 시험 센터',
      '한국·일본 가족 비율 높음',
    ],
    highlights_zh: [
      '英式正统 (IGCSE · A-Level)',
      'Phrom Phong BTS 市区',
      'Cambridge 考试中心',
      '韩日家庭比例高',
    ],
    summary_ko: '방콕 도심 영국식 학교. Phrom Phong BTS 도보권. Cambridge IGCSE·A-Level 정통.',
    summary_zh: '曼谷市区英式学校。Phrom Phong BTS 步行可达。Cambridge IGCSE · A-Level 正统。',
  },
  {
    slug: 'dulwich-bangkok',
    region: 'bangkok',
    name_en: 'Dulwich International — Bangkok',
    name_ko: 'Dulwich 인터내셔널 — 방콕',
    name_zh: 'Dulwich 国际 — 曼谷',
    abbreviation: 'Dulwich BKK',
    city_ko: '방콕', city_zh: '曼谷',
    district_ko: 'Bangkok (정확 위치는 입학설명회 확인)', district_zh: '曼谷(具体位置请咨询招生说明会)',
    website: 'https://www.dulwich.org',
    grade_range: 'Year 1–13',
    curriculum: { type: 'British', programs_en: ['IGCSE', 'A-Level'] },
    tuition_range_usd: [18000, 28000],
    highlights_ko: [
      'London Dulwich College 자매학교 그룹',
      '영국 본교 파견 교사 다수',
      'A-Level Cambridge',
      '방콕 신규 캠퍼스 — 정확 정보는 학교 공식 사이트 확인',
    ],
    highlights_zh: [
      '伦敦 Dulwich College 姊妹校集团',
      '英国总校派遣教师多',
      'A-Level Cambridge',
      '曼谷新校区 — 准确信息请查阅学校官网',
    ],
    summary_ko: 'London Dulwich College 자매학교 그룹의 방콕 캠퍼스. 영국 본교 파견 교사 중심. ※ 신규 학교 — 정확 정보는 학교 공식 사이트에서 확인.',
    summary_zh: '伦敦 Dulwich College 姊妹校集团曼谷校区。英国总校派遣教师为主。※ 新校区 — 准确信息请查阅学校官网。',
  },
  {
    slug: 'kis-bangkok',
    region: 'bangkok',
    name_en: 'KIS International School Bangkok',
    name_ko: 'KIS 국제학교 방콕',
    name_zh: 'KIS 国际学校 曼谷',
    abbreviation: 'KIS', founded_year: 1998,
    city_ko: '방콕', city_zh: '曼谷',
    district_ko: 'Huai Khwang · Ratchadaphisek', district_zh: 'Huai Khwang · Ratchadaphisek',
    website: 'https://www.kis.ac.th',
    grade_range: 'PreK–G12',
    curriculum: { type: 'IB', programs_en: ['IB PYP', 'IB MYP', 'IB DP'] },
    tuition_range_usd: [15000, 22000],
    highlights_ko: [
      'IB World School (PYP·MYP·DP 전 단계)',
      'Huai Khwang MRT 도보권',
      '소규모 학급',
      'IB Diploma 평균 점수 우수',
    ],
    highlights_zh: [
      'IB World School (PYP · MYP · DP 全阶段)',
      'Huai Khwang MRT 步行可达',
      '小班授课',
      'IB Diploma 平均分优秀',
    ],
    summary_ko: '방콕 IB 정통 학교. PYP·MYP·DP 전 단계. 소규모·다국적 환경.',
    summary_zh: '曼谷 IB 正统学校。PYP · MYP · DP 全阶段。小班 · 多元国籍。',
  },
  {
    slug: 'd-prep',
    region: 'bangkok',
    name_en: 'Didyasarin International School / D-PREP',
    name_ko: 'D-PREP 국제학교',
    name_zh: 'D-PREP 国际学校',
    abbreviation: 'D-PREP', founded_year: 2018,
    city_ko: '방콕', city_zh: '曼谷',
    district_ko: 'Bang Na-Trad KM8 · 방콕 동부', district_zh: 'Bang Na-Trad KM8 · 曼谷东部',
    website: 'https://www.dprep.ac.th',
    grade_range: 'Year 1–12',
    curriculum: { type: 'Mixed', programs_en: ['American', 'IB', 'STEM-focus'] },
    tuition_range_usd: [13000, 20000],
    highlights_ko: [
      '신축 캠퍼스 (Bang Na 동부)',
      '미국식 + IB 혼합 트랙',
      'STEM·기업가 교육 강조',
      '한국·중국 가족 다수',
    ],
    highlights_zh: [
      '新建校区(Bang Na 东部)',
      '美式 + IB 混合路径',
      'STEM · 创业教育强调',
      '韩中家庭众多',
    ],
    summary_ko: 'Bang Na 동부 신축 캠퍼스. 미국식 + IB. STEM·기업가 교육 특화.',
    summary_zh: 'Bang Na 东部新建校区。美式 + IB。STEM · 创业教育特色。',
  },
  {
    slug: 'anglo-singapore',
    region: 'bangkok',
    name_en: 'Anglo Singapore International School Bangkok',
    name_ko: 'Anglo Singapore 국제학교 방콕',
    name_zh: 'Anglo Singapore 国际学校 曼谷',
    abbreviation: 'ASIS', founded_year: 2003,
    city_ko: '방콕', city_zh: '曼谷',
    district_ko: 'Sukhumvit 31 · 도심', district_zh: 'Sukhumvit 31 · 市区',
    website: 'https://www.anglosingapore.ac.th',
    grade_range: 'PreK–G12',
    curriculum: { type: 'Singaporean', programs_en: ['Singapore Math', 'Cambridge IGCSE'] },
    tuition_range_usd: [8000, 15000],
    highlights_ko: [
      '싱가포르 수학 커리큘럼 (한·중 학부모 선호)',
      'Sukhumvit 도심 캠퍼스',
      '가성비 + 수학 강점',
      '아시아 가족 비율 높음',
    ],
    highlights_zh: [
      '新加坡数学课程(韩中家长偏好)',
      'Sukhumvit 市区校区',
      '性价比 + 数学优势',
      '亚洲家庭比例高',
    ],
    summary_ko: '싱가포르 수학 커리큘럼 기반. 한·중 학부모 수학 강점 선호. Sukhumvit 도심 + 가성비.',
    summary_zh: '新加坡数学课程为基。韩中家长偏好数学优势。Sukhumvit 市区 + 性价比。',
  },

  // ─── 파타야 (Pattaya) ───────────────────────────────────────────
  {
    slug: 'rugby-thailand',
    region: 'pattaya',
    name_en: 'Rugby School Thailand',
    name_ko: 'Rugby 스쿨 타일랜드',
    name_zh: 'Rugby 学校泰国',
    abbreviation: 'Rugby', founded_year: 2017,
    city_ko: '촌부리', city_zh: '春武里',
    district_ko: 'Chonburi · Bang Bong (파타야 인근)', district_zh: 'Chonburi · Bang Bong (芭提雅邻近)',
    website: 'https://www.rugbyschool.ac.th',
    grade_range: 'Year 1–13',
    curriculum: { type: 'British', programs_en: ['EYFS', 'IGCSE', 'A-Level'] },
    tuition_range_usd: [20000, 30000], boarding: true,
    highlights_ko: [
      '영국 Rugby School (1567) 자매학교',
      '보딩 중심 + Day 학생',
      '럭비 발상지 — 스포츠 전통 강함',
      '파타야 북쪽 대규모 캠퍼스',
    ],
    highlights_zh: [
      '英国 Rugby School (1567) 姊妹校',
      '寄宿为主 + 走读',
      '橄榄球发源地 — 体育传统强',
      '芭提雅北部大型校区',
    ],
    summary_ko: '영국 Rugby School 자매학교. 파타야 북쪽 대규모 보딩 캠퍼스. 럭비 발상지 스포츠 전통.',
    summary_zh: '英国 Rugby School 姊妹校。芭提雅北部大型寄宿校区。橄榄球发源地体育传统。',
  },
  {
    slug: 'regents-pattaya',
    region: 'pattaya',
    name_en: 'Regents International School Pattaya',
    name_ko: 'Regents 국제학교 파타야',
    name_zh: 'Regents 国际学校 芭提雅',
    abbreviation: 'RISP', founded_year: 1994,
    city_ko: '파타야', city_zh: '芭提雅',
    district_ko: 'Pong, Pattaya', district_zh: 'Pong, 芭提雅',
    website: 'https://www.regents-pattaya.co.th',
    grade_range: 'Year 1–13',
    curriculum: { type: 'IB', programs_en: ['IGCSE', 'IB Diploma'] },
    tuition_range_usd: [16000, 25000], boarding: true,
    highlights_ko: [
      'Nord Anglia 그룹 회원',
      'IB Diploma + IGCSE',
      '보딩 옵션 (Year 5+)',
      '60+ 국적 학생',
    ],
    highlights_zh: [
      'Nord Anglia 集团成员',
      'IB Diploma + IGCSE',
      '寄宿选项 (Year 5+)',
      '60+ 国籍学生',
    ],
    summary_ko: 'Nord Anglia 그룹 파타야 캠퍼스. IB Diploma 정통. 보딩 옵션. 60+ 국적 다양성.',
    summary_zh: 'Nord Anglia 集团芭提雅校区。IB Diploma 正统。寄宿选项。60+ 国籍多元。',
  },
  {
    slug: 'st-andrews-green-valley',
    region: 'pattaya',
    name_en: 'St. Andrews International School Green Valley',
    name_ko: '세인트앤드류스 국제학교 그린밸리',
    name_zh: '圣安德鲁斯国际学校 Green Valley',
    abbreviation: 'St. Andrews GV', founded_year: 2008,
    city_ko: '라용', city_zh: '罗勇',
    district_ko: 'Green Valley · Rayong (파타야 인근)', district_zh: 'Green Valley · 罗勇 (芭提雅邻近)',
    website: 'https://standrews-schools.com/green-valley',
    grade_range: 'Year 1–13',
    curriculum: { type: 'British', programs_en: ['IGCSE', 'A-Level'] },
    tuition_range_usd: [12000, 18000],
    highlights_ko: [
      'Cognita 그룹 (영국)',
      'Green Valley 골프 리조트 일체 부지',
      '영국식 정통',
      '동부 EEC 산업단지 가족',
    ],
    highlights_zh: [
      'Cognita 集团(英国)',
      'Green Valley 高尔夫度假村一体',
      '英式正统',
      '东部 EEC 工业区家庭',
    ],
    summary_ko: 'Cognita 그룹. Green Valley 리조트 부지. 동부 산업단지(EEC) 가족 1순위.',
    summary_zh: 'Cognita 集团。Green Valley 度假村园区。东部 EEC 工业区家庭首选。',
  },
  {
    slug: 'tara-pattana',
    region: 'pattaya',
    name_en: 'Tara Pattana International School',
    name_ko: '타라 파타나 국제학교',
    name_zh: 'Tara Pattana 国际学校',
    abbreviation: 'TPIS', founded_year: 2018,
    city_ko: '파타야', city_zh: '芭提雅',
    district_ko: 'Pattaya (Sukhumvit Rd)', district_zh: '芭提雅 (Sukhumvit Rd)',
    website: 'https://tarapattanaschool.com',
    grade_range: 'PreK–Year 13',
    curriculum: { type: 'British', programs_en: ['EYFS', 'IGCSE'] },
    tuition_range_usd: [9000, 15000],
    highlights_ko: [
      'Cambridge 영국식 가성비',
      '파타야 도심 캠퍼스',
      '아시아·러시아 가족 다수',
    ],
    highlights_zh: [
      'Cambridge 英式性价比',
      '芭提雅市区校区',
      '亚洲 · 俄罗斯家庭众多',
    ],
    summary_ko: '파타야 도심 영국식 가성비 학교. Cambridge IGCSE.',
    summary_zh: '芭提雅市区英式性价比学校。Cambridge IGCSE。',
  },

  // ─── 푸켓 (Phuket) ──────────────────────────────────────────────
  {
    slug: 'bcis-phuket',
    region: 'phuket',
    name_en: 'Berda Claude International School (BCIS Phuket)',
    name_ko: 'BCIS 푸켓 국제학교',
    name_zh: 'BCIS 普吉国际学校',
    abbreviation: 'BCIS', founded_year: 1995,
    city_ko: '푸켓', city_zh: '普吉',
    district_ko: 'Phuket Town', district_zh: '普吉镇',
    website: 'https://www.bcisphuket.com',
    grade_range: 'PreK–Year 13',
    curriculum: { type: 'French', programs_en: ['French', 'IB Diploma', 'Cambridge'] },
    tuition_range_usd: [10000, 18000],
    highlights_ko: [
      '프랑스·국제 이중 커리큘럼',
      'IB Diploma',
      '푸켓 타운 도심',
      '프랑스·유럽 가족 클러스터',
    ],
    highlights_zh: [
      '法语 · 国际双轨课程',
      'IB Diploma',
      '普吉镇市区',
      '法国 · 欧洲家庭聚集',
    ],
    summary_ko: '프랑스·국제 이중 커리큘럼. IB Diploma. 푸켓 프랑스·유럽 가족 1순위.',
    summary_zh: '法语 · 国际双轨课程。IB Diploma。普吉法国 · 欧洲家庭首选。',
  },

  // ─── 치앙마이 (Chiang Mai) ───────────────────────────────────────
  {
    slug: 'apis-chiang-mai',
    region: 'chiang-mai',
    name_en: 'American Pacific International School',
    name_ko: 'APIS 치앙마이 국제학교',
    name_zh: 'APIS 清迈国际学校',
    abbreviation: 'APIS', founded_year: 2002,
    city_ko: '치앙마이', city_zh: '清迈',
    district_ko: 'Mae Rim (치앙마이 북부)', district_zh: 'Mae Rim (清迈北部)',
    website: 'https://www.apis.ac.th',
    grade_range: 'PreK–G12',
    curriculum: { type: 'American', programs_en: ['American', 'AP', 'WASC'] },
    tuition_range_usd: [10000, 16000], boarding: true,
    highlights_ko: [
      'WASC 인증 미국식 K-12',
      '보딩 옵션 (Grade 6+)',
      '치앙마이 산악 캠퍼스',
      '한국·중국·일본 가족',
    ],
    highlights_zh: [
      'WASC 认证美式 K-12',
      '寄宿选项 (Grade 6+)',
      '清迈山地校区',
      '韩中日家庭',
    ],
    summary_ko: 'WASC 인증 미국식. 치앙마이 산악 보딩 캠퍼스. 한국·중국 가족 다수.',
    summary_zh: 'WASC 认证美式。清迈山地寄宿校区。韩中家庭众多。',
  },
];

export function getThailandSchool(slug: string): ThailandSchool | undefined {
  return THAILAND_SCHOOLS.find((s) => s.slug === slug);
}

export function thaiSchoolName(s: ThailandSchool, locale: Locale): string {
  return locale === 'ko' ? s.name_ko : s.name_zh;
}

export function thaiSchoolsByRegion(region: ThaiRegion): ThailandSchool[] {
  return THAILAND_SCHOOLS.filter((s) => s.region === region);
}
