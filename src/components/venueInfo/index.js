import React from 'react';

import iconCalendar from '../../resources/images/icons/calendar.png';
import iconLocation from '../../resources/images/icons/location.png';
import Item from './item';

export default () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <Item
            duration={1000}
            iconLocation={iconCalendar}
            title="Event Date & Time"
            desc="16 Dec 2019 @10.00 pm"
          />
          <Item
            duration={1000}
            delay={1000}
            iconLocation={iconLocation}
            title="Event Location"
            desc="Akshya Nagar 1st Block 1st Cross"
          />
          <div />
        </div>
      </div>
    </div>
  );
};
