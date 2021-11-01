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
const rumus = require('rumus-bdr') 
const {toTerbilang, toUcFirst, toRupiah, toTanggal} = require('indo-formatter');
 

router.get('/rumus/:tipe', (req, res) => {
    if(req.params.tipe == 'kuadrat') {
    let hasil = rumus.rdb.kuadrat(req.query.angka) 
    res.json({result: hasil}) 
   } else if(req.params.tipe == 'kubik') {
   let hasil = rumus.rdb.kubik(req.query.angka) 
   res.json({result: hasil}) 
   } else if(req.params.tipe == 'perkalian') {
   if(req.query.dikali > 100) return res.json({info: "angka tidak boleh lebih dari 100!"}) 
   let hasil = rumus.rdb.perkalian(req.query.angka, req.query.dikali) 
   res.json({result: hasil}) 
   }
})

router.get('/rumus/bdr/:tipe', (req, res) => {
   if(req.params.tipe == 'persegi') {
   let hasil_kl = rumus.datar.keliling.persegi(req.query.sisi,true)
   let hasil_l = rumus.datar.luas.persegi(req.query.sisi,true)
   
   if(req.query.opsi == 'keliling') {
   res.json({result: hasil_kl}) 
   } else if(req.query.opsi== 'luas') {
   res.json({result: hasil_l}) 
   }
   
   } else if(req.params.tipe == 'persegipanjang') {
   let hasil_kl = rumus.datar.keliling.persegiPanjang(req.query.panjang,req.query.lebar,true)
   let hasil_l = rumus.datar.luas.persegiPanjang(req.query.panjang,req.query.lebar,true)
   
   if(req.query.opsi == 'keliling') {
   res.json({result: hasil_kl}) 
   } else if(req.query.opsi== 'luas') {
   res.json({result: hasil_l}) 
   }
   
   } else if(req.params.tipe == 'segitiga') {
   let hasil_kl = rumus.datar.keliling.segitiga(req.query.sisi_1,req.query.sisi_2,req.query.sisi_3,true)
   let hasil_l = rumus.datar.luas.segitiga(req.query.alas,req.query.tinggi,true)
   
   if(req.query.opsi == 'keliling') {
   res.json({result: hasil_kl}) 
   } else if(req.query.opsi== 'luas') {
   res.json({result: hasil_l}) 
   }
   
   } else if(req.params.tipe == 'lingkaran') {
   let hasil_kl = rumus.datar.keliling.lingkaran(req.query.diameter,true)
   let hasil_l = rumus.datar.luas.lingkaran(req.query.jari_jari,true)
   
   if(req.query.opsi == 'keliling') {
   res.json({result: hasil_kl}) 
   } else if(req.query.opsi== 'luas') {
   res.json({result: hasil_l}) 
   }
   
   } else if(req.params.tipe == 'jajargenjang') {
   let hasil_kl = rumus.datar.keliling.jajarGenjang(req.query.sisi_1,req.query.sisi_2,req.query.sisi_3,req.query.sisi_4,true)
   let hasil_l = rumus.datar.luas.jajarGenjang(req.query.alas,req.query.tinggi,true)
   
   if(req.query.opsi == 'keliling') {
   res.json({result: hasil_kl}) 
   } else if(req.query.opsi== 'luas') {
   res.json({result: hasil_l}) 
   }
   
   } else if(req.params.tipe == 'belahketupat') {
   let hasil_kl = rumus.datar.keliling.jajarGenjang(req.query.sisi,true)
   let hasil_l = rumus.datar.luas.jajarGenjang(req.query.diagonal_1,req.query.diagonal_2,true)
   
   if(req.query.opsi == 'keliling') {
   res.json({result: hasil_kl}) 
   } else if(req.query.opsi== 'luas') {
   res.json({result: hasil_l}) 
   }
   
   } else if(req.params.tipe == 'trapesium') {
   let hasil_kl = rumus.datar.keliling.jajarGenjang(req.query.sisi_1,req.query.sisi_2,req.query.sisi_3,req.query.sisi_4,true)
   let hasil_l = rumus.datar.luas.jajarGenjang(req.query.sisi_bawah,req.query.sisi_atas,req.query.tinggi,true)
   
   if(req.query.opsi == 'keliling') {
   res.json({result: hasil_kl}) 
   } else if(req.query.opsi== 'luas') {
   res.json({result: hasil_l}) 
   }
   
   }
   
})

router.get('/indo-formatter/:tipe', (req, res) => {
	if(req.params.tipe == 'toTerbilang') {
    let hasil = toUcFirst(toTerbilang(req.query.angka)) 
    res.json({result: hasil}) 
   } else if(req.params.tipe == 'toRupiah') {
    let hasil = toUcFirst(toRupiah(req.query.angka)) 
    res.json({result: hasil}) 
   } 
	
}) 







module.exports = router
