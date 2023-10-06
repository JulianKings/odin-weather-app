import fetchWeather from "./weatherManager";

let farenheit = false;

const updateLayout = () =>
{
    fetchWeather("Madrid").then((weatherData) => {
        if(weatherData.error)
        {
            // Notify invalid location
        } else {
            console.log(weatherData);
            // location
            const locationName = document.querySelector('.weather-now-place-city');
            const locationCountry = document.querySelector('.weather-now-place-country');
            const locationHour = document.querySelector('.weather-now-hour');

            locationName.textContent = weatherData.location.name;
            locationCountry.textContent = `${weatherData.location.region}, ${weatherData.location.country}`;
            const hour = weatherData.location.localtime.split(' ')[1];
            locationHour.textContent = hour;

            // current info
            const currentImage = document.querySelector('.weather-now-info-image');
            const currentDegree = document.querySelector('.weather-now-info-caption-degrees');
            const currentStatus = document.querySelector('.weather-now-info-caption-info');
            
            const lImage = new Image();
            lImage.src = weatherData.current.condition.icon;
            currentImage.appendChild(lImage);
            if(farenheit)
            {
                currentDegree.textContent = `${weatherData.current.temp_f}º F`;
            } else {
                currentDegree.textContent = `${weatherData.current.temp_c}º C`;
            }
            currentStatus.textContent = weatherData.current.condition.text;

        }
    }).catch((err) => {
        console.error(err);
    });

};

export default updateLayout;