// Install necessary packages: axios, cheerio
const asyncHandler = require("express-async-handler");
const axios = require("axios");
const cheerio = require("cheerio");
const ScrapedData = require("../models/ScrapedData");

//@doc Scrap a product data 
//@route POST  /api/product/scrap
//@access private
const scrapedData = asyncHandler(async (req, res) => {
  const { url } = req.body;
  let id = req.user.id;
  const checkURL = await ScrapedData.findById(id);
  let response;

  if (checkURL) {
    const url = checkURL.url;
    response = await axios.get(url);
  } else {
    response = await axios.get(url);
  }
  const $ = cheerio.load(response.data);
  const title = $('meta[property="og:title"]').attr("content");
  let price = $("._25b18c div");
  price = $(price[0]).text();
  let description = $("._1mXcCf p");
  description = $(description[0]).text() || "Description Not Provided";
  let numReviews = $("._2_R_DZ span");
  numReviews = parseInt($(numReviews[3]).text()) || 0;
  let ratings = $("._2_R_DZ span");
  ratings = parseInt($(ratings[1]).text()) || 0;
  const mediaCount = parseInt($("._3GnUWp li").length);
  if (isNaN(numReviews) || isNaN(ratings)) {
    return res.status(400).json({ error: "Invalid numeric data" });
  }
  const scrapedData = new ScrapedData({
    user: req.user.id,
    url,
    title,
    price,
    description,
    numReviews,
    ratings,
    mediaCount,
  });

  await scrapedData.save();
  res.status(201).json({ message: "Data scraped and saved successfully",scrapedData });
});

module.exports = { scrapedData };
