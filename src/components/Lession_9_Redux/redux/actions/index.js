import {
  COUNT_UP,
  COUNT_DOWN,
  SET_ARRAY_GAME,
  PLAYER_SELECT,
  BOT_SELECT,
} from './actionTypes';

export const countUpAction = payload => {
  return {
    type: COUNT_UP,
    payload,
  };
};

export const countDownAction = payload => {
  return {
    type: COUNT_DOWN,
    payload,
  };
};

export const setArrayGameAction = arrayGame => {
  return {
    type: SET_ARRAY_GAME,
    arrayGame,
  };
};

export const playerSeclectAction = selectedItem => {
  return {
    type: PLAYER_SELECT,
    selectedItem,
  };
};

export const botSeclectAction = selectedItem => {
  return {
    type: BOT_SELECT,
    selectedItem,
  };
};
