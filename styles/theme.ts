export const theme = {
  fonts: {
    heading: 'Inter var, sans-serif',
    body: 'Inter var, sans-serif',
  },
  colors: {
    brand: {
      primary: '#0ea5e9',
      secondary: '#0369a1',
      accent: '#7dd3fc',
    },
    text: {
      primary: '#1e293b',
      secondary: '#64748b',
      muted: '#94a3b8',
    },
    background: {
      primary: '#ffffff',
      secondary: '#f8fafc',
      tertiary: '#f1f5f9',
    },
  },
  transitions: {
    default: '0.2s ease-in-out',
    smooth: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  spacing: {
    sidebar: {
      expanded: '280px',
      collapsed: '64px',
    },
  },
} as const;