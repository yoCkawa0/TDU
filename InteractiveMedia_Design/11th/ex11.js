// node xxxx.js で実行できる

function printHello() {
  console.log('Hello!');
}
printHello();

function printHelloN (n) {
  for (var i = 0; i < n; i++) {
    console.log(i + ' Hello!!');
  }
}
printHelloN(3);
