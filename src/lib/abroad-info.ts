/**
 * 해외 국제학교 정보 — 동남아(가성비) vs 영미권(프리미엄) 비교 데이터.
 *
 * 학비 범위·생활비는 2025-2026 시점 일반 시장 추정.
 * 정확한 금액은 학교 공식 발표·운영자 검증 데이터 참고.
 */
export type Region = 'sea' | 'anglo';

export interface CountryData {
  id: string;
  flag: string;
  ko_name: string;
  zh_name: string;
  region: Region;
  tuition_range_usd: [number, number];          // 연 학비
  family_living_monthly_usd: [number, number];  // 4인 가족 월 생활비
  popular_visas_ko: string[];
  popular_visas_zh: string[];
  curriculum: string[];
  operator_proximity: 'high' | 'medium' | 'low'; // 운영자 거주·방문 가능성
  pros_ko: string[];
  pros_zh: string[];
  cons_ko: string[];
  cons_zh: string[];
  tagline_ko: string;
  tagline_zh: string;
}

export const COUNTRIES: CountryData[] = [
  // ─── 동남아 (가성비) ───
  {
    id: 'malaysia', flag: '🇲🇾', ko_name: '말레이시아', zh_name: '马来西亚', region: 'sea',
    tuition_range_usd: [6000, 28000],
    family_living_monthly_usd: [1500, 3500],
    popular_visas_ko: ['MM2H (5년)', '학생 비자'],
    popular_visas_zh: ['MM2H(5 年)', '学生签证'],
    curriculum: ['IB', 'British', 'American', 'Australian'],
    operator_proximity: 'high',
    pros_ko: ['동남아 최고 학비 가성비', '영어 공용 + 다국적 환경', '한국 직항 6~7시간', '운영자 거주 → 1:1 상담 가능', 'MM2H 학부모 비자 활용'],
    pros_zh: ['东南亚最高性价比', '英语通用 + 多元文化', '飞韩国直达 6~7 小时', '站长本地居住,可 1:1 咨询', 'MM2H 家长签证'],
    cons_ko: ['연중 더운 기후', 'KL 시내 교통 정체', '의료 시스템 한국과 차이', '인터넷 속도 지역별 격차'],
    cons_zh: ['常年炎热', '吉隆坡市内拥堵', '医疗与韩国有差异', '网络速度因地区不同'],
    tagline_ko: '동남아 가성비 #1, 운영자 직접 거주',
    tagline_zh: '东南亚性价比第一,站长本地居住',
  },
  {
    id: 'thailand', flag: '🇹🇭', ko_name: '태국', zh_name: '泰国', region: 'sea',
    tuition_range_usd: [8000, 32000],
    family_living_monthly_usd: [2000, 4500],
    popular_visas_ko: ['Thailand Privilege', 'LTR', '학생 비자'],
    popular_visas_zh: ['Thailand Privilege', 'LTR', '学生签证'],
    curriculum: ['IB', 'British', 'American'],
    operator_proximity: 'medium',
    pros_ko: ['의료 인프라 동남아 최고', '방콕 도시 인프라 우수', 'Elite 비자 절차 단순', '한식·아시아 음식 접근성'],
    pros_zh: ['医疗东南亚领先', '曼谷基建完善', 'Elite 签证流程简单', '韩餐·亚洲菜可及性高'],
    cons_ko: ['방콕 교통 (운영자 비선택 이유)', '학비 말레이시아 대비 약간 비쌈', 'Elite 일시 납부 부담', '치앙마이 학교 선택지 제한'],
    cons_zh: ['曼谷交通(站长未选原因)', '学费略高于马来', 'Elite 一次性付清门槛', '清迈学校选择有限'],
    tagline_ko: '의료·인프라 우수, Elite 비자 단순',
    tagline_zh: '医疗·基建优秀,Elite 签证简单',
  },
  {
    id: 'singapore', flag: '🇸🇬', ko_name: '싱가포르', zh_name: '新加坡', region: 'sea',
    tuition_range_usd: [20000, 50000],
    family_living_monthly_usd: [4000, 8000],
    popular_visas_ko: ['Employment Pass', 'Permanent Resident'],
    popular_visas_zh: ['Employment Pass', 'Permanent Resident'],
    curriculum: ['IB', 'British', 'American', 'Singaporean'],
    operator_proximity: 'medium',
    pros_ko: ['동남아 최고 교육 환경', '치안·인프라·의료 모두 최상', '영어 + 중국어 환경', 'NUS·NTU + 아이비/옥스브리지 진학 우수'],
    pros_zh: ['东南亚最佳教育环境', '治安·基建·医疗一流', '英语 + 中文环境', 'NUS·NTU + 常春藤/牛剑升学优秀'],
    cons_ko: ['학비·생활비 동남아 최고', '비자 진입 장벽 (EP SGD 5,600+)', '주거비 매우 비쌈', 'PR 심사 까다로움 + 군 복무 (NS)'],
    cons_zh: ['学费·生活成本东南亚最高', '签证门槛(EP SGD 5,600+)', '住房成本极高', 'PR 严格 + 兵役(NS)'],
    tagline_ko: '동남아 최고 교육 환경 (가성비 X)',
    tagline_zh: '东南亚最佳教育(性价比一般)',
  },
  {
    id: 'vietnam', flag: '🇻🇳', ko_name: '베트남', zh_name: '越南', region: 'sea',
    tuition_range_usd: [10000, 30000],
    family_living_monthly_usd: [1800, 4000],
    popular_visas_ko: ['취업 비자 (DT)', '학생 비자'],
    popular_visas_zh: ['工作签证(DT)', '学生签证'],
    curriculum: ['IB', 'British', 'American'],
    operator_proximity: 'low',
    pros_ko: ['동남아 신흥 시장 (한국 기업 다수)', '학비 적정', '한국과 시차·접근성 좋음', '호치민·하노이 국제학교 빠르게 성장'],
    pros_zh: ['东南亚新兴市场(韩企众多)', '学费适中', '时差·交通便利', '胡志明·河内国际学校快速发展'],
    cons_ko: ['학부모 비자 옵션 제한적', '의료 인프라 약함', '교통 카오스', '국제학교 역사 짧음 (졸업 사례 적음)'],
    cons_zh: ['家长签证选项有限', '医疗较弱', '交通混乱', '国际学校历史短(毕业案例少)'],
    tagline_ko: '신흥 시장, 한국 기업 거점',
    tagline_zh: '新兴市场,韩企集聚地',
  },

  // ─── 영미권 (프리미엄) ───
  {
    id: 'usa', flag: '🇺🇸', ko_name: '미국', zh_name: '美国', region: 'anglo',
    tuition_range_usd: [55000, 90000],
    family_living_monthly_usd: [4000, 10000],
    popular_visas_ko: ['F-1 학생 비자'],
    popular_visas_zh: ['F-1 学生签证'],
    curriculum: ['American', 'IB', 'AP'],
    operator_proximity: 'low',
    pros_ko: ['보딩스쿨 최상위 (Phillips Andover · Exeter · Choate 등)', '미국 대학 진학 직결', 'AP·SAT 자연스러운 환경', '다양한 스포츠·예술 시설'],
    pros_zh: ['寄宿学校最高层级(Phillips Andover · Exeter · Choate 等)', '美国大学申请直通', 'AP·SAT 自然环境', '体育·艺术设施丰富'],
    cons_ko: ['학비 동남아의 3~5배', 'F-1 비자 갱신·인터뷰 까다로움', '한국과 시차 큼', '학부모 동반 어려움'],
    cons_zh: ['学费为东南亚的 3~5 倍', 'F-1 续签与面试严格', '与韩国时差大', '家长难陪读'],
    tagline_ko: '보딩스쿨 최상위, 미국 대학 직결',
    tagline_zh: '顶尖寄宿,美国大学直通',
  },
  {
    id: 'uk', flag: '🇬🇧', ko_name: '영국', zh_name: '英国', region: 'anglo',
    tuition_range_usd: [45000, 75000],
    family_living_monthly_usd: [3500, 8000],
    popular_visas_ko: ['Student Visa (Child)'],
    popular_visas_zh: ['Student Visa(未成年)'],
    curriculum: ['British (A-Level · GCSE)', 'IB'],
    operator_proximity: 'low',
    pros_ko: ['보딩스쿨 전통 (Eton · Harrow · Winchester 등)', '옥스브리지 진학 트랙', 'A-Level / GCSE 정통 환경', '미국 대비 학비 합리적'],
    pros_zh: ['寄宿传统(Eton · Harrow · Winchester 等)', '牛剑升学路径', 'A-Level / GCSE 正统', '学费比美国合理'],
    cons_ko: ['학비 + 기숙비 + 항공권 부담', '비자 절차 (UKVI)', '어두운 겨울 날씨', '학부모 동반 비자 제한'],
    cons_zh: ['学费 + 寄宿费 + 机票负担', '签证流程(UKVI)', '冬季阴暗', '家长陪读签证受限'],
    tagline_ko: '옥스브리지 트랙의 정통',
    tagline_zh: '牛剑路径正统',
  },
  {
    id: 'canada', flag: '🇨🇦', ko_name: '캐나다', zh_name: '加拿大', region: 'anglo',
    tuition_range_usd: [25000, 50000],
    family_living_monthly_usd: [3000, 6000],
    popular_visas_ko: ['Study Permit', 'Visitor Record (학부모)'],
    popular_visas_zh: ['Study Permit', 'Visitor Record(家长)'],
    curriculum: ['Canadian (Provincial)', 'IB'],
    operator_proximity: 'low',
    pros_ko: ['공립·사립 다양한 옵션', '미국·영국 대비 학비 저렴', '학부모 동반 가능 (조건부)', '졸업 후 영주권 트랙'],
    pros_zh: ['公立·私立多样', '学费低于美英', '家长可陪读(有条件)', '毕业后移民通道'],
    cons_ko: ['주별 입학·학비 차이', '겨울 추위', '국제학생 비율 높은 학교 주의', '명문 보딩 수 적음'],
    cons_zh: ['各省入学·学费差异', '冬季严寒', '需注意国际生比例', '顶尖寄宿数量少'],
    tagline_ko: '공립·사립 균형, 학부모 동반 가능',
    tagline_zh: '公私立平衡,家长可陪读',
  },
  {
    id: 'australia', flag: '🇦🇺', ko_name: '호주', zh_name: '澳大利亚', region: 'anglo',
    tuition_range_usd: [20000, 45000],
    family_living_monthly_usd: [3000, 6500],
    popular_visas_ko: ['Student Visa (500)', 'Student Guardian Visa (590)'],
    popular_visas_zh: ['Student Visa(500)', 'Student Guardian Visa(590)'],
    curriculum: ['Australian', 'IB'],
    operator_proximity: 'low',
    pros_ko: ['G8 진학 (Melbourne · Sydney 등)', '학부모 동반 비자 (590) 가능', '한국과 시차 1~2시간', '따뜻한 기후'],
    pros_zh: ['八大升学(Melbourne · Sydney 等)', '家长陪读签证(590)', '与韩国时差 1~2 小时', '气候温暖'],
    cons_ko: ['학비 점진 상승', '국제학생 비중 매우 높음 (학교별 차이)', '미·영·캐 대비 명문 보딩 적음', 'PR 까다로움'],
    cons_zh: ['学费持续上涨', '国际生比重很高', '顶尖寄宿少于美英加', 'PR 较难'],
    tagline_ko: 'G8 진학 + 가족 동반 가능',
    tagline_zh: '八大升学 + 家长可陪读',
  },
];

