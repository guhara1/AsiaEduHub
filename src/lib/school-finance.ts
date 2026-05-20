/**
 * 학교 학비·재무 상세 추정 헬퍼.
 *
 * 정확한 금액은 각 학교 공식 등록비 안내(2025-2026)를 참조해야 하지만,
 * 학부모가 의사결정에 사용할 수 있는 "현실적인 추정 범위"를 제공한다.
 *
 * 추정 근거:
 *  - 학년별 학비: 일반적인 국제학교는 학년이 올라갈수록 학비 상승 (유치원 ≈ 70~80% / 고등 ≈ 100~110%).
 *  - 학기 수: 영국식·IB·호주식 보통 3학기 / 미국식 2학기.
 *  - 등록비(Registration): 통상 연 학비의 10~20% (일회성 또는 매년).
 *  - 환불 가능 보증금(Refundable Deposit): 통상 1~2개월치 학비 (졸업·전학 시 환불).
 *  - 지원료(Application): 학교 등급에 따라 USD 200~500.
 *
 * 원어민 비율·CCA 는 학교별 직접 입력 (override) 우선, 없으면 학비 등급 기반 휴리스틱.
 *
 * 모든 추정값은 UI 에서 "추정 · 학교 공식 확인 필요" 라벨과 함께 표시한다.
 */

export type SchoolBase = {
  tuition_range_usd: [number, number];
  curriculum: { type: string };
};

export interface FinanceOverride {
  /** 학년별 연 학비 (USD) — 직접 입력값. 없으면 휴리스틱. */
  tuition_kindergarten_usd?: [number, number];
  tuition_primary_usd?: [number, number];
  tuition_secondary_usd?: [number, number];
  tuition_high_school_usd?: [number, number];
  /** 학기 수 (기본: British/IB 3학기, American 2학기) */
  terms_per_year?: number;
  /** 일회성 지원료 (환불 불가) */
  application_fee_usd?: number;
  /** 등록금 (일회성 또는 매년) */
  registration_fee_usd?: [number, number];
  /** 환불 가능 보증금 */
  refundable_deposit_usd?: [number, number];
  /** 시설 분담금 (Facility Fee) */
  facility_fee_usd?: number;
  /** 원어민 교사 비율 (0~100) — 영국·미국·호주·캐나다·뉴질랜드·아일랜드 국적 */
  native_teacher_ratio?: number;
  /** 기본 CCA (학교 내 교사 운영 — 스포츠·미술·합창 등) 학비 포함 여부 */
  cca_basic_included?: boolean;
  /** 외부 강사 유료 CCA (피아노·테니스 코치·로봇·승마 등) 운영 여부 */
  cca_paid_external?: boolean;
  /** 외부 강사 CCA 월 평균 비용 (USD, 1과목 기준) */
  cca_external_fee_usd?: [number, number];
  /** CCA 추가 메모 (예: "주 2회 무료 + 1과목 외부 강사 신청 가능") */
  cca_note_ko?: string;
  cca_note_zh?: string;
  /** 데이터 검증 상태 */
  data_verified?: boolean; // 운영자 직접 학교 공식 등록비 안내 확인 완료
}

export interface FinancialDetails {
  tuition_kindergarten: [number, number];
  tuition_primary: [number, number];
  tuition_secondary: [number, number];
  tuition_high_school: [number, number];
  per_term: [number, number];
  terms_per_year: number;
  application_fee: number;
  registration_fee: [number, number];
  refundable_deposit: [number, number];
  facility_fee?: number;
  native_teacher_ratio: number;
  cca_basic_included: boolean;
  cca_paid_external: boolean;
  cca_external_fee?: [number, number];
  cca_note_ko?: string;
  cca_note_zh?: string;
  verified: boolean;
}

/** 한 자릿수 반올림 (예: $12,345 → $12,300) */
function roundFee(n: number, step = 100): number {
  return Math.round(n / step) * step;
}

export function deriveFinance(school: SchoolBase & FinanceOverride): FinancialDetails {
  const [low, high] = school.tuition_range_usd;
  const mid = (low + high) / 2;
  const isAmerican = school.curriculum.type === 'American';

  // 학년별 학비 휴리스틱 (낮은 학년 = 낮은 학비)
  const tuition_kindergarten: [number, number] = school.tuition_kindergarten_usd ?? [
    roundFee(low * 0.65), roundFee(low * 0.85),
  ];
  const tuition_primary: [number, number] = school.tuition_primary_usd ?? [
    roundFee(low * 0.80), roundFee((low + mid) / 2),
  ];
  const tuition_secondary: [number, number] = school.tuition_secondary_usd ?? [
    roundFee((mid + low) / 2), roundFee((mid + high) / 2),
  ];
  const tuition_high_school: [number, number] = school.tuition_high_school_usd ?? [
    roundFee(high * 0.90), roundFee(high * 1.05),
  ];

  const terms_per_year = school.terms_per_year ?? (isAmerican ? 2 : 3);
  const per_term: [number, number] = [
    roundFee(low / terms_per_year), roundFee(high / terms_per_year),
  ];

  // 등록비·보증금
  const application_fee = school.application_fee_usd ?? (high > 30000 ? 500 : 300);
  const registration_fee: [number, number] = school.registration_fee_usd ?? [
    roundFee(mid * 0.10), roundFee(mid * 0.20),
  ];
  const refundable_deposit: [number, number] = school.refundable_deposit_usd ?? [
    roundFee(mid * 0.08), roundFee(mid * 0.17),
  ];

  // 원어민 교사 비율 — 학비 등급 휴리스틱
  let nativeRatio = school.native_teacher_ratio ?? 0;
  if (school.native_teacher_ratio === undefined) {
    if (high >= 30000) nativeRatio = 75;
    else if (high >= 22000) nativeRatio = 65;
    else if (high >= 15000) nativeRatio = 55;
    else nativeRatio = 45;
  }

  // CCA 휴리스틱:
  //  - 기본 CCA (학교 교사 운영): 거의 모든 국제학교가 학비에 기본 포함
  //  - 외부 강사 유료 CCA (피아노·테니스 코치 등): 대부분 학교가 운영 (선택 신청)
  //  - 외부 강사 1과목 월 비용: $50~$300 (학교 등급별 차이)
  const cca_basic_included = school.cca_basic_included ?? true;
  const cca_paid_external = school.cca_paid_external ?? true;
  const cca_external_fee: [number, number] = school.cca_external_fee_usd ?? (
    high >= 30000 ? [120, 350] :
    high >= 20000 ? [80, 250] :
    [50, 180]
  );

  return {
    tuition_kindergarten,
    tuition_primary,
    tuition_secondary,
    tuition_high_school,
    per_term,
    terms_per_year,
    application_fee,
    registration_fee,
    refundable_deposit,
    facility_fee: school.facility_fee_usd,
    native_teacher_ratio: nativeRatio,
    cca_basic_included,
    cca_paid_external,
    cca_external_fee: cca_paid_external ? cca_external_fee : undefined,
    cca_note_ko: school.cca_note_ko,
    cca_note_zh: school.cca_note_zh,
    verified: school.data_verified ?? false,
  };
}

export function formatUSDRange(range: [number, number]): string {
  if (range[0] === range[1]) return `$${range[0].toLocaleString()}`;
  return `$${range[0].toLocaleString()}~$${range[1].toLocaleString()}`;
}
