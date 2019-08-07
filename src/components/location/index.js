import React from 'react';

export default () => {
  return (
    <div className="location_wrapper">
      {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825.6002591359302!2d90.37451007586748!3d23.77587291466508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c74d4bac086d%3A0x73b5ab89c65e6555!2s32+Syed+Mahbub+Morshed+Ave%2C+Dhaka+1207!5e0!3m2!1sen!2sbd!4v1565174582018!5m2!1sen!2sbd"
        width="100%"
        height="500px"
        allowFullScreen
      />
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};
