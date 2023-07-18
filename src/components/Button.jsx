import PropTypes from 'prop-types';
import React from 'react';
import Styles from '../styles/button.module.scss';

function Button({
  className, text, onClick, disabled,
}) {
  return (
    <button className={`${Styles.button} ${className}`} type="button" onClick={onClick} disabled={disabled}>{text}</button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
