/* 幫助執行終端命令*/
const {spawn} = require('child_process')

const commandSpawn = (...args) =>{
    return new Promise((resolve,reject)=>{
        const childProcess = spawn(...args);
        childProcess.stdout.pipe(process.stdout);
        childProcess.stderr.pipe(process.stderr);
        childProcess.on('close',()=>{
            console.log("===========  project finished ==============")
            resolve();

        })

    })
    
}

module.exports={
    commandSpawn
}