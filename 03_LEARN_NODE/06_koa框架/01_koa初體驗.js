const Koa = require('koa');

const app = new Koa();

app.use((ctx,next)=>{
    console.log("koa 使用中間件")
    if(ctx.request.url === "/login"){
        console.log('來到這裡---')
        if(ctx.request.methods === "GET"){
            ctx.response.body ="登入成功!!"
        }
    }else{
        ctx.response.body ="HOLLE KOA"
    }
  
})

app.listen("8000",()=>{
    console.log("服務器已經啟動!!!")
})
