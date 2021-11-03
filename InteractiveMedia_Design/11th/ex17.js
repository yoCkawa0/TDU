// ここではJSON形式のデータをJS内にベタ打ちしている（本来はデータベースの役割）
var card = {
  myDataJSON: [
    {
      'file': './img/seaside-wide.jpeg', 
      'title': 'レジャー', 
      'text': 'ああああああああああああああああああああああああああああ'
    }, 
    {
      'file': './img/food-wide.jpeg', 
      'title': 'レストラン', 
      'text': 'いいいいいいいいいいいいいいいいいいいいいいいいいいいい'
    }, 
    {
      'file': './img/coffee-wide.jpeg', 
      'title': 'バリコーヒー', 
      'text': 'うううううううううううううううううううううううううううう'
    }, 
    {
      'file': './img/room-wide.jpeg', 
      'title': 'ルーム', 
      'text': 'ええええええええええええええええええええええええええええ'
    }
  ]
}

// ここではJavaScriptでHTMLを出力している（本来はサーバの役割）
for (var i = 0; i < card.myDataJSON.length; i++) {
  document.write(
    '<div class="col-xs-12 col-sm-6 col-md-4">' + 
      '<div class="card mb-5 border-0 text-center">' + 
        '<img class="card-img-top img-clipping-2" src="' + card.myDataJSON[i].file + '" alt="Card image cap">' + 
        '<div class="card-body">' + 
          '<h5 class="card-title text-primary">' + card.myDataJSON[i].title + '</h5>' + 
          '<p class="card-text">' + card.myDataJSON[i].text + '</p>' + 
          '<a href="#" class="btn btn-primary">Go somewhere</a>' + 
        '</div>' + 
      '</div>' + 
    '</div>'
  );
}
