import fs from "fs"
import path from "path"
import { getWeekIdUtil } from "../utils/week.js"

const quotesPath = path.resolve("./data/quotes.json")
const storePath = path.resolve("./data/weeklyStore.json")

const quotes = JSON.parse(fs.readFileSync(quotesPath, "utf-8"))
let store = safeRead(storePath)

function safeRead(file) {
  try {
    const data = fs.readFileSync(file, "utf-8")
    return data ? JSON.parse(data) : { weekId: "", quote: null }
  } catch {
    return { weekId: "", quote: null }
  }
}

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)]
}

export function fetchWeeklyQuote() {
  const weekId = getWeekIdUtil()

  if (store.weekId !== weekId || !store.quote) {
    store = {
      weekId,
      quote: getRandomQuote(),
    }

    fs.writeFileSync(storePath, JSON.stringify(store, null, 2))
  }

  return store.quote
}

export function getWeekId() {
  return getWeekIdUtil()
}
