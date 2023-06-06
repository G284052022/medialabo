let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
let b = document.querySelector('button#search');
b.addEventListener('click',sendRequest);
    
  
function sendRequest(){
  let c = document.querySelector('select#citySelect');
  let d = c.selectedOptions[0];
  let value = d.value;
  
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+value+'.json';


  // 通信開始
  axios.get(url)
  .then(showResult)   // 通信成功
  .catch(showError)   // 通信失敗
  .then(finish);      // 通信の最後の処理

}
// 通信が成功した時の処理
function showResult(resp) {
  // サーバから送られてきたデータを出力
  let data = resp.data;

  // data が文字列型なら，オブジェクトに変換する
  if (typeof data === 'string') {
      data = JSON.parse(data);
  }

  console.log(data);

  // data.x を出力
  console.log(data.x);
  

  let n = document.querySelector('div#name');
  n.textContent = '都市名:  '+ data.name;

  for(let t of data.weather){
    let weather = (t.description);
    let q = document.querySelector('div#weather');
    q.textContent ='天気:'+ weather;
  }

  let max = document.querySelector('div#temp_max');
  max.textContent = '最高気温:  '+data.main.temp_max+'°C';

  let min =  document.querySelector('div#temp_min');
  min.textContent = '最低気温:  '+data.main.temp_min+'°C';

  let la = document.querySelector('div#lat');
  la.textContent ='経度:  '+ data.coord.lat;

  let lo = document.querySelector('div#lon');
  lo.textContent = '緯度:  '+data.coord.lon;

  let h = document.querySelector('div#humidity');
  h.textContent = '湿度:  '+data.main.humidity;

  let ws = document.querySelector('div#windspeed');
  ws.textContent ='風速:  '+ data.wind.speed+'';

  let wd = document.querySelector('div#winddeg');
  wd.textContent = '風向:  '+ data.wind.deg;

}

// 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
}
