import React from 'react';
import Fade from 'react-reveal/Fade';


export default () => {
  return (
    <footer className="bck_red">
      <Fade left delay={500}>
        <div className="font_righteous ">The Venue</div>
        <div className="footer_copyright">The venue 2019. All right received</div>
      </Fade>
    </footer>
  );
};
