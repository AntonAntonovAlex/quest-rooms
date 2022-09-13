import App from 'components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchQuestsAction } from './store/api-actions';
import browserHistory from './browser-history';
import {ToastContainer} from 'react-toastify';
import HistoryRouter from './components/history-route/history-route';
import React from 'react';
import ReactDOM from 'react-dom';

store.dispatch(fetchQuestsAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <ToastContainer />
        <App/>
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
