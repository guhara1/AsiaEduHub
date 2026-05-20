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

/** Subang / Sunway — Sunway·Taylor's·UCSI Subang·SJI 접근. */
export const SUBANG_CONDOS: NearbyCondo[] = [
  {
    name: 'Geo Sunway',
    distance_minutes: 8,
    tier: 'mid',
    rent_2br_usd: [700, 1000],
    rent_3br_usd: [1000, 1500],
    korean_parents: 'mid',
    chinese_parents: 'high',
    note_ko: 'Sunway Pyramid 인접. Sunway 그룹 학교 셔틀권. 중국 학부모 다수.',
    note_zh: 'Sunway Pyramid 邻近。Sunway 集团学校校车圈。中国家长众多。',
  },
  {
    name: 'Sunway Velocity Two',
    distance_minutes: 10,
    tier: 'premium',
    rent_2br_usd: [1100, 1500],
    rent_3br_usd: [1700, 2300],
    korean_parents: 'mid',
    chinese_parents: 'high',
    note_ko: '신축 럭셔리. 시설 최상. 한국·중국 학부모 모두 거주.',
    note_zh: '新建豪华。设施一流。韩中家长均有居住。',
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
    { area_ko: 'Bangsar · Damansara Heights', area_zh: 'Bangsar · Damansara 高地',
      overview_ko: 'Equine Park 캠퍼스(초등)·Jalan Bellamy 캠퍼스(중고등) 모두 KLCC·Bangsar 권. 영국·호주 외교관 가족 다수.',
      overview_zh: 'Equine Park (小学) · Jalan Bellamy (中学) 校区均位于 KLCC · Bangsar 圈。英澳外交家庭众多。',
      condos: BANGSAR_CONDOS },
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
    { area_ko: 'Cyberjaya · Putrajaya · Bandar Saujana Putra', area_zh: 'Cyberjaya · Putrajaya · Bandar Saujana Putra',
      overview_ko: 'Bandar Saujana Putra 캠퍼스 보딩 옵션. Day 학생은 Cyberjaya·Putrajaya 거주 다수.',
      overview_zh: 'Bandar Saujana Putra 校区有寄宿。Day 学生多居 Cyberjaya · Putrajaya。',
      condos: CYBERJAYA_CONDOS },
  ],
  'bskl': [
    { area_ko: 'Sri Hartamas · Mont Kiara', area_zh: 'Sri Hartamas · Mont Kiara',
      overview_ko: 'BSKL Sri Hartamas 캠퍼스 — 한·중·영국 외교관 가족 인근 거주.',
      overview_zh: 'BSKL Sri Hartamas 校区 — 韩中英外交家庭附近居住。',
      condos: SRI_HARTAMAS_CONDOS },
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
    { area_ko: 'Ampang · KLCC', area_zh: 'Ampang · KLCC',
      overview_ko: 'SJI International Ulu Klang 캠퍼스. Ampang·KLCC 차량 15~20분.',
      overview_zh: 'SJI International Ulu Klang 校区。Ampang · KLCC 车程 15-20 分钟。',
      condos: AMPANG_CONDOS },
  ],
  'nexus': [
    { area_ko: 'Putrajaya · Cyberjaya', area_zh: 'Putrajaya · Cyberjaya',
      overview_ko: 'Nexus Putrajaya 캠퍼스. 신도시 가족·정부 공무원 자녀 다수.',
      overview_zh: 'Nexus Putrajaya 校区。新城家庭 · 政府公务员子女众多。',
      condos: [...PUTRAJAYA_CONDOS, ...CYBERJAYA_CONDOS] },
  ],
  'sunway': [
    { area_ko: 'Sunway · Subang Jaya', area_zh: 'Sunway · Subang Jaya',
      overview_ko: 'Sunway 그룹 학교 — Sunway Pyramid·University 인근. 중국 학부모 매우 다수.',
      overview_zh: 'Sunway 集团学校 — Sunway Pyramid · University 邻近。中国家长众多。',
      condos: SUBANG_CONDOS },
  ],
  'isp': [
    { area_ko: 'Penang · Batu Ferringhi', area_zh: 'Penang · Batu Ferringhi',
      overview_ko: 'ISP Penang Tanjung Bungah. 페낭 북부 해변. 영국·일본·한국 가족 외국인 클러스터.',
      overview_zh: 'ISP Penang Tanjung Bungah。槟城北部海滩。英日韩外籍家庭聚集。',
      condos: [
        { name: 'Quayside Resort Condominiums', distance_minutes: 10, tier: 'premium', rent_2br_usd: [900, 1300], rent_3br_usd: [1400, 2000], korean_parents: 'mid', chinese_parents: 'mid', note_ko: '해변 리조트형. ISP·Uplands·Dalat 차량 10~20분.', note_zh: '海滨度假风。ISP · Uplands · Dalat 车程 10-20 分钟。' },
        { name: 'Straits Quay', distance_minutes: 8, tier: 'premium', rent_2br_usd: [800, 1200], rent_3br_usd: [1300, 1900], korean_parents: 'mid', chinese_parents: 'high', note_ko: '마리나·상가 일체. 화교 가족 다수.', note_zh: '码头 · 商场一体。华人家庭众多。' },
      ] },
  ],
  'aism': [
    { area_ko: 'Bukit Jelutong · Shah Alam', area_zh: 'Bukit Jelutong · Shah Alam',
      overview_ko: '호주식 커리큘럼. AISM Bukit Jelutong 캠퍼스. 호주·말레이 가족 다수.',
      overview_zh: '澳式课程。AISM Bukit Jelutong 校区。澳大利亚 · 马来家庭众多。',
      condos: [
        { name: 'D\'Banyan Residency', distance_minutes: 5, tier: 'mid', rent_2br_usd: [600, 900], rent_3br_usd: [900, 1300], korean_parents: 'low', chinese_parents: 'mid', note_ko: 'AISM 도보권. 호주식 커리큘럼 학부모 다수.', note_zh: 'AISM 步行可达。澳式课程家长众多。' },
      ] },
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
    { area_ko: 'Petaling Jaya · Bandar Utama', area_zh: 'Petaling Jaya · Bandar Utama',
      overview_ko: 'PJ 도심. 1 Utama 쇼핑몰 인접. 한·중 가족 다수.',
      overview_zh: 'PJ 市区。1 Utama 商场邻近。韩中家庭众多。',
      condos: [
        { name: 'Atria Damansara', distance_minutes: 8, tier: 'mid', rent_2br_usd: [700, 1000], rent_3br_usd: [1000, 1400], korean_parents: 'mid', chinese_parents: 'mid', note_ko: '신축 콘도. PJ 도심.', note_zh: '新建公寓。PJ 市区。' },
      ] },
  ],
  'tenby-setia-eco-park': [
    { area_ko: 'Setia Eco Park · Shah Alam', area_zh: 'Setia Eco Park · Shah Alam',
      overview_ko: 'Setia Eco Park 게이트 커뮤니티. 영국·말레이 가족 클러스터.',
      overview_zh: 'Setia Eco Park 封闭社区。英国 · 马来家庭聚集。',
      condos: [
        { name: 'Setia Eco Park 단독·타운하우스', distance_minutes: 5, tier: 'luxury', rent_2br_usd: [1500, 2500], rent_3br_usd: [2500, 4000], korean_parents: 'low', chinese_parents: 'mid', note_ko: '단지 내 단독·타운하우스. 학교 도보권.', note_zh: '社区内独栋 · 联排别墅。学校步行可达。' },
      ] },
  ],
  'help-international': [
    { area_ko: 'Subang Jaya · Damansara', area_zh: 'Subang Jaya · Damansara',
      overview_ko: 'HELP International Subang 캠퍼스 — Subang Jaya 도심.',
      overview_zh: 'HELP International Subang 校区 — Subang Jaya 市区。',
      condos: SUBANG_CONDOS },
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
    { area_ko: 'Bandar Sri Damansara · Kepong', area_zh: 'Bandar Sri Damansara · Kepong',
      overview_ko: 'KL 북서부. 말레이·중국 가족 다수. 한국 학부모 일부.',
      overview_zh: 'KL 西北部。马来 · 中国家庭众多。韩国家长部分。',
      condos: [
        { name: 'Sri Damansara Square', distance_minutes: 8, tier: 'mid', rent_2br_usd: [500, 800], rent_3br_usd: [800, 1200], korean_parents: 'low', chinese_parents: 'high', note_ko: '학교 차량 8~10분. 중국 학부모 다수.', note_zh: '学校车程 8-10 分钟。中国家长众多。' },
      ] },
  ],
  'ucsi-subang': [
    { area_ko: 'Subang Jaya · USJ', area_zh: 'Subang Jaya · USJ',
      overview_ko: 'UCSI Subang 캠퍼스. Subang Jaya 도심.',
      overview_zh: 'UCSI Subang 校区。Subang Jaya 市区。',
      condos: SUBANG_CONDOS },
  ],
  'oasis': [
    { area_ko: 'Ara Damansara · Petaling Jaya', area_zh: 'Ara Damansara · Petaling Jaya',
      overview_ko: 'Oasis International Ara Damansara 캠퍼스. PJ 서부 신축 콘도 클러스터.',
      overview_zh: 'Oasis International Ara Damansara 校区。PJ 西部新建公寓聚集区。',
      condos: [
        { name: 'Pacific Place Ara Damansara', distance_minutes: 5, tier: 'mid', rent_2br_usd: [700, 1000], rent_3br_usd: [1100, 1500], korean_parents: 'mid', chinese_parents: 'mid', note_ko: '학교 도보권. 한·중 학부모 일부.', note_zh: '学校步行可达。韩中家长部分。' },
      ] },
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

