const Koa = require('koa');

const app = new Koa();

app.use((ctx,next)=>{
    // 狀態碼
    ctx.status = 200
    // response:物件,陣列,字串
    // ctx.response.body = ["a","b","c"]
    ctx.body = ["q","w","z"]
})

app.listen("8000",()=>{
    console.log("服務器已經啟動!!!")
})
