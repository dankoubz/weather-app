import React, {Component} from "react";
import "./style.css";

class AnimatedBG extends Component {

  getLayout = (currentLayout) =>{
    // console.log('currLay', currentLayout)
    switch(currentLayout) {
      case "Sunny":
          return this.layouts.sunny
      case "Mostly cloudy":
      case "Afternoon clouds":
      case "Morning clouds":
          return this.layouts.cloudy
      default:
        return this.layouts.sunny
    }
  }

  layouts = {
    sunny:{
      bgClass:'bg-1',
      overlayClass:'overlay',
      preLayout:[],
      postLayout: [
        {className:'h-100 imageFG',src:'../assets/animation/Sunny-FG01.png'},
        {className:'h-100 imageMG',src:'../assets/animation/Sunny-MG01.png'},
        {className:'cloud c-1',src:'../assets/animation/cloud01.png'},
        {className:'cloud c-2',src:'../assets/animation/cloud02.png'},
        {className:'cloud c-3',src:'../assets/animation/cloud02.png'},
        {className:'imageSun',src:'../assets/logo/logo.gif'},
      ]
    },
    cloudy:{
      bgClass:'bg-2',
      overlayClass:'overlay',
      preLayout:[],
      postLayout: [
        {className:'h-100 imageFG',src:'../assets/animation/Sunny-FG01.png'},
        {className:'h-100 imageMG',src:'../assets/animation/Cloudy-MG01.png'},
        {className:'cloud2 c-1',src:'../assets/animation/cloud01.png'},
        {className:'cloud2 c-2',src:'../assets/animation/cloud02.png'},
        {className:'cloud2 c-3',src:'../assets/animation/cloud02.png'},
        {className:'cloud2 c-4',src:'../assets/animation/cloud02.png'},
        {className:'cloud2 c-5',src:'../assets/animation/cloud01.png'},
        {className:'cloud2 c-6',src:'../assets/animation/cloud02.png'},
        {className:'cloud2 c-7',src:'../assets/animation/cloud02.png'},
        {className:'cloud2 c-8',src:'../assets/animation/cloud02.png'},
        {className:'imageSun',src:'../assets/logo/logo.gif'}
      ]
    },
    rainy:{
      bgClass:'bg-3',
      overlayClass:'overlay2',
      preLayout:[
        {className:'rain',src:'../assets/animation/rain.gif'},
        {className:'rain r-2',src:'../assets/animation/rain.gif'},
        {className:'rain r-3',src:'../assets/animation/rain.gif'}
      ],
    postLayout: [
        {className:'h-100 imageFG',src:'../assets/animation/Rain-FG01.png'},
        {className:'h-100 imageMG', src:'../assets/animation/Rain-MG01.png'},
        {className:'imageSun', src:'../assets/logo/logo.gif'},
        {className:'imageMG',src:'../assets/animation/Rain-clouds.png'}
      ]
    }
  }

  render() {
    // console.log('pre', this.props.layout);
    const currentLayout = this.getLayout(this.props.layout)
    // console.log('post', currentLayout);

    return (
    <div className={currentLayout.bgClass}>
        {currentLayout.preLayout.map((item, index) => <img key={index} alt="bg-img" {...item}></img>)}
        <div className={currentLayout.overlayClass}></div>
        {currentLayout.postLayout.map((item, index) => <img key={index} alt="bg-img" {...item}></img>)}
    </div>
    )
  }
}

export default AnimatedBG;