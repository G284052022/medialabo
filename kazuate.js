// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);
// 入力回数（予想回数）
let kaisu = 1;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
hantei();
hantei();
hantei();
hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso = 4;
  document.getElementById("kaisu").textContent = kaisu;
  document.getElementById("answer").textContent = yoso;
  console.log(kaisu + "回目の予想: "+yoso);
  if(kaisu < 4){
    if(kaisu == 3 ){
        if(yoso == kotae){
            document.getElementById("result").textContent = '正解です．おめでとう!';            
            kaisu = 4;
        }else{
            document.getElementById("result").textContent = 'まちがい．残念でした答えは'+kotae+'です．';
        }
    }else{
        if(yoso == kotae){
            document.getElementById("result").textContent = '正解です．おめでとう!';
            kaisu = 4;
        }else if(yoso < kotae){
            document.getElementById("result").textContent = 'まちがい．答えはもっと大きいですよ';
        }else{
            document.getElementById("result").textContent = 'まちがい．答えはもっと小さいですよ';
        }
    }
  }else{
    document.getElementById("result").textContent = '答えは' +kotae+ 'でした．すでにゲームは終わっています';
  }
  kaisu++;
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}