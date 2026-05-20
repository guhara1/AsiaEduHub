/**
 * 학교 주변 한국·중국 학부모 선호 콘도 정보.
 *
 * 데이터 출처:
 *  - 운영자(데이비드) 쿠알라룸푸르 거주 + 학부모 커뮤니티(카카오톡·WeChat) 시세 청취
 *  - 말레이시아: iProperty · PropertyGuru · 학교 공식 셔틀 노선 교차 검증
 *  - 한국: Zigbang · 호갱노노 · 카페 학부모 후기 교차 검증
 *
 * 가격은 2025-2026 시점 시장 시세 추정 (USD/월).
 *  - 환율: USD 1 = MYR 4.50, KRW 1,350 (2026-05 기준)
 *  - 가구·전기·관리비 별도가 일반적 (Furnished 명시 시 포함).
 *
 * 한국 학부모 비율·중국 학부모 비율은 학부모 커뮤니티 청취 기반 정성 평가
 * ("높음/적당/낮음" 추정 — 정량 통계 미존재).
 */

export type CondoTier = 'budget' | 'mid' | 'premium' | 'luxury';
export type CrowdLevel = 'high' | 'mid' | 'low';

export interface NearbyCondo {
  name: string; // 콘도 영문명 (검색용)
  distance_minutes: number; // 학교까지 차량 이동 시간 (분)
  tier: CondoTier;
  rent_2br_usd: [number, number]; // 월 임대료 USD (2BR · unfurnished 기준)
  rent_3br_usd: [number, number]; // 월 임대료 USD (3BR · unfurnished 기준)
  korean_parents: CrowdLevel; // 한국 학부모 거주 정도
  chinese_parents: CrowdLevel; // 중국·화교 학부모 거주 정도
  note_ko?: string; // 운영자/학부모 코멘트 (KR)
  note_zh?: string; // 운영자/학부모 코멘트 (ZH)
  /** 학교 직접 셔틀 운행 여부 (확인된 경우) */
  school_bus?: boolean;
}

export interface SchoolNeighborhood {
  /** 거주 지역 라벨 */
  area_ko: string;
  area_zh: string;
  /** 지역 개요 (학부모 관점) */
  overview_ko?: string;
  overview_zh?: string;
  /** 주변 추천 콘도 */
  condos: NearbyCondo[];
}

/** Crowd level 표시 라벨 */
export const CROWD_LABEL_KO: Record<CrowdLevel, string> = {
  high: '많음', mid: '적정', low: '적음',
};
export const CROWD_LABEL_ZH: Record<CrowdLevel, string> = {
  high: '多', mid: '中等', low: '少',
};
export const TIER_LABEL_KO: Record<CondoTier, string> = {
  budget: '가성비', mid: '중급', premium: '프리미엄', luxury: '럭셔리',
};
export const TIER_LABEL_ZH: Record<CondoTier, string> = {
  budget: '经济型', mid: '中端', premium: '高端', luxury: '豪华',
};

// ─────────────────────────────────────────────────────────────
// 공유 가능 KL 지역 콘도 풀 (여러 학교가 같은 지역 셰어)
// ─────────────────────────────────────────────────────────────

/** Mont'Kiara — KL 국제학교 학부모 1순위 거주지. MKIS·GIS·Mont'Kiara 도보권. */
export const MONT_KIARA_CONDOS: NearbyCondo[] = [
  {
    name: 'Solaris Mont Kiara',
    distance_minutes: 5,
    tier: 'mid',
    rent_2br_usd: [1100, 1500],
    rent_3br_usd: [1600, 2200],
    korean_parents: 'high',
    chinese_parents: 'high',
    note_ko: '몽키아라 중심·상가 일체형. 한·중 학부모 다수. MKIS 도보 7분.',
    note_zh: '蒙吉拉中心 · 商场一体。韩中家长众多。MKIS 步行 7 分钟。',
  },
  {
    name: 'Verve Suites Mont Kiara',
    distance_minutes: 6,
    tier: 'mid',
    rent_2br_usd: [950, 1300],
    rent_3br_usd: [1400, 1900],
    korean_parents: 'high',
    chinese_parents: 'mid',
    note_ko: '풀퍼니시 옵션·서비스 아파트형. 단기 임대 가능. 신규 이주자에 인기.',
    note_zh: '全装修选项 · 服务式公寓。短租可行。新搬迁家长喜爱。',
  },
  {
    name: '28 Mont Kiara',
    distance_minutes: 5,
    tier: 'premium',
    rent_2br_usd: [1500, 2100],
    rent_3br_usd: [2200, 3000],
    korean_parents: 'high',
    chinese_parents: 'high',
    note_ko: '몽키아라 프리미엄. 한국·일본·중국 가족 다수. GIS 도보 10분.',
    note_zh: '蒙吉拉高端。韩日中家庭众多。GIS 步行 10 分钟。',
  },
  {
    name: 'Arcoris Mont Kiara',
    distance_minutes: 7,
    tier: 'premium',
    rent_2br_usd: [1300, 1800],
    rent_3br_usd: [1900, 2600],
    korean_parents: 'mid',
    chinese_parents: 'high',
    note_ko: '최신 콘도. 풀·헬스장 등 시설 우수. MKIS·GIS 모두 차량 5~7분.',
    note_zh: '新建公寓。泳池 · 健身房等设施优秀。MKIS · GIS 车程 5-7 分钟。',
  },
  {
    name: 'Kiara Designer Suites',
    distance_minutes: 5,
    tier: 'budget',
    rent_2br_usd: [700, 1000],
    rent_3br_usd: [1100, 1500],
    korean_parents: 'mid',
    chinese_parents: 'mid',
    note_ko: '몽키아라 가성비 선택지. 노후 있으나 위치 최상.',
    note_zh: '蒙吉拉性价比之选。略旧但位置极佳。',
  },
];

/** Sri Hartamas — Mont'Kiara 인접. GIS·Sayfol·MKIS 접근. 한국 슈퍼·식당 밀집. */
export const SRI_HARTAMAS_CONDOS: NearbyCondo[] = [
  {
    name: 'Hartamas Regency',
    distance_minutes: 8,
    tier: 'mid',
    rent_2br_usd: [800, 1100],
    rent_3br_usd: [1200, 1700],
    korean_parents: 'high',
    chinese_parents: 'mid',
    note_ko: '한국 거리 도보권. Korean Town 5분. 한국 슈퍼·식당·미용실 밀집.',
    note_zh: '韩国街步行可达。Korean Town 5 分钟。韩国超市 · 餐厅密集。',
  },
  {
    name: 'Sri Penaga',
    distance_minutes: 10,
    tier: 'premium',
    rent_2br_usd: [1100, 1500],
    rent_3br_usd: [1700, 2400],
    korean_parents: 'high',
    chinese_parents: 'low',
    note_ko: '한국 가족 다수 거주. 캠퍼스 다수 차량 10분 이내.',
    note_zh: '韩国家庭众多。多所学校车程 10 分钟以内。',
  },
];

/** Damansara Heights / Bangsar — Alice Smith·BSKL·HELP 접근. 영국·호주 외교관 가족 다수. */
export const BANGSAR_CONDOS: NearbyCondo[] = [
  {
    name: 'Vista Kiara Bangsar',
    distance_minutes: 8,
    tier: 'mid',
    rent_2br_usd: [900, 1200],
    rent_3br_usd: [1300, 1800],
    korean_parents: 'mid',
    chinese_parents: 'mid',
    note_ko: 'Bangsar·KLCC·Alice Smith 모두 차량 10분. 한국 학부모 일부 거주.',
    note_zh: 'Bangsar · KLCC · Alice Smith 车程均 10 分钟。韩国家长部分居住。',
  },
  {
    name: 'BSC Bangsar Shopping Centre Residences',
    distance_minutes: 6,
    tier: 'premium',
    rent_2br_usd: [1300, 1800],
    rent_3br_usd: [1900, 2700],
    korean_parents: 'mid',
    chinese_parents: 'mid',
    note_ko: 'Bangsar 럭셔리 상가 일체형. 영어권 외교관 가족 다수.',
    note_zh: 'Bangsar 高端商场一体。英语圈外交家庭众多。',
  },
];

/** Ampang — ISKL·MKIS 셔틀권. 일본·한국·외교관 클러스터. */
export const AMPANG_CONDOS: NearbyCondo[] = [
  {
    name: 'M City Ampang',
    distance_minutes: 12,
    tier: 'mid',
    rent_2br_usd: [900, 1300],
    rent_3br_usd: [1400, 2000],
    korean_parents: 'mid',
    chinese_parents: 'mid',
    note_ko: 'KLCC 도보권. ISKL 셔틀 운행. 신축 최신 시설.',
    note_zh: 'KLCC 步行可达。ISKL 校车运行。新建设施。',
  },
  {
    name: 'Quartza Residence',
    distance_minutes: 10,
    tier: 'mid',
    rent_2br_usd: [800, 1100],
    rent_3br_usd: [1200, 1600],
    korean_parents: 'mid',
    chinese_parents: 'mid',
    note_ko: 'Ampang 한인타운 인접. 한국 슈퍼·식당 다수. ISKL 차량 10~15분.',
    note_zh: 'Ampang 韩国城邻近。韩国超市 · 餐厅众多。ISKL 车程 10-15 分钟。',
  },
];

