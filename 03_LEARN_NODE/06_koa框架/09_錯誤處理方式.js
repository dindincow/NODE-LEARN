const Koa = require('koa');
const staticAssets = require('koa-static');

const app = new Koa();

app.use((ctx,next)=>{
    const isLogin = false;
    if(!isLogin){
        ctx.app.emit('erroe',new Error("你還沒有登入~"),ctx)
    }
})

app.on('erroe',(err,ctx)=>{
    ctx.status = 401;
    ctx.body = err.message;
})

app.listen("8000",()=>{
    console.log("服務器已經啟動!!!")
})
