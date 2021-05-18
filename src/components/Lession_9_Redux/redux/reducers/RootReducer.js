import {combineReducers} from 'redux';
import CountReducer from './CountReducer';
import GameReducer from './GameReducer';
import PlayerSelectReducer from './PlayerSeclectReducer';
import BotSelectReducer from './BotSelectReducer';

export const rootReducers = combineReducers({
  CountReducer,
  GameReducer,
  PlayerSelectReducer,
  BotSelectReducer,
});
