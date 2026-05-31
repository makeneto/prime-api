import { fetchWeeklyQuote, getWeekId } from "../services/quote.service.js"

export function getWeeklyQuote(req, res) {
  const quote = fetchWeeklyQuote()

  res.json({
    week: getWeekId(),
    quote,
  })
}

export function healthCheck(req, res) {
  res.json({ status: "Weekly Quote API running 🚀" })
}
