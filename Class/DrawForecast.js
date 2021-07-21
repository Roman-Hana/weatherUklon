class DrawForecast extends WeatherMain {
    constructor(temperature, wind, where, day) {
      super(temperature, wind, where);
      this.day = day;
    }
    draw() {
      document.querySelector(
        this.where
      ).innerHTML += `<div class="card">In this day ${this.day} temperature will be ${this.temperature} wind speed most likely be ${this.wind}.</div>`;
    }
  }