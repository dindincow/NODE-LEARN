const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on('click',args=>{
    console.log("監聽1 監聽到click事件",args);
})

const listen2 = (args)=>{
    console.log("監聽2 監聽到click事件",args);
}

emitter.on('click',listen2)


setTimeout(()=>{
    emitter.emit("click","kobe","cow","jessica")
    // emitter.off("click",listen2)
    emitter.emit("click","kobe","cow","jessica")
},2000)