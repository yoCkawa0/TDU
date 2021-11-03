// node xxxx.js で実行できる

class MyClass {
  constructor() {
    this.x = 10;
    this.y = 'あああ'
  }
  printXY() {
    console.log('x = ' + this.x + '、y = ' + this.y);
  }
}

var object = new MyClass();
console.log('xの値は' + object.x + '、yの値は' + object.y);
object.printXY();
console.log(object);
