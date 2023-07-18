import { DECREMENT, INCREMENT, RESET } from '../constants/Constant';

export const incrementCounter = () => ({
  type: INCREMENT,
});

export const decrementCounter = () => ({
  type: DECREMENT,
});

export const resetCounter = () => ({
  type: RESET,
});
