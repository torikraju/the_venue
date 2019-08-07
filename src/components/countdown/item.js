import React from 'react';

export default (props) => {
  return (
    <div className="countdown_item">
      <div className="countdown_time">{props.value}</div>
      <div className="countdown_tag">{props.tag}</div>
    </div>
  );
};
