export function getWeekIdUtil() {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 1)

  const days = Math.floor((now - start) / (24 * 60 * 60 * 1000))
  const week = Math.ceil(days / 7)

  return `${now.getFullYear()}-W${week}`
}
