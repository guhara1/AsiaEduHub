/**
 * 국내(한국) 국제학교 정보 데이터.
 *
 * 사양 준수 원칙:
 *  - 공개·검증 가능한 객관 사실(법적 자격, 학교 이름·도시 등)만 포함
 *  - 학비 범위는 일반 추정 범위 + 디스클레이머 ("학교별·연도별 다름")
 *  - 장점·단점·운영자 추천은 별도 (가이드 글로 누적)
 *  - 운영자 작성 자리는 명시 표시
 *
 * 모든 학비 추정은 2025-2026 학년도 일반 시장 범위. 정확한 금액은 학교 공식 발표.
 */
import type { Locale } from './i18n';

export interface SchoolListItem {
  name_en: string;
  name_ko: string;
  city: string;
  website?: string;
}

export interface DomesticFaq {
  q_ko: string;
  a_ko: string;
  q_zh: string;
  a_zh: string;
}

/* ─────────────────────────────────────────────────────────────
   외국인학교 (Foreign Schools) — 외국인학교법 기준
   ───────────────────────────────────────────────────────────── */
export const FOREIGN_SCHOOLS_INFO = {
  ko: {
    legal_basis: '외국인학교법(2009 제정)',
    eligibility: [
      '부모 중 한 명 이상이 외국 국적자',
      '학생이 외국에서 3년 이상 거주한 재외국민 (귀국 후 3년 이내)',
      '외국 국적 학생',
    ],
    notes: [
      '한국 정규 교육과정이 아니며, 한국 학력 인정은 별도 검토',
      '대학 입학 시 재외국민 특별전형 활용 가능 (자격 충족 시)',
      '내국인은 입학 자격이 매우 제한적',
    ],
    tuition_range_label: '연 $25,000 – $40,000 (학교·학년별 상이)',
  },
  zh: {
    legal_basis: '《外国人学校法》(2009 制定)',
    eligibility: [
      '父母至少一方为外籍',
      '在国外居住 3 年以上的归侨学生(回国 3 年内)',
      '外籍学生',
    ],
    notes: [
      '非韩国正规课程,韩国学历认定需单独审核',
      '大学申请时可使用海外侨胞特殊招生(满足资格)',
      '本国学生入学资格非常受限',
    ],
    tuition_range_label: '年 $25,000 – $40,000(因校与年级而异)',
  },
} as const;

export const FOREIGN_SCHOOLS: SchoolListItem[] = [
  { name_en: 'Seoul Foreign School (SFS)', name_ko: '서울외국인학교', city: 'seoul', website: 'https://www.seoulforeign.org' },
  { name_en: 'Yongsan International School Seoul (YISS)', name_ko: '용산국제학교', city: 'seoul', website: 'https://www.yisseoul.org' },
  { name_en: 'Korea International School Seoul (KIS Seoul)', name_ko: 'KIS 서울', city: 'seoul', website: 'https://www.kis.ac' },
  { name_en: 'Dwight School Seoul', name_ko: '드와이트 스쿨 서울', city: 'seoul', website: 'https://www.dwight.or.kr' },
  { name_en: 'Chadwick International (Songdo)', name_ko: '채드윅 송도', city: 'gyeonggi-incheon', website: 'https://www.chadwickschool.org/songdo' },
  { name_en: 'International School of Busan (ISB)', name_ko: '부산국제외국인학교', city: 'regional', website: 'https://www.isbusan.org' },
  { name_en: 'Daegu International School (DIS)', name_ko: '대구국제학교', city: 'regional', website: 'https://www.dis.sc.kr' },
];

/* ─────────────────────────────────────────────────────────────
   국제학교 — 제주영어교육도시 · 송도글로벌캠퍼스 (내국인 입학 가능)
   ───────────────────────────────────────────────────────────── */
