import express from "express"
import cors from "cors"
import quoteRoutes from "./routes/quote.routes.js"

const app = express()
const PORT = 3000

app.use(
  cors({
    origin: "*",
  }),
)

app.use(express.json())

app.use("/", quoteRoutes)

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`)
})
