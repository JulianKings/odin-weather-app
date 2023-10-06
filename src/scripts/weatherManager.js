const fetchWeather = async (location) => {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=c37bc118761049e5815115544230510&q=${location}&days=3&aqi=yes&alerts=yes`, {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Vary': 'Origin',
            },
        });

        if(response.status === 400) {
            return { error: 'Invalid location' };
        }

        const weatherData = await response.json();
        return weatherData;
    } catch (err)
    {
        console.error(err);
        return null;
    }

}

export default fetchWeather;