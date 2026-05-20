/**
 * 동남아 장기 거주 비자 정보 — 객관 사실 정리.
 *
 * 비자 정책은 각국 정부가 자주 개정하므로,
 * 정확한 신청 자격·비용은 반드시 각국 공식 사이트 또는 운영자 검수 에이전시 확인 필수.
 *
 * 이 데이터는 2025-2026 시점 공개 정보 기준.
 */
export interface VisaProgram {
  id: 'malaysia-mm2h' | 'thai-elite' | 'thai-ltr' | 'singapore-ep' | 'singapore-pr';
  country: 'malaysia' | 'thailand' | 'singapore';
  ko: {
    name: string;
    full_name: string;
    legal_basis: string;
    eligibility: string[];
    cost: string;
    duration: string;
    child_education: string;
    suitable_for: string[];
    cautions: string[];
  };
  zh: {
    name: string;
    full_name: string;
    legal_basis: string;
    eligibility: string[];
    cost: string;
    duration: string;
    child_education: string;
    suitable_for: string[];
    cautions: string[];
  };
  official_url: string;
}

export const VISA_PROGRAMS: VisaProgram[] = [
  {
    id: 'malaysia-mm2h',
    country: 'malaysia',
    official_url: 'https://www.mm2h.gov.my/',
    ko: {
      name: 'MM2H',
      full_name: 'Malaysia My Second Home (말레이시아 마이 세컨드 홈)',
      legal_basis: '말레이시아 관광·예술·문화부 (2024 개정)',
      eligibility: [
        '신청자 만 25세 이상 (이전 35세에서 완화)',
        '말레이시아 정기예금: 실버 RM 500,000 / 골드 RM 2,000,000 / 플래티넘 RM 5,000,000',
        '월 소득 RM 50,000 이상 또는 동등 자산 증빙',
        '신청자 본인 + 배우자 + 자녀 (만 21세 미만) + 부모(만 60세 이상) 동반 가능',
        '범죄 경력 없음, 건강 검진 통과',
      ],
      cost: '신청 비자료 RM 1,000~3,000 + 에이전시 수수료 RM 15,000~40,000 (등급별 상이)',
      duration: '5년 (재계약 가능)',
      child_education: '자녀의 말레이시아 국제학교 입학에 제약 없음. 학교 결정 후 비자 신청 순서 권장.',
      suitable_for: [
        '자녀 국제학교 교육 + 가성비 (학비 + 생활비 종합)',
        '40~60대 학부모, 자영업·디지털 노마드 가능',
        '동남아에서 영미권 진학 트랙 설계',
      ],
      cautions: [
        '2024 개정으로 정기예금·소득 기준 크게 상향 — 이전 기준과 다름',
        '말레이시아 내 취업 원칙 금지 (디지털 노마드·해외 소득은 가능)',
        '에이전시 신중 선택 — 정부 라이선스 보유 여부, 통과율, 환불 정책 확인 필수',
      ],
    },
    zh: {
      name: 'MM2H',
      full_name: 'Malaysia My Second Home(马来西亚第二家园)',
      legal_basis: '马来西亚旅游艺术与文化部(2024 修订)',
      eligibility: [
        '申请人 25 岁以上(此前要求 35 岁)',
        '马来西亚定期存款:Silver RM 500,000 / Gold RM 2,000,000 / Platinum RM 5,000,000',
        '月收入 RM 50,000 以上或同等资产证明',
        '可随行:配偶 + 21 岁以下子女 + 60 岁以上父母',
        '无犯罪记录,通过体检',
      ],
      cost: '签证申请费 RM 1,000~3,000 + 中介费 RM 15,000~40,000(因等级而异)',
      duration: '5 年(可续签)',
      child_education: '子女入读马来西亚国际学校无限制。建议先确定学校再申请签证。',
      suitable_for: [
        '子女国际学校教育 + 综合性价比(学费 + 生活成本)',
        '40~60 岁家长,自由职业·数字游民均可',
        '从东南亚衔接英美澳加升学路径',
      ],
      cautions: [
        '2024 修订后定存与收入门槛大幅上调,与旧标准差异显著',
        '原则上禁止在马来西亚本地就业(数字游民 / 海外收入可)',
        '中介选择需谨慎(参考站长核实推荐中介)',
      ],
    },
  },
  {
    id: 'thai-elite',
    country: 'thailand',
    official_url: 'https://www.thailandprivilege.co.th/',
    ko: {
      name: 'Thailand Privilege',
      full_name: 'Thailand Privilege (구 Thailand Elite Visa)',
      legal_basis: '태국 관광청 (TAT) · Thailand Privilege Card Co., Ltd.',
      eligibility: [
        '만 20세 이상, 범죄 경력 없음',
        '재정·소득 증빙 없음 (회원권 구매로 갈음)',
        '신청자 + 배우자 + 21세 미만 자녀 동반 가능 (Family 등급)',
      ],
      cost: 'Gold 900,000 THB (5년) ~ Reserve 5,000,000 THB (20년) 등 등급별 일시 납부',
      duration: '5 / 10 / 15 / 20 년 (등급별)',
      child_education: '자녀 태국 국제학교 입학 가능. 학생 비자 별도 발급 불필요.',
      suitable_for: [
        '자녀 교육 + 비교적 단순한 비자 절차 선호',
        '재정 증빙이 까다로운 자영업·디지털 노마드',
        '태국 거주 + 비즈니스 여행 출입 자유',
      ],
      cautions: [
        '취업 비자 아님 (현지 취업 시 별도 work permit 필요)',
        '회원권 일시 납부 (분할 X), 환불 정책 까다로움',
        '2023년 Thailand Elite → Thailand Privilege 으로 리브랜딩, 일부 등급·혜택 변경',
      ],
    },
    zh: {
      name: 'Thailand Privilege',
      full_name: 'Thailand Privilege(原 Thailand Elite Visa)',
      legal_basis: '泰国旅游局(TAT)· Thailand Privilege Card Co., Ltd.',
      eligibility: [
        '20 岁以上,无犯罪记录',
        '无需财务·收入证明(以会员卡购买替代)',
        '可随行:配偶 + 21 岁以下子女(Family 等级)',
      ],
      cost: 'Gold 900,000 泰铢(5 年)~ Reserve 5,000,000 泰铢(20 年),按等级一次付清',
      duration: '5 / 10 / 15 / 20 年(按等级)',
      child_education: '子女可就读泰国国际学校,无需另办学生签证。',
      suitable_for: [
        '子女教育 + 偏好流程相对简单的签证',
        '财务证明繁琐的自由职业·数字游民',
        '泰国居住 + 商务出入自由',
      ],
      cautions: [
        '非工作签证(本地就业需另办 work permit)',
        '会员卡一次性付清,退款政策严格',
        '2023 年从 Thailand Elite 更名为 Thailand Privilege,部分等级与权益有变',
      ],
    },
  },
  {
    id: 'thai-ltr',
    country: 'thailand',
    official_url: 'https://ltr.boi.go.th/',
    ko: {
      name: 'Thailand LTR',
      full_name: 'Thailand Long-Term Resident Visa (장기 거주 비자)',
      legal_basis: '태국 투자청 (BOI)',
      eligibility: [
        '카테고리 4종: Wealthy Global Citizen / Wealthy Pensioner / Work-from-Thailand Pro / Highly-Skilled Pro',
        'Wealthy Global Citizen: 자산 미화 100만 USD + 연 소득 8만 USD',
        'Wealthy Pensioner: 만 50세 이상, 연 소득 8만 USD',
        '자녀(만 20세 미만) 4명까지 동반',
      ],
      cost: '비자 신청료 약 50,000 THB',
      duration: '10년 (5+5 갱신)',
      child_education: '자녀 국제학교 입학 가능. 자녀에게도 dependent visa 부여.',
      suitable_for: [
        '세제 혜택 (해외 소득 면세 일부)',
        '장기 정주 (10년) 목적',
        '재정·소득 모두 갖춘 고자산 학부모',
      ],
      cautions: [
        'Elite 보다 자격 까다로움 — 자산·소득 모두 증빙 필요',
        '카테고리별 자격 요건이 달라 사전 검토 필수',
        '세제 혜택 디테일은 회계사 상담 권장',
      ],
    },
    zh: {
      name: 'Thailand LTR',
      full_name: 'Thailand Long-Term Resident Visa(长期居留签证)',
      legal_basis: '泰国投资促进委员会(BOI)',
      eligibility: [
        '四个类别:Wealthy Global Citizen / Wealthy Pensioner / Work-from-Thailand Pro / Highly-Skilled Pro',
        'Wealthy Global Citizen:资产 100 万美元 + 年收入 8 万美元',
        'Wealthy Pensioner:50 岁以上,年收入 8 万美元',
        '可随行 20 岁以下子女(最多 4 名)',
      ],
      cost: '签证申请费约 50,000 泰铢',
      duration: '10 年(5+5 续签)',
      child_education: '子女可入读国际学校,授予 dependent 签证。',
      suitable_for: [
        '税务优惠(部分海外收入免税)',
        '10 年长期定居',
        '资产与收入皆充足的高净值家长',
      ],
      cautions: [
        '门槛高于 Elite — 资产与收入均需证明',
        '各类别资格不同,需提前核对',
        '税务细节建议咨询会计师',
      ],
    },
  },
  {
    id: 'singapore-ep',
    country: 'singapore',
    official_url: 'https://www.mom.gov.sg/passes-and-permits/employment-pass',
    ko: {
      name: 'Singapore EP',
      full_name: 'Employment Pass (싱가포르 취업 비자)',
      legal_basis: '싱가포르 인력부 (MOM)',
      eligibility: [
        '싱가포르 기업의 정식 채용 계약',
        '최소 월급 SGD 5,600 (2025 기준 / 금융업 더 높음)',
        'COMPASS 평가 통과 (학력·경력·국적 다양성·산업 우선순위)',
      ],
      cost: '비자 신청료 SGD 105 + 발급료 SGD 225',
      duration: '최초 2년 (이후 3년 연장 반복 가능)',
      child_education: '자녀에게 Dependant Pass 발급, 국제학교 입학 가능. 정부 학교는 추가비.',
      suitable_for: [
        '싱가포르 본사·다국적 기업 취업',
        '동남아 최고 수준 교육 환경',
        '아이비/옥스브리지 진학 트랙',
      ],
      cautions: [
        '월급 기준 매년 상향 추세',
        'COMPASS 점수제로 통과 어려움 증가',
        '회사 도산·이직 시 비자 재신청 필요',
      ],
    },
    zh: {
      name: 'Singapore EP',
      full_name: 'Employment Pass(新加坡就业准证)',
      legal_basis: '新加坡人力部(MOM)',
      eligibility: [
        '新加坡公司的正式聘用合同',
        '最低月薪 SGD 5,600(2025 标准,金融业更高)',
        '通过 COMPASS 评估(学历·经验·国籍多样性·行业优先)',
      ],
      cost: '签证申请费 SGD 105 + 发放费 SGD 225',
      duration: '初次 2 年(其后可续 3 年并续期)',
      child_education: '子女获 Dependant Pass,可入读国际学校。政府学校另收费。',
      suitable_for: [
        '新加坡总部·跨国企业就业',
        '东南亚最高教育环境',
        '常春藤 / 牛剑升学路径',
      ],
      cautions: [
        '月薪门槛逐年上调',
        'COMPASS 计分制使通过难度上升',
        '公司倒闭 / 跳槽需重新申请',
      ],
    },
  },
  {
    id: 'singapore-pr',
    country: 'singapore',
    official_url: 'https://www.ica.gov.sg/',
    ko: {
      name: 'Singapore PR',
      full_name: 'Permanent Resident (싱가포르 영주권)',
      legal_basis: '싱가포르 출입국·검문국 (ICA)',
      eligibility: [
        'EP 또는 S Pass 보유 후 통상 2년+ 거주 후 신청 권장',
        'ICA 자체 평가 (소득·산업·자녀·통합도 등)',
        '확정 기준 비공개, 거절률 높음',
      ],
      cost: '신청료 SGD 100',
      duration: '평생 (5년마다 Re-entry Permit 갱신)',
      child_education: '정부 학교 우선권 (Phase 2C). 국제학교도 가능.',
      suitable_for: [
        '싱가포르 장기 정착',
        '자녀의 정부 학교 + NUS·NTU 진학',
        '주택·세제·은행 전반의 시민권급 혜택',
      ],
      cautions: [
        '심사 비공개, 거절 시 사유 미공개',
        '자녀(아들) 군 복무 (NS) 의무 발생',
        '재신청 1년 대기',
      ],
    },
    zh: {
      name: 'Singapore PR',
      full_name: 'Permanent Resident(新加坡永久居民)',
      legal_basis: '新加坡移民与关卡局(ICA)',
      eligibility: [
        '通常持 EP 或 S Pass 居住 2 年以上后申请',
        'ICA 自主评估(收入·行业·子女·融入度 等)',
        '具体标准不公开,拒签率较高',
      ],
      cost: '申请费 SGD 100',
      duration: '永久(每 5 年续签 Re-entry Permit)',
      child_education: '政府学校优先(Phase 2C),也可入读国际学校。',
      suitable_for: [
        '新加坡长期定居',
        '子女政府学校 + NUS·NTU 升学',
        '住房·税务·银行等多领域接近公民权益',
      ],
      cautions: [
        '审批不公开,拒签不附理由',
        '男性子女需服兵役(NS)',
        '重新申请须等待 1 年',
      ],
    },
  },
];

