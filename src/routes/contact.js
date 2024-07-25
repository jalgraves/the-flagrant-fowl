import express from "express"
import { appSecret } from "../utils/secrets.js"
import { postRequest } from "../utils/request.js"
import { urls } from "../utils/network.js"
const router = express.Router()

router.post("/send-message", function (req, res, next) {
  if (process.env.NODE_ENV === "development") {
    console.log(req.body)
  }
  const auth = "Basic " + Buffer.from(appSecret.api_user + ":" + appSecret.api_pass).toString("base64")
  const headers = {"Content-Type": "application/json", "Authorization": auth}
  try {
    postRequest(urls.contactApi, headers, req.body, "/v1/contact/jalgraves", res)
  } catch(error) {
    console.log("AUTH Error: " + error)
    res.status(500).json({
      "title": "Contact API Failure",
      "status": 500
    })
  }
})

router.get("/:page", function(req, res, next) {
  res.redirect(`/${req.params["page"]}`)
})

export default router
