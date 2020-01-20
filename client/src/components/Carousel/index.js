import React, { Component } from "react";
import Slider from "react-slick";
import CardForecast from "../Card";
import CardHourly from "../CardHourly";
// import moment from 'moment';
import "./style.css";

export default class Carousel extends Component {
  
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1450,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
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

    // const currentWeekday = moment().weekday();

    return (
      <main className="border">
        <Slider {...settings}> 
          {/* <CardHourly today={this.props.today}/> */}

          {(this.props.forecast.map(d => (
              <CardForecast key={d} day={d}/> 
          )))}
        </Slider>   
            
        {/* if(this.props.forecast.dayOfWeek === currentWeekday) { return <CardForecast key={d} day={d}/> } else { return console.log(currentWeekday) })} */}
        {/* switch (this.props.forecast.dayOfWeek) { case currentWeekday: return console.log(currentWeekday); break default: <CardForecast key={d} day={d}/>; */}
            
        {/* <Card key={d} day={d}/>  */}
        {/* <CardHourly key={d} day={d}/> */}
        
      </main>
    );
  }
}

