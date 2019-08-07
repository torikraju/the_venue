import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';


class Discount extends Component {
    state={
      discountStart: 0,
      discountEnd: 30,
    };

    // eslint-disable-next-line react/sort-comp
    percentage = () => {
      if (this.state.discountStart < this.state.discountEnd) {
        // eslint-disable-next-line react/no-access-state-in-setstate
        const cachedState = { ...this.state };
        this.setState({ discountStart: cachedState.discountStart + 1 });
      }
    };

    componentDidUpdate() {
      setTimeout(() => {
        this.percentage();
      }, 30);
    }

    render() {
      return (
        <div className="center_wrapper">
          <div className="discount_wrapper">
            <Fade
              left
              onReveal={() => this.percentage()}
            >
              <div className="discount_porcentage">
                <span>{this.state.discountStart}%</span>
                <span>Off</span>
              </div>
            </Fade>
            <Slide left>
              <div className="discount_description">
                <h3>Purchase tickets before 20th October</h3>
                <p>Ut pharetra sit amet aliquam id diam maecenas ultricies mi.
                At imperdiet dui accumsan sit amet nulla. Feugiat in ante metus dictum.
                Ac placerat vestibulum lectus mauris ultrices eros in cursus.
                </p>
                <div>Button</div>
              </div>
            </Slide>
          </div>
        </div>
      );
    }
}

export default Discount;
