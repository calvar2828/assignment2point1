async function fetchData(){
    const city = 'Calgary'
    const apiKey = '618c5c147c4bb70b59889724acd81a57'
    try{
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        response = await response.json();
        const temperature = response.main.temp;
        const description = response.weather[0].description;
        const weatherInfo = `temperature:${temperature}°C, ${description}`
        document.getElementById("weather-info").textContent = weatherInfo;
    }
    catch(error){
        console.error('Cant take the data',error)
        document.getElementById('weather-info').innerHTML = "Cannot display the weather in this moment";
    }
}

window.onload = fetchData;