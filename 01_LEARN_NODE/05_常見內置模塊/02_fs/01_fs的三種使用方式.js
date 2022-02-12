const fs = require('fs');

// 讀取文件訊息
const pathName = "./abc.txt";

// 1.方法一:同步操作
// const info = fs.statSync(pathName);
// console.log("後續執行代碼");
// console.log("info===>",info);

// 2.方法二:異步操作(會有回調地域)
// const info = fs.stat(pathName,(err,info)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("info===>",info);
// });
// console.log("後續執行代碼");


// 3.方法三:promise 異步操作
fs.promises.stat(pathName).then(info=>{
    console.log("info==pathName=>",info);
}).catch(err=>{
    console.log('pathName',err)
})
console.log("後續執行代碼");


