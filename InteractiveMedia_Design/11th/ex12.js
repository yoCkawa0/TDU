// node xxxx.js で実行できる

function sum(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    result = result + arr[i];
  }
  return(result);
}

var x = [10, 20, 30];
var y = sum(x)
console.log('合計は、' + y);
