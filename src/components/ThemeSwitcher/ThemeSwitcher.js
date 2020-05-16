import React from 'react';
import './themeSwitcher.css';

const ThemeSwitcher = (props) => {
  return (
      <button onClick={() => props.onClick((prevState) => !prevState)} className="themeSwitcher">Toggle Theme</button>
  );
};

export default ThemeSwitcher;
