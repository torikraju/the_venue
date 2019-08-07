import React, { Component } from 'react';

import PriceBox from './priceBox';
import { data } from './data';

export default class extends Component {
    state =data;

    showBoxes = () => (
      this.state.priceList.map((el, index) => (
        <PriceBox
          key={index}
          delay={el.delay}
          price={el.price}
          desc={el.desc}
          link={el.link}
        />
      ))
    );

    render() {
      return (
        <div className="bck_black">
          <div className="center_wrapper pricing_section">
            <h2>Pricing</h2>
            <div className="pricing_wrapper">
              {this.showBoxes()}
            </div>
          </div>
        </div>
      );
    }
}
