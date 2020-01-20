import React, {Component} from 'react';
// import SearchBar from 'material-ui-search-bar'; // Search Bar
import Script from 'react-load-script'; // Google API

class Search extends Component {

  state = {
    query: ""
  };

  render() {
    return (
      <div>
        {/* <Script url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCq2JRJsfnQ2lf-KqwgVsTQS-Y5Ra7zuoU&libraries=places" onLoad={this.handleScriptLoad}/> */}
        <div className="w-100 h-100 d-flex justify-content-center align-items-center">
          <input
            type="text"
            className="w-75"
            placeholder="Search"
            name="city"
            // value={this.state.query}
            // onChange={this.handleInputChange} 
            />
          <button
            className="btn btn-round m-2 pl-3 pr-3 btn-light" type="button" id="search">
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default Search;