export const MM2H_FAQS = [
  {
    q_ko: 'MM2H 와 Thailand Privilege 중 자녀 교육에 어느 게 유리한가?',
    a_ko: 'MM2H 가 학비·생활비 종합으로 가성비가 좋고, Thailand Privilege 는 신청 절차가 단순합니다. 자녀 학교를 먼저 결정한 후 그 학교가 어느 국가에 있는지에 따라 선택하는 것이 일반적입니다. 2024 MM2H 개정으로 자격 기준이 상향되어 두 옵션의 진입 장벽이 비슷해졌습니다.',
    q_zh: 'MM2H 与 Thailand Privilege,哪个对子女教育更有利?',
    a_zh: 'MM2H 在学费 + 生活成本上更具性价比,Thailand Privilege 在申请流程上更简单。一般先确定子女学校,再根据学校所在国选择签证。2024 年 MM2H 修订后门槛上调,两者门槛已较为接近。',
  },
  {
    q_ko: 'Singapore EP 와 PR 의 자녀 학교 차이는?',
    a_ko: 'EP 자녀는 Dependant Pass 로 국제학교는 자유롭게 입학 가능하나 정부 학교는 외국인 우선순위가 낮습니다. PR 자녀는 정부 학교 배정 Phase 2C 에 포함되어 우선권이 높아지고 학비도 시민권자에 가까운 수준입니다. 다만 남자 자녀는 PR 취득 시 군 복무(NS) 의무가 발생합니다.',
    q_zh: 'Singapore EP 与 PR 在子女学校上有何区别?',
    a_zh: 'EP 子女持 Dependant Pass,可自由入读国际学校,政府学校外籍优先级低。PR 子女纳入政府学校 Phase 2C,优先级提升,学费接近公民。但男性子女取得 PR 后须服兵役(NS)。',
  },
  {
    q_ko: '2024 MM2H 개정 후에도 신청할 가치가 있나?',
    a_ko: '예. 정기예금·소득 기준은 상향됐지만 5년 비자 + 자녀 + 부모 동반 + 가성비 측면에서는 여전히 동남아에서 가장 경쟁력 있는 옵션입니다. 특히 자녀 국제학교 + 운영자 직접 거주 경험 측면에서 정보 접근성이 가장 높습니다.',
    q_zh: '2024 MM2H 修订后仍值得申请吗?',
    a_zh: '是的。虽然定存与收入门槛上调,但 5 年签证 + 子女 + 父母随行 + 综合性价比仍是东南亚最具竞争力的选项之一,尤其在子女国际学校与站长本地居住的信息可及性方面优势明显。',
  },
  {
    q_ko: '비자 신청과 학교 입학, 어느 것을 먼저?',
    a_ko: '학교 입학을 먼저 권장합니다. 학교가 정해지면 거주 도시·예산·자녀 학년이 명확해져 그에 맞는 비자 옵션을 선택할 수 있습니다. 비자만 먼저 받으면 학교 선택 폭이 좁아지고 시간·비용 낭비 위험이 있습니다.',
    q_zh: '签证申请与学校入学,先做哪个?',
    a_zh: '建议先定学校。学校确定后,居住城市·预算·孩子年级都明确,可据此选择合适签证。先办签证可能导致学校选择受限、时间与成本浪费。',
  },
  {
    q_ko: '에이전시는 꼭 필요한가?',
    a_ko: 'MM2H 는 사실상 에이전시 필수 (정부가 라이선스 에이전시 통한 신청 권장). Thailand Privilege 도 공식 파트너 에이전시를 거치는 경우가 일반적. Singapore EP / PR 은 회사가 처리 (개인 신청은 거의 없음). 에이전시 선택이 비용·통과율에 큰 영향을 주므로 정부 라이선스 보유 여부와 통과율 데이터를 직접 비교해 보세요.',
    q_zh: '一定要通过中介申请吗?',
    a_zh: 'MM2H 实际上需要中介(官方建议通过持牌中介)。Thailand Privilege 通常也通过官方合作中介。Singapore EP / PR 一般由公司办理(个人申请极少)。中介选择会显著影响成本与通过率,可参考站长核实推荐中介。',
  },
];
