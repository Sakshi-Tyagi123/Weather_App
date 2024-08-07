let search_city = document.getElementsByClassName('search-box')[0];
let temp = document.getElementsByClassName('temp')[0];
let place = document.getElementsByClassName('area')[0];
let humidity = document.getElementsByClassName('value-humid')[0];
let speed = document.getElementsByClassName('value-speed')[0];
let search_btn = document.getElementsByClassName('search-btn')[0];
let image = document.getElementById('image');

let url ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let key = "e63ba0fe15b00c153f3a03b9d5556c94";

async function calc_temp(city)
{
    var response = await fetch(url + city + `&appid=${key}`);
    var data = await response.json();
    console.log(data);
    place.innerHTML = city;
    temp.innerHTML = data.main.temp +"<sup>o</sup>c";
    humidity.innerHTML = data.main.humidity +"%";
    speed.innerHTML = data.wind.speed + " Km/h";

    if(data.weather[0].main == "Clouds")
    {
        image.src = "./images/clouds.png";
    }

    else if(data.weather[0].main == "Rain")
    {
        image.src = "./images/rain.png";
    }

    else if(data.weather[0].main == "Clear")
    {
        image.src = "./images/clear.png";
    }

    else if(data.weather[0].main == "Drizzle")
    {
        image.src = "./images/drizzle.png";
    }

    else if(data.weather[0].main == "Mist")
    {
        image.src = "./images/mist.png";
    }

    else if(data.weather[0].main == "Snow")
    {
        image.src = "./images/snow.png";
    }
    else if(data.weather[0].main == "Wind")
    {
        image.src = "./images/wind.png";
    }

  
}

search_btn.addEventListener('click' , function(){
 
    calc_temp(search_city.value);
});

