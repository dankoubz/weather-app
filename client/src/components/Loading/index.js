import React, {Component} from "react";
import "./style.css";

function Loading() {
 
    return (
      <div className="loading">
          <div className="h-100 d-flex justify-content-center align-items-center">
              <div className="row">
                <div className="col-12 text-center">
                        <img className="icon-load" alt="logo" src="../assets/logo/loading.gif"></img>
                        <h2>LOADING...</h2>
                        <p>A few moments, while we fetch your location</p>
                    </div>
                </div>
           </div>
      </div>
    )

}

export default Loading;