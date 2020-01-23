import React, { Component } from "react";
import Slider from "react-slick";
import CardForecast from "../Card";
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

    return (
      <main className="border">
        <Slider {...settings}> 
          {this.props.forecast.map((d => 
          <CardForecast key={d} day={d}/> ))}
        </Slider>
      </main>
    );
  }
}

