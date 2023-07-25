import { DECREMENT, INCREMENT, RESET } from '../constants/Constant';

const getInitialState = () => {
  const localState = localStorage.getItem('count');
  if (localState) {
    return JSON.parse(localState);
  }
  return 0;
};

const initialState = {
  count: getInitialState(),
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state, count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state, count: state.count - 1,
      };

    case RESET:
      return {
        ...state, count: 0,
      };

    default:
      return state;
  }
};

export default Reducer;
