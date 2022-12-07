const path = require('path');
const router = require('express').Router();

router.get('/api/notes', (req,res) => {
    res.sendFile(path.join(__dirname,'../public/index.html'))
});