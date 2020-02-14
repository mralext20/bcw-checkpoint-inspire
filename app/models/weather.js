export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //DONE You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try
    this.wantFerinhight = false
    this.city = data.name
    this.kelvin = data.main.temp
    this.celcius = (this.kelvin - 273.15)
    // (0°C × 9/5) + 32 = 32°F
    this.ferinhight = `${((this.celcius * 9 / 5) + 32).toFixed(2)} °F`
    this.celcius = `${this.celcius.toFixed(2)}°F`
    this.wind = data.wind.speed
    this.windDir = data.wind.deg
    this.gust = data.wind.gust
    // new Date tames miliseconds since epoch, API returns seconds since epoch as target
    this.sunrise = new Date(data.sys.sunrise * 1000)
    this.sunset = new Date(data.sys.sunset * 1000)

  }
  get Template() {
    return /*html*/`
      <h2> <i class="fas fa-thermometer-three-quarters"></i>: ${ this.wantFerinhight ? this.ferinhight : this.celcius}</h2>
        <h3>\uD83C\uDF2C:${this.windDir}@ ${this.wind}m/s, gusts to ${this.gust}m/s</h5>


    `

  }
}