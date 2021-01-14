import React, { Component } from "react";
import IntroList from "./IntroList";
import Text from "./Text";
export default class Intro extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <Text />
          </div>
          <div className="col-sm-4">
            <Text />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            {/* item */}
            <IntroList />
          </div>
          <div className="col-sm-4">
            {/* item */}
            <IntroList />
          </div>
          <div className="col-sm-4">
            {/* item */}
            <IntroList />
          </div>
        </div>
      </div>
    );
  }
}
