import HttpError from "http-errors"
import bodyParser from "body-parser"
import express from "express"
import path from "path"
import morgan from "morgan"  // logger
import * as indexRouter from "./routes/index.js"
import * as contactRouter from "./routes/contact.js"
import { fileURLToPath } from "url"

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const urlRoot = process.env.APP_URL_ROOT || "/"

// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "../dist/public")))
app.use(urlRoot, indexRouter.default)
app.use(urlRoot + "contact", contactRouter.default)
app.use(function(req, res, next) {
  // catch 404 and forward to error handler
  next(HttpError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}
  // render the error page
  res.status(err.status || 500)
  res.render("error")
})

export default app
