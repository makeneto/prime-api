import { Router } from "express"
import { getWeeklyQuote, healthCheck } from "../controllers/quote.controller.js"

const router = Router()

router.get("/quote/week", getWeeklyQuote)
router.get("/", healthCheck)

export default router