/** Cyberjaya / Putrajaya — Epsom·Nexus·ELC·BSKL Putrajaya 접근. 신도시·외국인 비율 높음. */
export const CYBERJAYA_CONDOS: NearbyCondo[] = [
  {
    name: 'Symphony Heights',
    distance_minutes: 8,
    tier: 'mid',
    rent_2br_usd: [550, 800],
    rent_3br_usd: [800, 1200],
    korean_parents: 'mid',
    chinese_parents: 'high',
    note_ko: '한국·중국 가족 신도시 신규 이주 1순위. 학교까지 차량 8~10분.',
    note_zh: '韩中家庭新城迁入首选。学校车程 8-10 分钟。',
  },
  {
    name: 'Cybersouth Residence',
    distance_minutes: 12,
    tier: 'budget',
    rent_2br_usd: [400, 600],
    rent_3br_usd: [600, 900],
    korean_parents: 'low',
    chinese_parents: 'high',
    note_ko: '저예산 가족. 중국 학부모 비율 상대적으로 높음.',
    note_zh: '低预算家庭。中国家长比例相对较高。',
  },
];

/** Desa ParkCity — ISP(International School @ ParkCity) 도보·차량 5분. 영국·호주·한국 외국인 다수. */
export const DESA_PARKCITY_CONDOS: NearbyCondo[] = [
  {
    name: 'The Westside Two · Three',
    distance_minutes: 3,
    tier: 'premium',
    rent_2br_usd: [1100, 1500],
    rent_3br_usd: [1700, 2400],
    korean_parents: 'high',
    chinese_parents: 'mid',
    note_ko: 'ISP 도보권. Desa ParkCity 중심. 외국인 학부모 1순위 거주.',
    note_zh: 'ISP 步行可达。Desa ParkCity 中心。外国家长居住首选。',
  },
  {
    name: 'The Mansion at Desa ParkCity',
    distance_minutes: 5,
    tier: 'luxury',
    rent_2br_usd: [1500, 2000],
    rent_3br_usd: [2300, 3200],
    korean_parents: 'mid',
    chinese_parents: 'mid',
    note_ko: 'Desa ParkCity 럭셔리 타워. 영국·호주 외교관 가족 거주.',
    note_zh: 'Desa ParkCity 豪华塔楼。英澳外交家庭居住。',
  },
  {
    name: 'Casa Tropicana (Tropicana 인접)',
    distance_minutes: 10,
    tier: 'mid',
    rent_2br_usd: [800, 1100],
    rent_3br_usd: [1200, 1700],
    korean_parents: 'mid',
    chinese_parents: 'mid',
    note_ko: 'Desa ParkCity 인접 가성비 옵션. 호수공원 인근.',
    note_zh: 'Desa ParkCity 邻近性价比之选。湖边公园附近。',
  },
];

/** Bandar Enstek · KLIA 인근 — Epsom College in Malaysia (네그리 셈빌란) 학부모 거주. */
export const BANDAR_ENSTEK_CONDOS: NearbyCondo[] = [
  {
    name: 'Bandar Enstek 단독·테라스',
    distance_minutes: 5,
    tier: 'mid',
    rent_2br_usd: [400, 600],
    rent_3br_usd: [600, 900],
    korean_parents: 'low',
    chinese_parents: 'mid',
    note_ko: 'Epsom 학부모 다수. KLIA 공항 인근 신도시. Day 학생 가족 우선 거주.',
    note_zh: 'Epsom 家长众多。KLIA 机场附近新城。走读学生家庭优先居住。',
  },
  {
    name: 'Putrajaya Pangsapuri (Epsom 통근권)',
    distance_minutes: 25,
    tier: 'mid',
    rent_2br_usd: [500, 700],
    rent_3br_usd: [750, 1100],
    korean_parents: 'low',
    chinese_parents: 'mid',
    note_ko: 'Epsom 보딩 미선택 가족 — Putrajaya 도심 + 셔틀. 차량 25분.',
    note_zh: 'Epsom 未选寄宿家庭 — Putrajaya 市区 + 校车。车程 25 分钟。',
  },
];

/** Kajang (KL 남쪽) — Oasis International School Kajang 인근. 말레이·중국 가족 다수. */
export const KAJANG_CONDOS: NearbyCondo[] = [
  {
    name: 'Country Heights Kajang',
    distance_minutes: 8,
    tier: 'mid',
    rent_2br_usd: [500, 750],
    rent_3br_usd: [800, 1200],
    korean_parents: 'low',
    chinese_parents: 'mid',
    note_ko: 'Oasis International 학부모 다수. 단독·테라스 옵션. 게이트 커뮤니티.',
    note_zh: 'Oasis International 家长众多。独栋·联排选项。封闭社区。',
  },
  {
    name: 'Kajang 2 Pangsapuri',
    distance_minutes: 10,
    tier: 'budget',
    rent_2br_usd: [350, 500],
    rent_3br_usd: [500, 750],
    korean_parents: 'low',
    chinese_parents: 'mid',
    note_ko: '가성비. UCSI Springhill·APIS Cheras 셔틀권에도 접근.',
    note_zh: '性价比。UCSI Springhill · APIS Cheras 校车圈也可达。',
  },
];

/** Setia Eco Park · Shah Alam — Peninsula·Tenby 학부모 거주. 게이트 커뮤니티. */
export const SETIA_ECO_PARK_CONDOS: NearbyCondo[] = [
  {
    name: 'Setia Eco Park 단독·타운하우스',
    distance_minutes: 5,
    tier: 'luxury',
    rent_2br_usd: [1500, 2500],
    rent_3br_usd: [2500, 4000],
    korean_parents: 'low',
    chinese_parents: 'mid',
    note_ko: '단지 내 단독·타운하우스. 학교 도보·자전거 권. 호주·말레이 가족 다수.',
    note_zh: '社区内独栋 · 联排别墅。学校步行 · 自行车可达。澳大利亚 · 马来家庭众多。',
  },
  {
    name: 'Setia Alam Pangsapuri',
    distance_minutes: 10,
    tier: 'mid',
    rent_2br_usd: [500, 750],
    rent_3br_usd: [750, 1100],
    korean_parents: 'low',
    chinese_parents: 'mid',
    note_ko: 'Setia Alam 신도시 콘도. Peninsula·Tenby 셔틀권.',
    note_zh: 'Setia Alam 新城公寓。Peninsula · Tenby 校车圈。',
  },
];

/** Tropicana · Petaling Jaya — SJI International (Tropicana PJ 캠퍼스). 한·중 학부모 다수. */
export const TROPICANA_PJ_CONDOS: NearbyCondo[] = [
  {
    name: 'Tropicana Gardens',
    distance_minutes: 5,
    tier: 'premium',
    rent_2br_usd: [1100, 1500],
    rent_3br_usd: [1700, 2400],
    korean_parents: 'mid',
    chinese_parents: 'high',
    note_ko: 'SJI International 도보권. MRT 직결. 한·중 학부모 다수.',
    note_zh: 'SJI International 步行可达。MRT 直通。韩中家长众多。',
  },
  {
    name: 'Pacific Place Ara Damansara',
    distance_minutes: 8,
    tier: 'mid',
    rent_2br_usd: [700, 1000],
    rent_3br_usd: [1100, 1500],
    korean_parents: 'mid',
    chinese_parents: 'mid',
    note_ko: 'Tropicana·Ara Damansara 인근 신축. PJ 도심.',
    note_zh: 'Tropicana · Ara Damansara 邻近新建。PJ 市区。',
  },
];

/** Equine Park · Seri Kembangan — Alice Smith 초등 캠퍼스 인근. */
export const EQUINE_PARK_CONDOS: NearbyCondo[] = [
  {
    name: 'Equine Park 단독·테라스',
    distance_minutes: 3,
    tier: 'mid',
    rent_2br_usd: [500, 750],
    rent_3br_usd: [750, 1100],
    korean_parents: 'low',
    chinese_parents: 'mid',
    note_ko: 'Alice Smith 초등 캠퍼스 도보권. 말레이·중국 가족 다수.',
    note_zh: 'Alice Smith 小学校区步行可达。马来 · 中国家庭众多。',
  },
  {
    name: 'The Mines Resort (Seri Kembangan)',
    distance_minutes: 8,
    tier: 'premium',
    rent_2br_usd: [800, 1100],
    rent_3br_usd: [1200, 1700],
    korean_parents: 'mid',
    chinese_parents: 'high',
    note_ko: '리조트형. 호수·골프장 일체. The Mines 쇼핑몰 인근.',
    note_zh: '度假风。湖泊 · 高尔夫一体。The Mines 商场邻近。',
  },
];

/** Subang Bestari — HELP International·Sri Bestari 학부모 거주. */
export const SUBANG_BESTARI_CONDOS: NearbyCondo[] = [
  {
    name: 'Subang Bestari 테라스·콘도',
    distance_minutes: 5,
    tier: 'mid',
    rent_2br_usd: [500, 750],
    rent_3br_usd: [750, 1100],
    korean_parents: 'low',
    chinese_parents: 'high',
    note_ko: 'HELP·Sri Bestari 학부모 다수. 신도시. 가성비 양호.',
    note_zh: 'HELP · Sri Bestari 家长众多。新城。性价比良好。',
  },
];

/** Saujana · Subang — AISM (Australian International School Malaysia) 인근. */
export const SAUJANA_SUBANG_CONDOS: NearbyCondo[] = [
  {
    name: 'Saujana Residency',
    distance_minutes: 5,
    tier: 'premium',
    rent_2br_usd: [900, 1300],
    rent_3br_usd: [1400, 2000],
    korean_parents: 'mid',
    chinese_parents: 'mid',
    note_ko: 'AISM 도보·차량 5분. 호주·말레이 외교관 가족 다수. 골프장 일체.',
    note_zh: 'AISM 步行 · 车程 5 分钟。澳大利亚 · 马来外交家庭众多。高尔夫一体。',
  },
  {
    name: 'D\'Banyan Residency',
    distance_minutes: 5,
    tier: 'mid',
    rent_2br_usd: [600, 900],
    rent_3br_usd: [900, 1300],
    korean_parents: 'low',
    chinese_parents: 'mid',
    note_ko: 'AISM 도보권. 호주식 커리큘럼 학부모 다수.',
    note_zh: 'AISM 步行可达。澳式课程家长众多。',
  },
];

