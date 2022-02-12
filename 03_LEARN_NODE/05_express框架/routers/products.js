const express = require('express');

const router = express.Router();

router.get('/',(req,res,next)=>{
    res.json(['why','cow','jessica']);
})

router.get('/:id',(req,res,next)=>{
    res.json(`${req.params.id}的商品訊息`);
})

router.post('/',(req,res,next)=>{
    res.json("創建新商品成功!");
})

module.exports = router;