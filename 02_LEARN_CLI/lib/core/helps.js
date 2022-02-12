// 增加自己的options
// program.option('-d --din','a din cli')
const program  = require('commander');
const helpsOption = () => {
    program.option('-s, --small', 'small pizza size')
    program.option('-d --dest <dest>','a destination folder,例如: -d /src/component' )
    program.option('-c, --cheese <type>', 'Add the specified type of cheese', 'blue');
    program.option('-f, --framework <framework>', 'your framework');

    program.on('--help',function(){
        console.log(" ");
        console.log("other:");
        console.log("other option~")
    })

}

module.exports = helpsOption
