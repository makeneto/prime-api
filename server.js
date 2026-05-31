import express from "express"
import quoteRoutes from "./routes/quote.routes.js"

const app = express()
const PORT = 3000

app.use(express.json())

// routes
app.use("/", quoteRoutes)

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`)
})
