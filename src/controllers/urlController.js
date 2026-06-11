const Url = require("../models/Url");
const { nanoid } = require("nanoid");

// Create Short URL
const createShortUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;

    const shortCode = nanoid(6);

    const newUrl = new Url({
      originalUrl,
      shortCode,
    });

    await newUrl.save();

    res.status(201).json({
      message: "Short URL created",
      shortCode,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// Redirect to Original URL
const redirectUrl = async (req, res) => {
  try {
    const { shortCode } = req.params;

    const url = await Url.findOne({ shortCode });

    if (!url) {
      return res.status(404).json({
        message: "URL not found",
      });
    }

    url.clicks += 1;
    await url.save();

    res.redirect(url.originalUrl);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// Get URL Statistics
const getStats = async (req, res) => {
  try {
    const { shortCode } = req.params;

    const url = await Url.findOne({ shortCode });

    if (!url) {
      return res.status(404).json({
        message: "URL not found",
      });
    }

    res.status(200).json({
      originalUrl: url.originalUrl,
      shortCode: url.shortCode,
      clicks: url.clicks,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
  createShortUrl,
  redirectUrl,
  getStats,
};