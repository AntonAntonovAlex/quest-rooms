import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { questData } from './quest-data/quest-data';
import { questProcess } from './quest-process/quest-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: questData.reducer,
  [NameSpace.Quest]: questProcess.reducer,
});
