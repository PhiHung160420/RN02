import {Scissor} from '../../../../Data/RockPaperScissor';
import {BOT_SELECT} from '../actions/actionTypes';
const initialState = {
  botSelect: {id: 'scissor', image: Scissor, status: false},
};

const BotSelectReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOT_SELECT:
      return {...state, botSelect: action.selectedItem};

    default:
      return {...state};
  }
};

export default BotSelectReducer;
