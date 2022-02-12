#!/usr/bin/env node
const program  = require('commander');
const helpOptions  = require('./lib/core/helps');
const createCommands  = require('./lib/core/create');
// 查看版本號
program.version(require('./package.json').version);

// 幫助可選訊息
helpOptions();

// 創建其他指令
createCommands();

program.parse(process.argv);

// console.log(`dest: ${program.opts().dest}`);

