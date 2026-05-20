import { useMemo, useState } from 'react';
import type { Locale } from '../../lib/i18n';

interface SchoolRow {
  slug: string;
  name: string;
  country: string;
  city: string;
  tuition_annual_usd: number;
  budget_tier: string;
  curriculum: string;
  grade_low: string;
  grade_high: string;
  boarding: string;
  korean_ratio?: number;
  chinese_mainland_ratio?: number;
  chinese_overseas_ratio?: number;
  visited_by_operator: boolean;
  href: string;
}

interface Props {
  locale: Locale;
  schools: SchoolRow[];
}

const T = {
  ko: {
    h: '학교 비교 도구',
    sub: '최대 4개 학교를 선택해 학비·커리큘럼·학년·한국인/중국인 비율·기숙 여부를 한 표로 비교.',
    pick: '학교 선택',
    empty: '등록된 학교가 아직 없습니다. 운영자가 직접 방문·검증한 학교가 누적되면 자동으로 비교 가능해집니다.',
    selected: '선택된 학교',
    clear: '선택 초기화',
    filter: '검색',
    rows: {
      country: '국가 · 도시',
      tuition: '연 학비',
      budget: '예산 카테고리',
      curriculum: '커리큘럼',
      grade: '학년',
      boarding: '기숙',
      korean: '한국 학생 비율',
      chinese_mainland: '중국 본토',
      chinese_overseas: '화교 (현지 중국계)',
      visited: '운영자 방문',
    },
    limit: '최대 4개까지 선택',
  },
  zh: {
    h: '学校对比工具',
    sub: '最多选 4 所学校,在一张表内对比学费 · 课程 · 年级 · 韩国/中国学生比例 · 寄宿。',
    pick: '选择学校',
    empty: '暂未收录学校。站长亲自走访·核实后,可在此自动对比。',
    selected: '已选学校',
    clear: '清空',
    filter: '搜索',
    rows: {
      country: '国家 · 城市',
      tuition: '年学费',
      budget: '预算',
      curriculum: '课程',
      grade: '年级',
      boarding: '寄宿',
      korean: '韩国学生比例',
      chinese_mainland: '中国大陆',
      chinese_overseas: '本地华人',
      visited: '站长走访',
    },
    limit: '最多选择 4 所',
  },
};

const fmtUsd = (n: number, locale: Locale) =>
  new Intl.NumberFormat(locale === 'ko' ? 'ko-KR' : 'zh-CN', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);

