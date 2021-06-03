import axios from 'axios';

export const getCurrentWeather = async (cityName = '') => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=84f0c05e16abc57b03ca8fa00b59f78e&units=metric`;
  const response = await axios.get(url);
  const result = await response.status === 200 ? await response.data : {};
  return result;
}