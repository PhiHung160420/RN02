import {Paper, Rock, Scissor} from '../../../../Data/RockPaperScissor';
import {SET_ARRAY_GAME} from '../actions/actionTypes';

const initialState = {
  arrayGame: [
    {id: 'scissor', image: Scissor, status: false},
    {id: 'rock', image: Rock, status: false},
    {id: 'paper', image: Paper, status: true},
  ],
};

const GameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARRAY_GAME:
      return {...state, arrayGame: action.arrayGame};
    default:
      return state;
  }
};

export default GameReducer;
