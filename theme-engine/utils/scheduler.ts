export function shouldUseDarkMode(date: Date = new Date()) {
  const hour = date.getHours()

  return hour >= 18 || hour < 6
}

export function applyTheme(isDark: boolean) {

  const root = document.documentElement

  if (isDark) {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
}