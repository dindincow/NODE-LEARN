const { promisify } = require('util');
const download = promisify(require('download-git-repo'))
const open = require('open')
const { vueRepo } = require('../config/repo-config')
const { commandSpawn } = require('../utils/terminal')
const { compile } = require('../utils/utils')

// 創建專案 action
const createProjectAction = async(project)=>{
    console.log("=========== din help you create your project ==============")
    // 1. clone 項目
    await download(vueRepo,project,{clone:true});

    // 2. 執行 npm install
    const command = process.platform  === "win32" ? "npm.cmd" : "npm";
    await commandSpawn(command,['install'],{cwd:`./${project}`})

    // 3. 運行 npm run serve
    commandSpawn(command,['run','serve'],{cwd:`./${project}`})

    // 4. 打開流覽器
    open("http://localhost:8080/")
}

// 增加組件 action
const addComponentAction = async(name,dest)=>{
    // 1. 有對應的ejs模版
    const result = await compile("vue-component.ejs", {name,lowerName:name.toLowerCase(name)})
    console.log('result=>',result)
    // 2. 編譯ejs模版結果
    // 3. 將結果寫到 vue 文件中
    // 4. 放到對應文件夾中
}

module.exports={
    createProjectAction,
    addComponentAction
}