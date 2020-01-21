import React, {Component} from "react";
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import Loading from "./components/Loading"
import API from "./utils/API";

class App extends Component {

  state = {
    today: [], // today
    forecast: [], // 7 days
    currentLocation: {} // geolocation
  };

  setCurrentLocation = (location) => {
    this.setState({...this.state, currentLocation: location});
    this.callWeatherForecast(location);
  }

  callWeatherForecast = (data) => {
    // console.log(data);

    let lat = data.lat;
    let long = data.lng;
    let LATLONG = "&latitude=" + lat + "&longitude=" + long;

    API.forecastUpdate(LATLONG).then(res => {
        this.setState({forecast: res.data.dailyForecasts.forecastLocation.forecast});
      })
      .catch(err => console.log(err));
  }

  render() {

    return (
      <div className="App">
        <Nav currentLocation={this.state.currentLocation} setCurrentLocation={this.setCurrentLocation} />
          
        <div className="mainScreen container-fluid p-0">
          <Carousel 
          forecast={this.state.forecast}/>
          <Loading />
        </div>
        
      </div>
    )
  }
}

export default App;