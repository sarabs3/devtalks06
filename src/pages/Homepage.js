import React from 'react';
import PropTypes from 'prop-types';
import Logo  from '../components/Logo';
import { ThemeSwitcher } from '../components/ThemeSwitcher';
import './homepage.css';

const Homepage = (props) => {
  return (
      <div className="homepage" style={{ background: props.theme ? 'black' : 'white' }} >
        <Logo theme={props.theme} />
        <ThemeSwitcher onClick={props.changeTheme} />
      </div>
  )
};

Homepage.propTypes = {
  theme: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired,
};

export default Homepage;
