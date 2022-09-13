import request from 'axios';
import {toast} from 'react-toastify';
import { AppRoute, HttpCode } from '../const';
import { store } from '../store';
import { redirectToRoute } from '../store/action';

export const errorHandle = (error) => {
    if (!request.isAxiosError(error)) {
      throw error;
    }
  
    const {response} = error;

    if (response) {
      switch (response.status) {
        case HttpCode.BadRequest:
          toast.error(response.data.error);
          break;
        case HttpCode.NotFound:
          toast.info(response.data.error);
          store.dispatch(redirectToRoute(AppRoute.NotFoundScreen));
          break;
        default:
          toast.error(response.data.error);
          break;
      }
    } else {
      toast.error(error.message);
    }
  };
