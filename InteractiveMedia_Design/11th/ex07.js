// node xxxx.js で実行できる

var x = 6;

switch (x) {
case 7:
  console.log(x + '時です、朝ごはんの時間です！');
  break;
case 12:
  console.log(x + '時です、お昼ごはんの時間です！');
  break;
case 19:
  console.log(x + '時です、夕ごはんの時間です！');
  break;
default:
  console.log('ごはんの時間ではありません...');
}
