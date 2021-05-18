import {COUNT_UP, COUNT_DOWN} from '../actions/actionTypes';
const initState = {
  number: 0,
};

const CountReducer = (state = initState, action) => {
  switch (action.type) {
    case COUNT_UP:
      return {...state, number: action.payload + 1};
      break;
    case COUNT_DOWN:
      return {...state, number: action.payload - 1};
      break;
    default:
      return {...state};
      break;
  }
};

export default CountReducer;
