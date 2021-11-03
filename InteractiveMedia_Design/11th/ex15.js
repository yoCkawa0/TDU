var object = {
  myDataJSON: [
    {
      'title': 'タイトル', 
      'updata': 2020
    }, 
    {
      'title': 'たいとる', 
      'updata': 2018
    }
  ]
}

console.log('=== 抽出方法1 ===');
console.log(object);

console.log('=== 抽出方法2 ===');
console.log(object.myDataJSON);

console.log('=== 抽出方法3 ===');
console.log(object.myDataJSON[0].updata);
console.log(object.myDataJSON[1].updata);
