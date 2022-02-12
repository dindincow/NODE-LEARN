const path  = require('path')

// 1. 獲取路徑訊息
// const fileName="user/jessica/abc.txt";

// console.log(path.dirname(fileName));
// console.log(path.basename(fileName));
// console.log(path.extname(fileName));

// 2. join 路徑拼接
// const baseName="user/jessica";
// const fileName="abc.txt";

// console.log(path.join(baseName,fileName))

// 2. resolve 路徑拼接
// resolve 會判斷拼接路徑中是否有 / 或 ./ 或 ../ 開頭的路徑
const baseName="user/jessica";
const fileName="abc.txt";

console.log("================路徑為======================>",path.resolve(baseName,fileName))




