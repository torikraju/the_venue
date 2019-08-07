import React from 'react';
import Zoom from 'react-reveal/Zoom';

export default (props) => {
  return (
    <Zoom left duration={props.duration} delay={props.delay}>
      <div className="vn_item">
        <div className="vn_outer">
          <div className="vn_inner">
            <div className="vn_icon_square bck_yellow" />
            <div
              className="vn_icon"
              style={{
                background: `url(${props.iconLocation})`,
              }}
            />
            <div className="vn_title">{props.title}</div>
            <div className="vn_desc">{props.desc}</div>
          </div>
        </div>
      </div>
    </Zoom>
  );
};
