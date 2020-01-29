#!/usr/bin/env node

var fs = require("fs");
var readLine = require("readline");
var path = require("path");
var chokidar = require('chokidar');
var pid, task;
var spawn = require('child_process').spawn;
// task = spawn('npm', [process.argv[2], process.argv[3]], {
//   stdio: 'inherit'
// });
// pid = task.pid
function readFileToArr (fReadName, cb) {

  var arr = [];
  var input;

  input = fs.createReadStream(fReadName);
  //读取文件发生错误事件
  input.on('error', (err) => {
    // console.log('发生异常:', err);
    cb([]);
  });
  var readObj = readLine.createInterface({
    input: input
  });

  readObj.on('line', function (line) {
    arr.push(line);
  });
  readObj.on('close', function () {
    // console.log('readLine close....');
    cb(arr);
  });
  //   readObj.on('error', function () {
  //     // console.log('readLine error....');
  //     cb([]);
  // });
}

function taskAction () {
  if(pid){
    // task.kill(pid);
    task.kill();
  }
  task = spawn('npm', [process.argv[2], process.argv[3]], {
    stdio: 'inherit'
  });
  // console.log(task.pid)
  pid = task.pid
}
function watchAction (files) {
  console.log(files)
  var watcher = chokidar.watch(files, {
    // ignored: /[\/\\]\./, persistent: true
  });

  var log = console.log.bind(console);

  watcher
    .on('add', function (path) { 
      // console.log('add')
      if (watcher.ready) {
         taskAction()
      }
    })
    .on('addDir', function (path) {
      // console.log('addDir')
      taskAction()
     })
    .on('change', function (path) {
      // console.log('change')
      taskAction()
    })
    .on('unlink', function (path) { 
      // console.log('unlink')
      taskAction()
    })
    .on('unlinkDir', function (path) {
      // console.log('unlinkDir')
      taskAction()
    })
    .on('error', function (error) { 
      process.exit(1);
    })
    .on('ready', function () {
      // console.log('ready')
      watcher.ready = true;
      // taskAction()
      // task.kill(spawn.pid);
      // task = spawn('npm', [process.argv[2],process.argv[3]], {
      //   stdio: 'inherit'
      // });
      // pid = task.pid
    })
    .on('raw', function (event, path, details) {
      // console.log('raw')
      // console.log("sssssssssss")
      // taskAction()
      // log('Raw event info:', event, path, details); 
    })
  // console.log(watchFiles)
}


// });

// console.log(basePath)
// console.log(process.argv);






// log('Directory', path, 'has been change');
// task.kill(spawn.pid);
// task = spawn('npm', ['run','serve'], {
//   stdio: 'inherit'
// });
// pid = task.pid

// console.log(task.pid)
// setTimeout(()=>{
//   task.kill(spawn.pid);
// },5000)

// }
readFileToArr('.ngplimit', function (arr) {
  let basePath = process.cwd();
  if (arr.length === 0) {
    console.log('can not find ngplimit  it will wacth all files')
    watchAction(basePath)
  } else {
    let watchFiles = arr.map((item) => {
      return path.join(basePath, item)
    })
    watchAction(watchFiles)
  }
  taskAction()
})

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
