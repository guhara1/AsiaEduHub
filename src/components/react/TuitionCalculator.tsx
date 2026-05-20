import { useMemo, useState } from 'react';
import type { Locale } from '../../lib/i18n';

interface Props {
  locale: Locale;
}

// 환율은 운영자가 분기별 업데이트. 기본값은 2026-05 기준 근사치.
const DEFAULT_FX = {
  KRW_per_USD: 1370,
  CNY_per_USD: 7.2,
} as const;

const T = {
  ko: {
    h: '학비 계산기',
    sub: '연 학비 + 부대 비용 + 기숙·항공권·환율을 모두 포함한 총비용. 환율은 직접 수정 가능.',
    tuition: '연 학비 (USD)',
    fees: '부대 비용 (입학·시설·교복 등, USD/년)',
    boarding: '기숙 비용 (선택, USD/년)',
    flights: '항공권 (왕복 횟수 × USD)',
    flightsCount: '왕복 횟수/년',
    flightsCost: '왕복 1회 비용 (USD)',
    years: '재학 기간 (년)',
    fxKrw: 'USD → KRW 환율',
    fxCny: 'USD → CNY 환율',
    inflation: '연 학비 상승률 (%)',
    total: '총 예상 비용',
    perYear: '연평균',
    krw: '원화',
    cny: '위안화',
    reset: '초기화',
    note: '※ 환율·인플레이션은 추정값입니다. 학교가 학비를 인상하거나 환율이 바뀌면 실제 비용은 달라집니다.',
  },
  zh: {
    h: '学费计算器',
    sub: '年学费 + 杂费 + 寄宿 + 机票 + 汇率全部计入的总成本。汇率可手动调整。',
    tuition: '年学费(USD)',
    fees: '杂费(申请·设施·校服 等,USD/年)',
    boarding: '寄宿费(可选,USD/年)',
    flights: '机票(往返次数 × USD)',
    flightsCount: '往返次数/年',
    flightsCost: '单次往返(USD)',
    years: '在读年数',
    fxKrw: 'USD → 韩元 汇率',
    fxCny: 'USD → 人民币 汇率',
    inflation: '年学费涨幅(%)',
    total: '总预估费用',
    perYear: '年均',
    krw: '韩元',
    cny: '人民币',
    reset: '重置',
    note: '※ 汇率与通胀为估算。学校涨价或汇率变动会使实际成本不同。',
  },
};