/** Subang Jaya — BSKL·UCSI Subang·Sunway·HELP 통근권. */
export const SUBANG_JAYA_CONDOS: NearbyCondo[] = [
  {
    name: 'Subang Parkhomes',
    distance_minutes: 5,
    tier: 'mid',
    rent_2br_usd: [600, 900],
    rent_3br_usd: [900, 1300],
    korean_parents: 'mid',
    chinese_parents: 'high',
    note_ko: '한·중 학부모 다수. 한국 슈퍼·식당 일부. BSKL 차량 5~8분.',
    note_zh: '韩中家长众多。韩国超市 · 餐厅部分。BSKL 车程 5-8 分钟。',
  },
  {
    name: 'Casa Subang',
    distance_minutes: 8,
    tier: 'budget',
    rent_2br_usd: [400, 600],
    rent_3br_usd: [600, 850],
    korean_parents: 'low',
    chinese_parents: 'mid',
    note_ko: '가성비 가족. 신규 이주자 첫 6개월 단기 다수.',
    note_zh: '性价比家庭。新迁者前 6 个月短租多。',
  },
];

/** Sunway · Bandar Sunway — Sunway International School·Taylor's 인근. 리조트형 단지. */
export const SUNWAY_CONDOS: NearbyCondo[] = [
  {
    name: 'Geo Sunway',
    distance_minutes: 5,
    tier: 'mid',
    rent_2br_usd: [700, 1000],
    rent_3br_usd: [1000, 1500],
    korean_parents: 'mid',
    chinese_parents: 'high',
    note_ko: 'Sunway Pyramid 도보권. Sunway International 학부모 1순위. 중국 학부모 다수.',
    note_zh: 'Sunway Pyramid 步行可达。Sunway International 家长首选。中国家长众多。',
  },
  {
    name: 'Sunway Resort Suites',
    distance_minutes: 5,
    tier: 'premium',
    rent_2br_usd: [1100, 1500],
    rent_3br_usd: [1700, 2300],
    korean_parents: 'mid',
    chinese_parents: 'high',
    note_ko: '리조트 단지 일체. Sunway Lagoon 인접. 한·중 가족 모두.',
    note_zh: '度假村一体。Sunway Lagoon 邻近。韩中家庭均有居住。',
  },
];

/** UCSI 캠퍼스 (Cheras·Springhill) — UCSI International School KL. 운영자 자녀 재학 학교. */
export const UCSI_CHERAS_CONDOS: NearbyCondo[] = [
  {
    name: 'UCSI Residence',
    distance_minutes: 2,
    tier: 'mid',
    rent_2br_usd: [600, 850],
    rent_3br_usd: [900, 1300],
    korean_parents: 'mid',
    chinese_parents: 'high',
    note_ko: '⭐ 운영자 인근 거주 — UCSI 도보 5분. 한·중 학부모 다수. 학교 셔틀 무관.',
    note_zh: '⭐ 站长附近居住 — UCSI 步行 5 分钟。韩中家长众多。无需校车。',
    school_bus: false,
  },
  {
    name: 'Casa Subang',
    distance_minutes: 8,
    tier: 'budget',
    rent_2br_usd: [400, 600],
    rent_3br_usd: [600, 850],
    korean_parents: 'low',
    chinese_parents: 'mid',
    note_ko: '가성비 가족. 신규 이주자 첫 6개월 단기로 많이 사용.',
    note_zh: '性价比家庭。新迁者前 6 个月短租多。',
  },
];

/** Putrajaya — Nexus·BSKL Putrajaya 접근. 신도시 가족 친화. */
export const PUTRAJAYA_CONDOS: NearbyCondo[] = [
  {
    name: 'Pangsapuri Sri Pinang',
    distance_minutes: 10,
    tier: 'mid',
    rent_2br_usd: [500, 700],
    rent_3br_usd: [750, 1100],
    korean_parents: 'low',
    chinese_parents: 'mid',
    note_ko: '말레이 가족 다수. 한국·중국 학부모 일부.',
    note_zh: '马来家庭众多。韩中家长部分。',
  },
];

// ─────────────────────────────────────────────────────────────
// 한국 학교 주변 콘도 (서울·송도·제주·대구·평택)
// ─────────────────────────────────────────────────────────────

export const SEOUL_INTL_CONDOS: NearbyCondo[] = [
  {
    name: '한남 더힐 (Hannam The Hill)',
    distance_minutes: 8,
    tier: 'luxury',
    rent_2br_usd: [4500, 6500],
    rent_3br_usd: [7000, 12000],
    korean_parents: 'high',
    chinese_parents: 'low',
    note_ko: 'SFS·YISS 학부모 최고가 거주지. 외교관·기업 임원 다수.',
    note_zh: 'SFS · YISS 家长顶级居住区。外交官 · 企业高管众多。',
  },
  {
    name: 'UN빌리지 (UN Village)',
    distance_minutes: 5,
    tier: 'luxury',
    rent_2br_usd: [3500, 5500],
    rent_3br_usd: [5500, 9000],
    korean_parents: 'mid',
    chinese_parents: 'low',
    note_ko: '한남동 외국인 전통 거주지. 단독 + 빌라형. SFS 도보권.',
    note_zh: '汉南洞外国人传统居住区。独栋+别墅型。SFS 步行可达。',
  },
  {
    name: '이태원 르미에르 (Itaewon Lumiere)',
    distance_minutes: 7,
    tier: 'premium',
    rent_2br_usd: [2200, 3200],
    rent_3br_usd: [3500, 5000],
    korean_parents: 'mid',
    chinese_parents: 'low',
    note_ko: '국제학교 학부모 + 외국계 직원 다수. SFS·YISS 차량 10분.',
    note_zh: '国际学校家长+外企员工众多。SFS · YISS 车程 10 分钟。',
  },
];

export const PANGYO_CONDOS: NearbyCondo[] = [
  {
    name: '알파리움 (Alpharium)',
    distance_minutes: 5,
    tier: 'premium',
    rent_2br_usd: [2200, 3000],
    rent_3br_usd: [3500, 5500],
    korean_parents: 'high',
    chinese_parents: 'low',
    note_ko: 'KIS Pangyo 학부모 1순위. IT 임원·의사 가족 다수.',
    note_zh: 'KIS Pangyo 家长首选。IT 高管 · 医生家庭众多。',
  },
  {
    name: '판교 푸르지오 (Pangyo Prugio)',
    distance_minutes: 8,
    tier: 'premium',
    rent_2br_usd: [1800, 2500],
    rent_3br_usd: [3000, 4500],
    korean_parents: 'high',
    chinese_parents: 'low',
    note_ko: '판교 도심 신축. KIS Pangyo 차량 10분. 학원가 인접.',
    note_zh: '板桥市区新建。KIS Pangyo 车程 10 分钟。学院街邻近。',
  },
];

export const SONGDO_CONDOS: NearbyCondo[] = [
  {
    name: '송도 더샵 마스터뷰 (Songdo The Sharp Masterview)',
    distance_minutes: 5,
    tier: 'premium',
    rent_2br_usd: [1500, 2200],
    rent_3br_usd: [2400, 3500],
    korean_parents: 'high',
    chinese_parents: 'mid',
    note_ko: 'Chadwick·GSIS 학부모 1순위. 학교 셔틀 다수 노선.',
    note_zh: 'Chadwick · GSIS 家长首选。多条校车路线。',
  },
  {
    name: '송도 풍림 아이원 (Songdo Pungrim iOne)',
    distance_minutes: 8,
    tier: 'mid',
    rent_2br_usd: [1100, 1600],
    rent_3br_usd: [1800, 2500],
    korean_parents: 'high',
    chinese_parents: 'mid',
    note_ko: '송도 중심 신축. 한·중 학부모 다수. 학원가 도보권.',
    note_zh: '松岛市中心新建。韩中家长众多。学院街步行可达。',
  },
];

export const JEJU_CONDOS: NearbyCondo[] = [
  {
    name: '제주 힐링타운 (Jeju Healing Town)',
    distance_minutes: 10,
    tier: 'premium',
    rent_2br_usd: [1300, 1900],
    rent_3br_usd: [2200, 3200],
    korean_parents: 'high',
    chinese_parents: 'mid',
    note_ko: 'NLCS·SJA·KIS Jeju 학부모 다수. 보딩 미선택 가족.',
    note_zh: 'NLCS · SJA · KIS Jeju 家长众多。未选寄宿家庭。',
  },
  {
    name: '제주 아이파크 (Jeju iPark)',
    distance_minutes: 8,
    tier: 'mid',
    rent_2br_usd: [900, 1300],
    rent_3br_usd: [1500, 2200],
    korean_parents: 'high',
    chinese_parents: 'low',
    note_ko: '제주 시내 인접. 학교 셔틀 1~2개 노선.',
    note_zh: '济州市区邻近。校车 1-2 条线。',
  },
];

export const DAEGU_CONDOS: NearbyCondo[] = [
  {
    name: '수성구 SK 리더스뷰',
    distance_minutes: 10,
    tier: 'premium',
    rent_2br_usd: [1100, 1600],
    rent_3br_usd: [1800, 2500],
    korean_parents: 'high',
    chinese_parents: 'low',
    note_ko: '수성구 학원가 인접. DIS 차량 10~15분.',
    note_zh: '寿城区学院街邻近。DIS 车程 10-15 分钟。',
  },
];

// ─── 태국 ────────────────────────────────────────────────────────