export const INTERNATIONAL_SCHOOLS_INFO = {
  ko: {
    legal_basis: '제주특별자치도 설치 및 국제자유도시 조성 특별법 · 인천경제자유구역 관련 법',
    eligibility: [
      '내국인 단독 입학 가능 (외국 거주 요건 없음)',
      '외국 국적 학생도 가능',
    ],
    notes: [
      '한국 학력 인정 (제주·송도 모두 학력 인정 학교)',
      '내국인이 국내에서 합법적으로 다닐 수 있는 국제학교의 핵심 옵션',
      '제주는 영어교육도시 내 4개교 / 송도는 채드윅 1개교 (2026 기준)',
    ],
    tuition_range_label: '연 $30,000 – $45,000 (학교·학년별 상이)',
  },
  zh: {
    legal_basis: '《济州特别自治道及国际自由城市建设特别法》· 仁川经济自由区相关法',
    eligibility: [
      '本国学生可独立入学(无海外居住要求)',
      '外籍学生亦可',
    ],
    notes: [
      '获韩国学历认定(济州·松岛均为学历认证学校)',
      '是本国学生在韩国境内合法就读国际学校的核心选项',
      '济州教育城内有 4 所 / 松岛有 Chadwick 1 所(2026 年)',
    ],
    tuition_range_label: '年 $30,000 – $45,000(因校与年级而异)',
  },
} as const;

export const INTERNATIONAL_SCHOOLS: SchoolListItem[] = [
  { name_en: 'NLCS Jeju (North London Collegiate School Jeju)', name_ko: 'NLCS 제주', city: 'jeju', website: 'https://www.nlcsjeju.kr' },
  { name_en: 'Korea International School Jeju (KIS Jeju)', name_ko: 'KIS 제주', city: 'jeju', website: 'https://www.kis.ac' },
  { name_en: 'Branksome Hall Asia (BHA)', name_ko: '브랭섬홀 아시아', city: 'jeju', website: 'https://www.branksome.asia' },
  { name_en: "St. Johnsbury Academy Jeju (SJA)", name_ko: 'SJA 제주', city: 'jeju', website: 'https://www.sjajeju.kr' },
  { name_en: 'Chadwick International (Songdo)', name_ko: '채드윅 송도', city: 'songdo', website: 'https://www.chadwickschool.org/songdo' },
];

/* ─────────────────────────────────────────────────────────────
   영어유치원 / 국제유치원
   ───────────────────────────────────────────────────────────── */
export const KINDERGARTEN_INFO = {
  ko: {
    legal_basis: '학원의 설립·운영 및 과외교습에 관한 법률',
    eligibility: ['연령 제한 외 자격 요건 없음 (보통 만 3–6세)'],
    notes: [
      '한국 법적으로 "학원" 분류 — 정규 유치원이 아님',
      '교육부 학력 인정 안 됨',
      '국공립 유치원·어린이집과 달리 정부 지원금 적용 안 됨',
    ],
    tuition_range_label: '월 100만 – 250만원 (교재·간식·차량 별도)',
  },
  zh: {
    legal_basis: '《学院设立·运营及课外教学相关法律》',
    eligibility: ['除年龄外无资格要求(通常 3–6 岁)'],
    notes: [
      '韩国法律上归类为"学院"——非正规幼儿园',
      '不获教育部学历认定',
      '不享有国公立幼儿园·托儿所的政府补贴',
    ],
    tuition_range_label: '月 100 万 – 250 万韩元(教材·餐点·校车另计)',
  },
} as const;

/* ─────────────────────────────────────────────────────────────
   입학 자격·서류 가이드 (공통)
   ───────────────────────────────────────────────────────────── */
export const ADMISSION_GUIDE_INFO = {
  ko: {
    required_documents: [
      '여권 사본 (학생·부모)',
      '외국인등록증 또는 거주증 (해당 시)',
      '출생증명서',
      '최근 2–3년 성적증명서',
      '학교 추천서 1–2부',
      '영어 능력 시험 결과 (WIDA · MAP · CAT4 등, 학교별 상이)',
      '자기소개서·에세이 (중·고등 지원 시)',
    ],
    timeline: [
      '11–12월: 지원서 접수 시작 (다음 학년도)',
      '1–3월: 입학시험 · 인터뷰',
      '3월: 합격 발표 · 등록비 납부',
      '8월 또는 3월: 입학 (가을 또는 봄 학기)',
    ],
    checklist: [
      '학교별 입학 자격 사전 확인 (외국인학교는 자격 엄격)',
      '영어 능력 시험은 학교 지정 종류로 응시',
      '전 학기 성적 + 출결 기록 정리',
      '인터뷰 준비 (학생·학부모 동반 가능성 있음)',
    ],
  },
  zh: {
    required_documents: [
      '护照复印件(学生·父母)',
      '外国人登记证或居住证(如适用)',
      '出生证明',
      '最近 2–3 年成绩单',
      '学校推荐信 1–2 份',
      '英语能力测试成绩(WIDA · MAP · CAT4 等,各校不同)',
      '自我介绍·文书(中学·高中申请时)',
    ],
    timeline: [
      '11–12 月:开始接受申请(下一学年)',
      '1–3 月:入学考试·面试',
      '3 月:录取通知·缴注册费',
      '8 月或 3 月:入学(秋季或春季学期)',
    ],
    checklist: [
      '提前确认各校入学资格(外国人学校资格严格)',
      '按学校指定的英语测试种类应试',
      '整理学期成绩 + 出勤记录',
      '准备面试(学生·家长可能同行)',
    ],
  },
} as const;

