var child_process = require('child_process');
function copyDir(src, dist) {
    child_process.spawn('cp', ['-r', src, dist]);	
  }
var params = process.argv.reverse();
//取params最后两位参数作为 源目录和目标目录
copyDir(params[1],params[0]);