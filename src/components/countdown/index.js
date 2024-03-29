import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

import Item from './item';

export default class extends Component {
    state = {
      deadLine: 'Dec, 16, 2019',
      days: '0',
      hours: '0',
      minutes: '0',
      seconds: '0',
    };

    componentDidMount() {
      setInterval(() => this.getTimeUntil(), 1000);
    }

    getTimeUntil =() => {
      const time = Date.parse(this.state.deadLine) - Date.parse(new Date().toString());
      if (time < 0) {
        console.log('Date Passed');
      } else {
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / 1000 / 60) % 60);
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const days = Math.floor((time / (1000 * 60 * 60 * 24)));
        this.setState({
          days, hours, minutes, seconds,
        });
      }
    };

    render() {
      return (
        <Slide left delay={1000}>
          <div className="countdown_wrapper">
            <div className="countdown_top">Event starts in</div>
            <div className="countdown_bottom">
              <Item tag="Days" value={this.state.days} />
              <Item tag="Hours" value={this.state.hours} />
              <Item tag="Minutes" value={this.state.minutes} />
              <Item tag="Seconds" value={this.state.seconds} />
            </div>
          </div>
        </Slide>

      );
    }
}
