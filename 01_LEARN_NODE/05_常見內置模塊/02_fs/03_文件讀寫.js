const fs = require('fs');

const content="QQ!!!"

// 文件寫入
// fs.writeFile('./qqq.txt',content,{flag:'a'},err=>{
//     console.log(err)
// })

// 文件讀取
fs.readFile('./qqq.txt',{encoding:'utf-8'},(err,data)=>{
    console.log(data)
})