import React, { Component } from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import Intro from "./Intro";
import Footer from "./Footer";

export default class index extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <Intro />
        <Footer />
      </div>
    );
  }
}
