function getWeather() {
  let city = document.querySelector(".input").value;
  fetch(`https://goweather.herokuapp.com/weather/${city}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let maindata = new DrawWeather(
        city,
        data.temperature,
        data.wind,
        ".out-data",
        data.description
      );
      maindata.draw();
      for (let i = 0; i < data.forecast.length; i++) {
        let forecast = new DrawForecast(
          data.forecast[i].temperature,
          data.forecast[i].wind,
          ".forecast",
          data.forecast[i].day
        );
        forecast.draw();
      }
    })
    .catch();
}

document.querySelector(".button-primary").onclick = getWeather;
