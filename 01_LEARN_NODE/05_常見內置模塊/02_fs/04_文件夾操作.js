const fs = require('fs');
const path = require('path');
// 1.創建文件夾
const dirName = "./jessica"; //文件夾名子

if(!fs.existsSync(dirName)){
    fs.mkdir(dirName,err=>{
        console.log(err)
    }) 
}

// 2.讀取文件夾的所有文件
fs.readdir(dirName,(err,files)=>{
    console.log(files)
})

function getFiles(dirName){
    fs.readdir(dirName,{withFileTypes:true},(err,files)=>{
        for(let file of files){
            if(file.isDirectory()){
                const filePath = path.resolve(dirName,file.name);
                getFiles(filePath)
            }else{
                console.log(file.name)
            }
        }
    })
}

getFiles(dirName)

// 3.文件夾重命名
fs.rename('./jessica','./qoo',err=>{
    console.log(err)
})