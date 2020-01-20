import React, {Component} from "react";
import PlacesAutocomplete, {geocodeByAddress, getLatLng,} from 'react-places-autocomplete';
import "./style.css";

class Nav extends Component {

  constructor(props) {
    super(props)
    this.state = {
      condition: false,
      search: "",
      city: "",
      address: ''
    }
  }

  componentDidMount(){
    this.getGeoLocation();
  }

  toggle() {
    this.setState({
      condition: !this.state.condition
    })
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(results => this.props.setCurrentLocation({lat: results.lat, lng: results.lng}) )
      .catch(error => console.error('Error', error));
  };

  // Get Geolocation Longitude Lattidue
  getGeoLocation = () => {
      navigator.geolocation.getCurrentPosition(position => {
        this.props.setCurrentLocation({lat: position.coords.latitude, lng: position.coords.longitude})
      }, error => console.log(error.message), {enableHighAccuracy: true,timeout: 20000,maximumAge: 1000});
    this.toggle();
  }

  // Handle for search bar
  handleInputChange = event => {
    this.setState({ search: event.target.value});
  };

  render() {
    return (
      <section className="container-fluid">
        <nav className="col-12 border">
          <div className="row h-100">

            <div className="logo col-lg-3">
              <aside className="w-100 h-100 d-flex justify-content-center align-items-center">
                <img className="logo" alt="logo" src="../assets/logo/logo02.gif"></img>
              </aside>
            </div>

            <div className="col-7 col-md-8 col-lg-6 p-0">
              <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                <button onClick={this.getGeoLocation} className={`btn btn-round pl-3 pr-3 ml-2 mr-2 btn-light ${this.state.condition ? `active`: ``}`} type="button" id="saved">
                  <img className="icon pb-1" alt="location-pin" src="../assets/logo/pin-icon.png"></img>
                </button>
                    <PlacesAutocomplete value={this.state.address} 
                    onChange={this.handleChange} onSelect={this.handleSelect}>
                      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div>
                          <input
                            {...getInputProps({
                              placeholder: 'Current places',
                              className: 'location-search-input',
                            })} />
                          <div className="autocomplete-dropdown-container">
                            {loading && <p className="text-center">Loading...</p>}
                            {suggestions.map(suggestion => {
                              const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                              // inline style for demonstration purpose
                              const style = suggestion.active
                                ? { backgroundColor: '#1a1a1a', cursor: 'pointer' }
                                : { backgroundColor: '#1a1a1a', cursor: 'pointer' };
                              return (
                                <div
                                  {...getSuggestionItemProps(suggestion, {className, style,})}>
                                  <span>{suggestion.description}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </PlacesAutocomplete>
                {/* <input type="text" className="w-75" placeholder="Search" name="city"  */}
                {/* value={this.state.search} onChange={this.handleInputChange}/> */}
                <button className="btn btn-round m-2 pl-3 pr-3 btn-light" type="button" id="search"> Search</button>
              </div>
            </div>

            <div className="col-5 col-md-4 col-lg-3">
              <aside className="w-100 h-100 d-flex justify-content-center align-items-center">
                <button className="btn btn-round pl-3 pr-3 mr-2 btn-light" type="button" id="saved">♥</button>
                <button className="btn btn-round pl-4 pr-4 btn-light" type="button" id="saved">
                  Places <span className="triangle">▼</span>
                </button>
              </aside>
            </div>
          </div>
        </nav>
      </section>
    )
  }
}

export default Nav;