import { WEATHER_API_KEY, WEATHER_API_URL } from '../../private';

export const getLocationAndWeatherStatsBy = async (latitude, longitude) => {
   const apiWithKey = `${WEATHER_API_URL}${WEATHER_API_KEY}`;

   const result = await fetch(`${apiWithKey}&q=${latitude},${longitude}`)
      .then(response => response.json())
      .then(json => {
         const locationAndStats = {
            location: `${json.location.name}, ${json.location.region}, ${json.location.country}`,
            wheaterCondition: json.current.condition.text,
            weatherIcon: json.current.condition.icon,
            temperature: json.current.temp_c
         };
         return locationAndStats;
      });
   return result;
};
