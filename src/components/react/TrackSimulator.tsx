import { useMemo, useState } from 'react';
import {
  TARGET_UNIVERSITIES,
  START_REGIONS,
  STAGE_TEMPLATES,
  computePlan,
  type TargetUniversity,
  type StartRegion,
  type BudgetTier,
} from '../../lib/track-scenarios';
import type { Locale } from '../../lib/i18n';

interface Props {
  locale: Locale;
}

const GRADES = [
  { value: 0, ko: '유치원', zh: '幼儿园' },
  { value: 1, ko: '초1 (G1)', zh: 'G1' },
  { value: 2, ko: '초2 (G2)', zh: 'G2' },
  { value: 3, ko: '초3 (G3)', zh: 'G3' },
  { value: 4, ko: '초4 (G4)', zh: 'G4' },
  { value: 5, ko: '초5 (G5)', zh: 'G5' },
  { value: 6, ko: '초6 (G6)', zh: 'G6' },
  { value: 7, ko: '중1 (G7)', zh: 'G7' },
  { value: 8, ko: '중2 (G8)', zh: 'G8' },
  { value: 9, ko: '중3 (G9)', zh: 'G9' },
  { value: 10, ko: '고1 (G10)', zh: 'G10' },
  { value: 11, ko: '고2 (G11)', zh: 'G11' },
  { value: 12, ko: '고3 (G12)', zh: 'G12' },
];

const BUDGETS: { id: BudgetTier; ko: string; zh: string }[] = [
  { id: 'budget-friendly', ko: '가성비 (~$10K/년)', zh: '高性价比(~$1万/年)' },
  { id: 'mid-range', ko: '중간 ($10K–$20K)', zh: '中等($1万–$2万)' },
  { id: 'premium', ko: '프리미엄 ($20K–$35K)', zh: '高端($2万–$3.5万)' },
  { id: 'top-tier', ko: '최상위 ($35K+)', zh: '顶级($3.5万+)' },
];

const T = {
  ko: {
    h: '진학 트랙 시뮬레이터',
    sub: '자녀 현재 학년 · 목표 대학 · 출발지 · 예산을 입력하면 학년별 단계·시험·예상 비용을 계산합니다.',
    grade: '자녀 현재 학년',
    target: '목표 대학',
    start: '출발지',
    budget: '연간 예산 수준',
    run: '계산하기',
    reset: '다시 입력',
    curriculum: '권장 커리큘럼',
    cost: '예상 잔여 학비 총액 (USD)',
    years: '남은 학년 수',
    stages: '학년별 단계',
    exam: '주요 시험',
    skip: '이미 지난 단계',
    note: '※ 이 도구는 일반화된 단계·평균 학비 범위로 추정합니다. 실제 학교·연도별 학비, 비교과·합격률은 별도 확인이 필요합니다.',
    cta: '운영자에게 1:1 상담 →',
    nodecision: '권장 사항 안내',
  },
  zh: {
    h: '升学路径模拟器',
    sub: '输入孩子当前年级 · 目标大学 · 出发地 · 预算,即可生成各阶段步骤、考试与预估总费用。',
    grade: '孩子当前年级',
    target: '目标大学',
    start: '出发地',
    budget: '年度预算',
    run: '计算',
    reset: '重新输入',
    curriculum: '推荐课程体系',
    cost: '预估剩余学费总额(USD)',
    years: '剩余年级数',
    stages: '各阶段步骤',
    exam: '主要考试',
    skip: '已过的阶段',
    note: '※ 本工具基于通用阶段与平均学费区间估算。具体学校·学年学费与课外·录取率请单独核实。',
    cta: '向站长 1:1 咨询 →',
    nodecision: '推荐说明',
  },
};

const fmt = (n: number, locale: Locale) =>
  new Intl.NumberFormat(locale === 'ko' ? 'ko-KR' : 'zh-CN', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);

