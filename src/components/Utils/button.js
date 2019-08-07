import React from 'react';
import Button from '@material-ui/core/Button';

import iconTicket from '../../resources/images/icons/ticket.png';


export default (props) => {
  const {
    link, background, color, text,
  } = props;
  return (
    <Button
      href={link}
      variant="contained"
      size="small"
      style={{
        background,
        color,
      }}
    >
      <img src={iconTicket} className="iconImage" alt="iconButton" />
      {text}
    </Button>
  );
};
