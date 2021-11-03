// node xxxx.js で実行できる

var n = 5;

console.log('=== for文による繰り返し ===');
for (var i = 0; i < n; i++) {
  console.log('i = ' + i);
}

console.log('=== while文による繰り返し ===');
var i = 0;
while (i < n) {
  console.log('i = ' + i);
  i++;
}
