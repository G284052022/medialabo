


function populateCityOptions(){
    let citySelect = document.getElementById("citySelect");
    let selectedCity = citySelect.value;

    citySelect.innerHTML = " ";

    for (let i = 0; i < cityData.length; i++) {
        if (cityData[i].country === selectedCity || selectedCity === "") {
          let option = document.createElement("option");
          option.value = cityData[i].id;
          option.text = cityData[i].name;
          citySelect.appendChild(option);
        }
    }
}
function searchWeather(){
    let citySelect = document.getElementById("citySelect");
    let selectedCity = citySelect.value;
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+selectedCity+'.json';
   
    axios.get(url)
		.then(function (resp) {
            showResult(resp , selectedCity);
        })
		.catch(showError)
		.then(finish);
}

function showResult(resp,selectedCity){
    let data = resp.data;
        let weatherData = JSON.parse(data);
        let weather = weatherData.weather[0].main;
        
        let maxTemperature = Math.round(weatherData.main.temp_max - 273.15);
        let minTemperature = Math.round(weatherData.main.temp_min - 273.15);
        let latitude = weatherData.coord.lat;
        let longitude = weatherData.coord.lon;
        let humidity = weatherData.main.humidity;
        let windSpeed = weatherData.wind.speed;
        let windDirection = weatherData.wind.deg;


        document.getElementById("weather").innerHTML = "天气: " + weather;
        document.getElementById("maxTemperature").innerHTML = "最高温度: " + maxTemperature + "°C";
        document.getElementById("minTemperature").innerHTML = "最低温度: " + minTemperature + "°C";
        document.getElementById("latitude").innerHTML = "纬度: " + latitude;
        document.getElementById("longitude").innerHTML = "经度: " + longitude;
        document.getElementById("humidity").innerHTML = "湿度: " + humidity + "%";
        document.getElementById("windSpeed").innerHTML = "风速: " + windSpeed + " m/s";
        document.getElementById("windDirection").innerHTML = "风向: " + windDirection + "°";

        populateCityOptions();
        document.getElementById("citySelect").value = selectedCity ;
        
}
function showError(err){
    console.log(err);
}
function finish(){
    console.log('Ajax 通信が終わりました');
}
