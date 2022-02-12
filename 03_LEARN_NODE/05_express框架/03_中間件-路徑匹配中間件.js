const express = require('express');

const app = express();

app.use('/login',(req,res,next)=>{
    console.log("路徑匹配中間件01")
    next()
})

app.use('/login',(req,res,next)=>{
    console.log("路徑匹配中間件02")
    res.end("123123")
})


app.listen(8000,()=>{
    console.log("普通中間件啟動成功~~~")
})