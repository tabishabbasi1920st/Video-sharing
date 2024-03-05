const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { v4 } = require("uuid");

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send("<h1>Server is running</h1>");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});

app.post("/upload-video", (req, res) => {
    const { video } = req.body;

    if (video) {
      const bufferedData = new Buffer.from(video, "base64");
      fs.writeFileSync(`videos/${v4()}.mp4`, bufferedData);
      console.log("video saved successfully");
    }
});
