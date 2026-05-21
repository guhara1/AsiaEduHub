/**
 * 학교 유형별 (커리큘럼·운영 형태) 페이지 콘텐츠.
 */

export interface SchoolTypeInfo {
  id: 'boarding' | 'ib' | 'british' | 'american';
  flag_emoji: string;
  name_ko: string; name_zh: string;
  tagline_ko: string; tagline_zh: string;
  /** 시스템 개요 */
  overview_ko: string; overview_zh: string;
  /** 누구를 위한 옵션인가 */
  who_for_ko: string[]; who_for_zh: string[];
  /** 장점 */
  pros_ko: string[]; pros_zh: string[];
  /** 단점·주의 */
  cons_ko: string[]; cons_zh: string[];
  /** 학비 / 비용 */
  cost_ko: string; cost_zh: string;
  /** 대표 학교·커리큘럼 */
  notable_ko: string; notable_zh: string;
  /** 운영자 한 줄 추천 */
  recommendation_ko: string; recommendation_zh: string;
  faqs: { q_ko: string; q_zh: string; a_ko: string; a_zh: string }[];
}

export const SCHOOL_TYPE_INFO: Record<string, SchoolTypeInfo> = {
  boarding: {
    id: 'boarding', flag_emoji: '🏫',
    name_ko: '보딩스쿨 (기숙)',
    name_zh: '寄宿学校',
    tagline_ko: '자녀가 학교 내 기숙사 거주 — 영국·미국·동남아 명문 보딩 비교',
    tagline_zh: '子女校内宿舍居住 — 英美东南亚名校寄宿对比',
    overview_ko:
      '보딩스쿨은 자녀가 학교 내 기숙사에 거주하면서 학업·생활을 하는 학교. 영국식 Public School 전통에서 시작 (Eton·Harrow 등 500년+), 현재 미국·캐나다·호주·동남아까지 확장. 학년 = 보통 Year 7 (한국 초6) 또는 Year 9 (중3) 부터 입학.',
    overview_zh:
      '寄宿学校 = 子女住校内宿舍学习生活。源自英国 Public School 传统 (Eton · Harrow 等 500 年+),现扩展到美国 · 加拿大 · 澳大利亚 · 东南亚。入学时点常为 Year 7 (韩小 6) 或 Year 9 (初 3)。',
    who_for_ko: [
      '자녀가 독립심이 강하고 학업 집중력 우수',
      '학부모가 자녀와 떨어져 사는 게 가족 우선순위에 맞음',
      '학부모가 해외 거주 어려운 직업·사정',
      '자녀가 옥스브리지·아이비 등 명문 대학 진학 목표',
      '자녀가 스포츠·예술 등 다양한 활동 본격 추구',
    ],
    who_for_zh: [
      '子女独立性强,学业专注度高',
      '父母与子女分居符合家庭优先级',
      '父母因职业 · 处境难赴海外居住',
      '子女目标为牛剑 · 常春藤等名校',
      '子女投入体育 · 艺术等多元活动',
    ],
    pros_ko: [
      '학교 안에서 학업·생활·인적 네트워크 모두 형성',
      '교사·튜터가 24시간 가까이 — 학업 지원 최상',
      '아이비·옥스브리지 진학 트랙 정통',
      '자녀의 독립심·자기 관리 능력 강화',
      '학교별 100~500년+ 전통 + 동문 네트워크',
    ],
    pros_zh: [
      '校内学业 · 生活 · 人脉一体',
      '教师 · 导师 24 小时邻近 — 学业支持极致',
      '常春藤 · 牛剑直通路径',
      '强化子女独立 · 自理能力',
      '各校 100-500 年+ 传统 + 校友网络',
    ],
    cons_ko: [
      '학비 + 기숙비 — 연 USD $50K~$80K 수준',
      '자녀와 부모 떨어져 사는 정서적 부담',
      '자녀 정서 케어 학교에 위탁 — 가족 결속 약화 가능',
      '귀국 비용 + 방학 동안 자녀 위치 (보호자 부재 시)',
      '학년 9~13 (중3~고3) 입학이 일반 — 한국 학년에서 이미 진입 어려운 시점',
    ],
    cons_zh: [
      '学费 + 寄宿费 — 年 USD $50K-80K',
      '与父母分居的情感负担',
      '子女情感关怀委托学校 — 家庭凝聚力可能弱化',
      '回国费 + 假期子女去向 (无监护人)',
      'Y9-13 (初 3-高 3) 入学常态 — 韩国学年已难进入时点',
    ],
    cost_ko: '연 학비 + 기숙비 USD $50,000~$80,000 (미국·영국 명문). 동남아 보딩 (말레이시아 Epsom·태국 Rugby·UCSI Springhill 등) USD $20K~$30K. 추가 비용 (도서·교복·여행·소비) $5K~$10K.',
    cost_zh: '年学费 + 寄宿费 USD $50K-80K (美英名校)。东南亚寄宿 (马 Epsom · 泰 Rugby · UCSI Springhill) USD $20K-30K。另需 $5K-10K (书 · 校服 · 旅行 · 消费)。',
    notable_ko:
      '영국: Eton · Harrow · Westminster · Winchester · Charterhouse. 미국: Phillips Andover · Exeter · Choate · Deerfield. 호주: Geelong Grammar · Scotch College. 동남아: Epsom Malaysia · Rugby School Thailand · UCSI Springhill (포트딕슨) · King Henry VIII College.',
    notable_zh:
      '英国:Eton · Harrow · Westminster · Winchester · Charterhouse。美国:Phillips Andover · Exeter · Choate · Deerfield。澳:Geelong Grammar · Scotch College。东南亚:Epsom Malaysia · Rugby School Thailand · UCSI Springhill · King Henry VIII College。',
    recommendation_ko:
      '자녀가 독립심이 강하고 학업 우수, 학부모가 해외 거주 못 하는 사정이면 보딩 추천. 단, 자녀 정서 케어 + 가족 결속을 우선시한다면 학부모 동반 비자 옵션 (호주 590 · 캐나다 Visitor Record) 또는 동남아 데이스쿨이 더 합리적.',
    recommendation_zh:
      '子女独立 · 学业优秀, 父母难赴外居 → 寄宿。但若优先子女情感关怀 + 家庭凝聚, 父母陪同签证 (澳 590 · 加 Visitor Record) 或东南亚走读更合理。',
    faqs: [
      { q_ko: '보딩 입학 가능 학년은?', q_zh: '寄宿入学年级?', a_ko: '미국·영국 보통 Year 7 (한국 초6) 또는 Year 9 (중3) 부터. Year 12 (고1, A-Level 시작) 입학 옵션도 있음 (16+). 동남아 보딩은 Year 5~6 부터 가능한 학교 다수.', a_zh: '美英常态 Year 7 (韩小 6) 或 Year 9 (初 3)。Year 12 (高 1, A-Level 起) 入学选项也有 (16+)。东南亚寄宿多 Year 5-6 起。' },
      { q_ko: '방학 동안 자녀는 어디 있나?', q_zh: '假期子女去向?', a_ko: '단기 방학 (1주~2주) = 학교 기숙사에 남거나, 보호자 호스트 가족과 거주. 장기 방학 (여름·크리스마스) = 한국 귀국이 일반. 비행기 비용 연 $3K~$5K 별도.', a_zh: '短假 (1-2 周) = 留宿或寄宿 host 家庭。长假 (暑假 · 圣诞) = 多回韩。机票年 $3K-5K。' },
      { q_ko: '동남아 보딩과 미·영 보딩 차이?', q_zh: '东南亚寄宿 vs 美英寄宿差异?', a_ko: '학비 1/2~1/3, 자녀 거리 가까움 (시차 1~2시간), 한국 가족 자주 방문 가능. 단, 대학 진학 트랙은 미·영 보딩이 우세 (특히 아이비·옥스브리지). 동남아 보딩은 한국·중국·일본 학생 비율 ↑ → 영연방·아시아 명문 대학 트랙.', a_zh: '学费 1/2-1/3, 距韩近 (时差 1-2 小时), 家庭常访。但升学路径美英寄宿更优 (尤其常春藤 · 牛剑)。东南亚寄宿韩中日学生比例 ↑ → 英联邦 · 亚洲名校路径。' },
    ],
  },

  ib: {
    id: 'ib', flag_emoji: '🌍',
    name_ko: 'IB 학교 (International Baccalaureate)',
    name_zh: 'IB 学校 (International Baccalaureate)',
    tagline_ko: '전 세계 대학이 인정하는 국제 표준 커리큘럼 — PYP·MYP·DP 3단계',
    tagline_zh: '全球大学认可的国际标准课程 — PYP · MYP · DP 三阶段',
    overview_ko:
      'IB (International Baccalaureate) = 1968년 스위스 제네바에서 시작한 국제 표준 커리큘럼. 4단계: PYP (Primary Years, 3~12세) → MYP (Middle Years, 11~16세) → DP (Diploma, 16~19세) → CP (Career-related, 직업). DP 졸업장 = 전 세계 대학에서 정식 입학 자격 인정.',
    overview_zh:
      'IB = 1968 年瑞士日内瓦发起的国际标准课程。四阶段:PYP (3-12 岁) → MYP (11-16 岁) → DP (16-19 岁) → CP (职业方向)。DP 毕业证全球大学认可。',
    who_for_ko: [
      '자녀가 여러 국가 대학을 옵션으로 두고 싶음',
      '자녀가 융합·탐구·자기 주도 학습을 즐기는 타입',
      '학부모가 향후 거주국 변경 가능성 있음',
      'A-Level처럼 과목 3~4개 집중 vs IB 6과목 균형 — 후자 선호',
    ],
    who_for_zh: [
      '子女希望多国大学选项',
      '子女享受融合 · 探究 · 自主学习',
      '父母未来居住国可能变更',
      '相对 A-Level 3-4 门集中, 偏好 IB 6 门均衡',
    ],
    pros_ko: [
      '전 세계 대학 정식 입학 자격 — 영국·미국·호주·캐나다·유럽·아시아 모두',
      '6개 과목 균형 (모국어·외국어·인문·과학·수학·예술) + TOK·EE·CAS',
      '비판적 사고·연구·글쓰기 능력 강화 — 대학 학습 연결',
      '아시아 대학(서울대·도쿄대·홍콩대) 도 IB 점수 우대 인정',
      '학년 (PYP·MYP) 단계 입학이 부드러움',
    ],
    pros_zh: [
      '全球大学正式入学资格 — 英美澳加欧亚通用',
      '6 门均衡 (母语 · 外语 · 人文 · 科学 · 数学 · 艺术) + TOK · EE · CAS',
      '强化批判思维 · 研究 · 写作 — 衔接大学学习',
      '亚洲大学 (首尔大 · 东京大 · 港大) 也优待 IB',
      'PYP · MYP 阶段入学顺畅',
    ],
    cons_ko: [
      'DP 학업 부담 매우 강 (6과목 + EE 4,000자 논문 + CAS 활동)',
      '점수 시스템 1~7점 × 6과목 + 3점 TOK·EE = 만점 45점, 평균 30~32점',
      'IB 운영 학교 학비 비교적 높음 (정통 IB 인증 비용)',
      '동남아 일부 학교는 IB 인증 받았지만 평균 점수 27 미만 — 명문대 진학 제한',
      '한국 대학 입학 (정시) 직접 활용 어려움',
    ],
    cons_zh: [
      'DP 学业负担极强 (6 门 + EE 4,000 字论文 + CAS 活动)',
      '评分 1-7 × 6 + 3 TOK · EE = 满分 45, 平均 30-32',
      'IB 学校学费偏高 (正统 IB 认证成本)',
      '东南亚部分学校虽认证但平均 < 27 — 名校升学受限',
      '韩国大学正常入学难直接活用',
    ],
    cost_ko: '학비 USD $20,000~$40,000/년 (IB 정통 운영 학교 기준). PYP·MYP는 일반 국제학교 학비와 비슷, DP는 약 10~15% 더 비싼 경향.',
    cost_zh: '学费 USD $20K-40K / 年 (IB 正统学校)。PYP · MYP 与普通国际学校相当, DP 偏高 10-15%。',
    notable_ko:
      '동남아 IB 강세 학교: NEXUS · ISKL · MKIS · KIS Bangkok · ISHCMC · BVIS Hanoi · UWC SEA (Singapore IB 평균 36.3) · HCIS (Singapore IB 평균 37.9 — 동남아 최고). 한국: NLCS Jeju · KIS Jeju · Chadwick Songdo · GSIS · BHA.',
    notable_zh:
      '东南亚 IB 强校:NEXUS · ISKL · MKIS · KIS Bangkok · ISHCMC · BVIS Hanoi · UWC SEA (新加坡 IB 平均 36.3) · HCIS (新加坡 IB 平均 37.9 — 东南亚最高)。韩国:NLCS Jeju · KIS Jeju · Chadwick Songdo · GSIS · BHA。',
    recommendation_ko:
      '자녀가 글로벌 대학 옵션 모두 열어두고 싶고 다양한 과목 균형 학습이 맞으면 IB 추천. 단, DP 학업 부담을 견딜 수 있어야 함. 학교 선택 시 IB Diploma 평균 점수 30+ 학교를 골라야 명문대 진학 가능성 ↑.',
    recommendation_zh:
      '子女希望全球大学全开,适合均衡学习 → IB。但需能承担 DP 学业负担。选校时优选 IB Diploma 平均 30+ 学校以提高名校升学率。',
    faqs: [
      { q_ko: 'IB Diploma 점수 평가 기준?', q_zh: 'IB Diploma 评分?', a_ko: '6과목 × 1~7점 + TOK·EE 0~3점 = 만점 45점. 일반적으로: 35+ = 영미권 명문, 38+ = 옥스브리지·아이비 가능, 40+ = 글로벌 최상위. 합격 기준 24점.', a_zh: '6 门 × 1-7 + TOK · EE 0-3 = 满分 45。常态:35+ = 英美名校, 38+ = 牛剑 · 常春藤可能, 40+ = 全球顶级。合格线 24。' },
      { q_ko: '한국 대학 진학에 IB 점수 인정되나?', q_zh: '韩国大学认 IB 吗?', a_ko: '서울대·연세대·고려대 모두 IB 점수 정식 인정 (특례 전형). 단, 한국 정시 (수능) 와 별도 트랙. IB 활용 시 영문 학교생활기록부 + DP 점수 제출.', a_zh: '首尔大 · 延世 · 高丽均认 IB (特殊入学)。但与韩国正常入学 (修能) 分轨。需英文成绩单 + DP 分数。' },
      { q_ko: 'IB DP 와 A-Level 중 어느 게 더 어렵나?', q_zh: 'IB DP 与 A-Level 哪个更难?', a_ko: '학업 폭은 IB DP가 넓음 (6과목 균형) → 평균 부담 더 큼. 깊이는 A-Level이 깊음 (3~4과목 집중). 옥스브리지 진학 시 A-Level이 다소 유리하다는 전통적 평가도 있음.', a_zh: 'IB DP 学业面更广 (6 门均衡) → 平均负担更大。A-Level 深度更深 (3-4 门集中)。牛剑升学传统认为 A-Level 稍占优势。' },
    ],
  },

  british: {
    id: 'british', flag_emoji: '🇬🇧',
    name_ko: '영국식 (IGCSE · A-Level · GCSE)',
    name_zh: '英式 (IGCSE · A-Level · GCSE)',
    tagline_ko: '영국 명문 + 옥스브리지 진학 트랙. Cambridge International / Pearson Edexcel 2대 인증',
    tagline_zh: '英国名校 + 牛剑升学路径。Cambridge International / Pearson Edexcel 两大认证',
    overview_ko:
      '영국식 = 영국 국가 교육 시스템을 해외에서 운영. KS1·KS2 (초등) → KS3 (중1·중2) → IGCSE/GCSE (Year 10~11 = 한국 중3~고1) → A-Level (Year 12~13 = 한국 고2~고3). UCAS 통해 영국 대학 진학.',
    overview_zh:
      '英式 = 海外运营英国国家课程。KS1 · KS2 (小学) → KS3 (初 1-2) → IGCSE/GCSE (Y10-11 = 韩初 3-高 1) → A-Level (Y12-13 = 韩高 2-3)。通过 UCAS 升英国大学。',
    who_for_ko: [
      '자녀가 옥스브리지·UK Russell Group 대학 목표',
      '자녀가 3~4과목 집중 학습이 6과목 균형보다 더 잘 맞는 타입',
      '학부모가 영국식 학업 강도 + 시험 중심 평가 선호',
      '자녀가 인문·과학 특정 분야 깊게 파고드는 성향',
    ],
    who_for_zh: [
      '子女目标牛剑 · UK Russell Group',
      '子女适合 3-4 门集中而非 6 门均衡',
      '父母偏好英式学业强度 + 考试导向评估',
      '子女对人文 · 科学特定领域钻研深入',
    ],
    pros_ko: [
      '옥스브리지 진학 명확한 트랙 (UCAS)',
      'A-Level 3과목 집중 → 대학 전공 직결',
      'IGCSE는 자녀 잠재력 1차 확인용 (Year 10~11)',
      'Cambridge International / Pearson Edexcel 양대 인증 — 전 세계 호환',
      '시험 중심 → 평가 명확',
    ],
    pros_zh: [
      '牛剑明确路径 (UCAS)',
      'A-Level 3 门集中 → 直通大学专业',
      'IGCSE 测试子女潜力 (Y10-11)',
      'Cambridge International / Pearson Edexcel 双认证 — 全球互认',
      '考试为主 → 评估明确',
    ],
    cons_ko: [
      'A-Level 3과목 선택이 대학 전공을 결정 — Year 10 시점 진로 결정 압박',
      '미국 대학 진학 시 SAT/AP 추가 응시 필요',
      '한국 대학 진학에는 추가 절차 (특례 전형)',
      'IB 대비 학업 폭이 좁아 융합 사고력 약화 가능',
    ],
    cons_zh: [
      'A-Level 3 门决定大学专业 — Y10 即面临升学决策',
      '美国大学需补 SAT/AP',
      '韩国大学需额外特殊入学',
      'IB 相比学业面较窄, 融合思维弱化',
    ],
    cost_ko: '학비 USD $10,000~$30,000/년 (학교 등급별). 영국 본교(Eton·Harrow 등)는 GBP £40K~£60K = USD $50K~$75K.',
    cost_zh: '学费 USD $10K-30K / 年。英国本校 (Eton · Harrow) GBP £40K-60K = USD $50K-75K。',
    notable_ko:
      '동남아 영국식 명문: Alice Smith (KL) · Epsom Malaysia · King Henry VIII College · BIS Hanoi · Shrewsbury Bangkok · Regents Pattaya · Garden International (KL) · ISP (Desa ParkCity). 한국: 외국인학교는 미국식 위주 — 영국식은 송도·제주 일부.',
    notable_zh:
      '东南亚英式名校:Alice Smith (KL) · Epsom Malaysia · King Henry VIII College · BIS Hanoi · Shrewsbury Bangkok · Regents Pattaya · Garden International · ISP。韩国:外国人学校以美式为主 — 英式仅松岛 · 济州部分。',
    recommendation_ko:
      '자녀가 영국·UK Russell Group 목표 + 3~4과목 집중 학습 타입 → 영국식 추천. 단, Year 10 시점 진로 결정 부담 + 미국 대학 동시 옵션 어려움 고려.',
    recommendation_zh:
      '子女目标英国 · UK Russell Group + 适合 3-4 门集中 → 英式推荐。但 Y10 即需决策升学方向, 美国大学并行难度高。',
    faqs: [
      { q_ko: 'A-Level 성적 등급은?', q_zh: 'A-Level 等级?', a_ko: 'A*·A·B·C·D·E·U 등급. A* 가 최고 (3과목 모두 A* = AAA). 옥스브리지 대부분 학과 AAA·A*AA 요구. Russell Group 대학 다수 AAB 이상.', a_zh: 'A* · A · B · C · D · E · U 等级。A* 最高 (3 门 A* = AAA)。牛剑多数学科要求 AAA · A*AA。Russell Group 多 AAB 以上。' },
      { q_ko: 'IGCSE vs GCSE 차이?', q_zh: 'IGCSE vs GCSE 差异?', a_ko: 'GCSE = 영국 본토. IGCSE = International GCSE, 해외 학교용. 내용·평가 동일, 다만 IGCSE는 외국어·국제 컨텍스트 강화. 영국 명문 대학 모두 동일 인정.', a_zh: 'GCSE = 英国本土。IGCSE = 国际版海外学校用。内容评价相同, IGCSE 强化外语 · 国际背景。英国名校均同等认可。' },
      { q_ko: 'UCAS 지원은 어떻게?', q_zh: 'UCAS 申请如何?', a_ko: 'Year 13 (고3) 가을에 UCAS 통해 최대 5개 영국 대학 지원. Personal Statement + 학교 추천서 + 예상 A-Level 점수 (predicted grades). 옥스브리지는 별도 마감 (10월) + 추가 시험·인터뷰.', a_zh: 'Y13 (高 3) 秋季通过 UCAS 申请最多 5 所英国大学。Personal Statement + 学校推荐 + A-Level 预估分。牛剑单独截止 (10 月) + 笔试 · 面试。' },
    ],
  },

  american: {
    id: 'american', flag_emoji: '🇺🇸',
    name_ko: '미국식 (American · AP)',
    name_zh: '美式 (American · AP)',
    tagline_ko: '미국 K-12 + AP 코스 → 아이비리그·미국 Top 50 직결. WASC 인증',
    tagline_zh: '美国 K-12 + AP 课程 → 常春藤 · 美国 Top 50 直通。WASC 认证',
    overview_ko:
      '미국식 = 미국 국가 교육 시스템 (주별 차이 있으나 큰 틀 동일). Elementary (K~5) → Middle (6~8) → High School (9~12). High School 졸업장 + AP·SAT/ACT 점수로 미국 대학 진학. WASC (Western Association of Schools and Colleges) 인증이 표준.',
    overview_zh:
      '美式 = 美国国家课程 (各州差异但框架同)。Elementary (K-5) → Middle (6-8) → High School (9-12)。高中毕业证 + AP · SAT/ACT 升美国大学。WASC (Western Association of Schools and Colleges) 认证为标准。',
    who_for_ko: [
      '자녀가 미국 대학 (특히 아이비리그·Top 50) 목표',
      '자녀가 다양한 과목 + 활동 균형이 영국식 시험 중심보다 잘 맞음',
      '자녀가 스포츠·예술·리더십 등 비학업 활동 본격 추구',
      '학부모가 미국 학사 일정 (9월~6월) 선호',
    ],
    who_for_zh: [
      '子女目标美国大学 (尤其常春藤 · Top 50)',
      '子女适合多门 + 活动均衡, 不偏好英式应试',
      '子女投入体育 · 艺术 · 领导力等课外',
      '父母偏好美国学期 (9 月-6 月)',
    ],
    pros_ko: [
      '아이비리그·Stanford·MIT 등 미국 명문 대학 직접 진학 트랙',
      'AP 코스 20+ → 대학 학점 미리 취득 가능',
      '평가 = 시험 + 과제 + 수업 참여 + 활동 종합 — 자녀 다면 발달',
      'GPA + SAT/ACT + Essay + Activities 종합 평가 — 시험 한 번에 결정되지 않음',
      '미국 보딩스쿨 (Phillips Andover·Exeter 등) 동문 네트워크',
    ],
    pros_zh: [
      '常春藤 · Stanford · MIT 等美国名校直通',
      'AP 课程 20+ → 提前修大学学分',
      '评估 = 考试 + 作业 + 课堂 + 活动综合 — 多面发展',
      'GPA + SAT/ACT + Essay + Activities 综合 — 不靠单次考试',
      '美国寄宿 (Phillips Andover · Exeter) 校友网络',
    ],
    cons_ko: [
      '학비 미국 보딩 USD $50K~$80K — 영국식·동남아 대비 가장 비쌈',
      'GPA·과외 활동 모두 4년 누적 — 한 학년 실수가 진학에 영향',
      '미국 외 국가 대학 진학 시 추가 절차 (영국: A-Level 시험 추가 또는 IB 트랙)',
      '주(State) 별 시스템 차이 — 학교 이동 시 학점 호환 복잡',
    ],
    cons_zh: [
      '美国寄宿学费 USD $50K-80K — 英式 · 东南亚之最',
      'GPA · 课外 4 年累积 — 一年失误影响升学',
      '美国外大学需额外手续 (英国:补 A-Level 或转 IB)',
      '各州系统差异 — 转校学分互认复杂',
    ],
    cost_ko: '학비 USD $13,000~$30,000/년 (동남아 데이스쿨). 미국 본토 보딩 USD $50K~$80K. WASC 인증 학교가 가장 안정적.',
    cost_zh: '学费 USD $13K-30K / 年 (东南亚走读)。美国本土寄宿 USD $50K-80K。WASC 认证学校最稳。',
    notable_ko:
      '동남아 미국식 명문: ISKL (KL) · MKIS · ASB (방콕) · ASB Green Valley · TAS (호치민) · AIS (호치민) · SAS (싱가포르 · AP 29과목 최다) · SAIS (싱가포르). 한국: SFS · YISS · KIS Seoul · Dwight Seoul · Chadwick Songdo. 미국 본토 보딩: Phillips Andover · Exeter · Choate · Deerfield.',
    notable_zh:
      '东南亚美式名校:ISKL (KL) · MKIS · ASB (曼谷) · ASB Green Valley · TAS (胡志明) · AIS (胡志明) · SAS (新加坡 · AP 29 门最多) · SAIS (新加坡)。韩国:SFS · YISS · KIS Seoul · Dwight Seoul · Chadwick Songdo。美国本土寄宿:Phillips Andover · Exeter · Choate · Deerfield。',
    recommendation_ko:
      '자녀 미국 대학 진학 + 다면 평가 (시험만이 아닌 활동·리더십) 가 맞으면 미국식 추천. 학비 부담이 가장 크므로 가족 예산 + 자녀 미국 대학 진학 가능성을 신중히 평가.',
    recommendation_zh:
      '子女美国大学 + 多面评估 (非单一应试) → 美式。学费负担最大, 家庭预算 + 子女美国大学可能性谨慎评估。',
    faqs: [
      { q_ko: 'AP 시험 점수 평가?', q_zh: 'AP 评分?', a_ko: '1~5점 (5점 최고). 4~5점 = 미국 대학 학점 인정. 아이비리그 합격생 평균 AP 5~7과목 응시 + 평균 4.5점 이상. AP 5+과목 응시는 최소 권장.', a_zh: '1-5 分 (5 最高)。4-5 = 美国大学认学分。常春藤合格生平均 AP 5-7 门 + 4.5+。建议至少 5 门。' },
      { q_ko: 'SAT vs ACT 어느 것이 좋나?', q_zh: 'SAT vs ACT 选哪个?', a_ko: '미국 대학 모두 두 시험 동등 인정. 학생 성향 차이 — SAT는 분석·읽기 중심, ACT는 빠른 처리·과학 포함. 두 시험 모의 응시 후 점수 높은 쪽 선택 권장.', a_zh: '美国大学均等认。学生倾向不同 — SAT 偏分析 · 阅读, ACT 偏快速 · 含科学。建议两者模拟后选高分。' },
      { q_ko: '미국 대학 진학 = SAT 만으로 충분?', q_zh: '美国大学 = 仅 SAT 够吗?', a_ko: '아닙니다. GPA (4년 누적) + SAT/ACT + AP + Essay + Activities + Recommendations + Interview 종합. 명문 대학일수록 SAT 비중 낮고 종합 평가.', a_zh: '不够。GPA (4 年累积) + SAT/ACT + AP + Essay + Activities + Recommendations + Interview 综合。名校越优 SAT 比重越低, 综合评估。' },
    ],
  },
};

export const SCHOOL_TYPE_KEYS = ['boarding', 'ib', 'british', 'american'] as const;
