const apiKey = "233eef59cb016657271c4da9f55082b5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Noida&units=metric";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=&{apiKey}`);
    var data = await response.json();

    console.log(data);
}


checkWeather();