/* ─────────────────────────────────────────────────────────────
   FAQ (객관 사실 위주)
   ───────────────────────────────────────────────────────────── */
export const DOMESTIC_FAQS: DomesticFaq[] = [
  {
    q_ko: '외국인학교와 제주·송도 국제학교의 가장 큰 차이는?',
    a_ko: '두 가지가 다릅니다. 첫째, 입학 자격: 외국인학교는 외국 국적·재외국민 자격이 필수이지만, 제주·송도 국제학교는 내국인이 자격 요건 없이 입학 가능합니다. 둘째, 한국 학력 인정: 제주·송도 국제학교는 한국 학력으로 인정되지만, 외국인학교는 별도 검토가 필요합니다.',
    q_zh: '外国人学校与济州·松岛国际学校最大区别?',
    a_zh: '两点不同。第一,入学资格:外国人学校要求外籍或归侨身份,济州·松岛国际学校允许本国学生无条件入学。第二,韩国学历认定:济州·松岛国际学校获韩国学历认证,外国人学校则需单独审核。',
  },
  {
    q_ko: '내국인 자녀가 외국인학교에 입학할 수 있나요?',
    a_ko: '원칙적으로는 어렵습니다. 부모 중 한 명이 외국 국적이거나 학생이 외국에서 3년 이상 거주한 재외국민이어야 합니다. 단순 영어 환경 목적이면 제주·송도 국제학교가 자격 요건 없이 입학 가능합니다.',
    q_zh: '本国学生能否就读外国人学校?',
    a_zh: '原则上很难。需父母至少一方为外籍,或学生在国外居住 3 年以上(归侨)。若仅为英语环境,济州·松岛国际学校无资格限制。',
  },
  {
    q_ko: '영어유치원은 정규 학력 인정되나요?',
    a_ko: '아닙니다. 한국 법적으로 영어유치원은 "학원" 분류로, 정규 유치원이 아닙니다. 학력 인정·정부 지원금이 없으며 비용은 월 100~250만원 수준입니다.',
    q_zh: '英语幼儿园获正规学历认定吗?',
    a_zh: '不获。在韩国法律上"英语幼儿园"归类为"学院",非正规幼儿园,不享学历认定与政府补贴。费用月 100~250 万韩元。',
  },
  {
    q_ko: '학비 외에 어떤 추가 비용이 드나요?',
    a_ko: '학교마다 다르지만 일반적으로 다음이 있습니다 — 입학금(연 학비의 10~30%), 시설 분담금, 교복·교재, 스쿨버스(월 30~80만원), 식비(월 30~60만원), 방과후 활동, 시험 응시료(IB/AP/SAT). 연간 학비의 15~25% 추가로 보는 것이 안전합니다.',
    q_zh: '除学费外还有哪些费用?',
    a_zh: '因校而异。一般包括:注册费(年学费的 10~30%)、设施分摊费、校服·教材、校车(月 30~80 万韩元)、餐费(月 30~60 万韩元)、课外活动费、考试报名费(IB/AP/SAT)。建议在学费基础上预留 15~25% 作为额外开支。',
  },
  {
    q_ko: '한국인 학생 비율은 어느 정도인가요?',
    a_ko: '학교마다 매우 다릅니다. 외국인학교 중 SFS·YISS는 다국적 비율이 균형 잡혀 있고, 제주 국제학교 4개교는 한국인 학생 비율이 비교적 높은 편입니다. 정확한 % 는 각 학교 페이지의 운영자 검증 데이터를 참고하세요.',
    q_zh: '韩国学生比例如何?',
    a_zh: '因校差异很大。外国人学校中 SFS·YISS 国籍较为均衡,济州 4 所国际学校的韩国学生比例较高。准确百分比请参考各学校页面的站长核实数据。',
  },
];
