/* eslint-disable import/no-extraneous-dependencies */
import format from "date-fns/format";
import fetchWeather from "./weatherManager";

let farenheit = false;
let location = "Madrid";

const _clickHandler = (event) => {
    const currentEvent = event;
    if(event.target.classList.contains('weather-change-degrees'))
    {
        farenheit = !farenheit;
        if(farenheit)
        {
            currentEvent.target.textContent = 'ºF';
        } else {
            currentEvent.target.textContent = 'ºC';
        }
    }
}


const _cleanUpChildren = (node) => {
    node.querySelectorAll('*').forEach( n => n.remove() );
}

const _loadLayoutFromData = (weatherData) => {
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
    _cleanUpChildren(currentImage);
    currentImage.appendChild(lImage);
    if(farenheit)
    {
        currentDegree.textContent = `${weatherData.current.temp_f}º F`;
    } else {
        currentDegree.textContent = `${weatherData.current.temp_c}º C`;
    }
    currentStatus.textContent = weatherData.current.condition.text;

    const weatherTodayBoxes = document.querySelectorAll('.weather-now-extra-box');
    let current = 1;
    let nextDay = false;
    weatherTodayBoxes.forEach((weatherBox) => {
        let newHour = +(hour.split(":")[0]) + current;
        if(newHour >= 24)
        {
            newHour -= 24;
            nextDay = true;
        }
        const currentDay = nextDay ? 1 : 0;

        weatherBox.querySelectorAll("*").forEach((child) => {
            const currentChild = child;
            if(child.classList.contains('weather-now-extra-box-hour'))
            {
                currentChild.textContent = `${newHour}:${(hour.split(":")[1])}`;
            }

            if(child.classList.contains('weather-now-extra-box-forecast'))
            {
                let degrees = null;
                if(farenheit)
                {
                    degrees = `${weatherData.forecast.forecastday[currentDay].hour[newHour].temp_f}º F`;
                } else {
                    degrees = `${weatherData.forecast.forecastday[currentDay].hour[newHour].temp_c}º C`;
                }
                currentChild.textContent = `${degrees}, ${weatherData.forecast.forecastday[currentDay].hour[newHour].condition.text}`;
            }

            if(child.classList.contains('weather-now-extra-box-image'))
            {
                const weatherImage = new Image();
                weatherImage.src = weatherData.forecast.forecastday[currentDay].hour[newHour].condition.icon;
                _cleanUpChildren(currentChild);
                currentChild.appendChild(weatherImage);
            }
        })

        current += 1;

    });

    // sunrise and sunset
    const sunriseHour = document.querySelector('.weather-now-astro-sunrise-info-time');
    const sunsetHour = document.querySelector('.weather-now-astro-sunset-info-time');
    const sunriseUntil = document.querySelector('.weather-now-astro-sunrise-until');
    const sunsetUntil = document.querySelector('.weather-now-astro-sunset-until');

    sunriseHour.textContent = weatherData.forecast.forecastday[0].astro.sunrise;
    sunsetHour.textContent = weatherData.forecast.forecastday[0].astro.sunset;

    let sunriseNum = +(weatherData.forecast.forecastday[0].astro.sunrise.split(' ')[0].split(':')[0]);
    if((weatherData.forecast.forecastday[0].astro.sunrise.split(' ')[1]) === 'PM')
    {
        sunriseNum += 12;
    }
    sunriseNum -= +(hour.split(":")[0]);

    let sunsetNum = +(weatherData.forecast.forecastday[0].astro.sunset.split(' ')[0].split(':')[0]);
    if((weatherData.forecast.forecastday[0].astro.sunset.split(' ')[1]) === 'PM')
    {
        sunsetNum += 12;
    }

    sunsetNum -= +(hour.split(":")[0]);

    if(sunriseNum < 0)
    {
        sunriseUntil.textContent = `${-sunriseNum} hours ago`;
    } else if(sunriseNum === 0) {
        sunriseUntil.textContent = `now`;
    } else {
        sunriseUntil.textContent = `in ${sunriseNum} hours`;                
    }

    if(sunsetNum < 0)
    {
        sunsetUntil.textContent = `${-sunsetNum} hours ago`;
    } else if(sunsetNum === 0) {
        sunsetUntil.textContent = `now`;
    } else {
        sunsetUntil.textContent = `in ${sunsetNum} hours`;                
    }

    // date
    const mainDate = document.querySelector('.weather-title-main');
    mainDate.textContent = format(new Date(), 'MMMM yyyy');

    const subtitleDate = document.querySelector('.weather-title-subtitle');
    subtitleDate.textContent = format(new Date(), 'EEEE, MMM d, yyyy');

    // today overview
    const todayBoxes = document.querySelectorAll('.weather-today-box');
    todayBoxes.forEach((todayBox) => {
        todayBox.querySelectorAll("*").forEach((child) => {
            const currentChild = child;
            if(currentChild.getAttribute('data-type'))
            {
                if(currentChild.getAttribute('data-type') === 'max-temp')
                {
                    if(farenheit)
                    {
                        currentChild.textContent = `${weatherData.forecast.forecastday[0].day.maxtemp_f}º F`;
                    } else {
                        currentChild.textContent = `${weatherData.forecast.forecastday[0].day.maxtemp_c}º C`;
                    }
                }

                if(currentChild.getAttribute('data-type') === 'min-temp')
                {
                    if(farenheit)
                    {
                        currentChild.textContent = `${weatherData.forecast.forecastday[0].day.mintemp_f}º F`;
                    } else {
                        currentChild.textContent = `${weatherData.forecast.forecastday[0].day.mintemp_c}º C`;
                    }
                }

                if(currentChild.getAttribute('data-type') === 'wind-spd')
                {
                    currentChild.textContent = `${weatherData.forecast.forecastday[0].day.avgvis_km}km/h`;
                }

                if(currentChild.getAttribute('data-type') === 'avg-temp')
                {
                    if(farenheit)
                    {
                        currentChild.textContent = `${weatherData.forecast.forecastday[0].day.avgtemp_f}º F`;
                    } else {
                        currentChild.textContent = `${weatherData.forecast.forecastday[0].day.avgtemp_c}º C`;
                    }
                }

                if(currentChild.getAttribute('data-type') === 'humidity')
                {
                    currentChild.textContent = `${weatherData.forecast.forecastday[0].day.avghumidity}%`;
                }

                if(currentChild.getAttribute('data-type') === 'chance-rain')
                {
                    currentChild.textContent = `${weatherData.forecast.forecastday[0].day.daily_chance_of_rain}%`;
                }

                if(currentChild.getAttribute('data-type') === 'pressure')
                {
                    currentChild.textContent = `${weatherData.current.pressure_mb}mb`;
                }

                if(currentChild.getAttribute('data-type') === 'uv')
                {
                    currentChild.textContent = `${weatherData.forecast.forecastday[0].day.uv}`;
                }
            }
        });
    });

    // forecast
    const forecastBoxes = document.querySelectorAll('.weather-next-box');
    let currentForecast = 0;
    forecastBoxes.forEach((forecastBox) => {
        forecastBox.querySelectorAll("*").forEach((child) => {
            const currentChild = child;
            if(currentChild.classList.contains('weather-next-box-image'))
            {
                const forecastImage = new Image();
                forecastImage.src = weatherData.forecast.forecastday[currentForecast].day.condition.icon;
                _cleanUpChildren(currentChild);
                currentChild.appendChild(forecastImage);
            }

            if(currentChild.classList.contains('weather-next-box-weather'))
            {
                currentChild.textContent = weatherData.forecast.forecastday[currentForecast].day.condition.text;
            }

            if(currentChild.classList.contains('weather-next-box-avg-temp-value'))
            {
                if(farenheit)
                {
                    currentChild.textContent = `${weatherData.forecast.forecastday[currentForecast].day.avgtemp_f}º F`;
                } else {
                    currentChild.textContent = `${weatherData.forecast.forecastday[currentForecast].day.avgtemp_c}º C`;
                }
            }

            if(currentChild.classList.contains('weather-next-box-min-temp-value'))
            {
                if(farenheit)
                {
                    currentChild.textContent = `${weatherData.forecast.forecastday[currentForecast].day.mintemp_f}º F`;
                } else {
                    currentChild.textContent = `${weatherData.forecast.forecastday[currentForecast].day.mintemp_c}º C`;
                }
            }

            if(currentChild.classList.contains('weather-next-box-max-temp-value'))
            {
                if(farenheit)
                {
                    currentChild.textContent = `${weatherData.forecast.forecastday[currentForecast].day.maxtemp_f}º F`;
                } else {
                    currentChild.textContent = `${weatherData.forecast.forecastday[currentForecast].day.maxtemp_c}º C`;
                }
            }

            if(currentChild.classList.contains('weather-next-box-humidity-value'))
            {
                currentChild.textContent = `${weatherData.forecast.forecastday[currentForecast].day.avghumidity}%`;
            }

            if(currentChild.classList.contains('weather-next-box-rain-value'))
            {
                currentChild.textContent = `${weatherData.forecast.forecastday[currentForecast].day.daily_chance_of_rain}%`;
            }
        });
        currentForecast += 1;
    });
    
}

const updateLayout = () =>
{
    fetchWeather(location).then((weatherData) => {
        if(weatherData.error)
        {
            // Notify invalid location
        } else {            
            _loadLayoutFromData(weatherData);
        }
    }).catch((err) => {
        console.error(err);
    });

};


const _inputHandler = (event) => {

    if(event.target.id === 'location')
    {
        if(event.target.value !== '')
        {
            location = event.target.value;
            updateLayout();
        }
    }
    
}

const generateLayout = () =>
{
    fetchWeather(location).then((weatherData) => {
        if(weatherData.error)
        {
            // Notify invalid location
        } else {
            // location
            _loadLayoutFromData(weatherData);

            // handle degrees selector
            const degreeSelector = document.querySelector('.weather-change-degrees');
            degreeSelector.addEventListener("click", (event) => {
                _clickHandler(event);
                updateLayout();
            });

            // handle location search
            const search = document.querySelector('#location');
            search.addEventListener("input", _inputHandler);

            const searchButton = document.querySelector('#updateLocation');
            searchButton.addEventListener("click", (event) => {
                _clickHandler(event);
                updateLayout();
            });
        }
    }).catch((err) => {
        console.error(err);
    });

};

export default generateLayout;