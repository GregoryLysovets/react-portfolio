export const fetchWeather = async () => {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=50.45&longitude=30.52&current_weather=true"
  );

  const data = await response.json();
  return data;
};