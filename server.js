const express = require("express");
const dotenv = require("dotenv");
const bootcamp = require("./Routes/bootcamp")
const connectDB = require("./config/db")

dotenv.config({ path: "./config/config.env" })

connectDB();

const app = express();

app.use(express.json())

app.use("/api/v1/bootcamps", bootcamp);

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, console.log("Server is Running"))

process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`);

    // close the server
    server.close(() => process.exit(1));
})



