/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // 메인 컬러 (네이비)
        primary: {
          100: '#DBEAFE',
          700: '#1D4ED8',
          900: '#1E3A8A',
        },
        // 강조 컬러 (골드) — 핵심 차별점에만
        accent: {
          100: '#FEF3C7',
          500: '#F59E0B',
          700: '#92400E',
        },
        // 시맨틱
        success: '#047857',
        warning: '#D97706',
        danger: '#DC2626',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Apple SD Gothic Neo"',
          '"Pretendard Variable"',
          'Pretendard',
          '"Malgun Gothic"',
          '"맑은 고딕"',
          'system-ui',
          '"Noto Sans KR"',
          '"Noto Sans SC"',
          'Inter',
          'sans-serif',
        ],
      },
      fontWeight: {
        // 사양: 400 + 500만 사용. 700+ 금지.
        normal: '400',
        medium: '500',
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};
