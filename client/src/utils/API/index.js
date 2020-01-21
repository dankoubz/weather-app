import axios from "axios";

const BASEURL = "https://weather.ls.hereapi.com/weather/1.0/report.json?product=";
const FORECAST = "forecast_7days_simple&";
// const FORECASTHOURLY = "forecast_hourly&";
// const LONGLAT = "&latitude=-33.865143&longitude=151.209900";
// const NAMEPLACE = "name=Sydney";
const OBSERVE = "&oneobservation=true";
const APIKEY = "&apiKey=frtdROm5t4NWRtHyY4kDV47OMCj5B3t1Wl4I_p_mIXE";

export default {
  forecastUpdate : function (LONGLAT) {
    return axios.get('https://cors-anywhere.herokuapp.com/' + BASEURL + FORECAST + LONGLAT + OBSERVE + APIKEY);
  }
  // todayUpdate: function () {
  //   return axios.get('https://cors-anywhere.herokuapp.com/' + BASEURL + FORECASTHOURLY + NAMEPLACE + APIKEY);
  // }
};