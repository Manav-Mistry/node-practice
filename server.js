const express = require("express");
const dotenv = require("dotenv");
const bootcamp = require("./Routes/bootcamp")

dotenv.config({ path: "./config/config.env" })

const app = express();

app.use("/api/v1/bootcamps", bootcamp);

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log("Server is Running"))

