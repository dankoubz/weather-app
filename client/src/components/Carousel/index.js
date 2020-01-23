import React, { Component } from "react";
import Slider from "react-slick";
import CardForecast from "../Card";
import CardHourly from "../CardHourly";
import "./style.css";

export default class Carousel extends Component {
  
  render(props) {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      arrows: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1450,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            dots: true
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            dots: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            initialSlide: 2
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    console.log("THIS ONE!!");
    console.log(this.props.forecast[0]);

    const firstForecast = (this.props.forecast[0]);
    console.log(firstForecast);

    return (
      <main className="border">
        <Slider {...settings}> 

          {/* <CardHourly day={this.props.forecast}/> */}

          {this.props.forecast.map((d => 
            <CardForecast key={0} day={d}/>))}
        </Slider>
        
      </main>
    );
  }
}

