
const api_key = process.env.REACT_APP_API_KEY;

export const getCitiesNCodes = async () => {

    const url = `https://dataservice.accuweather.com/locations/v1/topcities/50?apikey=${ api_key}`;
    const resp = await fetch(url);
    const cities = await resp.json();

    const options = cities.map( city => {

        return {
            value: city.Key, 
            label: city.LocalizedName, 
        }
    })
       
   return options;
}


export const getForecast = async (locationKey = 60449) => {

    const url = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${api_key}&metric=true`;
    const resp = await fetch(url);
    const data = await resp.json();

    const forecast = data.DailyForecasts.map( dayForecast => {
        return {
            id: parseInt(locationKey),
            date: dayForecast.Date,
            tempetureMin: dayForecast.Temperature.Minimum.Value+ '°' + dayForecast.Temperature.Minimum.Unit,
            tempetureMax: dayForecast.Temperature.Maximum.Value  + '°' + dayForecast.Temperature.Maximum.Unit,
            icon: dayForecast.Day.Icon
        }
    })
    return forecast;

    

}
export const getCurrentConditions = async (locationKey = 60449) => {

    const url = `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${api_key}&details=true`;
    const resp = await fetch(url);
    const data = await resp.json();
    const currentData = data[0];

    const currentConditions = {
        id: parseInt(locationKey),
        icon: currentData.WeatherIcon,
        time: currentData.LocalObservationDateTime,
        temperature: currentData.Temperature.Metric.Value,
        weatherText: currentData.WeatherText,
        precipitation: currentData.PrecipitationType,
        uvIndex: currentData.UVIndex,
        uvIndexText: currentData.UVIndexText,
        windStatus: currentData.Wind.Speed.Metric.Value + currentData.Wind.Speed.Metric.Unit,
        pressure: currentData.Pressure.Metric.Value + currentData.Pressure.Metric.Unit,
        humidity:currentData.RelativeHumidity + '%',
        visibility:currentData.Visibility.Metric.Value + currentData.Visibility.Metric.Unit,
        
    }
    // "UVIndex": 0,
    // "UVIndexText": "Low",

    return currentConditions;

}