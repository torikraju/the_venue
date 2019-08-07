import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Button from '../Utils/button';

export default (props) => {
  const {
    delay, price, position, desc, link,
  } = props;
  return (
    <Zoom left delay={delay}>
      <div className="pricing_item">
        <div className="pricing_inner_wrapper">
          <div className="pricing_title">
            <span>$ {price}</span>
            <span>{position}</span>
          </div>
          <div className="pricing_description">
            {desc}
          </div>
          <div className="pricing_buttons">
            <Button
              text="Purchase"
              background="#ffa800"
              color="#fffff"
              link={link}
            />
          </div>
        </div>
      </div>
    </Zoom>
  );
};
