const fs = require('fs')

const reader = fs.createReadStream("./foo.txt",{
    start:3,
    end:6,
    highWaterMark:2
})

reader.on("data",data=>{
    console.log(data)
})


reader.on("close",data=>{
    console.log("文件被關閉")
})



reader.on("open",data=>{
    console.log("文件被打開")
})
