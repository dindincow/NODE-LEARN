const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log("第01個普通中間件")
    next()
})

app.use((req,res,next)=>{
    console.log("第02個普通中間件")
    next()
})

app.use((req,res,next)=>{
    console.log("第03個普通中間件")
    res.end("HOLLE WORLD")
   
})


app.listen(8000,()=>{
    console.log("普通中間件啟動成功~~~")
})