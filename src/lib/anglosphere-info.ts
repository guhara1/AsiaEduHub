/**
 * 영미권 (Anglosphere) 4개국 상세 정보.
 * 모든 학교 이름·학비·시스템 = 공개 사실 + 운영자 시장 조사.
 * 환율: USD 1, GBP 1≈$1.25, AUD 1≈$0.65, CAD 1≈$0.73 (2026-05 시점).
 */

export interface AngloCountryInfo {
  id: 'usa' | 'uk' | 'canada' | 'australia';
  flag: string;
  name_ko: string; name_zh: string;
  tagline_ko: string; tagline_zh: string;
  tuition_local: string; // 현지 통화 학비
  tuition_usd: string;   // USD 환산
  /** 비자 정보 (자녀·학부모) */
  visa_ko: string; visa_zh: string;
  /** 입학 시험 */
  exams: string[];
  /** 대표 학교 (보딩 중심) */
  notable_schools: { name: string; location: string; note_ko: string; note_zh: string }[];
  /** 한국 학부모 관점 핵심 포인트 */
  key_points_ko: string[];
  key_points_zh: string[];
  /** 학비 시스템 설명 */
  system_ko: string;
  system_zh: string;
  /** 지원 타임라인 */
  timeline_ko: string;
  timeline_zh: string;
  /** 진학 기록 (Oxbridge / Ivy 등) */
  destinations_ko: string;
  destinations_zh: string;
  /** 한국 학부모 자주 묻는 질문 */
  faqs: { q_ko: string; q_zh: string; a_ko: string; a_zh: string }[];
}

