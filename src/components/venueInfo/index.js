import React from 'react';
import Zoom from 'react-reveal/Zoom';

import iconCalendar from '../../resources/images/icons/calendar.png';
import iconLocation from '../../resources/images/icons/location.png';

export default () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <Zoom left duration={1000}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red" />
                  <div
                    className="vn_icon"
                    style={{
                      background: `url(${iconCalendar})`,
                    }}
                  />
                  <div className="vn_title">Event Date & Time</div>
                  <div className="vn_desc">16 Dec 2019 @10.00 pm</div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom left duration={1000} delay={1000}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_yellow" />
                  <div
                    className="vn_icon"
                    style={{
                      background: `url(${iconLocation})`,
                    }}
                  />
                  <div className="vn_title">Event Location</div>
                  <div className="vn_desc">Akshya Nagar 1st Block 1st Cross</div>
                </div>
              </div>
            </div>
          </Zoom>
          <div />
        </div>
      </div>
    </div>
  );
};
