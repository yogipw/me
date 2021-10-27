__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/api', (req, res) => {
    res.sendFile(__path + '/views/api.html')
})
router.get('/', (req, res) => {
    res.sendFile(__path + '/views/profile.html')
})
router.get('/dashboard', (req, res) => {
    res.sendFile(__path + '/views/dashboard.html')
})


//gabut
router.get('/tictactoe', (req, res) => {
    res.sendFile(__path + '/views/game/ttt.html')
})
router.get('/purba', (req, res) => {
    res.sendFile(__path + '/views/gabut/purba.html')
})
router.get('/ninjaname', (req, res) => {
    res.sendFile(__path + '/views/gabut/ninja.html')
}) 
router.get('/stress', (req, res) => {
    res.sendFile(__path + '/views/gabut/stress.html')
})

//tools
router.get('/kalkulator', (req, res) => {
    res.sendFile(__path + '/views/tools/calculator.html')
})


router.use(function(req,res){
    res.status(404).sendFile(__path + '/views/404.html')
});

module.exports = router
