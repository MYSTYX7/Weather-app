const inputSearchEl = document.querySelector(".form__input");
const btnSearch = document.querySelector(".btn-search");

// selecting data elements
const imgEl = document.querySelector(".weather__img");
const tempEl = document.querySelector(".weather__temperature");
const weatherConditionEl = document.querySelector(".weather__condition");
const cityEl = document.querySelector(".weather__city");
const windEl = document.querySelector(".wind");
const humidityEl = document.querySelector(".humidity");

const errorTextEl = document.querySelector(".error");

// Container
const containerWeather = document.querySelector(".weather");
const containerBottomSection = document.querySelector(".bottom-section ");

const key = "9360e1692228e713ec4a092dbfd30f3e";

// displaying data
const DisplayWeather = async function (city) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    );

    // Throwing Error
    if (!res.ok) {
      errorTextEl.style.opacity = "1";
      throw new Error("Please enter correct city name");
    } else errorTextEl.style.opacity = "0";

    // const data = await res.json();
    // console.log(data);
    const { main, weather, name, wind, sys } = await res.json();
    1;

    // displaying data
    imgEl.src = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    tempEl.textContent = `${Math.round(main.temp)}°`;
    weatherConditionEl.textContent = weather[0].description;
    cityEl.textContent = `${name}, ${sys.country}`;

    windEl.textContent = `${Math.round(wind.speed)} mps`;
    humidityEl.textContent = `${main.humidity}%`;

    containerWeather.style.display = "block";
    containerBottomSection.style.display = "flex";
    // containerWeather.style.opacity = containerBottomSection.style.opacity = "1";
  } catch (err) {
    console.error(err.message);
  }
};

// DisplayWeather("dehradun");

btnSearch.addEventListener("click", function (e) {
  e.preventDefault();
  const cityName = inputSearchEl.value;
  DisplayWeather(cityName.toLowerCase());
});
