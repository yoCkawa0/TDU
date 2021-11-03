// 宣言
var x = document.querySelector("#myID2");
var y = 3;

// 処理
x.textContent = y + '秒待つと...';

setTimeout(function(){
  x.style.color = '#0000ff';
  x.textContent = 'HTML要素が書き換わる！';
}, y * 1000);