export default function TrackSimulator({ locale }: Props) {
  const t = T[locale];
  const [grade, setGrade] = useState<number>(3);
  const [target, setTarget] = useState<TargetUniversity>('uk-oxbridge');
  const [start, setStart] = useState<StartRegion>('sea-malaysia');
  const [budget, setBudget] = useState<BudgetTier>('mid-range');
  const [submitted, setSubmitted] = useState(false);

  const plan = useMemo(
    () => (submitted ? computePlan({ currentGrade: grade, target, start, budget }) : null),
    [submitted, grade, target, start, budget]
  );

  const labelKo = (a: { ko: string; zh: string }) => (locale === 'ko' ? a.ko : a.zh);

  return (
    <div className="rounded-lg border bg-white" style={{ borderColor: 'var(--color-border-light)' }}>
      <div className="border-b px-5 py-4" style={{ borderColor: 'var(--color-border-light)' }}>
        <div className="flex items-center gap-2">
          <span className="badge-gold">⭐ {locale === 'ko' ? '킬러 도구' : '核心工具'}</span>
        </div>
        <h3 className="mt-2 text-lg text-primary-900" style={{ fontWeight: 500 }}>{t.h}</h3>
        <p className="mt-1 text-sm text-[color:var(--color-text-secondary)]">{t.sub}</p>
      </div>

      <div className="grid gap-4 px-5 py-5 sm:grid-cols-2">
        <Field label={t.grade}>
          <select value={grade} onChange={(e) => setGrade(Number(e.target.value))} className="w-full rounded-md border px-3 py-2 text-sm" style={{ borderColor: 'var(--color-border-medium)' }}>
            {GRADES.map((g) => <option key={g.value} value={g.value}>{labelKo(g)}</option>)}
          </select>
        </Field>
        <Field label={t.target}>
          <select value={target} onChange={(e) => setTarget(e.target.value as TargetUniversity)} className="w-full rounded-md border px-3 py-2 text-sm" style={{ borderColor: 'var(--color-border-medium)' }}>
            {TARGET_UNIVERSITIES.map((u) => <option key={u.id} value={u.id}>{labelKo(u)}</option>)}
          </select>
        </Field>
        <Field label={t.start}>
          <select value={start} onChange={(e) => setStart(e.target.value as StartRegion)} className="w-full rounded-md border px-3 py-2 text-sm" style={{ borderColor: 'var(--color-border-medium)' }}>
            {START_REGIONS.map((s) => <option key={s.id} value={s.id}>{labelKo(s)}</option>)}
          </select>
        </Field>
        <Field label={t.budget}>
          <select value={budget} onChange={(e) => setBudget(e.target.value as BudgetTier)} className="w-full rounded-md border px-3 py-2 text-sm" style={{ borderColor: 'var(--color-border-medium)' }}>
            {BUDGETS.map((b) => <option key={b.id} value={b.id}>{labelKo(b)}</option>)}
          </select>
        </Field>
      </div>

      <div className="flex flex-wrap gap-3 px-5 pb-5">
        <button onClick={() => setSubmitted(true)} className="cta-primary text-sm">{t.run}</button>
        {submitted && <button onClick={() => setSubmitted(false)} className="cta-secondary text-sm">{t.reset}</button>}
      </div>

      {plan && (
        <div className="border-t px-5 py-6" style={{ borderColor: 'var(--color-border-light)' }}>
          <div className="grid gap-4 sm:grid-cols-3">
            <Summary label={t.curriculum} value={plan.curriculum} accent />
            <Summary label={t.years} value={`${plan.yearsRemaining} ${locale === 'ko' ? '년' : '年'}`} />
            <Summary label={t.cost} value={`${fmt(plan.estimatedTotalUsd.min, locale)} – ${fmt(plan.estimatedTotalUsd.max, locale)}`} />
          </div>

          <div className="mt-5 rounded-md bg-primary-100 p-4 text-sm text-primary-900">
            <div className="text-xs uppercase tracking-wide opacity-80">{t.nodecision}</div>
            <p className="mt-1">{locale === 'ko' ? plan.targetMeta.notes_ko : plan.targetMeta.notes_zh}</p>
          </div>

          <h4 className="mt-6 text-base text-primary-900" style={{ fontWeight: 500 }}>{t.stages}</h4>
          <ol className="mt-3 space-y-3">
            {plan.stages.map((s) => (
              <li
                key={s.template.id}
                className={`rounded-md border p-4 text-sm ${s.included ? '' : 'opacity-50'}`}
                style={{ borderColor: 'var(--color-border-light)' }}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="text-primary-900" style={{ fontWeight: 500 }}>
                    {locale === 'ko' ? s.template.yearLabel_ko : s.template.yearLabel_zh}
                  </div>
                  <div className="text-xs text-[color:var(--color-text-tertiary)]">
                    {locale === 'ko' ? s.template.ageLabel_ko : s.template.ageLabel_zh}
                    {!s.included && <> · {t.skip}</>}
                  </div>
                </div>
                <ul className="mt-2 list-disc pl-5 text-[color:var(--color-text-secondary)]">
                  {(locale === 'ko' ? s.template.focus_ko : s.template.focus_zh).map((f) => <li key={f}>{f}</li>)}
                </ul>
                {s.exams.length > 0 && (
                  <p className="mt-2 text-xs text-[color:var(--color-text-tertiary)]">
                    <strong style={{ fontWeight: 500 }}>{t.exam}:</strong> {s.exams.join(' · ')}
                  </p>
                )}
              </li>
            ))}
          </ol>

          <p className="mt-6 text-xs text-[color:var(--color-text-tertiary)]">{t.note}</p>
          <div className="mt-3">
            <a href={`/${locale}/contact/`} className="cta-primary text-sm">{t.cta}</a>
          </div>
        </div>
      )}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs text-[color:var(--color-text-secondary)]">{label}</span>
      <span className="mt-1 block">{children}</span>
    </label>
  );
}

function Summary({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className={`rounded-md border p-3 ${accent ? 'border-accent-500 bg-accent-100' : ''}`} style={{ borderColor: accent ? '#F59E0B' : 'var(--color-border-light)' }}>
      <div className="text-xs text-[color:var(--color-text-secondary)]">{label}</div>
      <div className={`mt-1 text-base ${accent ? 'text-accent-700' : 'text-primary-900'}`} style={{ fontWeight: 500 }}>{value}</div>
    </div>
  );
}
