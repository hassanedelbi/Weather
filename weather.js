class Weather {
  constructor(city, state) {
    this.apiKey = "edb2635fda4987375d4b96fa636a7cbd";
    this.city = city;
    this.state = state;
  }

  // Fetch Weather From API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`
    );
    const responseData = await response.json();

    return responseData;
  }
  //change location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
} // end Class Weather