const fs = require('fs');

fs.open("./abc.txt",(err,fd)=>{
    console.log('fd=>',fd)
    fs.fstat(fd,(err,info)=>{
        console.log("info=======>",info)
    })
})