import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';

const initialState = {
    quests: [],
    isDataLoaded: false,
    quest: null,
  };

  export const questData = createSlice({
    name: NameSpace.Data,
    initialState,
    reducers: {
      loadQuests: (state, action) => {
        state.quests = action.payload;
        state.isDataLoaded = true;
      },
      loadQuest: (state, action) => {
        state.quest = action.payload;
      }
    },
  });

  export const {loadQuests, loadQuest} = questData.actions;
