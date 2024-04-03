require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const route = require("./routes");
const path = require("path");
const http = require("http");
const PORT = process.env.PORT || 4000;
const server = http.createServer(app);
const mongodbConfig = require("./config/mongodbConfig");

// Middlewire Start
app.use(cors());
app.use(express.json());
app.use(route);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// Middlewire End

server.listen(PORT,()=>{
    console.log(`Port is connect to ${PORT}`);
})
mongodbConfig();
