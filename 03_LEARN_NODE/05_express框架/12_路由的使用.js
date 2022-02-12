
const express = require('express');
const userRouter = require('./routers/users')
const productsRouter = require('./routers/products')
const app = express();

app.use('/users',userRouter);
app.use('/products',productsRouter);

app.listen(8000, () => {
  console.log("express初体验服务器启动成功~");
});
