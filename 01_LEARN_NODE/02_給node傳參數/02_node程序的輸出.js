console.log(process);
console.log(process.argv[2]);

// 清空打印台資料
console.clear()

process.argv.forEach(element => {
    console.log("element===>",element)
});