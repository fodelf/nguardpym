#!/usr/bin/env node

let basePath = process.cwd();
console.log(process.argv);

// var exec = require('child_process').execSync;
// exec('npm run serve', {stdio: 'inherit'});
// var spawn = require('child_process').spawn;
// spawn('npm', ['run','serve'], {
//   stdio: 'inherit'
// });
console.log("ss")

// const exec = require('child_process').execSync

// exec('bash guard.sh')
// var spawn = require('child_process').spawn;
// var sh = 'sh';
// var shFlag = '-c';
// var stdio = ['pipe', 'pipe', 'pipe'];
// const child = spawn(sh, [shFlag, 'npm run serve'], {
//   env: "",
//   stdio: stdio,
// });

// npm = spawn('npm run serve', []);
// // 捕获标准输出并将其打印到控制台 
// npm.stdout.on('data', function (data) { 
// console.log('standard output:\n' + data); 
// });
// // 捕获标准错误输出并将其打印到控制台 
// npm.stderr.on('data', function (data) { 
// console.log('standard error output:\n' + data); 
// });
// // 注册子进程关闭事件 
// npm.on('exit', function (code, signal) { 
// console.log('child process eixt ,exit:' + code); 
// });



// var exec = require('child_process').exec;
// function execute(cmd){
//   // console.log('ss')
//   exec(cmd, function(error, stdout, stderr) {
//       if(error){
//           console.error(error);
//       }
//       else{
//           console.log("success");
//       }
//   });
// }
// execute('npm run serve');
// const cli = require('../lib/cli');
// const nodemon = require('../lib/');
// const options = cli.parse(process.argv);

// nodemon(options);

// const fs = require('fs');

// // checks for available update and returns an instance
// const pkg = JSON.parse(fs.readFileSync(__dirname + '/../package.json'));

// if (pkg.version.indexOf('0.0.0') !== 0 && options.noUpdateNotifier !== true) {
//   require('update-notifier')({ pkg }).notify();
// }
