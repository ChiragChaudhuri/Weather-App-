export const fetchWeatherData=(country)=>{
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=989aeb61637efc432e57044c6c5bd577&&units=metric`);
}