export const ABROAD_FAQS = [
  {
    q_ko: '동남아 학교에서 영미권 대학 진학이 가능한가?',
    a_ko: '가능합니다. 동남아 IB · British · American 학교는 옥스브리지 · 아이비 · G8 등 영미권 대학에 매년 합격생을 배출합니다. 동남아 학교의 핵심 정체성은 "영미권 대학을 위한 가성비 경로" 입니다. 학비 + 항공권 + 자녀 영어 환경 적응을 합산하면 영미권 직접보다 효율적인 경우가 많습니다.',
    q_zh: '从东南亚学校能升入英美澳加大学吗?',
    a_zh: '可以。东南亚 IB · British · American 学校每年都有学生升入牛剑 · 常春藤 · 八大。东南亚的核心定位是「通往英美大学的高性价比路径」。学费 + 机票 + 子女英语适应综合考虑,常优于直接英美。',
  },
  {
    q_ko: '동남아 vs 영미권 — 학비 차이는 얼마나?',
    a_ko: '동남아 국제학교 학비는 영미권 보딩스쿨의 약 1/3 ~ 1/2 수준입니다. 말레이시아 평균 $15,000~$25,000 / 년 vs 미·영 보딩 $55,000~$80,000 / 년. 생활비·항공권·학부모 동반 가능 여부까지 합산하면 실질 차이는 더 큽니다.',
    q_zh: '东南亚 vs 英美澳加 — 学费差距?',
    a_zh: '东南亚国际学校学费约为英美寄宿的 1/3 ~ 1/2。马来西亚平均 $15,000~$25,000 / 年 vs 美英寄宿 $55,000~$80,000 / 年。加上生活费 · 机票 · 是否可陪读,实际差距更大。',
  },
  {
    q_ko: '자녀 영어 수준이 낮은데 어디부터 시작하면 좋나?',
    a_ko: '저학년(6~9세)은 동남아 IB 또는 British 학교가 영어 환경 적응에 유리합니다. 학비 부담이 낮아 적응 기간 1~2년을 확보하기 쉽습니다. 중학년·고학년은 ESL 프로그램이 있는 학교 우선 검토. 영미권 직접 보딩은 영어 + 자기관리 능력 갖춘 후가 안전합니다.',
    q_zh: '孩子英语较弱,从哪开始?',
    a_zh: '低年级(6~9 岁)优选东南亚 IB 或 British 学校适应英语环境。学费较低,适应期 1~2 年容易承担。中高年级优先选有 ESL 项目的学校。英美寄宿宜在英语扎实 + 自理能力具备后再考虑。',
  },
  {
    q_ko: '말레이시아 vs 태국 — 학부모에게 어느 곳이 유리한가?',
    a_ko: '둘 다 장단점이 있습니다. 말레이시아는 MM2H 학부모 비자 + 학비 가성비 + 영어 공용이 강점, 태국은 Elite 비자 단순함 + 의료 인프라 + 도시 인프라가 강점. 운영자(데이비드)는 자녀 학교 + MM2H + 한국인 학부모 네트워크 측면에서 말레이시아를 선택했고, 태국은 방콕(교통)·파타야(환경) 이유로 비선택했습니다.',
    q_zh: '马来西亚 vs 泰国 — 哪个对家长更好?',
    a_zh: '各有长短。马来西亚优势:MM2H 家长签证 + 学费性价比 + 英语通用。泰国优势:Elite 签证简单 + 医疗 + 城市基建。站长 David 综合子女学校 + MM2H + 韩国家长网络选择了马来西亚,曼谷因交通、芭提雅因环境未选。',
  },
  {
    q_ko: '한국에서 직접 영미권 가는 것 vs 동남아 거쳐 가는 것?',
    a_ko: '자녀 학년·영어 수준·예산에 따라 다릅니다. 일반 권장 트랙: (1) 저학년 한국 → 동남아 IB G1-G10 → 영미권 G11-G12 (디플로마) → 영미권 대학. (2) 동남아 G1-G12 졸업 → 영미권 대학. 한국에서 직접 영미권 G7 이전 진학은 자녀 적응 + 학부모 동반 면에서 부담이 큽니다.',
    q_zh: '从韩国直接英美 vs 经东南亚?',
    a_zh: '取决于孩子年级·英语·预算。一般推荐路径:(1) 低年级韩国 → 东南亚 IB G1-G10 → 英美 G11-G12(文凭)→ 英美大学;(2) 东南亚 G1-G12 毕业 → 英美大学。从韩国直接英美 G7 之前,孩子适应与家长陪读负担较大。',
  },
];
