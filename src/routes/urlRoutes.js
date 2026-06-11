const express = require("express");
const router = express.Router();

const {
  createShortUrl,
  redirectUrl,
  getStats,
} = require("../controllers/urlController");

// Create Short URL
router.post("/shorten", createShortUrl);

// Get URL Statistics
router.get("/stats/:shortCode", getStats);

// Redirect URL
router.get("/:shortCode", redirectUrl);

module.exports = router;