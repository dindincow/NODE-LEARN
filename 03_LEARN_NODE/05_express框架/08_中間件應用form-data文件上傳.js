const path = require('path');
const express = require('express');
const multer = require('multer');

const app = express();

// 使用插件
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
})
  
const upload = multer({
    // dest:'./uploads/'
    storage
});


app.use('/login', upload.any(),(req,res,next)=>{
    console.log(req.body)
    res.end("用戶登入成功")
})

app.post('/upload', upload.array('file'), (req, res, next) => { 
    console.log(req.files);
    res.end("文件上传成功~");
});

app.listen(8000,()=>{
    console.log("普通中間件啟動成功~~~")
})