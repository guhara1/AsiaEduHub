/**
 * MM2H · 이주 카테고리 4개 페이지 상세 콘텐츠.
 * 모든 정보 = 각국 정부 공식 자료 + 운영자 KL 거주 1차 경험 + 학부모 커뮤니티 청취.
 * 정책은 매년 변경 — 학교·정부 공식 사이트 매년 확인 필수.
 */

export interface Mm2hPageInfo {
  id: 'malaysia-mm2h' | 'thai-visa' | 'singapore-pr' | 'housing';
  emoji: string;
  name_ko: string; name_zh: string;
  tagline_ko: string; tagline_zh: string;
  summary_ko: string; summary_zh: string;
  /** 핵심 요건 카드 */
  requirements_ko: { label: string; value: string }[];
  requirements_zh: { label: string; value: string }[];
  /** 신청 절차 */
  process_ko: string[]; process_zh: string[];
  /** 장점·단점 */
  pros_ko: string[]; pros_zh: string[];
  cons_ko: string[]; cons_zh: string[];
  /** 자녀 교육 영향 */
  education_impact_ko: string; education_impact_zh: string;
  /** FAQ */
  faqs: { q_ko: string; q_zh: string; a_ko: string; a_zh: string }[];
}

export const MM2H_PAGES: Record<string, Mm2hPageInfo> = {
  'malaysia-mm2h': {
    id: 'malaysia-mm2h', emoji: '🇲🇾',
    name_ko: '말레이시아 MM2H (Malaysia My Second Home)',
    name_zh: '马来西亚 MM2H (Malaysia My Second Home)',
    tagline_ko: '말레이시아 10년 장기 거주 비자 — 2024 개정 후 자산·예금 기준 대폭 상향. 자녀 동반 + 국제학교 입학에 가장 적합한 학부모 비자.',
    tagline_zh: '马来西亚 10 年长期居留签证 — 2024 修订后资产 · 存款标准大幅上调。最适合子女随同 + 国际学校入学的家长签证。',
    summary_ko: 'MM2H는 말레이시아 정부가 운영하는 장기 거주 비자입니다. 학부모가 가장 흔히 선택하는 옵션이지만 2024년 개정 후 자격이 매우 엄격해졌습니다. 운영자(데이비드)는 2024년 KL 이주 시 MM2H 신청 경험 + 학부모 커뮤니티 청취를 종합 정리.',
    summary_zh: 'MM2H 是马来西亚政府运营的长期居留签证。家长最常选择的方案,但 2024 修订后资格非常严格。站长(David)2024 年 KL 移居时申请 MM2H 经验 + 家长社群信息综合整理。',
    requirements_ko: [
      { label: '연령', value: '35세 이상 (자녀 동반 신청 시)' },
      { label: '자산 증명', value: 'USD $430,000 (약 KRW 5.8억) 글로벌 자산' },
      { label: '말레이시아 정기예금', value: 'USD $215,000 (약 KRW 2.9억) — 신청 후 1년 내 입금' },
      { label: '월 소득', value: 'USD $9,700+ (약 KRW 1,300만원/월)' },
      { label: '거주 의무', value: '연 최소 90일 (2024 신규 요건)' },
      { label: '비자 기간', value: '10년 (5년 후 갱신)' },
      { label: '자녀 동반', value: '21세 미만 자녀 무제한 동반' },
      { label: '취업', value: '말레이시아 내 정식 취업 원칙 금지 (디지털 노마드·해외 소득은 가능)' },
    ],
    requirements_zh: [
      { label: '年龄', value: '35 岁以上(子女随同申请)' },
      { label: '资产证明', value: 'USD $430,000 全球资产' },
      { label: '马来西亚定期存款', value: 'USD $215,000 — 申请后 1 年内汇入' },
      { label: '月收入', value: 'USD $9,700+/月' },
      { label: '居留义务', value: '年至少 90 天(2024 新规)' },
      { label: '签证期限', value: '10 年(5 年后续签)' },
      { label: '子女随同', value: '21 岁以下子女无限随同' },
      { label: '就业', value: '马来西亚境内正式就业原则禁止(数字游牧 · 海外收入可)' },
    ],
    process_ko: [
      '1. 라이선스 에이전시 선정 (정부 인가 에이전시 통해 신청 권장)',
      '2. 서류 준비: 여권·재정 증명·범죄 경력·건강 진단·자녀 출생증명',
      '3. 에이전시 통해 정부에 신청서 제출 (Conditional Approval 약 3~5개월)',
      '4. Conditional Approval 후 말레이시아 입국 + 정기예금 입금 + 건강 보험 가입',
      '5. Endorsement Sticker 발급 — 정식 MM2H 비자 인증',
      '6. 자녀 학생 비자 (Student Pass) 별도 신청 또는 MM2H Dependent 등록',
    ],
    process_zh: [
      '1. 选定政府认证持牌中介',
      '2. 准备文件:护照 · 财务证明 · 无犯罪 · 体检 · 子女出生证',
      '3. 中介向政府提交申请 (Conditional Approval 约 3-5 个月)',
      '4. Conditional Approval 后入境马来西亚 + 存款 + 购买健康保险',
      '5. 发放 Endorsement Sticker — 正式 MM2H 签证认证',
      '6. 子女学生签证 (Student Pass) 单独申请或 MM2H Dependent 注册',
    ],
    pros_ko: [
      '10년 장기 거주 — 자녀 학년 안정 보장',
      '자녀 21세 미만 무제한 동반',
      '한국·동남아 대비 생활비 60~70% 수준',
      '말레이시아 영어 환경 — 자녀 영어 노출 자연스러움',
      '한국 부모 동반 비자 옵션 (학부모 1순위 선호)',
      '말레이시아 부동산 매입 가능 (최소 RM 1,000,000 지역별 차이)',
    ],
    pros_zh: [
      '10 年长期居留 — 子女年级稳定',
      '21 岁以下子女无限随同',
      '生活费仅韩国·东南亚 60-70%',
      '马来西亚英语环境 — 子女英语自然接触',
      '韩国父母随同签证(家长首选)',
      '马来西亚房产购买可(最低 RM 1,000,000)',
    ],
    cons_ko: [
      '2024 개정 후 자산·예금 기준 상향 (이전 대비 2~3배)',
      '말레이시아 내 정식 취업 금지 (자영업·해외 원격 가능)',
      '신청 후 승인까지 3~5개월 소요',
      '에이전시 비용 USD $3,000~$8,000 별도',
      '연간 90일 거주 의무 — 한국 베이스 유지 어려움',
    ],
    cons_zh: [
      '2024 修订后资产 · 存款上调 (前 2-3 倍)',
      '马来西亚境内正式就业禁止',
      '申请到批准需 3-5 个月',
      '中介费用 USD $3,000-$8,000 另计',
      '年 90 天居留义务 — 难保留韩国基地',
    ],
    education_impact_ko: 'MM2H 보유 학부모 자녀는 말레이시아 국제학교 입학 시 학생 비자 따로 신청 불필요 (Dependent 등록). MM2H 거주 기간 동안 자녀가 말레이시아 학교 졸업 후 영국·미국·호주 대학 진학 가능. MM2H 가 끝나도 학생 비자 별도 갱신해서 학업 지속 가능.',
    education_impact_zh: '持 MM2H 家长子女在马来西亚国际学校入学时不需另办学生签证 (Dependent 注册)。MM2H 居留期间子女在马来西亚毕业后可升英 · 美 · 澳大学。MM2H 结束后另办学生签证可继续学业。',
    faqs: [
      { q_ko: 'MM2H 2024 개정 핵심 변화는?', q_zh: 'MM2H 2024 修订核心变化?', a_ko: '자산 USD $215K → $430K (2배), 정기예금 USD $107K → $215K (2배), 월 소득 USD $4,800 → $9,700 (2배), 연간 거주 의무 신설 (90일). Tier 시스템 도입 — Platinum·Gold·Silver 등급별 차등.', a_zh: '资产 $215K → $430K (2 倍),定存 $107K → $215K (2 倍),月收入 $4,800 → $9,700 (2 倍),新增年居留 90 天义务。引入 Tier 系统 — Platinum · Gold · Silver 等级差异。' },
      { q_ko: '에이전시는 꼭 필요한가?', q_zh: '一定要找中介?', a_ko: '사실상 필수. 정부가 라이선스 에이전시 통한 신청 권장 + 직접 신청은 서류·절차 매우 복잡. 단, 에이전시 선택이 비용·통과율에 큰 영향 — 정부 라이선스 보유 + 통과율 데이터 직접 비교 필수.', a_zh: '实际必备。政府推荐通过持牌中介申请,直接申请文件 · 流程很复杂。但中介选择影响费用 · 通过率 — 必须比较持牌情况 · 通过率数据。' },
      { q_ko: '자녀 학교 옮길 때 MM2H 영향?', q_zh: '子女转学时 MM2H 影响?', a_ko: '영향 없음. MM2H 는 학교에 종속되지 않은 거주 비자. 자녀 학교 옮길 때 새 학교에 MM2H 사본 제출 → 새 학생 비자 발급. 학교 옮기기 절차는 일반 학교 옮기기와 동일.', a_zh: '无影响。MM2H 不附属于学校,独立居留签证。子女转学时向新学校提交 MM2H 副本 → 发新学生签证。转学流程与一般相同。' },
    ],
  },

  'thai-visa': {
    id: 'thai-visa', emoji: '🇹🇭',
    name_ko: '태국 엘리트 비자 · LTR 비자',
    name_zh: '泰国 Elite 签证 · LTR 签证',
    tagline_ko: '태국 장기 거주 옵션 2가지 — Thailand Elite (간단·5~20년 일시불) vs LTR (자산·소득 요건·10년 갱신·세금 혜택).',
    tagline_zh: '泰国长期居留两个选项 — Thailand Elite (简单 · 5-20 年一次付费) vs LTR (资产 · 收入要求 · 10 年续签 · 税收优惠)。',
    summary_ko: '태국 학부모 비자는 Thailand Elite (관광부 운영, 자산 요건 없음) 와 LTR (Long-Term Resident, 자산·소득 요건) 두 가지가 핵심. MM2H 대비 거주 의무가 없고 신청이 단순. 자녀 국제학교 + 가족 거주 + 동남아 베이스 원하는 학부모의 인기 옵션.',
    summary_zh: '泰国家长签证两核心 — Thailand Elite (旅游部运营,无资产要求) 与 LTR (Long-Term Resident,资产 · 收入要求)。相比 MM2H 无居留义务 + 申请简单。子女国际学校 + 家庭居留 + 东南亚基地家长热门选项。',
    requirements_ko: [
      { label: 'Thailand Elite — 자격', value: '자산·소득 요건 없음. 일시불 결제' },
      { label: 'Thailand Elite — 비용', value: 'THB 900,000 (5년) ~ THB 5,000,000 (20년 + VIP)' },
      { label: 'Thailand Elite — 가족 추가', value: '배우자·자녀 1명당 THB 800,000 추가 (Family Plan)' },
      { label: 'LTR — 자격 (Wealth)', value: '자산 USD $1M + 연 소득 USD $80K+' },
      { label: 'LTR — 자격 (Talent)', value: '국제 기업 근무 + 연 소득 USD $80K+' },
      { label: 'LTR — 비용', value: 'THB 50,000 (~USD $1,500)' },
      { label: 'LTR — 비자 기간', value: '10년 (5+5 갱신)' },
      { label: 'LTR — 자녀 동반', value: '20세 미만 자녀 동반 가능' },
    ],
    requirements_zh: [
      { label: 'Thailand Elite — 资格', value: '无资产 · 收入要求。一次付费' },
      { label: 'Thailand Elite — 费用', value: 'THB 900,000 (5 年) - THB 5,000,000 (20 年 + VIP)' },
      { label: 'Thailand Elite — 家庭添加', value: '配偶 · 子女每名 THB 800,000 (Family Plan)' },
      { label: 'LTR — 资格 (Wealth)', value: '资产 USD $1M + 年收入 USD $80K+' },
      { label: 'LTR — 资格 (Talent)', value: '国际企业 + 年收入 USD $80K+' },
      { label: 'LTR — 费用', value: 'THB 50,000 (~USD $1,500)' },
      { label: 'LTR — 签证期限', value: '10 年 (5+5 续签)' },
      { label: 'LTR — 子女随同', value: '20 岁以下子女随同' },
    ],
    process_ko: [
      '1. Thailand Elite — 공식 사이트 또는 인가 에이전시 통해 신청 (직접 신청도 가능)',
      '2. 서류: 여권·범죄 경력·재정 증명 (Elite 는 자산 요건 없어 간단)',
      '3. 약 1~2개월 심사 후 승인 → 일시불 결제',
      '4. LTR — Board of Investment (BOI) 통해 신청. 자산·소득 증명 필수',
      '5. LTR 승인 후 태국 입국 + 등록',
    ],
    process_zh: [
      '1. Thailand Elite — 官网或认证中介申请 (也可直接申请)',
      '2. 文件:护照 · 无犯罪 · 财务证明 (Elite 无资产要求,较简单)',
      '3. 约 1-2 个月审核后批准 → 一次性付款',
      '4. LTR — 通过 Board of Investment (BOI) 申请。资产 · 收入证明必备',
      '5. LTR 批准后入境泰国 + 注册',
    ],
    pros_ko: [
      'Thailand Elite — 자산 요건 없음 (자녀 학부모 가장 쉬운 옵션)',
      'LTR — 세금 혜택 (해외 소득 면세)',
      '연간 거주 의무 없음 (MM2H 대비)',
      '신청 단순 + 빠름 (1~2개월)',
      '방콕·치앙마이·푸켓 등 다도시 거주 가능',
      '한국 가까운 시차 (1~2시간)',
    ],
    pros_zh: [
      'Thailand Elite — 无资产要求 (子女家长最易选项)',
      'LTR — 税收优惠 (海外收入免税)',
      '无年居留义务 (相比 MM2H)',
      '申请简单 + 快 (1-2 个月)',
      '曼谷 · 清迈 · 普吉等多城市居留可',
      '与韩国时差近 (1-2 小时)',
    ],
    cons_ko: [
      'Thailand Elite — 일시불 비용 큼 (가족 4인 THB 3M+ = USD $85K+)',
      'Thailand Elite — 부동산 매입 자격 미제공 (별도 조건 충족 필요)',
      'LTR — 자산 USD $1M 요건 진입 장벽',
      '태국 정치 안정성·환율 변동 위험',
      '영어 환경 말레이시아 대비 약함 (방콕 외 도시)',
    ],
    cons_zh: [
      'Thailand Elite — 一次付费大 (家庭 4 人 THB 3M+ = USD $85K+)',
      'Thailand Elite — 不含房产购买资格',
      'LTR — 资产 USD $1M 门槛',
      '泰国政治稳定 · 汇率波动风险',
      '英语环境弱于马来西亚 (曼谷外城市)',
    ],
    education_impact_ko: 'Thailand Elite/LTR 보유 학부모 자녀는 태국 국제학교 입학 시 학생 비자 (Education Visa, ED) 또는 부모 비자 Dependent 옵션. 방콕 (STA Shrewsbury·Bangkok Prep·KIS) 또는 파타야 (Rugby·Regents) 학교에서 영국식·IB 트랙 진학 가능.',
    education_impact_zh: '持 Thailand Elite/LTR 家长子女在泰国国际学校入学时可选 Education Visa (ED) 或父母 Dependent。曼谷 (STA Shrewsbury · Bangkok Prep · KIS) 或芭提雅 (Rugby · Regents) 学校提供英式 · IB 路径。',
    faqs: [
      { q_ko: 'Thailand Elite vs LTR 어느 게 학부모에게 좋은가?', q_zh: 'Thailand Elite vs LTR 哪个适合家长?', a_ko: '자산 USD $1M 보유 + 세금 절세 원하면 LTR. 자산 부족 + 단순 거주 원하면 Thailand Elite. Elite 는 일시불 부담 크지만 자녀 동반 + 거주 의무 없음 + 신청 단순으로 한국 학부모 다수 선택.', a_zh: '资产 USD $1M + 想避税选 LTR。资产不足 + 仅居留选 Thailand Elite。Elite 一次付费大但子女随同 + 无居留义务 + 申请简单,韩国家长多选。' },
      { q_ko: 'Family Plan 자녀 추가 비용은?', q_zh: 'Family Plan 子女添加费用?', a_ko: 'Thailand Elite Family Plan — 메인 회원 1명 + 추가 가족 1명당 THB 800,000 (~USD $22,500). 4인 가족 (부모 2 + 자녀 2) 총 THB 3.3M (~USD $93K) 일시불.', a_zh: 'Thailand Elite Family Plan — 主会员 1 + 添加家人每名 THB 800,000 (~USD $22,500)。4 人家庭 (父母 2 + 子女 2) 共 THB 3.3M (~USD $93K) 一次付费。' },
      { q_ko: '태국 부동산 매입 가능?', q_zh: '泰国可购房?', a_ko: '외국인 콘도 매입 가능 (단, 단지 전체의 49% 한도). Thailand Elite/LTR 보유자도 동일 규칙. 토지·단독주택은 외국인 직접 매입 불가 (회사 설립 또는 30년 임대).', a_zh: '外国人可购公寓 (限社区总量 49%)。持 Thailand Elite/LTR 同规则。土地 · 独栋外国人不可直购 (设公司或 30 年租)。' },
    ],
  },

  'singapore-pr': {
    id: 'singapore-pr', emoji: '🇸🇬',
    name_ko: '싱가포르 영주권 (PR) · Employment Pass (EP)',
    name_zh: '新加坡永居 (PR) · Employment Pass (EP)',
    tagline_ko: '싱가포르 거주 트랙 — Employment Pass (회사 통해) → PR → 시민권. 학부모 직접 신청 비자는 거의 없음. 회사 주재원이 가장 쉬운 경로.',
    tagline_zh: '新加坡居留路径 — Employment Pass (通过公司) → PR → 公民。家长直接申请签证几乎无。公司派驻最易路径。',
    summary_ko: '싱가포르는 학부모 동반 비자가 가장 어려운 동남아 국가. Thailand·Malaysia·Vietnam 처럼 학부모가 직접 비자 받기 어렵고, 대부분 회사 통해 EP → DP (Dependant Pass, 배우자·자녀) → 장기 거주 → PR 트랙. 자영업·디지털 노마드 학부모는 EntrePass 별도 옵션이지만 매우 까다로움.',
    summary_zh: '新加坡是东南亚最难家长陪同签证国家。不像 Thailand · Malaysia · Vietnam 家长难直接获签,多通过公司 EP → DP (Dependant Pass,配偶 · 子女) → 长期居留 → PR。自雇 · 数字游牧家长有 EntrePass 选项但极严。',
    requirements_ko: [
      { label: 'Employment Pass (EP)', value: '월 소득 SGD $5,600+ (전문직), 본인 회사 후원 필수' },
      { label: 'EP — 가족 동반 (DP)', value: 'EP 보유자가 SGD $6,000+ 월 소득이면 배우자·21세 미만 자녀 동반 가능' },
      { label: 'PR — 신청 자격', value: 'EP 또는 S Pass 2년+ 보유 후 신청. 승인 약 30%' },
      { label: 'PR — 자녀 학교', value: '싱가포르 공립 학교 우선 입학 가능 (외국 국적 자녀 대비 큰 이점)' },
      { label: 'EntrePass', value: '자영업 · 스타트업 — 자본 SGD $50K+ 또는 펀드 수혜' },
      { label: 'Student Pass', value: '자녀 단독 — 14세 미만은 학부모 1명 동반 가능 (Visit Pass)' },
    ],
    requirements_zh: [
      { label: 'Employment Pass (EP)', value: '月收入 SGD $5,600+ (专业职),需公司担保' },
      { label: 'EP — 家属随同 (DP)', value: 'EP 持有者月收入 SGD $6,000+ 可随同配偶 · 21 岁以下子女' },
      { label: 'PR — 申请资格', value: 'EP 或 S Pass 2 年+ 后申请。批准率约 30%' },
      { label: 'PR — 子女学校', value: '可优先入读新加坡公立学校 (相比外国国籍子女大优势)' },
      { label: 'EntrePass', value: '自雇 · 创业 — 资本 SGD $50K+ 或基金支持' },
      { label: 'Student Pass', value: '子女独立 — 14 岁以下可父母 1 名陪同 (Visit Pass)' },
    ],
    process_ko: [
      '1. 싱가포르 회사 취업 (한국 본사 파견 또는 현지 채용)',
      '2. 회사가 MOM (Ministry of Manpower) 통해 EP 신청',
      '3. EP 발급 후 가족 (배우자·자녀) DP 신청',
      '4. EP 2년+ 보유 후 ICA (Immigration & Checkpoints Authority) 통해 PR 신청',
      '5. PR 승인 후 5년마다 갱신',
      '6. PR 2년+ 보유 시 시민권 신청 자격',
    ],
    process_zh: [
      '1. 入职新加坡公司 (韩国总部派驻或本地招聘)',
      '2. 公司通过 MOM (Ministry of Manpower) 申请 EP',
      '3. EP 发放后家属 (配偶 · 子女) 申请 DP',
      '4. EP 2 年+ 后通过 ICA 申请 PR',
      '5. PR 批准后 5 年续签',
      '6. PR 2 年+ 后可申请公民',
    ],
    pros_ko: [
      '싱가포르 = 동남아 교육 허브 (UWC·HCIS·SAS 글로벌 명문)',
      'PR 보유 시 자녀 싱가포르 공립 학교 입학 우선 (외국 학비 1/3~1/4)',
      'PR 트랙 → 시민권 가능 (영주권 안정성 최상)',
      '치안·인프라·금융 동남아 최상',
      '영어 + 중국어 환경 (자녀 다국어)',
    ],
    pros_zh: [
      '新加坡 = 东南亚教育枢纽 (UWC · HCIS · SAS 全球名校)',
      'PR 持有可优先入读公立学校 (外国学费 1/3-1/4)',
      'PR 路径 → 公民可 (永居稳定最佳)',
      '治安 · 基础设施 · 金融东南亚最优',
      '英语 + 中文环境 (子女多语言)',
    ],
    cons_ko: [
      '학부모 직접 비자 신청 매우 어려움 (회사 의존)',
      'EP 월 소득 SGD $5,600+ 진입 장벽',
      '생활비 한국·말레이시아 대비 1.5~2배',
      'PR 승인율 약 30% — 불확실성 있음',
      '국제학교 학비 동남아 최상 (USD $25K~$40K)',
    ],
    cons_zh: [
      '家长直接申请签证极难 (依赖公司)',
      'EP 月收入 SGD $5,600+ 门槛',
      '生活费比韩 · 马来贵 1.5-2 倍',
      'PR 批准率约 30% — 不确定',
      '国际学校学费东南亚最贵 (USD $25K-40K)',
    ],
    education_impact_ko: '싱가포르 거주 학부모 자녀 학교 옵션: (1) 국제학교 (UWC·HCIS·SAS·CIS 등 외국 국적 자녀 우선) (2) PR 보유 시 공립 학교 (자녀 영어·중국어 바이링궐 + 학비 매우 저렴) (3) 사립 (SFMS — 싱가포르 학사 일정). PR 자녀는 공립 학교 입학 가능해 학비 부담 대폭 절감.',
    education_impact_zh: '新加坡居家长子女学校选项:(1) 国际学校 (UWC · HCIS · SAS · CIS 等优先外国国籍) (2) PR 持有可入公立 (子女英中双语 + 学费极低) (3) 私立 (SFMS — 新加坡学年)。PR 子女可入公立大降学费负担。',
    faqs: [
      { q_ko: '한국에서 EP 어떻게 받나?', q_zh: '在韩国如何获 EP?', a_ko: '싱가포르에 한국 본사 지사 있으면 파견 가장 쉬움. 직접 채용은 싱가포르 현지 채용 시장 진입 + EP 자격 충족. 일반 학부모가 학교만 위해 EP 받는 건 매우 어렵 — 직업·소득 우선.', a_zh: '韩国本部新加坡分公司派驻最易。直接招聘需进入新加坡本地市场 + 满足 EP 资格。普通家长仅为学校获 EP 极难 — 职业 · 收入优先。' },
      { q_ko: 'DP (가족 비자) 자녀 학교 어떻게?', q_zh: 'DP (家属) 子女学校如何?', a_ko: 'DP 자녀 = 외국 국적 — 국제학교 입학 우선. 싱가포르 공립 학교는 외국 국적 자녀 입학 가능하지만 PR 자녀가 절대 우선. 국제학교가 현실적 옵션.', a_zh: 'DP 子女 = 外国国籍 — 优先国际学校。新加坡公立可入但 PR 子女绝对优先。国际学校现实选项。' },
      { q_ko: 'PR 신청 시 자녀 학교 영향?', q_zh: 'PR 申请时子女学校影响?', a_ko: 'PR 신청 시 자녀가 싱가포르 공립 학교 재학 중이면 가산점. 국제학교 재학은 영향 적음. PR 받으면 자녀 공립 학교 옮길 수 있어 학비 대폭 절감.', a_zh: 'PR 申请时子女在新加坡公立有加分。国际学校影响少。获 PR 后子女可转公立大降学费。' },
    ],
  },

  'housing': {
    id: 'housing', emoji: '🏠',
    name_ko: '부동산 · 거주지 가이드 (말·태·싱·베)',
    name_zh: '房产 · 居住地指南 (马 · 泰 · 新 · 越)',
    tagline_ko: '동남아 4국 학부모 거주지 — 임대 vs 매입, 콘도 vs 단독, 한국·중국 학부모 클러스터 종합 정리. 운영자 KL 거주 1차 정보.',
    tagline_zh: '东南亚 4 国家长居住区 — 租赁 vs 购买 · 公寓 vs 独栋 · 韩中家长聚集区综合整理。站长居 KL 第一手信息。',
    summary_ko: '학부모 비자 (MM2H·Elite·LTR·EP) 받으면 다음 결정은 거주지. 임대가 안전한 선택이지만 5년+ 거주 계획이면 매입도 가치. 운영자(데이비드)가 KL 거주하며 학부모 카카오톡·WeChat 청취한 4국 주요 거주지 정리.',
    summary_zh: '获家长签证 (MM2H · Elite · LTR · EP) 后下个决定是居住区。租赁安全,5 年+ 居留计划购房有价值。站长(David)居 KL 综合家长社群信息整理 4 国主要居住区。',
    requirements_ko: [
      { label: '말레이시아 KL — 학부모 거주 1순위', value: 'Mont Kiara · Sri Hartamas · Cheras · Bangsar' },
      { label: '태국 방콕 — 학부모 거주 1순위', value: 'Sukhumvit (Phrom Phong · Thonglor) · Riverside · Bang Na' },
      { label: '싱가포르 — 학부모 거주 1순위', value: 'Bukit Timah · Tanglin · Woodleigh · Dover' },
      { label: '베트남 호치민 — 학부모 거주 1순위', value: 'District 2 Thao Dien · District 7 Phu My Hung' },
      { label: '베트남 하노이 — 학부모 거주 1순위', value: 'Tay Ho 서호 · Royal City · Long Bien Vinhomes' },
      { label: '임대 일반', value: '2~3룸 콘도 월 USD $700~$2,500 (지역·등급 차이)' },
      { label: '매입 (외국인)', value: '말레이시아·태국 콘도만 매입 가능. 토지·단독은 제한' },
    ],
    requirements_zh: [
      { label: '马来 KL — 家长居住首选', value: 'Mont Kiara · Sri Hartamas · Cheras · Bangsar' },
      { label: '泰国曼谷 — 家长居住首选', value: 'Sukhumvit (Phrom Phong · Thonglor) · Riverside · Bang Na' },
      { label: '新加坡 — 家长居住首选', value: 'Bukit Timah · Tanglin · Woodleigh · Dover' },
      { label: '越南胡志明 — 家长居住首选', value: 'District 2 Thao Dien · District 7 Phu My Hung' },
      { label: '越南河内 — 家长居住首选', value: 'Tay Ho 西湖 · Royal City · Long Bien Vinhomes' },
      { label: '租赁一般', value: '2-3 房公寓月 USD $700-$2,500' },
      { label: '购房 (外国人)', value: '马 · 泰仅可购公寓。土地 · 独栋受限' },
    ],
    process_ko: [
      '1. 학교 결정 후 학교 차량 30분 이내 지역 압축',
      '2. iProperty · PropertyGuru (말레이) · Hipflat (태국) · BatDongSan (베트남) 등에서 후보 5~10곳',
      '3. 학부모 카카오톡에서 단지별 한국 학부모 비율 청취',
      '4. 현지 방문 (1주~2주) 후 3개 단지로 압축',
      '5. 6~12개월 임대 계약 (대부분 2개월 보증금 + 1개월 선납)',
      '6. 5년+ 거주 확정 시 매입 검토 (콘도만 외국인 가능, 가격대 지역별 다름)',
    ],
    process_zh: [
      '1. 决定学校后压缩到学校车程 30 分钟内地区',
      '2. iProperty · PropertyGuru (马) · Hipflat (泰) · BatDongSan (越) 等找 5-10 候选',
      '3. 家长社群打听各小区韩中家长比例',
      '4. 实地访问 (1-2 周) 后压缩 3 个小区',
      '5. 6-12 个月租约 (一般 2 个月押金 + 1 个月预付)',
      '6. 5 年+ 居留确定时考虑购房 (外国人仅公寓,价格各地区不同)',
    ],
    pros_ko: [
      '한국 대비 임대료 1/2~1/3 — 가족 생활 부담 절감',
      '단지별 학부모 커뮤니티 (카카오톡·WeChat) 활성',
      '대부분 단지에 수영장·헬스장·24시간 보안',
      '학교 셔틀 노선 단지별 운영',
      '단지 내 한국·중국 슈퍼·식당 (특히 KL Mont Kiara, 방콕 Sukhumvit, 호치민 Thao Dien)',
    ],
    pros_zh: [
      '租金仅韩国 1/2-1/3 — 家庭负担减轻',
      '小区家长社群 (微信 · 카카오톡) 活跃',
      '多数小区有泳池 · 健身房 · 24h 安保',
      '校车按小区运行',
      '小区内韩中超市 · 餐厅 (尤其 KL Mont Kiara · 曼谷 Sukhumvit · 胡志明 Thao Dien)',
    ],
    cons_ko: [
      '외국인 부동산 매입 규제 (콘도 제한·토지 불가)',
      '단지 관리비 (월 USD $100~$300) 별도',
      '학부모 비자 종료 시 부동산 처분 절차 복잡',
      '환율 변동으로 매입 가치 변동',
      '단지별 한국 학부모 비율 차이 큼 — 사전 청취 필수',
    ],
    cons_zh: [
      '外国人购房限制 (公寓限制 · 土地不可)',
      '小区物业 (月 USD $100-$300) 另计',
      '家长签证结束时房产处置流程复杂',
      '汇率波动影响购买价值',
      '小区韩中家长比例差异大 — 提前打听必备',
    ],
    education_impact_ko: '거주지 결정은 자녀 학교 결정과 직결. 학교 차량 20~30분 거주가 자녀 컨디션·가족 시간에 최적. 학교 셔틀 노선 따라가는 콘도가 통학 부담 최소화. 일부 학교는 단지 일체형 (UCSI Residence · Tropicana Aman 등) — 도보 통학 가능. 학교 인근 단지가 매입 시 가치 보존도 우수.',
    education_impact_zh: '居住地决定与子女学校直接关联。学校车程 20-30 分钟最佳子女状态 · 家庭时间。沿校车线公寓最小通学负担。部分学校小区一体 (UCSI Residence · Tropicana Aman 等) — 可步行通学。学校附近小区购房保值优秀。',
    faqs: [
      { q_ko: '임대 vs 매입 어느 게 좋은가?', q_zh: '租赁 vs 购买哪个好?', a_ko: '5년+ 거주 계획이면 매입 검토. 5년 이내면 임대가 안전 — 부동산 매도 절차·시장 변동·자녀 학교 변경 가능성. 자녀 학년 안정 + 부모 비자 장기 보유 시 매입 가치 있음.', a_zh: '5 年+ 居留计划考虑购买。5 年内租赁安全 — 房产出售流程 · 市场波动 · 子女转学可能性。子女年级稳定 + 父母签证长期持有时购买有价值。' },
      { q_ko: '단지 한국 학부모 비율 어떻게 확인?', q_zh: '小区韩国家长比例如何确认?', a_ko: '학부모 카카오톡 단톡방·블로그 후기·실제 단지 입주 학부모 1~2명 인터뷰 권장. 부동산 에이전트 정보는 마케팅용 — 실제와 차이. 단지 내 한국 슈퍼·식당 있는지가 객관 지표.', a_zh: '建议家长社群 · 博客评价 · 实际入住家长 1-2 名访谈。中介信息为营销用与实际有差。小区内韩国超市 · 餐厅是客观指标。' },
      { q_ko: '학교 셔틀 vs 직접 등하원 어느 게?', q_zh: '校车 vs 自驾哪个?', a_ko: '학교 차량 10분 이내 거주 = 직접 등하원 가성비 우수 + 자녀 컨디션 좋음. 차량 20분+ = 셔틀 추천 (월 KRW 15만원 수준). 자녀 1명만 학교 다니면 와이프 직접 등하원이 모녀 시간으로 가치 있는 케이스도 있음.', a_zh: '学校车程 10 分钟内 = 自驾性价比好 + 子女状态佳。车程 20+ 分钟 = 校车推荐 (月 KRW 15 万). 仅 1 名子女上学时配偶自驾作为母女时间也有价值。' },
    ],
  },
};

export const MM2H_KEYS = ['malaysia-mm2h', 'thai-visa', 'singapore-pr', 'housing'] as const;