/** 방콕 Sukhumvit — STA S107·ASB·Bangkok Prep·KIS·Anglo Singapore 한·중·일 가족 1순위. */
export const BANGKOK_SUKHUMVIT_CONDOS: NearbyCondo[] = [
  {
    name: 'The Lumpini 24 (Phrom Phong)',
    distance_minutes: 5,
    tier: 'premium',
    rent_2br_usd: [1100, 1600],
    rent_3br_usd: [1800, 2600],
    korean_parents: 'high',
    chinese_parents: 'mid',
    note_ko: 'Phrom Phong BTS 도보권. 한국 슈퍼·식당·미용실 밀집(Sukhumvit 26 한인타운).',
    note_zh: 'Phrom Phong BTS 步行可达。韩国超市 · 餐厅 · 美容院密集 (Sukhumvit 26 韩国城)。',
  },
  {
    name: 'Noble BE19 (Asoke)',
    distance_minutes: 8,
    tier: 'premium',
    rent_2br_usd: [1300, 1800],
    rent_3br_usd: [2100, 3000],
    korean_parents: 'mid',
    chinese_parents: 'high',
    note_ko: 'Asoke·Sukhumvit BTS 환승역. KIS·Bangkok Prep 차량 10분.',
    note_zh: 'Asoke · Sukhumvit BTS 换乘站。KIS · Bangkok Prep 车程 10 分钟。',
  },
  {
    name: 'Aspire Sukhumvit 48',
    distance_minutes: 8,
    tier: 'mid',
    rent_2br_usd: [700, 1000],
    rent_3br_usd: [1100, 1500],
    korean_parents: 'high',
    chinese_parents: 'mid',
    note_ko: 'Sukhumvit 한인타운 인접. 가성비. ASB·STA S107 셔틀권.',
    note_zh: 'Sukhumvit 韩国城邻近。性价比。ASB · STA S107 校车圈。',
  },
];

/** 방콕 Riverside — Shrewsbury Riverside 학부모 거주. 차오프라야 강변. */
export const BANGKOK_RIVERSIDE_CONDOS: NearbyCondo[] = [
  {
    name: 'The River (Charoennakorn)',
    distance_minutes: 5,
    tier: 'luxury',
    rent_2br_usd: [1500, 2200],
    rent_3br_usd: [2400, 3500],
    korean_parents: 'mid',
    chinese_parents: 'mid',
    note_ko: '강변 럭셔리 타워. STA Riverside 도보·셔틀권. 외교관 가족.',
    note_zh: '河畔豪华塔楼。STA Riverside 步行 · 校车圈。外交家庭。',
  },
  {
    name: 'Magnolias Waterfront Residences',
    distance_minutes: 7,
    tier: 'luxury',
    rent_2br_usd: [1800, 2500],
    rent_3br_usd: [3000, 4500],
    korean_parents: 'mid',
    chinese_parents: 'high',
    note_ko: 'IconSiam 인접. STA Riverside 차량 10분. 럭셔리.',
    note_zh: 'IconSiam 邻近。STA Riverside 车程 10 分钟。豪华。',
  },
];

/** 방콕 Bang Na — ASB Green Valley·D-PREP 학부모 거주. 동부 신도시. */
export const BANGKOK_BANGNA_CONDOS: NearbyCondo[] = [
  {
    name: 'Ideo Mobi Bangna',
    distance_minutes: 8,
    tier: 'mid',
    rent_2br_usd: [550, 800],
    rent_3br_usd: [800, 1200],
    korean_parents: 'mid',
    chinese_parents: 'high',
    note_ko: 'Bang Na BTS 도보권. ASB GV·D-PREP 셔틀권. 한·중 가족 다수.',
    note_zh: 'Bang Na BTS 步行可达。ASB GV · D-PREP 校车圈。韩中家庭众多。',
  },
  {
    name: 'Whizdom Connect Sukhumvit (Punnawithi)',
    distance_minutes: 10,
    tier: 'mid',
    rent_2br_usd: [650, 900],
    rent_3br_usd: [950, 1400],
    korean_parents: 'mid',
    chinese_parents: 'mid',
    note_ko: 'Punnawithi BTS. Sukhumvit·Bang Na 사이 통근권.',
    note_zh: 'Punnawithi BTS。Sukhumvit · Bang Na 中间通勤圈。',
  },
];

/** 파타야 — Regents·Rugby·TPIS 학부모 거주. 해변 리조트형. */
export const PATTAYA_CONDOS: NearbyCondo[] = [
  {
    name: 'The Riviera Wongamat',
    distance_minutes: 10,
    tier: 'premium',
    rent_2br_usd: [800, 1200],
    rent_3br_usd: [1300, 1900],
    korean_parents: 'mid',
    chinese_parents: 'high',
    note_ko: '나끌루아 해변. Regents·TPIS 차량 10~15분. 한·중·러 가족 클러스터.',
    note_zh: '纳格鲁阿海滩。Regents · TPIS 车程 10-15 分钟。韩中俄家庭聚集。',
  },
  {
    name: 'Centric Sea Pattaya',
    distance_minutes: 12,
    tier: 'mid',
    rent_2br_usd: [550, 800],
    rent_3br_usd: [800, 1200],
    korean_parents: 'mid',
    chinese_parents: 'high',
    note_ko: '파타야 중심. 해변 도보권. 가성비 + 인테리어 양호.',
    note_zh: '芭提雅中心。海滩步行可达。性价比 + 装修良好。',
  },
];

/** Rayong / Green Valley — St. Andrews GV·Rugby Thailand 학부모 거주. EEC 산업단지. */
export const RAYONG_GREEN_VALLEY_CONDOS: NearbyCondo[] = [
  {
    name: 'Green Valley Resort Villas',
    distance_minutes: 3,
    tier: 'premium',
    rent_2br_usd: [700, 1000],
    rent_3br_usd: [1100, 1600],
    korean_parents: 'mid',
    chinese_parents: 'mid',
    note_ko: 'Green Valley 골프 리조트 단지 내 빌라. 학교 도보·자전거 권.',
    note_zh: 'Green Valley 高尔夫度假村内别墅。学校步行 · 自行车可达。',
  },
  {
    name: 'Rayong 도심 콘도',
    distance_minutes: 20,
    tier: 'mid',
    rent_2br_usd: [400, 600],
    rent_3br_usd: [600, 900],
    korean_parents: 'mid',
    chinese_parents: 'mid',
    note_ko: 'Rayong 도심. EEC 산업단지 한·일 가족 다수.',
    note_zh: 'Rayong 市区。EEC 工业区韩日家庭众多。',
  },
];

/** 푸켓 — BCIS·BISP·HeadStart 학부모 거주. */
export const PHUKET_CONDOS: NearbyCondo[] = [
  {
    name: 'Phuket Town 콘도',
    distance_minutes: 5,
    tier: 'mid',
    rent_2br_usd: [500, 750],
    rent_3br_usd: [800, 1200],
    korean_parents: 'mid',
    chinese_parents: 'mid',
    note_ko: '푸켓 타운 도심. BCIS·BISP 셔틀권. 프랑스·유럽·아시아 가족 혼합.',
    note_zh: '普吉镇市区。BCIS · BISP 校车圈。法国 · 欧洲 · 亚洲家庭混合。',
  },
  {
    name: '라구나 푸켓 (Laguna Phuket) 빌라',
    distance_minutes: 25,
    tier: 'luxury',
    rent_2br_usd: [1200, 1800],
    rent_3br_usd: [2000, 3500],
    korean_parents: 'low',
    chinese_parents: 'mid',
    note_ko: '리조트 단지 빌라. 럭셔리 + 해변. 학교 셔틀 차량 25분.',
    note_zh: '度假村别墅。豪华 + 海滨。校车车程 25 分钟。',
  },
];

/** 치앙마이 — APIS·CMIS·Lanna·Prem 학부모 거주. 산악·올드시티. */
export const CHIANG_MAI_CONDOS: NearbyCondo[] = [
  {
    name: 'Mae Rim 단독·테라스',
    distance_minutes: 5,
    tier: 'mid',
    rent_2br_usd: [450, 700],
    rent_3br_usd: [700, 1100],
    korean_parents: 'mid',
    chinese_parents: 'mid',
    note_ko: 'APIS 인근 산악 지역. 한·중·일 가족 + 디지털 노마드.',
    note_zh: 'APIS 附近山地。韩中日家庭 + 数字游牧族。',
  },
  {
    name: '치앙마이 Nimman 콘도',
    distance_minutes: 20,
    tier: 'mid',
    rent_2br_usd: [400, 650],
    rent_3br_usd: [650, 1000],
    korean_parents: 'mid',
    chinese_parents: 'mid',
    note_ko: '치앙마이 핫스팟 Nimmanhaemin. 학교 차량 20~30분. 카페·식당 풍부.',
    note_zh: '清迈热门区 Nimmanhaemin。学校车程 20-30 分钟。咖啡馆 · 餐厅丰富。',
  },
];

export const PYEONGTAEK_CONDOS: NearbyCondo[] = [
  {
    name: '평택 험프리스 인근 군 가족 주택',
    distance_minutes: 5,
    tier: 'mid',
    rent_2br_usd: [1500, 2200],
    rent_3br_usd: [2400, 3500],
    korean_parents: 'low',
    chinese_parents: 'low',
    note_ko: 'ICS Pyeongtaek 학생 대다수 미군 가족 · OHA(off-base housing).',
    note_zh: 'ICS Pyeongtaek 学生大多为驻韩美军家庭 · OHA(基地外住房)。',
  },
];

// ─────────────────────────────────────────────────────────────
// 학교 slug → 주변 거주지 매핑
// 운영자(데이비드) KL 거주 + 학부모 커뮤니티 청취 기반.
// ─────────────────────────────────────────────────────────────

