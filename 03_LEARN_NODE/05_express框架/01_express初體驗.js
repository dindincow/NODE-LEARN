const express = require('express')
const app = express()

app.get('/',(req,res,next)=>{
    res.end('holle World!!')
})


app.post('/',(req,res,next)=>{
    res.end('holle  post  World!!')
})

app.listen(8000,()=>{
    console.log("express 初體驗啟動成功~!")
})