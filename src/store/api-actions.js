import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../const';
import { errorHandle } from '../services/error-handle';
import { loadQuests, loadQuest } from './quest-data/quest-data';
import { redirectToRoute } from './action';
import { resetState } from 'store/quest-process/quest-process';

export const fetchQuestsAction = createAsyncThunk(
    'fetchQuests',
    async (_arg, {dispatch, extra: api}) => {
      try {
        const {data} = await api.get(APIRoute.Quest);
        dispatch(loadQuests(data));
      } catch (error) {
        errorHandle(error);
      }
    },
  );

  export const fetchQuestAction = createAsyncThunk(
    'fetchQuest',
    async (id, {dispatch, extra: api}) => {
      try {
        const {data} = await api.get(`${APIRoute.Quest}/${id}`);
        dispatch(loadQuest(data));
      } catch (error) {
        errorHandle(error);
      }
    },
  );
  
  export const sendBookingAction = createAsyncThunk(
    'sendBooking',
    async ({name, peopleCount, phone, isLegal}, {dispatch, extra: api}) => {
      try {
        await api.post(`${APIRoute.OrderPost}`, {name, peopleCount, phone, isLegal});
        dispatch(resetState());
        dispatch(redirectToRoute(''));
      } catch (error) {
        errorHandle(error);
      }
    },
  );