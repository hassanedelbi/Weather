class Storage {
  constructor() {
    this.city;
    this.StaticRange;
    this.defaultCity = "london";
    this.defaultState = "fl";
  }

  getLocationData() {
    if (localStorage.getItem("city") === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem("city");
    }

    if (localStorage.getItem("state") === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem("state");
    }

    return {
      city: this.city,
      state: this.state,
    };
  }

  setLocationData(city, state) {
    localStorage.setItem("city", city);
    localStorage.setItem("state", state);
  }
}
