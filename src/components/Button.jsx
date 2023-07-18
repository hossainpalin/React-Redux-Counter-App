import PropTypes from 'prop-types';
import React from 'react';
import Styles from '../styles/button.module.scss';

function Button({ className, text }) {
  return (
    <button className={`${Styles.button} ${className}`} type="button">{text}</button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
