// node xxxx.js で実行できる

var x = [10, 20, 30];
console.log('=== 配列の要素の表示 ===');
console.log('配列xの最初の要素は、' + x[0]);
console.log('配列xの長さは、' + x.length);
console.log('配列xの最後の要素は、' + x[x.length - 1]);

console.log('=== for文による繰り返し ===');
var y = 0;
for (var i = 0; i < x.length; i++) {
  console.log(i + '番目の要素は、' + x[i]);
  y = y + x[i];
}
console.log('y = ' + y);

console.log('=== for-in文による繰り返し ===');
var y = 0;
for (var i in x) {
  console.log(i + '番目の要素は、' + x[i]);
  y += x[i];
}
console.log('y = ' + y);
