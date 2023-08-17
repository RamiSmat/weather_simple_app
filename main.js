const apiKey="6328ec07cf1d5053c22bbd44192ec866";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
const cardColor=document.querySelector(".card");
const weather=document.querySelector(".weather");
const time=document.querySelector(".time");
const error=document.querySelector(".error");
async function checkWeather(city){
    const response=await fetch(apiUrl+city+`&appid=${apiKey}&`);
    if (response.status!==404){
        weather.style.display="block";
        error.style.display="none";
    }
    else if (response.status==404){
        weather.style.display="none";
        error.style.display="block";
    }
    var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";
    if (data.weather[0].main==="Clear"){
        weatherIcon.src="images/clear.png";
    } 
    else if(data.weather[0].main==="Clouds"){
        weatherIcon.src="images/clouds.png";
    }
    else if(data.weather[0].main==="Drizzle"){
        weatherIcon.src="images/drizzle.png";
    }
    else if(data.weather[0].main==="Mist"){
        weatherIcon.src="images/mist.png";
    }
    else if(data.weather[0].main==="Rain"){
        weatherIcon.src="images/rain.png";
    }
    else if(data.weather[0].main==="Snow"){
        weatherIcon.src="images/snow.png";
    }
    if (data.main.temp>28){
        cardColor.style.background="linear-gradient(135deg, #ed0404 0%,#8f0222 51%,#820002 100%)";
    }
    else if (10<data.main.temp<28){
        cardColor.style.background="linear-gradient(135deg,#00feba,#5b548a)";
    }
    else{
        cardColor.style.background= "linear-gradient(135deg,hsl(0deg 0% 100%) 0%,hsl(179deg 81% 98%) 10%,hsl(179deg 81% 96%) 20%,hsl(179deg 81% 94%) 29%,hsl(179deg 81% 92%) 39%,hsl(179deg 81% 89%) 48%, hsl(180deg 81% 87%) 59%,hsl(180deg 81% 85%) 70%,hsl(180deg 81% 82%) 83%,hsl(180deg 81% 80%) 100%";
    }
    
    
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
