// node xxxx.js で実行できる

console.log('=== indexによる配列の操作 ===');
var x = [98, 85, 60];
console.log(x[0]);

console.log('=== keyによる配列の操作 ===');
var y = {'数学': 98, '物理': 85, '英語': 60};
console.log(y['数学']);
console.log(y[0]);

for (var key in y) {
  console.log(key + y[key] + '点');
}
