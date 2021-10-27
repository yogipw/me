__path = process.cwd()
const favicon = require('serve-favicon');
const express = require('express');
const router  = express.Router();

/*       
]=====> LOAD JS <=====[
*/
const { ping } = require('minepm');
const PornHub = require('pornhub.js')
const pornhub = new PornHub()
const Rblx = require("rblx-js")
const screenshot = require('screenshot-desktop')
const Anime = require('anime-scraper').Anime
const bgbdl = require("fbdl-core");
const secure = require('ssl-express-www');
const cors = require('cors');
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const request = require('request');
const zrapi = require("zrapi");
const dotenv = require("dotenv").config()
const fs = require('fs');
const TikTokScraper = require('tiktok-scraper');
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
const ytdl = require('ytdl-core');





module.exports = router