export const ANGLOSPHERE_INFO: Record<string, AngloCountryInfo> = {
  usa: {
    id: 'usa', flag: '🇺🇸',
    name_ko: '미국 — 보딩스쿨·데이스쿨',
    name_zh: '美国 — 寄宿 · 走读',
    tagline_ko: '아이비리그·미국 Top 50 진학 직결. AP 정통 + 명문 보딩 인프라.',
    tagline_zh: '常春藤 · 美国 Top 50 升学直通。AP 正统 + 顶级寄宿基础设施。',
    tuition_local: '연 USD $50,000~$80,000 (보딩 기준)',
    tuition_usd: 'USD $50K~$80K',
    visa_ko: '자녀: F-1 학생 비자. 학부모 동반 비자(F-2) 가능하나 부모 취업 불가. 보딩스쿨은 사실상 자녀 단독 거주 모델.',
    visa_zh: '子女:F-1 学生签证。监护人陪同签证 (F-2) 可办但不许就业。寄宿学校实际为子女独居模式。',
    exams: ['SSAT (Secondary School Admission Test)', 'TOEFL iBT (보통 100+ 요구)', 'School-specific interview', 'Math placement'],
    notable_schools: [
      { name: 'Phillips Academy Andover (MA)', location: 'Massachusetts', note_ko: '1778 설립. 미국 보딩스쿨 1순위 종종 거론.', note_zh: '1778 创立。常被列为美国寄宿学校第一。' },
      { name: 'Phillips Exeter Academy (NH)', location: 'New Hampshire', note_ko: 'Harkness method (원탁 토론) 발상지.', note_zh: 'Harkness 圆桌讨论教学法发源地。' },
      { name: 'Choate Rosemary Hall (CT)', location: 'Connecticut', note_ko: 'JFK 모교. 인문학·예술 강함.', note_zh: 'JFK 母校。人文 · 艺术强势。' },
      { name: 'Deerfield Academy (MA)', location: 'Massachusetts', note_ko: '1797. 소규모·전통 보딩.', note_zh: '1797。小规模 · 传统寄宿。' },
      { name: 'Hotchkiss School (CT)', location: 'Connecticut', note_ko: '1891. 호숫가 캠퍼스. 아이비 진학 다수.', note_zh: '1891。湖畔校园。常春藤升学多。' },
      { name: 'Lawrenceville School (NJ)', location: 'New Jersey', note_ko: 'Princeton 인접. 학업 강도 매우 강.', note_zh: 'Princeton 邻近。学业强度极高。' },
      { name: "St. Paul's School (NH)", location: 'New Hampshire', note_ko: '100% 보딩. 전통 보딩 문화.', note_zh: '100% 寄宿。传统寄宿文化。' },
      { name: 'Groton School (MA)', location: 'Massachusetts', note_ko: 'FDR 모교. 소규모 명문.', note_zh: 'FDR 母校。小规模名校。' },
    ],
    key_points_ko: [
      '아이비리그·MIT·Stanford·Top 30 미국 대학 진학 직결',
      'AP 코스 20+ 운영, College Counseling 학생당 1:50',
      '여름방학 길어서 한국 가족 재회 용이',
      '학부모 학교 행사 참여 (Parents Weekend) 핵심 문화',
      'SAT/ACT 시험 학교 안에서 응시',
      '인종·국적 다양성 보통 30~50%',
    ],
    key_points_zh: [
      '常春藤 · MIT · Stanford · Top 30 美国大学直通',
      'AP 课程 20+,大学咨询师 1:50',
      '暑假长,韩国家庭团聚便利',
      '父母周末参与是核心文化',
      'SAT/ACT 校内应试',
      '种族 · 国籍多元约 30-50%',
    ],
    system_ko: '미국 K-12 = 유치원~12학년. 보딩스쿨은 보통 Grade 9 (Form III) 부터 시작. Grade 8까지는 데이스쿨이나 한국 영어유치원·국제유치원에서. AP는 Grade 10~12 사이 학교가 정한 과목 선택 수강 — 평균 5~12과목.',
    system_zh: '美国 K-12 = 幼儿园~12 年级。寄宿学校通常从 Grade 9 (Form III) 开始。Grade 8 前为走读或韩国英语幼儿园 · 国际幼儿园。AP 是 Grade 10-12 学校开设课程选修 — 平均 5-12 门。',
    timeline_ko: 'Grade 9 (한국 중3) 입학 = 지원 1년 전(중2 가을) SSAT·TOEFL 응시 + 학교 방문 시작. 1월 지원서 마감, 3월 합격 발표, 9월 입학.',
    timeline_zh: 'Grade 9 (韩国初三) 入学 = 申请前 1 年 (初二秋季) SSAT · TOEFL 应试 + 校访开始。1 月申请截止, 3 月放榜, 9 月入学。',
    destinations_ko: '명문 보딩 졸업생 약 25~40% 가 아이비리그·MIT·Stanford 진학. 평균 100% 4년제 대학 진학.',
    destinations_zh: '名校寄宿毕业生约 25-40% 升入常春藤 · MIT · Stanford。平均 100% 升入四年制大学。',
    faqs: [
      { q_ko: '미국 보딩스쿨 학비 외 추가 비용은?', q_zh: '美国寄宿学校学费外的额外费用?', a_ko: '연간 학비 $50~80K 외 추가 — 도서·교복·운동·여행·소비 비용 $5,000~$10,000. 비행기 1~2회/년 추가 $3,000~$5,000. 총 가족 부담 $60K~$95K 가 현실.', a_zh: '年学费 $50-80K 外另需 $5K-10K 杂费 · 旅行 · 消费。年 1-2 次回韩机票 $3K-5K。家庭总负担 $60K-95K 现实。' },
      { q_ko: 'TOEFL 점수 어느 수준이 필요한가?', q_zh: 'TOEFL 需要多少分?', a_ko: '명문 보딩스쿨 TOEFL iBT 100+ 권장. SSAT 상위 30~50% percentile. 일부 학교는 TOEFL Junior 인정.', a_zh: '名校寄宿 TOEFL iBT 100+ 推荐。SSAT 前 30-50% percentile。部分学校接受 TOEFL Junior。' },
      { q_ko: '학부모 동반 가능한가?', q_zh: '可父母陪同吗?', a_ko: '학부모 동반은 사실상 불가 (F-2 비자 취업 불가, 보딩스쿨은 자녀 단독 거주). 한국 베이스 유지하며 분기별 방문이 일반적.', a_zh: '父母陪同实际不可行 (F-2 不许就业, 寄宿为子女独居)。常态为保留韩国基地, 季度往返。' },
    ],
  },

  uk: {
    id: 'uk', flag: '🇬🇧',
    name_ko: '영국 — 보딩스쿨 (Public Schools)',
    name_zh: '英国 — 寄宿学校 (Public Schools)',
    tagline_ko: '옥스브리지 진학 직결. Eton·Harrow·Westminster 등 500년+ 명문 보딩 전통.',
    tagline_zh: '牛剑直通。Eton · Harrow · Westminster 等 500 年+ 名校寄宿传统。',
    tuition_local: '연 GBP £40,000~£60,000',
    tuition_usd: 'USD $50K~$75K',
    visa_ko: '자녀: Child Student Visa (4~17세). 학부모: Parent of a Child Student Visa — 11세 미만 자녀 동반 가능 (취업 제한). 11세+ 자녀는 보딩.',
    visa_zh: '子女:Child Student Visa (4-17 岁)。父母:Parent of a Child Student Visa — 11 岁以下子女可陪同 (限就业)。11 岁+ 寄宿。',
    exams: ['UKiset (UK Independent Schools Entry Test)', 'ISEB Common Entrance (11+ · 13+)', 'School-specific interview', 'Pre-tests (Year 6 시점)'],
    notable_schools: [
      { name: 'Eton College', location: 'Berkshire', note_ko: '1440 설립. 영국 보딩의 상징. 남학생 전용.', note_zh: '1440 创立。英国寄宿象征。男校。' },
      { name: 'Harrow School', location: 'London', note_ko: '1572. 남학생 전용. Winston Churchill 모교.', note_zh: '1572。男校。Winston Churchill 母校。' },
      { name: 'Westminster School', location: 'London', note_ko: 'Oxbridge 진학률 1위 종종 (~50%).', note_zh: '牛剑升学率常居首位 (~50%)。' },
      { name: 'Winchester College', location: 'Hampshire', note_ko: '1382. 학업 강도 강함. 남학생 전용.', note_zh: '1382。学业强度高。男校。' },
      { name: 'Charterhouse', location: 'Surrey', note_ko: '남녀 공학 전환. 16+ 입학 옵션.', note_zh: '已转男女合校。16+ 入学选项。' },
      { name: 'Rugby School', location: 'Warwickshire', note_ko: '럭비 발상지. 남녀 공학. 13+ 입학.', note_zh: '橄榄球发源地。男女合校。13+ 入学。' },
      { name: 'Wellington College', location: 'Berkshire', note_ko: '런던 인접. 남녀 공학. IB 옵션 추가.', note_zh: '伦敦邻近。男女合校。IB 选项。' },
      { name: 'Marlborough College', location: 'Wiltshire', note_ko: '남녀 공학. Kate Middleton 모교.', note_zh: '男女合校。Kate Middleton 母校。' },
    ],
    key_points_ko: [
      '옥스브리지 (Oxford·Cambridge) 진학 명확한 트랙',
      'GCSE (Year 10~11) → A-Level (Year 12~13) 트랙',
      '대부분 House system (자녀 소속 기숙사 = 사회적 단위)',
      '학년 = Year 7~13 (한국 초6~고3 대응)',
      '11세 미만 자녀 보호자 비자 동반 가능 (한국 학부모 최대 매력)',
      '13+ Common Entrance 시험이 명문 보딩 입학 핵심',
    ],
    key_points_zh: [
      '牛剑明确升学路径',
      'GCSE (Year 10-11) → A-Level (Year 12-13)',
      '多采用 House system (寄宿 = 社交单位)',
      'Year 7-13 (韩国小 6 - 高 3)',
      '11 岁以下子女监护人签证可陪同 (韩国家长最大魅力)',
      '13+ Common Entrance 是名校寄宿入学核心',
    ],
    system_ko: '영국 학년 = Year 1 (한국 초1) ~ Year 13 (한국 고3). 명문 보딩 입학 시점: 11+ (Year 7), 13+ (Year 9), 16+ (Year 12 = A-Level 시작). GCSE는 Year 10~11에 9~12과목 응시. A-Level은 Year 12~13에 3~4과목 집중 학습 → UCAS 진학.',
    system_zh: '英国学年 = Year 1 (韩小 1) - Year 13 (韩高 3)。名校寄宿入学时点:11+ (Y7) · 13+ (Y9) · 16+ (Y12 = A-Level 起)。GCSE 在 Y10-Y11 应试 9-12 门。A-Level 在 Y12-Y13 专攻 3-4 门 → UCAS 升学。',
    timeline_ko: '13+ Common Entrance 입학 = 지원 2년 전(Year 6 가을) UKiset/ISEB Pre-test, 1년 전 학교 인터뷰, 입학 직전 1월 시험.',
    timeline_zh: '13+ Common Entrance 入学 = 申请前 2 年 (Y6 秋季) UKiset/ISEB Pre-test, 前 1 年校访面试, 入学前 1 月笔试。',
    destinations_ko: 'Top 보딩 졸업생 Oxbridge 진학률 30~50%. 나머지 다수 Russell Group (Imperial·UCL·LSE·Edinburgh 등). 미국 아이비 진학도 가능.',
    destinations_zh: '顶级寄宿毕业生牛剑升学率 30-50%。其余多升入 Russell Group (Imperial · UCL · LSE · Edinburgh)。美国常春藤也可。',
    faqs: [
      { q_ko: '13+ Common Entrance 시험은?', q_zh: '13+ Common Entrance 考试?', a_ko: '영국 명문 보딩 표준 입학 시험. 영어·수학·과학·인문·외국어. Year 6~7에 ISEB Pre-test 통과 후 Year 8에 본 시험. 한국에서 응시 가능.', a_zh: '英国名校寄宿标准入学考试。英语 · 数学 · 科学 · 人文 · 外语。Year 6-7 通过 ISEB Pre-test, Year 8 应试。韩国可应试。' },
      { q_ko: '학부모 보호자 비자는 어떻게?', q_zh: '父母监护人签证如何?', a_ko: 'Parent of a Child Student Visa — 11세 미만 자녀 1명에 부모 1명 동반 가능. 영국 내 취업·무료 보건 불가. 12세+ 자녀는 보딩 전용.', a_zh: 'Parent of a Child Student Visa — 11 岁以下子女 1 名陪同 1 名父母。英国境内不许就业 · 不享免费医疗。12 岁+ 仅限寄宿。' },
      { q_ko: '학비 외 추가 비용?', q_zh: '学费外额外费用?', a_ko: '연 학비 £40~60K 외 추가 — 교복·교과서·스포츠·여행 £3K~£8K. 한국 ~ 영국 비행기 1~2회 £1K~£2K. 가족 총 부담 £45K~£70K.', a_zh: '年学费 £40-60K 外另需 £3K-8K 杂费 · 旅行。韩英机票 £1K-2K。家庭总负担 £45K-70K。' },
    ],
  },

  canada: {
    id: 'canada', flag: '🇨🇦',
    name_ko: '캐나다 — 공립 + 사립 보딩',
    name_zh: '加拿大 — 公立 + 私立寄宿',
    tagline_ko: '학부모 동반 비자 용이 + 공립 가성비 + 영주권 트랙. 미·영 대비 학비 절반.',
    tagline_zh: '父母陪同签证容易 + 公立性价比 + 移民路径。学费仅美英一半。',
    tuition_local: '공립 CAD $14,000~$17,000 / 사립 보딩 CAD $40,000~$70,000',
    tuition_usd: '공립 USD $10K~$12K / 사립 USD $30K~$50K',
    visa_ko: '자녀: Study Permit. 학부모: Visitor Record (학부모 동반 비자) — 자녀 입학 시 6개월~수년 거주 가능. 부모 워크 퍼밋 별도 신청 가능. 자녀 졸업 후 PR 트랙도 있음.',
    visa_zh: '子女:Study Permit。父母:Visitor Record (监护人签证) — 子女入学后 6 个月-数年居留。父母可另办工作签。子女毕业后有 PR 路径。',
    exams: ['공립: 학교·교육청 자체 평가', 'TOEFL/IELTS (사립 보딩)', 'SSAT (사립 보딩)', 'School interview'],
    notable_schools: [
      { name: 'Upper Canada College', location: 'Toronto, Ontario', note_ko: '1829. 캐나다 보딩 1순위. 남학생.', note_zh: '1829。加拿大寄宿首选。男校。' },
      { name: 'Branksome Hall', location: 'Toronto, Ontario', note_ko: '여학생. IB World School.', note_zh: '女校。IB World School。' },
      { name: "St. Andrew's College", location: 'Aurora, Ontario', note_ko: '1899. 남학생 전용 보딩.', note_zh: '1899。男生寄宿。' },
      { name: 'Trinity College School', location: 'Port Hope, Ontario', note_ko: '1865. 남녀 공학 보딩.', note_zh: '1865。男女合校寄宿。' },
      { name: 'Ridley College', location: 'St. Catharines, Ontario', note_ko: 'IB 전 단계 운영.', note_zh: 'IB 全阶段运营。' },
      { name: 'Lakefield College School', location: 'Lakefield, Ontario', note_ko: '소규모 자연 환경 보딩.', note_zh: '小规模自然环境寄宿。' },
      { name: 'BC 공립 (Burnaby·Coquitlam 등)', location: 'British Columbia', note_ko: '연 USD $10K~12K. 한국·중국 학부모 인기 1순위.', note_zh: '年 USD $10K-12K。韩中家长首选。' },
    ],
    key_points_ko: [
      '학부모 동반 비자 가장 용이 (한국 학부모 1순위 선호)',
      '공립도 정식 캐나다 교육 — 사립 의무 없음',
      '졸업 후 캐나다 대학 진학률 매우 높음 (현지 학생 우선 입학)',
      'OSSD (Ontario Secondary School Diploma) 졸업장 = 전 세계 인정',
      '겨울 추위 (Toronto -20°C) 적응 필요',
      '영주권(PR) 트랙 옵션 — 졸업 후 캐나다 정착',
    ],
    key_points_zh: [
      '父母陪同签证最容易 (韩国家长首选)',
      '公立也是正规加拿大教育 — 不必私立',
      '毕业后加拿大大学升学率极高',
      'OSSD (Ontario 高中毕业证) 全球认可',
      '冬季 (多伦多 -20°C) 适应必要',
      '永居 (PR) 路径选项 — 毕业后定居',
    ],
    system_ko: '캐나다 K-12 = 유치원~Grade 12 (퀘벡 제외). 공립과 사립 모두 정식 캐나다 졸업장. 외국인 학생 공립 신청 = 교육청(Board of Education) 통해. 사립 보딩은 학교에 직접 지원.',
    system_zh: '加拿大 K-12 = 幼儿园-Grade 12 (魁北克除外)。公立 · 私立均颁正规加拿大毕业证。外国学生公立申请 = 通过教育局 (Board of Education)。私立寄宿直接向学校申请。',
    timeline_ko: '공립 = 입학 6개월 전 교육청 신청. 사립 보딩 = 1년 전 SSAT/TOEFL + 인터뷰. 9월 학기 시작 (1월 입학 옵션 있음).',
    timeline_zh: '公立 = 入学前 6 个月向教育局申请。私立寄宿 = 前 1 年 SSAT/TOEFL + 面试。9 月开学 (1 月入学选项)。',
    destinations_ko: '캐나다 대학 (University of Toronto·UBC·McGill 등) 진학률 매우 높음. 미국·UK 대학 진학도 가능. OSSD 졸업장 전 세계 인정.',
    destinations_zh: '加拿大大学 (Toronto · UBC · McGill) 升学率极高。美 · 英大学也可。OSSD 全球认可。',
    faqs: [
      { q_ko: '공립이 사립보다 떨어지나?', q_zh: '公立比私立差吗?', a_ko: '아닙니다. 캐나다 공립은 정식 교육. BC·Ontario 공립 학생 다수가 University of Toronto·UBC 등 명문 대학 진학. 학비 1/4 수준이라 가성비 최강. 단, 시설·소규모 학급은 사립이 우수.', a_zh: '不是。加拿大公立为正规教育。BC · Ontario 公立学生多升入 Toronto · UBC 等名校。学费仅 1/4 性价比极高。但设施 · 小班制私立较优。' },
      { q_ko: '학부모 동반은 정말 쉬운가?', q_zh: '父母陪同真的容易吗?', a_ko: '미·영 대비 매우 쉬움. 자녀 Study Permit 발급 → 부모 Visitor Record 함께 신청 → 6개월~수년 거주. 부모는 별도 Work Permit 신청 가능 (가능성 50%).', a_zh: '比美英容易得多。子女 Study Permit → 父母 Visitor Record 一并申请 → 6 个月-数年居留。父母可另办工作签 (成功率约 50%)。' },
      { q_ko: '영주권(PR) 트랙은?', q_zh: '永居 (PR) 路径?', a_ko: '자녀 캐나다 고등 졸업 + 캐나다 대학 진학 + 졸업 후 캐나다 취업 → Express Entry로 PR 신청 가능. 한국 학부모 사이에서 캐나다가 PR 가장 안정적이라는 평가.', a_zh: '子女加拿大高中毕业 + 加拿大大学 + 毕业后就业 → Express Entry 申请 PR。韩国家长间公认加拿大 PR 最稳定。' },
    ],
  },

  australia: {
    id: 'australia', flag: '🇦🇺',
    name_ko: '호주 — 학부모 동반 비자 + 영연방 시스템',
    name_zh: '澳大利亚 — 父母陪同签证 + 英联邦体系',
    tagline_ko: '학부모 동반 비자(590) 가능 — 한국 학부모 가장 매력적 옵션. 영국식 + 호주 명문.',
    tagline_zh: '父母陪同签证 (590) 可办 — 韩国家长最具吸引力选项。英式 + 澳大利亚名校。',
    tuition_local: '연 AUD $30,000~$70,000',
    tuition_usd: 'USD $20K~$45K',
    visa_ko: '자녀: Subclass 500 (Student Visa). 학부모: Subclass 590 (Student Guardian Visa) — 자녀 18세 미만 1명당 부모 1명 동반. 호주 내 거주 가능 (취업 제한 있음).',
    visa_zh: '子女:Subclass 500 (Student Visa)。父母:Subclass 590 (Student Guardian Visa) — 18 岁以下子女 1 名陪同 1 名父母。境内居留可,有就业限制。',
    exams: ['AEAS (Australian Education Assessment Services)', 'School-specific entrance exam', 'IELTS / TOEFL (학교별)', 'Interview'],
    notable_schools: [
      { name: 'Geelong Grammar School', location: 'Victoria', note_ko: 'King Charles 영국 왕세자 출신 학교. 호주 보딩 1순위.', note_zh: 'King Charles 英国国王出身。澳寄宿首选。' },
      { name: 'Scotch College', location: 'Melbourne, Victoria', note_ko: '1851. 남학생 전용. 학업 강도 강.', note_zh: '1851。男校。学业强度高。' },
      { name: 'Wesley College', location: 'Melbourne, Victoria', note_ko: '남녀 공학. IB World School 운영.', note_zh: '男女合校。IB World School。' },
      { name: "Methodist Ladies' College (MLC)", location: 'Melbourne, Victoria', note_ko: '여학생 전용. IB Diploma.', note_zh: '女校。IB Diploma。' },
      { name: "The King's School", location: 'Sydney, NSW', note_ko: '1831. 남학생 전용 명문.', note_zh: '1831。男校名门。' },
      { name: 'Knox Grammar School', location: 'Sydney, NSW', note_ko: '남학생 전용. NSW HSC + IB.', note_zh: '男校。NSW HSC + IB。' },
      { name: 'Cranbrook School', location: 'Sydney, NSW', note_ko: '남녀 공학. 시드니 도심.', note_zh: '男女合校。悉尼市区。' },
    ],
    key_points_ko: [
      '학부모 동반 비자 (590) — 영미권 중 가장 폭넓은 학부모 거주 옵션',
      'HSC (NSW) · VCE (VIC) 호주 정규 졸업장 → 호주·UK 대학 직접 진학',
      'IB Diploma 운영 학교 다수 — 전 세계 대학 진학',
      '학비 미·영 대비 30~40% 저렴',
      '시차 한국과 1~2시간 — 가족 연결 용이',
      '시드니·멜버른 한국 커뮤니티 활성',
    ],
    key_points_zh: [
      '父母陪同签证 (590) — 英美澳加中范围最广的家长居留选项',
      'HSC (NSW) · VCE (VIC) 澳正规毕业证 → 澳 · 英大学直升',
      'IB Diploma 学校多 — 全球大学升学',
      '学费仅美英 30-40%',
      '与韩国时差 1-2 小时 — 家庭联系便利',
      '悉尼 · 墨尔本韩国社群活跃',
    ],
    system_ko: '호주 K-12 = Kindergarten~Year 12. 주(State)별 시스템: NSW (HSC), VIC (VCE), QLD (QCE). 명문 사립 다수가 IB Diploma 추가 운영. 입학 시점: 보통 Year 7 (한국 초6 끝), Year 10 (한국 중3 끝).',
    system_zh: '澳 K-12 = Kindergarten-Year 12。各州系统:NSW (HSC)·VIC (VCE)·QLD (QCE)。多数名校私立另开 IB Diploma。入学时点:多为 Year 7 (韩小 6 末) · Year 10 (韩初 3 末)。',
    timeline_ko: 'Year 7 입학 = 지원 1년 전 AEAS + 학교 인터뷰. 호주 학년 시작 1월(남반구 학기). 한국 9월 신학기 → 호주 1월 신학기 갭 6개월 활용 가능.',
    timeline_zh: 'Year 7 入学 = 申请前 1 年 AEAS + 校面试。澳学年 1 月开始 (南半球学期)。韩 9 月 → 澳 1 月可利用 6 个月间隔。',
    destinations_ko: '호주 Top 8 대학 (Melbourne·ANU·UNSW·Sydney·Monash 등) 진학률 매우 높음. UK Russell Group, 미국 대학 진학도 가능. IB Diploma 학교는 전 세계 옵션 열림.',
    destinations_zh: '澳 Top 8 大学 (Melbourne · ANU · UNSW · Sydney · Monash) 升学率极高。UK Russell Group · 美国大学也可。IB Diploma 学校全球选项开放。',
    faqs: [
      { q_ko: '학부모 590 비자 거주 기간은?', q_zh: '父母 590 签证居留期?', a_ko: '자녀 학습 기간만큼 (자녀 18세 또는 학업 종료까지). 보통 5~10년 가능. 갱신 가능. 단, 호주 내 정식 취업 제한 (현지 회사 정규직 불가, 자영업·해외 원격 근무는 사례별).', a_zh: '与子女学习期同 (子女 18 岁或学业结束)。常态 5-10 年。可续签。但境内不许正式就业 (本地公司全职不可, 自雇 · 海外远程视具体情况)。' },
      { q_ko: '공립과 사립 차이?', q_zh: '公立与私立差异?', a_ko: '호주 공립도 외국인 학생 받지만 학비 AUD $13K~$18K. 사립은 AUD $30K~$70K. 보딩은 사립 위주. 한국 학부모는 590 비자 받고 시드니·멜버른 데이스쿨 보내는 패턴이 많음.', a_zh: '澳公立也接受外国学生学费 AUD $13K-18K。私立 AUD $30K-70K。寄宿以私立为主。韩国家长多办 590 后送悉尼 · 墨尔本走读。' },
      { q_ko: 'PR(영주권) 트랙은?', q_zh: 'PR (永居) 路径?', a_ko: '자녀 호주 대학 졸업 + 졸업 후 호주 취업 → Skilled Migration → PR. 캐나다 대비 다소 까다로움. 590 비자만으로는 PR 직접 연결 안 됨.', a_zh: '子女澳大学毕业 + 就业 → Skilled Migration → PR。比加拿大稍难。590 单独不直接通向 PR。' },
    ],
  },
};

export const ANGLO_KEYS = ['usa', 'uk', 'canada', 'australia'] as const;
