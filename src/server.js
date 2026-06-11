require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const urlRoutes = require("./routes/urlRoutes");

const app = express();

app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.log("❌ MongoDB Error");
    console.log(err);
  });

// Routes
app.use("/", urlRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("URI Shortener Service is Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});