const fmtUsd = (n: number, locale: Locale) =>
  new Intl.NumberFormat(locale === 'ko' ? 'ko-KR' : 'zh-CN', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
const fmtKrw = (n: number) => new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW', maximumFractionDigits: 0 }).format(n);
const fmtCny = (n: number) => new Intl.NumberFormat('zh-CN', { style: 'currency', currency: 'CNY', maximumFractionDigits: 0 }).format(n);

export default function TuitionCalculator({ locale }: Props) {
  const t = T[locale];
  const [tuition, setTuition] = useState(18000);
  const [fees, setFees] = useState(2000);
  const [boarding, setBoarding] = useState(0);
  const [flightsCount, setFlightsCount] = useState(2);
  const [flightsCost, setFlightsCost] = useState(800);
  const [years, setYears] = useState(6);
  const [inflation, setInflation] = useState(5);
  const [krwFx, setKrwFx] = useState(DEFAULT_FX.KRW_per_USD);
  const [cnyFx, setCnyFx] = useState(DEFAULT_FX.CNY_per_USD);

  const result = useMemo(() => {
    let total = 0;
    const r = inflation / 100;
    for (let i = 0; i < years; i++) {
      const factor = Math.pow(1 + r, i);
      total += (tuition + fees + boarding) * factor;
      total += flightsCount * flightsCost;
    }
    return {
      totalUsd: Math.round(total),
      perYearUsd: Math.round(total / years),
      totalKrw: Math.round(total * krwFx),
      totalCny: Math.round(total * cnyFx),
    };
  }, [tuition, fees, boarding, flightsCount, flightsCost, years, inflation, krwFx, cnyFx]);

  const onReset = () => {
    setTuition(18000); setFees(2000); setBoarding(0);
    setFlightsCount(2); setFlightsCost(800); setYears(6);
    setInflation(5); setKrwFx(DEFAULT_FX.KRW_per_USD); setCnyFx(DEFAULT_FX.CNY_per_USD);
  };

  return (
    <div className="rounded-lg border bg-white" style={{ borderColor: 'var(--color-border-light)' }}>
      <div className="border-b px-5 py-4" style={{ borderColor: 'var(--color-border-light)' }}>
        <h3 className="text-lg text-primary-900" style={{ fontWeight: 500 }}>{t.h}</h3>
        <p className="mt-1 text-sm text-[color:var(--color-text-secondary)]">{t.sub}</p>
      </div>

      <div className="grid gap-4 px-5 py-5 sm:grid-cols-2">
        <NumField label={t.tuition} value={tuition} setValue={setTuition} step={500} />
        <NumField label={t.fees} value={fees} setValue={setFees} step={100} />
        <NumField label={t.boarding} value={boarding} setValue={setBoarding} step={500} />
        <NumField label={t.years} value={years} setValue={setYears} step={1} min={1} max={13} />
        <NumField label={t.flightsCount} value={flightsCount} setValue={setFlightsCount} step={1} min={0} max={12} />
        <NumField label={t.flightsCost} value={flightsCost} setValue={setFlightsCost} step={50} />
        <NumField label={t.inflation} value={inflation} setValue={setInflation} step={0.5} suffix="%" />
        <NumField label={t.fxKrw} value={krwFx} setValue={setKrwFx} step={10} />
        <NumField label={t.fxCny} value={cnyFx} setValue={setCnyFx} step={0.05} />
      </div>

      <div className="px-5 pb-3">
        <button onClick={onReset} className="cta-secondary text-xs">{t.reset}</button>
      </div>

      <div className="border-t px-5 py-6" style={{ borderColor: 'var(--color-border-light)' }}>
        <div className="text-xs text-[color:var(--color-text-secondary)]">{t.total} ({years} {locale === 'ko' ? '년' : '年'})</div>
        <div className="mt-1 text-3xl text-primary-900" style={{ fontWeight: 500 }}>{fmtUsd(result.totalUsd, locale)}</div>
        <div className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
          {t.perYear}: <strong style={{ fontWeight: 500 }}>{fmtUsd(result.perYearUsd, locale)}</strong>
        </div>
        <div className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
          <div className="rounded-md bg-[color:var(--color-bg-secondary)] px-3 py-2">
            <span className="text-xs text-[color:var(--color-text-tertiary)]">{t.krw}</span>{' '}
            <strong style={{ fontWeight: 500 }}>{fmtKrw(result.totalKrw)}</strong>
          </div>
          <div className="rounded-md bg-[color:var(--color-bg-secondary)] px-3 py-2">
            <span className="text-xs text-[color:var(--color-text-tertiary)]">{t.cny}</span>{' '}
            <strong style={{ fontWeight: 500 }}>{fmtCny(result.totalCny)}</strong>
          </div>
        </div>
        <p className="mt-4 text-xs text-[color:var(--color-text-tertiary)]">{t.note}</p>
      </div>
    </div>
  );
}

function NumField({ label, value, setValue, step = 1, min, max, suffix }: {
  label: string; value: number; setValue: (n: number) => void;
  step?: number; min?: number; max?: number; suffix?: string;
}) {
  return (
    <label className="block">
      <span className="block text-xs text-[color:var(--color-text-secondary)]">{label}</span>
      <div className="mt-1 flex items-center gap-1">
        <input
          type="number"
          value={value}
          step={step}
          min={min}
          max={max}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full rounded-md border px-3 py-2 text-sm"
          style={{ borderColor: 'var(--color-border-medium)' }}
        />
        {suffix && <span className="text-sm text-[color:var(--color-text-tertiary)]">{suffix}</span>}
      </div>
    </label>
  );
}
