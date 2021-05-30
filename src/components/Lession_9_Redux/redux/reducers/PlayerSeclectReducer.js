import {Paper} from '../../../../Data/RockPaperScissor';
import {PLAYER_SELECT} from '../actions/actionTypes';
const initialState = {
  playerSelect: {id: 'paper', image: Paper, status: true},
};

const PlayerSelectReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAYER_SELECT:
      return {...state, playerSelect: action.selectedItem};
    default:
      return {...state};
  }
};

export default PlayerSelectReducer;
