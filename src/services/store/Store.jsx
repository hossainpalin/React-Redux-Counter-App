import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducer from '../reducers/Reducer';

export const store = createStore(Reducer);

export const StoreProvider = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

StoreProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
