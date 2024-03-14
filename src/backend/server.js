const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config");
const router = require("./router");
const port = 4500;
app.use(express.json());
app.use(cors());
app.use("/api", router)
connectDB();

app.get("/", (req, res) => res.send("hello world"));
app.listen(port, console.log(`app is running in ${port} port`));
