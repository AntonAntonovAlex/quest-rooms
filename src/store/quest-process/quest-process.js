import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, QuestGenres } from '../../const';

const initialState = {
  type: QuestGenres['allType'].filterType,
  isActiveLinkQuest: true,
};

export const questProcess = createSlice({
  name: NameSpace.Quest,
  initialState,
  reducers: {
    changeType: (state, action) => {
      state.type = action.payload;
    },
    resetState: (state) => {
      state.type = QuestGenres['allType'].filterType;
    },
    changeIsActiveLinkHeader: (state, action) => {
      state.isActiveLinkQuest = action.payload;
    },
  },
});

export const {changeType, resetState, changeIsActiveLinkHeader} = questProcess.actions;
