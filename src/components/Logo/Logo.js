import React from 'react';
import './logo.css';

const Logo = (props) => {
  return (
      <div className="logo" style={{ color: props.theme ? 'white' : 'black' }} >
        My first YT Live session
      </div>
  );
};

export default Logo;
