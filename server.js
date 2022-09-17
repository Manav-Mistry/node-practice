const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" })

const app = express();

app.get("/api/v1/bootcamps", (req, res) => {
    res.status(200).json({ success: true, msg: "Show all bootcamps" })
})
app.get("/api/v1/bootcamps/:id", (req, res) => {
    res.status(200).json({ success: true, msg: `Show bootcamps ${req.params.id}` })

})
app.post("/api/v1/bootcamps", (req, res) => {
    res.status(200).json({ success: true, msg: "Create Bootcamp" })

})
app.put("/api/v1/bootcamps/:id", (req, res) => {
    res.status(200).json({ success: true, msg: `update bootcamp ${req.params.id}` })

})

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log("Server is Running"))

