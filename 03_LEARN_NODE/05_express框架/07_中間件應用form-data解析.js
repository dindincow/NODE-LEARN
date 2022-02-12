const express = require('express');
const multer = require('multer');

const app = express();

// 使用插件
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const upload = multer({
    dest:'./uploads/'
});

app.use(upload.any())

app.use('/login',(req,res,next)=>{
    console.log(req.body)
    res.end("用戶登入成功")
})

app.post('/upload', upload.single('file'), (req, res, next) => { 
    res.end("文件上传成功~");
});

app.listen(8000,()=>{
    console.log("普通中間件啟動成功~~~")
})