export const SCHOOL_NEIGHBORHOODS: Record<string, SchoolNeighborhood[]> = {
  // ── 말레이시아 ────────────────────────────────────────────
  'alice-smith': [
    { area_ko: 'Jalan Bellamy (중·고등 캠퍼스) — Bangsar·Damansara Heights', area_zh: 'Jalan Bellamy (中学校区) — Bangsar · Damansara 高地',
      overview_ko: 'Jalan Bellamy 캠퍼스 (Year 7–13) — KL 도심. Bangsar·Damansara Heights 차량 5~10분.',
      overview_zh: 'Jalan Bellamy 校区 (Year 7-13) — KL 市区。Bangsar · Damansara Heights 车程 5-10 分钟。',
      condos: BANGSAR_CONDOS },
    { area_ko: 'Equine Park (초등 캠퍼스) — Seri Kembangan', area_zh: 'Equine Park (小学校区) — Seri Kembangan',
      overview_ko: 'Equine Park 캠퍼스 (Year 1–6) — KL 남쪽 Seri Kembangan. 단독·테라스 옵션 다수.',
      overview_zh: 'Equine Park 校区 (Year 1-6) — KL 南部 Seri Kembangan。独栋 · 联排选项多。',
      condos: EQUINE_PARK_CONDOS },
  ],
  'iskl': [
    { area_ko: 'Ampang · KLCC', area_zh: 'Ampang · KLCC',
      overview_ko: 'ISKL Ampang 캠퍼스 — 한인타운(Ampang Kondominium) 차량 5~10분. 일본·한국·외교관 클러스터.',
      overview_zh: 'ISKL Ampang 校区 — 韩国城(Ampang Kondominium) 车程 5-10 分钟。日韩外交聚集区。',
      condos: AMPANG_CONDOS },
  ],
  'mkis': [
    { area_ko: 'Mont Kiara', area_zh: 'Mont Kiara',
      overview_ko: 'Mont Kiara 학부모 1순위 거주지. 학교 도보권 5~10분 내 다수 콘도. 한국·중국·일본 가족 비율 매우 높음.',
      overview_zh: 'Mont Kiara 家长居住首选。学校步行 5-10 分钟内多座公寓。韩中日家庭比例极高。',
      condos: MONT_KIARA_CONDOS },
    { area_ko: 'Sri Hartamas (한인타운 인접)', area_zh: 'Sri Hartamas (韩国城邻近)',
      overview_ko: '한국 슈퍼·식당·미용실 도보권. MKIS·GIS 차량 5~10분.',
      overview_zh: '韩国超市 · 餐厅 · 美容院步行可达。MKIS · GIS 车程 5-10 分钟。',
      condos: SRI_HARTAMAS_CONDOS },
  ],
  'gis': [
    { area_ko: 'Mont Kiara · Sri Hartamas', area_zh: 'Mont Kiara · Sri Hartamas',
      overview_ko: 'GIS Mont Kiara·Sri Hartamas 모두 차량 5~10분 거주권. 영국식 커리큘럼 학부모 클러스터.',
      overview_zh: 'GIS Mont Kiara · Sri Hartamas 车程均 5-10 分钟。英式课程家长聚集。',
      condos: [...MONT_KIARA_CONDOS, ...SRI_HARTAMAS_CONDOS] },
  ],
  'epsom-college': [
    { area_ko: 'Bandar Enstek (KLIA 인근, 네그리 셈빌란)', area_zh: 'Bandar Enstek (KLIA 附近, 森美兰)',
      overview_ko: 'Epsom College Malaysia — KLIA 공항 인근. 보딩 중심 + Day 학생은 Bandar Enstek·Putrajaya 거주.',
      overview_zh: 'Epsom College Malaysia — KLIA 机场附近。寄宿为主 + 走读学生居 Bandar Enstek · Putrajaya。',
      condos: BANDAR_ENSTEK_CONDOS },
  ],
  'bskl': [
    { area_ko: 'Subang Jaya', area_zh: 'Subang Jaya',
      overview_ko: 'BSKL Subang Jaya 캠퍼스. 한·중 가족 + 영국·호주 외교관 거주.',
      overview_zh: 'BSKL Subang Jaya 校区。韩中家庭 + 英澳外交家庭居住。',
      condos: SUBANG_JAYA_CONDOS },
  ],
  'igb': [
    { area_ko: 'Sierramas · Saujana', area_zh: 'Sierramas · Saujana',
      overview_ko: 'IGB International Sierramas 캠퍼스. KL 북부 신도시 자녀 가족 거주.',
      overview_zh: 'IGB International Sierramas 校区。KL 北部新城家庭居住。',
      condos: [
        { name: 'Sierramas Resort Homes', distance_minutes: 5, tier: 'premium', rent_2br_usd: [900, 1300], rent_3br_usd: [1400, 2000], korean_parents: 'mid', chinese_parents: 'mid', note_ko: '학교 도보권 단지. 게이트 커뮤니티.', note_zh: '学校步行可达。封闭式社区。' },
      ] },
  ],
  'sjim': [
    { area_ko: 'Tropicana · Petaling Jaya', area_zh: 'Tropicana · Petaling Jaya',
      overview_ko: 'SJI International Tropicana 캠퍼스. 한·중 학부모 다수. MRT 직결.',
      overview_zh: 'SJI International Tropicana 校区。韩中家长众多。MRT 直通。',
      condos: TROPICANA_PJ_CONDOS },
  ],
  'nexus': [
    { area_ko: 'Putrajaya · Cyberjaya', area_zh: 'Putrajaya · Cyberjaya',
      overview_ko: 'Nexus Putrajaya 캠퍼스. 신도시 가족·정부 공무원 자녀 다수.',
      overview_zh: 'Nexus Putrajaya 校区。新城家庭 · 政府公务员子女众多。',
      condos: [...PUTRAJAYA_CONDOS, ...CYBERJAYA_CONDOS] },
  ],
  'sunway': [
    { area_ko: 'Bandar Sunway', area_zh: 'Bandar Sunway',
      overview_ko: 'Sunway International School — Sunway Pyramid·Lagoon·University 인근 리조트 단지. 중국 학부모 매우 다수.',
      overview_zh: 'Sunway International School — Sunway Pyramid · Lagoon · University 邻近度假村。中国家长极多。',
      condos: SUNWAY_CONDOS },
  ],
  'isp': [
    { area_ko: 'Desa ParkCity (KL 북서부)', area_zh: 'Desa ParkCity (KL 西北部)',
      overview_ko: 'International School @ ParkCity (ISP) — Desa ParkCity 단지 내. 영국·호주 외교관 + 한국 학부모 다수. 호수공원·도그파크로 가족 친화 동네.',
      overview_zh: 'International School @ ParkCity (ISP) — Desa ParkCity 社区内。英澳外交 + 韩国家长众多。湖泊公园 · 狗公园,家庭友好社区。',
      condos: DESA_PARKCITY_CONDOS },
    { area_ko: 'Mont Kiara · Sri Hartamas (차량 15분 통근권)', area_zh: 'Mont Kiara · Sri Hartamas (车程 15 分钟通勤圈)',
      overview_ko: 'Desa ParkCity 직접 거주 외 — Mont Kiara·Sri Hartamas 학부모도 ISP 통근 가능 (차량 15~20분).',
      overview_zh: '除 Desa ParkCity 直接居住外 — Mont Kiara · Sri Hartamas 家长也可通勤 ISP (车程 15-20 分钟)。',
      condos: [...MONT_KIARA_CONDOS.slice(0, 2), ...SRI_HARTAMAS_CONDOS] },
  ],
  'aism': [
    { area_ko: 'Saujana · Subang (셀랑고르)', area_zh: 'Saujana · Subang (雪兰莪)',
      overview_ko: 'AISM (Australian International School Malaysia) — Saujana 캠퍼스. 호주·말레이 외교관 가족 다수.',
      overview_zh: 'AISM (Australian International School Malaysia) — Saujana 校区。澳大利亚 · 马来外交家庭众多。',
      condos: SAUJANA_SUBANG_CONDOS },
  ],
  'ucsi-kl': [
    { area_ko: 'Cheras · Taman Connaught', area_zh: 'Cheras · Taman Connaught',
      overview_ko: '⭐ 운영자(데이비드) 거주지 · 자녀 재학 학교. Cheras 한·중 학부모 클러스터.',
      overview_zh: '⭐ 站长(David)居住区·子女就读学校。Cheras 韩中家长聚集。',
      condos: UCSI_CHERAS_CONDOS },
  ],
  'sri-kdu-kota-damansara': [
    { area_ko: 'Kota Damansara · Mutiara Damansara', area_zh: 'Kota Damansara · Mutiara Damansara',
      overview_ko: '한국·중국 학부모 신흥 거주지. 학원·식당·쇼핑 일체.',
      overview_zh: '韩中家长新兴居住区。学院 · 餐厅 · 购物一体。',
      condos: [
        { name: 'The Cube Kota Damansara', distance_minutes: 5, tier: 'mid', rent_2br_usd: [600, 900], rent_3br_usd: [900, 1300], korean_parents: 'mid', chinese_parents: 'high', note_ko: 'Sri KDU 학부모 다수. 학원가 도보권.', note_zh: 'Sri KDU 家长众多。学院街步行可达。' },
      ] },
  ],
  'peninsula': [
    { area_ko: 'Setia Eco Park · Shah Alam', area_zh: 'Setia Eco Park · 莎阿南',
      overview_ko: 'Peninsula International (PISA) — Setia Eco Park 게이트 커뮤니티 내. 호주식 커리큘럼.',
      overview_zh: 'Peninsula International (PISA) — Setia Eco Park 封闭社区内。澳式课程。',
      condos: SETIA_ECO_PARK_CONDOS },
  ],
  'tenby-setia-eco-park': [
    { area_ko: 'Setia Eco Park · Shah Alam', area_zh: 'Setia Eco Park · 莎阿南',
      overview_ko: 'Tenby Setia Eco Park 캠퍼스 — 게이트 커뮤니티 내. 영국·말레이 가족 다수.',
      overview_zh: 'Tenby Setia Eco Park 校区 — 封闭社区内。英国 · 马来家庭众多。',
      condos: SETIA_ECO_PARK_CONDOS },
  ],
  'help-international': [
    { area_ko: 'Subang Bestari · Subang Jaya', area_zh: 'Subang Bestari · Subang Jaya',
      overview_ko: 'HELP International School (HIS) Subang Bestari 캠퍼스 — 셀랑고르 신도시.',
      overview_zh: 'HELP International School (HIS) Subang Bestari 校区 — 雪兰莪新城。',
      condos: [...SUBANG_BESTARI_CONDOS, ...SUBANG_JAYA_CONDOS] },
  ],
  'apis': [
    { area_ko: 'Cheras · Sungai Long', area_zh: 'Cheras · Sungai Long',
      overview_ko: 'APIS Cheras 캠퍼스. 한국·중국 학부모 신흥 클러스터.',
      overview_zh: 'APIS Cheras 校区。韩中家长新兴聚集区。',
      condos: UCSI_CHERAS_CONDOS },
  ],
  'straits-rawang': [
    { area_ko: 'Rawang · 셀랑고르 북부', area_zh: 'Rawang · 雪兰莪北部',
      overview_ko: 'KL 북부 신도시. 신규 이주 가족 가성비 거주지.',
      overview_zh: 'KL 北部新城。新迁家庭性价比居住区。',
      condos: [
        { name: 'Emerald Rawang', distance_minutes: 8, tier: 'budget', rent_2br_usd: [400, 600], rent_3br_usd: [600, 900], korean_parents: 'low', chinese_parents: 'mid', note_ko: '신축 가성비. 학교 셔틀 운행.', note_zh: '新建性价比。校车运行。' },
      ] },
  ],
  'sri-bestari': [
    { area_ko: 'Subang Bestari · Sungai Buloh', area_zh: 'Subang Bestari · Sungai Buloh',
      overview_ko: 'Sri Bestari International (SBIS) Subang Bestari 캠퍼스. 셀랑고르 신도시.',
      overview_zh: 'Sri Bestari International (SBIS) Subang Bestari 校区。雪兰莪新城。',
      condos: SUBANG_BESTARI_CONDOS },
  ],
  'ucsi-subang': [
    { area_ko: 'Subang Jaya · USJ', area_zh: 'Subang Jaya · USJ',
      overview_ko: 'UCSI International School Subang Jaya 캠퍼스. USJ·Bandar Sunway 인근.',
      overview_zh: 'UCSI International School Subang Jaya 校区。USJ · Bandar Sunway 邻近。',
      condos: [...SUBANG_JAYA_CONDOS, ...SUNWAY_CONDOS] },
  ],

  // ── 2026-05 추가 12개 ────────────────────────────────────────────
  'king-henry-viii': [
    { area_ko: 'Bandar Seri Putra · Putrajaya 통근권', area_zh: 'Bandar Seri Putra · Putrajaya 通勤圈',
      overview_ko: 'King Henry VIII College — Bandar Seri Putra (네그리 셈빌란 북부). 보딩 중심 + Day 학생은 Putrajaya·Bandar Enstek 거주.',
      overview_zh: 'King Henry VIII College — Bandar Seri Putra (森美兰北部)。寄宿为主 + 走读学生居 Putrajaya · Bandar Enstek。',
      condos: [...BANDAR_ENSTEK_CONDOS, ...PUTRAJAYA_CONDOS] },
  ],
  'adcote-matrix': [
    { area_ko: 'Bandar Sri Sendayan · 세렘반', area_zh: 'Bandar Sri Sendayan · 芙蓉',
      overview_ko: 'Adcote School Malaysia — Matrix Concourse 단지 내. 보딩 중심 + 인근 단독 거주.',
      overview_zh: 'Adcote School Malaysia — Matrix Concourse 园区内。寄宿为主 + 附近独栋居住。',
      condos: [
        { name: 'Matrix Concourse Residences', distance_minutes: 3, tier: 'mid', rent_2br_usd: [400, 600], rent_3br_usd: [600, 900], korean_parents: 'low', chinese_parents: 'mid', note_ko: 'Adcote 도보권. Matrix 단지 일체. 보딩 미선택 가족 거주.', note_zh: 'Adcote 步行可达。Matrix 园区一体。未选寄宿家庭居住。' },
        { name: 'Seremban 2 단독·테라스', distance_minutes: 15, tier: 'mid', rent_2br_usd: [350, 550], rent_3br_usd: [550, 800], korean_parents: 'low', chinese_parents: 'mid', note_ko: '세렘반 신도시. Adcote 차량 15~20분.', note_zh: '芙蓉新城。Adcote 车程 15-20 分钟。' },
      ] },
  ],
  'eaton-kajang': [
    { area_ko: 'Kajang', area_zh: '加影',
      overview_ko: 'Eaton International Kajang 캠퍼스. KL 남쪽 신도시.',
      overview_zh: 'Eaton International Kajang 校区。KL 南部新城。',
      condos: KAJANG_CONDOS },
  ],
  'eaton-shah-alam': [
    { area_ko: 'Shah Alam', area_zh: '莎阿南',
      overview_ko: 'Eaton International Shah Alam 캠퍼스. 셀랑고르 주도.',
      overview_zh: 'Eaton International Shah Alam 校区。雪兰莪州府。',
      condos: [
        { name: 'i-City Residences', distance_minutes: 8, tier: 'mid', rent_2br_usd: [550, 800], rent_3br_usd: [800, 1200], korean_parents: 'low', chinese_parents: 'mid', note_ko: 'Shah Alam 도심 신축. i-City 상가·테마파크 인접.', note_zh: '莎阿南市区新建。i-City 商场 · 主题公园邻近。' },
        ...SETIA_ECO_PARK_CONDOS,
      ] },
  ],
  'sri-kdu-subang': [
    { area_ko: 'Subang Jaya', area_zh: '梳邦再也',
      overview_ko: 'Sri KDU 그룹 본 캠퍼스 — Subang Jaya 도심.',
      overview_zh: 'Sri KDU 集团本校区 — 梳邦再也市区。',
      condos: SUBANG_JAYA_CONDOS },
  ],
  'sri-kdu-klang': [
    { area_ko: 'Klang · Bandar Bukit Tinggi', area_zh: '巴生 · Bandar Bukit Tinggi',
      overview_ko: 'Sri KDU Klang 캠퍼스. 클랑항 인근 신도시.',
      overview_zh: 'Sri KDU Klang 校区。巴生港邻近新城。',
      condos: [
        { name: 'Bandar Bukit Tinggi 콘도', distance_minutes: 5, tier: 'mid', rent_2br_usd: [400, 600], rent_3br_usd: [600, 900], korean_parents: 'low', chinese_parents: 'high', note_ko: 'Klang 신도시 중심. 학교 도보·차량 5분. 화교 가족 다수.', note_zh: '巴生新城中心。学校步行 · 车程 5 分钟。华人家庭众多。' },
      ] },
  ],
  'ucsi-springhill': [
    { area_ko: 'Port Dickson · Springhill (네그리 셈빌란)', area_zh: '波德申 · Springhill (森美兰)',
      overview_ko: 'UCSI Springhill — 해변 리조트 단지 내. 보딩 중심 + Day 학생은 Port Dickson 거주.',
      overview_zh: 'UCSI Springhill — 海滨度假村内。寄宿为主 + 走读学生居波德申。',
      condos: [
        { name: 'Springhill Garden Residence', distance_minutes: 3, tier: 'mid', rent_2br_usd: [500, 750], rent_3br_usd: [750, 1100], korean_parents: 'low', chinese_parents: 'mid', note_ko: '학교 도보권. 해변 리조트 단지 일체. 가족 친화.', note_zh: '学校步行可达。海滨度假村一体。家庭友好。' },
        { name: 'Port Dickson 해변 콘도', distance_minutes: 10, tier: 'budget', rent_2br_usd: [350, 550], rent_3br_usd: [550, 800], korean_parents: 'low', chinese_parents: 'mid', note_ko: 'PD 도심 해변. 학교 차량 10~15분.', note_zh: 'PD 市区海滨。学校车程 10-15 分钟。' },
      ] },
  ],
  'tenby-tropicana-aman': [
    { area_ko: 'Tropicana Aman · Sungai Buloh', area_zh: 'Tropicana Aman · 双溪毛糯',
      overview_ko: 'Tenby Tropicana Aman 캠퍼스 — 단지 내. KL 북서부 신도시.',
      overview_zh: 'Tenby Tropicana Aman 校区 — 园区内。KL 西北部新城。',
      condos: [
        { name: 'Tropicana Aman Residence', distance_minutes: 3, tier: 'premium', rent_2br_usd: [800, 1200], rent_3br_usd: [1300, 1900], korean_parents: 'low', chinese_parents: 'mid', note_ko: '학교 도보권. 단지 일체. 한·중 학부모 신규 이주.', note_zh: '学校步行可达。园区一体。韩中家长新迁入。' },
        { name: 'Kota Damansara 콘도 (차량 15분)', distance_minutes: 15, tier: 'mid', rent_2br_usd: [600, 900], rent_3br_usd: [900, 1300], korean_parents: 'mid', chinese_parents: 'high', note_ko: 'Sri KDU 학부모 클러스터와 셰어. 한·중 학부모 다수.', note_zh: '与 Sri KDU 家长聚集区共享。韩中家长众多。' },
      ] },
  ],
  'tenby-setia-ecohill': [
    { area_ko: 'Setia EcoHill · Semenyih (KL 남쪽)', area_zh: 'Setia EcoHill · 士毛月 (KL 南部)',
      overview_ko: 'Tenby Setia EcoHill 캠퍼스 — Semenyih 신도시 단지 내.',
      overview_zh: 'Tenby Setia EcoHill 校区 — 士毛月新城园区内。',
      condos: [
        { name: 'Setia EcoHill 단독·테라스', distance_minutes: 5, tier: 'mid', rent_2br_usd: [450, 650], rent_3br_usd: [650, 950], korean_parents: 'low', chinese_parents: 'mid', note_ko: '학교 도보·자전거 권. 단지 일체. 말레이·중국 가족 다수.', note_zh: '学校步行 · 自行车可达。园区一体。马来 · 中国家庭众多。' },
        ...KAJANG_CONDOS,
      ] },
  ],
  'maple-leaf-kingsley': [
    { area_ko: 'Putra Heights · Subang Jaya', area_zh: 'Putra Heights · 梳邦再也',
      overview_ko: 'Maple Leaf Kingsley — Putra Heights 신도시. 캐나다 OSSD 커리큘럼.',
      overview_zh: 'Maple Leaf Kingsley — Putra Heights 新城。加拿大 OSSD 课程。',
      condos: [
        { name: 'Putra Heights Pangsapuri', distance_minutes: 5, tier: 'mid', rent_2br_usd: [500, 750], rent_3br_usd: [750, 1100], korean_parents: 'low', chinese_parents: 'mid', note_ko: '학교 차량 5분. LRT Putra Heights 연결.', note_zh: '学校车程 5 分钟。LRT Putra Heights 直通。' },
        ...SUBANG_JAYA_CONDOS,
      ] },
  ],
  'rocklin': [
    { area_ko: 'Cheras', area_zh: 'Cheras',
      overview_ko: 'Rocklin International — Cheras 도심. 영국식 가성비 학교.',
      overview_zh: 'Rocklin International — Cheras 市区。英式性价比学校。',
      condos: UCSI_CHERAS_CONDOS },
  ],
  'concord': [
    { area_ko: 'Section 13, Petaling Jaya', area_zh: 'Section 13, PJ',
      overview_ko: 'Concord International — PJ Section 13. PJ 도심 가성비 옵션.',
      overview_zh: 'Concord International — PJ Section 13。PJ 市区性价比之选。',
      condos: [
        { name: 'PJ Section 13 콘도', distance_minutes: 5, tier: 'mid', rent_2br_usd: [550, 800], rent_3br_usd: [800, 1200], korean_parents: 'mid', chinese_parents: 'high', note_ko: 'PJ 도심. MRT·LRT 접근 우수. 한·중 가족 다수.', note_zh: 'PJ 市区。MRT · LRT 接驳良好。韩中家庭众多。' },
        ...TROPICANA_PJ_CONDOS,
      ] },
  ],

  // ── 태국 ──────────────────────────────────────────────────
  'shrewsbury-riverside': [
    { area_ko: '방콕 차오프라야 강변 (Charoennakorn · Sathorn)', area_zh: '曼谷湄南河畔 (Charoennakorn · Sathorn)',
      overview_ko: 'STA Riverside 학부모 거주 1순위. 강변 럭셔리 + IconSiam 인접.',
      overview_zh: 'STA Riverside 家长居住首选。河畔豪华 + IconSiam 邻近。',
      condos: BANGKOK_RIVERSIDE_CONDOS },
    { area_ko: '방콕 Sathorn · Silom (BTS 통근권)', area_zh: '曼谷 Sathorn · Silom (BTS 通勤圈)',
      overview_ko: 'STA Riverside 셔틀권. 외국계 임원 가족.',
      overview_zh: 'STA Riverside 校车圈。外企高管家庭。',
      condos: BANGKOK_SUKHUMVIT_CONDOS.slice(0, 2) },
  ],
  'shrewsbury-city': [
    { area_ko: '방콕 Sukhumvit (Soi 71~107)', area_zh: '曼谷 Sukhumvit (Soi 71-107)',
      overview_ko: 'STA S107 — Sukhumvit Soi 107. BTS Bearing·Punnawithi 도보권.',
      overview_zh: 'STA S107 — Sukhumvit Soi 107。BTS Bearing · Punnawithi 步行可达。',
      condos: BANGKOK_SUKHUMVIT_CONDOS },
  ],
  'asb-sukhumvit': [
    { area_ko: '방콕 Sukhumvit (Phrom Phong·Thonglor)', area_zh: '曼谷 Sukhumvit (Phrom Phong · Thonglor)',
      overview_ko: 'ASB Sukhumvit — Phrom Phong 도심. 한·일·중 가족 클러스터.',
      overview_zh: 'ASB Sukhumvit — Phrom Phong 市区。韩日中家庭聚集。',
      condos: BANGKOK_SUKHUMVIT_CONDOS },
  ],
  'asb-green-valley': [
    { area_ko: '방콕 Bang Na · 동부', area_zh: '曼谷 Bang Na · 东部',
      overview_ko: 'ASB Green Valley — Bang Na-Trad KM7. 동부 신도시 가족.',
      overview_zh: 'ASB Green Valley — Bang Na-Trad KM7。东部新城家庭。',
      condos: BANGKOK_BANGNA_CONDOS },
  ],
  'bangkok-prep': [
    { area_ko: '방콕 Sukhumvit (Phrom Phong·Asoke)', area_zh: '曼谷 Sukhumvit (Phrom Phong · Asoke)',
      overview_ko: 'Bangkok Prep — Sukhumvit 53. Phrom Phong BTS 도보권. 한·일 가족 다수.',
      overview_zh: 'Bangkok Prep — Sukhumvit 53。Phrom Phong BTS 步行可达。韩日家庭众多。',
      condos: BANGKOK_SUKHUMVIT_CONDOS },
  ],
  'dulwich-bangkok': [
    { area_ko: '방콕 Sukhumvit (정확 위치는 학교 확인)', area_zh: '曼谷 Sukhumvit (具体位置请咨询学校)',
      overview_ko: 'Dulwich Bangkok — 신규 캠퍼스. 정확 위치는 학교 공식 사이트 확인.',
      overview_zh: 'Dulwich Bangkok — 新校区。准确位置请查阅学校官网。',
      condos: BANGKOK_SUKHUMVIT_CONDOS },
  ],
  'kis-bangkok': [
    { area_ko: '방콕 Huai Khwang · Ratchadaphisek', area_zh: '曼谷 Huai Khwang · Ratchadaphisek',
      overview_ko: 'KIS Bangkok — Huai Khwang MRT 도보권. 중심부 + 한·중 가족.',
      overview_zh: 'KIS Bangkok — Huai Khwang MRT 步行可达。市中心 + 韩中家庭。',
      condos: [
        { name: 'The Esse Asoke (MRT Phetchaburi)', distance_minutes: 8, tier: 'premium', rent_2br_usd: [1100, 1600], rent_3br_usd: [1800, 2500], korean_parents: 'mid', chinese_parents: 'high', note_ko: 'KIS·Bangkok Prep 모두 차량 8~10분. 도심 중앙.', note_zh: 'KIS · Bangkok Prep 车程均 8-10 分钟。市中心。' },
        { name: 'Centric Ratchada-Huai Khwang', distance_minutes: 5, tier: 'mid', rent_2br_usd: [650, 950], rent_3br_usd: [1000, 1450], korean_parents: 'mid', chinese_parents: 'high', note_ko: 'KIS 도보 5분. 가성비 + 중국 학부모 다수.', note_zh: 'KIS 步行 5 分钟。性价比 + 中国家长众多。' },
      ] },
  ],
  'd-prep': [
    { area_ko: '방콕 Bang Na · 동부', area_zh: '曼谷 Bang Na · 东部',
      overview_ko: 'D-PREP — Bang Na-Trad KM8. 동부 신도시 가족 1순위.',
      overview_zh: 'D-PREP — Bang Na-Trad KM8。东部新城家庭首选。',
      condos: BANGKOK_BANGNA_CONDOS },
  ],
  'anglo-singapore': [
    { area_ko: '방콕 Sukhumvit 31 (Phrom Phong 인근)', area_zh: '曼谷 Sukhumvit 31 (Phrom Phong 邻近)',
      overview_ko: 'Anglo Singapore — Sukhumvit 31. 한·중 가족 + 싱가포르 수학 학부모 클러스터.',
      overview_zh: 'Anglo Singapore — Sukhumvit 31。韩中家庭 + 新加坡数学家长聚集。',
      condos: BANGKOK_SUKHUMVIT_CONDOS },
  ],
  'rugby-thailand': [
    { area_ko: '촌부리 · Bang Bong (파타야 북부)', area_zh: '春武里 · Bang Bong (芭提雅北部)',
      overview_ko: 'Rugby School Thailand — 보딩 중심. Day 학생은 파타야 북부 거주.',
      overview_zh: 'Rugby School Thailand — 寄宿为主。走读学生居芭提雅北部。',
      condos: PATTAYA_CONDOS },
  ],
  'regents-pattaya': [
    { area_ko: '파타야 · 나끌루아 (Wongamat)', area_zh: '芭提雅 · 纳格鲁阿 (Wongamat)',
      overview_ko: 'Regents Pattaya — 보딩 + Day. Wongamat 해변 학부모 거주.',
      overview_zh: 'Regents Pattaya — 寄宿 + 走读。Wongamat 海滨家长居住。',
      condos: PATTAYA_CONDOS },
  ],
  'st-andrews-green-valley': [
    { area_ko: 'Rayong · Green Valley · EEC', area_zh: '罗勇 · Green Valley · EEC',
      overview_ko: 'St. Andrews GV — Green Valley 골프 단지 내. EEC 산업단지 가족.',
      overview_zh: 'St. Andrews GV — Green Valley 高尔夫园区内。EEC 工业区家庭。',
      condos: RAYONG_GREEN_VALLEY_CONDOS },
  ],
  'tara-pattana': [
    { area_ko: '파타야 도심 · Sukhumvit Rd', area_zh: '芭提雅市区 · Sukhumvit Rd',
      overview_ko: 'TPIS — 파타야 도심. 한·중·러 가족 클러스터.',
      overview_zh: 'TPIS — 芭提雅市区。韩中俄家庭聚集。',
      condos: PATTAYA_CONDOS },
  ],
  'bcis-phuket': [
    { area_ko: '푸켓 타운 · 도심', area_zh: '普吉镇 · 市区',
      overview_ko: 'BCIS — Phuket Town. 프랑스·유럽·아시아 가족 혼합.',
      overview_zh: 'BCIS — Phuket Town。法国 · 欧洲 · 亚洲家庭混合。',
      condos: PHUKET_CONDOS },
  ],
  'apis-chiang-mai': [
    { area_ko: '치앙마이 · Mae Rim (북부 산악)', area_zh: '清迈 · Mae Rim (北部山地)',
      overview_ko: 'APIS — Mae Rim. 보딩 + Day. 산악·자연 친화. 한·중·일 가족.',
      overview_zh: 'APIS — Mae Rim。寄宿 + 走读。山地 · 自然友好。韩中日家庭。',
      condos: CHIANG_MAI_CONDOS },
  ],
  'oasis': [
    { area_ko: 'Kajang (KL 남쪽)', area_zh: 'Kajang (吉隆坡南部)',
      overview_ko: 'Oasis International School Kajang. KL 남쪽 신도시. 말레이·중국 가족 다수.',
      overview_zh: 'Oasis International School Kajang。吉隆坡南部新城。马来 · 中国家庭众多。',
      condos: KAJANG_CONDOS },
  ],

  // ── 한국 ─────────────────────────────────────────────────
  'sfs': [
    { area_ko: '용산구 · 한남동', area_zh: '龙山区 · 汉南洞',
      overview_ko: '미국식 외국인학교의 표준. 서울 외국인 클러스터(한남·이태원·UN빌리지) 도보·차량 5~10분.',
      overview_zh: '美式外国人学校标杆。首尔外国人聚集区(汉南 · 梨泰院 · UN Village) 步行 · 车程 5-10 分钟。',
      condos: SEOUL_INTL_CONDOS },
  ],
  'yiss': [
    { area_ko: '용산구 · 한남동', area_zh: '龙山区 · 汉南洞',
      overview_ko: 'YISS — 기독교계 외국인학교. 한남·UN빌리지 외교관 가족 다수.',
      overview_zh: 'YISS — 基督教外国人学校。汉南 · UN Village 外交家庭众多。',
      condos: SEOUL_INTL_CONDOS },
  ],
  'kis-seoul': [
    { area_ko: '강남 · 도곡 · 압구정', area_zh: '江南 · 道谷 · 狎鸥亭',
      overview_ko: 'KIS Seoul — 강남 도심. 도곡·압구정 학원가 학부모 거주.',
      overview_zh: 'KIS Seoul — 江南市区。道谷 · 狎鸥亭学院街家长居住。',
      condos: [
        { name: '도곡 렉슬', distance_minutes: 5, tier: 'luxury', rent_2br_usd: [3000, 4500], rent_3br_usd: [5000, 8000], korean_parents: 'high', chinese_parents: 'low', note_ko: '강남 학원가 도보권. 한국 부유층 학부모 다수.', note_zh: '江南学院街步行可达。韩国富裕家长众多。' },
        { name: '도곡 타워팰리스', distance_minutes: 8, tier: 'luxury', rent_2br_usd: [3500, 5000], rent_3br_usd: [6000, 10000], korean_parents: 'high', chinese_parents: 'low', note_ko: '강남 상징적 럭셔리. KIS Seoul 차량 10분.', note_zh: '江南标志性豪宅。KIS Seoul 车程 10 分钟。' },
      ] },
  ],
  'dwight-seoul': [
    { area_ko: '강서구 · 마곡·발산', area_zh: '江西区 · 麻谷 · 钵山',
      overview_ko: 'Dwight School Seoul — 마곡 신도시. IT 임원·의사·외국계 가족 다수.',
      overview_zh: 'Dwight School Seoul — 麻谷新城。IT 高管 · 医生 · 外企家庭众多。',
      condos: [
        { name: '마곡 엠밸리 14단지', distance_minutes: 8, tier: 'premium', rent_2br_usd: [1500, 2200], rent_3br_usd: [2400, 3500], korean_parents: 'high', chinese_parents: 'low', note_ko: '마곡 학부모 1순위. Dwight 차량 5~10분.', note_zh: '麻谷家长首选。Dwight 车程 5-10 分钟。' },
      ] },
  ],
  'dulwich-seoul': [
    { area_ko: '서초 · 반포', area_zh: '瑞草 · 盘浦',
      overview_ko: 'Dulwich Seoul — 서초구. 반포·잠원 학원가 학부모 거주.',
      overview_zh: 'Dulwich Seoul — 瑞草区。盘浦 · 蚕院学院街家长居住。',
      condos: [
        { name: '반포 자이', distance_minutes: 8, tier: 'luxury', rent_2br_usd: [3500, 5000], rent_3br_usd: [6000, 9000], korean_parents: 'high', chinese_parents: 'low', note_ko: '반포 학원가 핵심. Dulwich 차량 10분.', note_zh: '盘浦学院街核心。Dulwich 车程 10 分钟。' },
      ] },
  ],
  'kis-pangyo': [
    { area_ko: '판교 · 분당', area_zh: '板桥 · 盆唐',
      overview_ko: 'KIS Pangyo — 판교 테크노밸리. IT 임원 자녀 다수.',
      overview_zh: 'KIS Pangyo — 板桥科技谷。IT 高管子女众多。',
      condos: PANGYO_CONDOS },
  ],
  'gsis': [
    { area_ko: '송도 국제업무지구', area_zh: '松岛国际商务区',
      overview_ko: 'GSIS — 송도 국제업무지구. 외국계 기업·바이오 가족 다수.',
      overview_zh: 'GSIS — 松岛国际商务区。外企 · 生物科技家庭众多。',
      condos: SONGDO_CONDOS },
  ],
  'ics-pyeongtaek': [
    { area_ko: '평택 · 험프리스 인근', area_zh: '平泽 · 汉弗莱斯基地附近',
      overview_ko: 'ICS Pyeongtaek — 학생 대다수 주한미군 가족 (Camp Humphreys 기지).',
      overview_zh: 'ICS Pyeongtaek — 学生大多为驻韩美军家庭 (Camp Humphreys 基地)。',
      condos: PYEONGTAEK_CONDOS },
  ],
  'isb-busan': [
    { area_ko: '부산 해운대 · 광안리', area_zh: '釜山海云台 · 广安里',
      overview_ko: 'ISB Busan — 해운대 캠퍼스. 외국인·외국계 가족 거주.',
      overview_zh: 'ISB Busan — 海云台校区。外国人 · 外企家庭居住。',
      condos: [
        { name: '해운대 두산위브 더제니스', distance_minutes: 10, tier: 'luxury', rent_2br_usd: [2200, 3200], rent_3br_usd: [3500, 5500], korean_parents: 'high', chinese_parents: 'low', note_ko: '해운대 핵심 럭셔리. 외국인 거주 비율 높음.', note_zh: '海云台核心豪宅。外国人居住比例高。' },
      ] },
  ],
  'dis-daegu': [
    { area_ko: '대구 수성구', area_zh: '大邱寿城区',
      overview_ko: 'DIS Daegu — 수성구 학원가. 대구 부유층 학부모 다수.',
      overview_zh: 'DIS Daegu — 寿城区学院街。大邱富裕家长众多。',
      condos: DAEGU_CONDOS },
  ],
  'bfs': [
    { area_ko: '부산 강서구 · 명지', area_zh: '釜山江西区 · 鸣旨',
      overview_ko: 'BFS — 강서구 명지신도시. 외국계·전문직 가족.',
      overview_zh: 'BFS — 江西区鸣旨新城。外企 · 专业人士家庭。',
      condos: [
        { name: '명지 더샵', distance_minutes: 10, tier: 'mid', rent_2br_usd: [1100, 1500], rent_3br_usd: [1700, 2400], korean_parents: 'high', chinese_parents: 'low', note_ko: '명지 신도시 신축. BFS 차량 10분.', note_zh: '鸣旨新城新建。BFS 车程 10 分钟。' },
      ] },
  ],
  'nlcs-jeju': [
    { area_ko: '제주 영어교육도시 (대정읍)', area_zh: '济州英语教育城 (大静邑)',
      overview_ko: 'NLCS Jeju · BHA · SJA · KIS Jeju 4개 학교 인접. 보딩 + Day 모두 가능.',
      overview_zh: 'NLCS Jeju · BHA · SJA · KIS Jeju 四校相邻。寄宿 · 走读均可。',
      condos: JEJU_CONDOS },
  ],
  'kis-jeju': [
    { area_ko: '제주 영어교육도시', area_zh: '济州英语教育城',
      overview_ko: 'KIS Jeju — 영어교육도시 캠퍼스. 한국 학부모 다수.',
      overview_zh: 'KIS Jeju — 英语教育城校区。韩国家长众多。',
      condos: JEJU_CONDOS },
  ],
  'bha': [
    { area_ko: '제주 영어교육도시', area_zh: '济州英语教育城',
      overview_ko: 'BHA Jeju — 미국식. 학원가 인접 콘도 다수.',
      overview_zh: 'BHA Jeju — 美式。学院街附近公寓众多。',
      condos: JEJU_CONDOS },
  ],
  'sja-jeju': [
    { area_ko: '제주 영어교육도시', area_zh: '济州英语教育城',
      overview_ko: 'SJA Jeju — 캐나다식 보딩 중심. Day 학생은 영어교육도시·제주시 거주.',
      overview_zh: 'SJA Jeju — 加拿大式以寄宿为主。走读学生居于英语教育城 · 济州市。',
      condos: JEJU_CONDOS },
  ],
  'chadwick-songdo': [
    { area_ko: '송도 국제업무지구', area_zh: '松岛国际商务区',
      overview_ko: 'Chadwick Songdo — 송도 IBD. 송도 신축 콘도 클러스터.',
      overview_zh: 'Chadwick Songdo — 松岛 IBD。松岛新建公寓聚集区。',
      condos: SONGDO_CONDOS },
  ],
};

