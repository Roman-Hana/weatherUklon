class DrawWeather extends WeatherMain {
    constructor(city, temperature, wind, where, description) {
      super(temperature, wind, where);
      this.city = city;
      this.description = description;
    }
    draw() {
      document.querySelector(
        this.where
      ).innerHTML = `Temperature in city of ${this.city} is ${this.temperature} wind speed will be ${this.wind} <br> ${this.description}.`;
    }
  }