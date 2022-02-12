const express = require('express');

const router = express.Router();

router.get('/',(req,res,next)=>{
    res.json(['why','cow','jessica']);
})

router.get('/:id',(req,res,next)=>{
    res.json(`${req.params.id}的用戶訊息`);
})

router.post('/',(req,res,next)=>{
    res.json("創建新用戶成功!");
})

module.exports = router;