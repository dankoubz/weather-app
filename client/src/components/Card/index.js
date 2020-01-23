import React, {Component} from "react";
import AnimatedBG from "../AnimatedBG"
import moment from 'moment';
import "./style.css";

let cardSect = "p-0 col-12 d-flex justify-content-center align-items-center card-sect";
let cardBox = "d-flex justify-content-center align-items-center text-center card-box";
let cardSplit = "p-2 m-0 col-12 h-100 d-flex justify-content-center align-items-center";

class Card extends Component {

  state = {
    weather: "",
    animation: ""
  };

  render(props) {

    // console.log(this.props.day);
    let timeDate = moment(this.props.day.utcTime).format('DD MMM');

    return (
      <article className="col-12 p-0">

        <AnimatedBG layout={this.props.day.skyDescription}/>

        <div className={cardSect}>
          <div className={`w-50 gap ${cardBox}`}>
            <div className="row">
              <div className="col-12">
                <p className="textStyle">{this.props.day.weekday}</p>
                <h3 className="textStyle">{timeDate}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className={cardSect}>
          <div className={`col-9 mt-3 ${cardBox}`}>
            <div className="row">
              <div className={cardSplit}>
                <div className="w-100">
                  <h1 className="textStyle">{(this.props.day.highTemperature * 1).toFixed(1)}&#176;c</h1>
                  <p className="p-0 m-0">&#10514; HIGH TEMP</p>
                </div>
              </div>
              <div className={cardSplit}>
                <div className="w-100">
                  <h1 className="textStyle">{(this.props.day.lowTemperature * 1).toFixed(1)}&#176;c</h1>
                  <p className="p-0 m-0">&#10515; LOW TEMP</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={cardSect}>
          <div className={`col-9 ${cardBox}`}>
            <div className="p-2 row text-center">
              <div className="col-4 text-center">
                <h4 className="textStyle text-center">{this.props.day.humidity}
                  <small>%</small>
                </h4>
                <p className="textStyle text-center">
                  <small className="">Humidity</small>
                </p>
              </div>
              <div className="col-4 text-center">
                <h4 className="textStyle">
                  {(this.props.day.windSpeed * 1).toFixed(0)}
                  <small>km</small>
                </h4>
                <p className="textStyle text-center">
                  <small>Wind</small>
                </p>
              </div>
              <div className="col-4 text-center">
                <h4 className="textStyle text-center">{this.props.day.precipitationProbability}
                  <small>%</small>
                </h4>
                <p className="textStyle text-center">
                  <small>Rain</small>
                </p>
              </div>

              <div className="col-12">
                <p className="p-0 m-0">{this.props.day.description}</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    )
  }
}

export default Card;