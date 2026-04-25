import { useEffect, useState } from "react";

function MyCity() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=50.45&longitude=30.52&current_weather=true"
    )
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, []);

  return (
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-3xl mb-4">Моє місто</h1>

      <p className="mb-4">
        Я живу в Києві — столиці України та одному з найбільших міст країни.
        Це місто з багатою історією, сучасною архітектурою та активним життям.
      </p>

      <p className="mb-6">
        Київ поєднує в собі старовинні пам’ятки, парки, набережні та сучасні
        бізнес-центри. Тут завжди є можливості для навчання, розвитку та роботи.
      </p>

      <h2 className="text-xl font-semibold mb-4">Поточна погода</h2>

      {weather ? (
        <div className="bg-white shadow-lg rounded-xl p-6 inline-block">
          <p className="text-lg">
            Температура: {weather.current_weather.temperature}°C
          </p>
          <p>Швидкість вітру: {weather.current_weather.windspeed}</p>
          <p className="text-sm text-gray-500 mt-2">
            Координати: 50.45, 30.52
          </p>
        </div>
      ) : (
        <p>Завантаження...</p>
      )}
    </div>
  );
}

export default MyCity;