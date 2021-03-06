#!/usr/bin/env node

// var name = process.argv[2];
// // 脚本可以通过 child_process 模块新建子进程，从而执行 Unix 系统命令。
// var exec = require('child_process').exec;
// // var child = exec('echo hello ' + name, function(err, stdout, stderr) {
// //     if (err) throw err;
// //     console.log(stdout);
// // });

// // shell 模块调用方式
// var shell = require('shelljs/global');
// // shell.exec('echo hello ' + name);

// // yargs 模块调用方式
// var argv = require('yargs')
//     .option('n', {
//         demand: true,
//         alias: 'name',
//         describe: 'your name',
//         type: 'string'
//     })
//     // 定义command命令
//     .command('morning', 'good morning', function(yargs) {
//         echo('Good Morning');
//         var argv = yargs.rese t()
//             .option('m', {
//                 alias: 'message',
//                 description: 'provide and sentence'
//             })
//             .help('h')
//             .alias('h', 'help')
//             .argv;
//         echo(argv.m);
//     })
//     .command('evening', 'good evening', function(yargs) {
//         echo('Good Evening');
//     })
//     .usage('Usage: hello [options]')
//     .example('hello morning -n tom', 'expect "Good Morning hello tom"')
//     .help('h')
//     .alias('h', 'help')
//     .epilog('copyright 2015')
//     .argv;

// commaner 模块
var program = require('commander');

program.version('0.0.1')
    .option('-p, --peppers', 'Add peppers')
    .option('-P, --pineapple', 'Add pineapple')
    .option('-b, --bbq-sauce', 'Add bbq sauce')
    .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
    .option('-s --size <size>', 'Pizza size', /^(large|mediun|small})$/i, 'medium')
    .option('-d --drink [drink]', 'Drink', /^(coke|pepsi|izze)$/i)
    .parse(process.argv);

console.log('you ordered a pizza with:');
if (program.peppers) console.log('  - peppers');
if (program.pineapple) console.log('  - pineapple');
if (program.bbqSauce) console.log('  - bbq');
console.log('  - %s cheese', program.cheese);

console.log(' size: %j', program.size);
console.log(' drink: %j', program.drink);