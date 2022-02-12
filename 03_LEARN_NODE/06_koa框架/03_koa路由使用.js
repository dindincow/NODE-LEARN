const Koa = require('koa');
const userRouter = require('./router/user');
const app = new Koa();

app.use((ctx,next)=>{
    ctx.response.body ="HOLLE KOA"
    next()
})


app.use(userRouter.routes());
// 方法不被允許
app.use(userRouter.allowedMethods());

app.listen("8000",()=>{
    console.log("服務器已經啟動!!!")
})
