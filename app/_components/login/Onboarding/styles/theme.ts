export const theme = {
  colors: {
    brand: {
      gradient: 'from-brand-500 via-brand-400 to-brand-600',
      hover: 'from-brand-600 via-brand-500 to-brand-700'
    },
    text: {
      heading: 'from-gray-900 to-gray-700',
      body: 'text-gray-600',
      muted: 'text-gray-400'
    },
    background: {
      primary: 'from-gray-50 via-white to-gray-50',
      card: 'bg-white/90 backdrop-blur-sm'
    }
  },
  shadows: {
    sm: 'shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)]',
    md: 'shadow-[0_4px_12px_-4px_rgba(0,0,0,0.1)]',
    lg: 'shadow-[0_8px_24px_-8px_rgba(0,0,0,0.15)]'
  },
  animation: {
    spring: { type: 'spring', bounce: 0.2, duration: 0.6 },
    fade: { duration: 0.2, ease: 'easeOut' }
  }
};