export default function SchoolCompare({ locale, schools }: Props) {
  const t = T[locale];
  const [selected, setSelected] = useState<string[]>([]);
  const [query, setQuery] = useState('');

  const toggle = (slug: string) => {
    setSelected((prev) => {
      if (prev.includes(slug)) return prev.filter((s) => s !== slug);
      if (prev.length >= 4) return prev; // 최대 4개
      return [...prev, slug];
    });
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return schools;
    return schools.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.country.toLowerCase().includes(q) ||
        s.city.toLowerCase().includes(q)
    );
  }, [query, schools]);

  const selectedRows = selected
    .map((slug) => schools.find((s) => s.slug === slug))
    .filter(Boolean) as SchoolRow[];

  if (schools.length === 0) {
    return (
      <div className="rounded-lg border bg-white p-6" style={{ borderColor: 'var(--color-border-light)' }}>
        <h3 className="text-lg text-primary-900" style={{ fontWeight: 500 }}>{t.h}</h3>
        <p className="mt-2 text-sm text-[color:var(--color-text-secondary)]">{t.empty}</p>
        <a href={`/${locale}/abroad/`} className="cta-secondary mt-4 inline-flex text-sm">
          {locale === 'ko' ? '학교 목록 보기' : '查看学校列表'}
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-lg border bg-white" style={{ borderColor: 'var(--color-border-light)' }}>
      <div className="border-b px-5 py-4" style={{ borderColor: 'var(--color-border-light)' }}>
        <h3 className="text-lg text-primary-900" style={{ fontWeight: 500 }}>{t.h}</h3>
        <p className="mt-1 text-sm text-[color:var(--color-text-secondary)]">{t.sub}</p>
      </div>

      {/* 선택 영역 */}
      <div className="px-5 py-4">
        <div className="flex flex-wrap items-center gap-2">
          <input
            type="search"
            placeholder={t.filter}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full max-w-xs rounded-md border px-3 py-2 text-sm"
            style={{ borderColor: 'var(--color-border-medium)' }}
          />
          <span className="text-xs text-[color:var(--color-text-tertiary)]">{t.limit}</span>
          {selected.length > 0 && (
            <button onClick={() => setSelected([])} className="text-xs text-primary-700 hover:underline ml-auto">
              {t.clear}
            </button>
          )}
        </div>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s) => {
            const checked = selected.includes(s.slug);
            const disabled = !checked && selected.length >= 4;
            return (
              <li key={s.slug}>
                <label className={`flex cursor-pointer items-start gap-2 rounded-md border p-3 text-sm ${disabled ? 'opacity-40' : 'hover:border-primary-700'}`}
                  style={{ borderColor: checked ? 'var(--color-primary-700)' : 'var(--color-border-light)', background: checked ? 'var(--color-primary-100)' : '' }}>
                  <input type="checkbox" checked={checked} disabled={disabled} onChange={() => toggle(s.slug)} className="mt-0.5" />
                  <span>
                    <span className="block text-primary-900" style={{ fontWeight: 500 }}>{s.name}</span>
                    <span className="block text-xs text-[color:var(--color-text-secondary)]">{s.country} · {s.city} · {fmtUsd(s.tuition_annual_usd, locale)}</span>
                    {s.visited_by_operator && <span className="badge-gold mt-1 inline-flex">⭐ {locale === 'ko' ? '방문 확인' : '已走访'}</span>}
                  </span>
                </label>
              </li>
            );
          })}
        </ul>
      </div>

      {/* 비교 테이블 */}
      {selectedRows.length > 0 && (
        <div className="border-t px-5 py-5 overflow-x-auto" style={{ borderColor: 'var(--color-border-light)' }}>
          <h4 className="text-base text-primary-900" style={{ fontWeight: 500 }}>{t.selected} ({selectedRows.length}/4)</h4>
          <table className="mt-3 w-full text-sm">
            <thead>
              <tr className="border-b" style={{ borderColor: 'var(--color-border-light)' }}>
                <th className="py-2 text-left text-xs uppercase tracking-wide text-[color:var(--color-text-tertiary)]"></th>
                {selectedRows.map((s) => (
                  <th key={s.slug} className="py-2 px-2 text-left">
                    <a href={s.href} className="text-primary-900 hover:underline" style={{ fontWeight: 500 }}>{s.name}</a>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <Row label={t.rows.country} cells={selectedRows.map((s) => `${s.country} · ${s.city}`)} />
              <Row label={t.rows.tuition} cells={selectedRows.map((s) => fmtUsd(s.tuition_annual_usd, locale))} />
              <Row label={t.rows.budget} cells={selectedRows.map((s) => s.budget_tier)} />
              <Row label={t.rows.curriculum} cells={selectedRows.map((s) => s.curriculum)} />
              <Row label={t.rows.grade} cells={selectedRows.map((s) => `${s.grade_low} – ${s.grade_high}`)} />
              <Row label={t.rows.boarding} cells={selectedRows.map((s) => s.boarding)} />
              <Row label={t.rows.korean} cells={selectedRows.map((s) => s.korean_ratio !== undefined ? `${s.korean_ratio}%` : '—')} />
              <Row label={t.rows.chinese_mainland} cells={selectedRows.map((s) => s.chinese_mainland_ratio !== undefined ? `${s.chinese_mainland_ratio}%` : '—')} />
              <Row label={t.rows.chinese_overseas} cells={selectedRows.map((s) => s.chinese_overseas_ratio !== undefined ? `${s.chinese_overseas_ratio}%` : '—')} />
              <Row label={t.rows.visited} cells={selectedRows.map((s) => s.visited_by_operator ? '⭐' : '—')} />
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function Row({ label, cells }: { label: string; cells: string[] }) {
  return (
    <tr className="border-b align-top" style={{ borderColor: 'var(--color-border-light)' }}>
      <td className="py-2 pr-3 text-[color:var(--color-text-secondary)] whitespace-nowrap">{label}</td>
      {cells.map((c, i) => <td key={i} className="py-2 px-2 text-[color:var(--color-text-primary)]" style={{ fontWeight: 500 }}>{c}</td>)}
    </tr>
  );
}
