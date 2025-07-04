const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI);

const videoSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  category: String,
  url: String,
});

const Video = mongoose.model("Video", videoSchema);

app.get("/videos", async (req, res) => {
  const videos = await Video.find();
  res.json(videos);
});

app.post("/videos", async (req, res) => {
  const { title, subtitle, category, url } = req.body;
  const video = new Video({ title, subtitle, category, url });
  await video.save();
  res.json(video);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));
