import React, {Component} from "react";

let cardSect = "p-0 col-12 d-flex justify-content-center align-items-center card-sect";
let cardBox = "mt-5 d-flex justify-content-center align-items-center text-center card-box";
let cardSplit = "p-2 m-0 col-12 h-100 d-flex justify-content-center align-items-center";

class Card extends Component {

  render(props) {

    console.log("HEREEEEE DANNNNN!!!!! ");
    console.log(this.props.day);

    return (
      <article className="border col-12 p-0">
        <div className={cardSect}>
          <div className={`w-50 ${cardBox}`}>
            <div className="row">
              <div className="col-12">
                <p className="textStyle">{this.props.today.weekday}</p>
                <h3 className="textStyle"></h3>
              </div>
              <h4>Live Updates</h4>
            </div>
          </div>
        </div>

        <div className={cardSect}>
          <div className={`col-9 ${cardBox}`}>
            <div className="row">
              <div className={cardSplit}>
                <div className="w-100">
                  <h1 className="textStyle">{(this.props.today.highTemperature * 1).toFixed(1)}&#176;c</h1>
                  <p className="p-0 m-0">&#10514; HIGH TEMP</p>
                </div>
              </div>
              <div className={cardSplit}>
                <div className="w-100">
                  <h1 className="textStyle">{(this.props.today.lowTemperature * 1).toFixed(1)}&#176;c</h1>
                  <p className="p-0 m-0">&#10515; LOW TEMP</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={cardSect}>
          <div className={`col-9 ${cardBox}`}>
            <div className="p-3 row">
              <div className="col-4 text-center">
                <h4 className="textStyle">{this.props.today.humidity}
                  <small>%</small>
                </h4>
                <p className="textStyle">
                  <small>Humidity</small>
                </p>
              </div>
              <div className="col-4 text-center">
                <h4 className="textStyle">{(this.props.today.windSpeed * 1).toFixed(0)}
                  <small>km</small>
                </h4>
                <p className="textStyle">
                  <small>Wind</small>
                </p>
              </div>
              <div className="col-4 text-center">
                <h4 className="textStyle">{this.props.today.precipitationProbability}
                  <small>%</small>
                </h4>
                <p className="textStyle">
                  <small>Rain</small>
                </p>
              </div>

              <div className="col-12">
                <p className="p-0 m-0">{this.props.today.description}</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    )
  }
}

export default Card;