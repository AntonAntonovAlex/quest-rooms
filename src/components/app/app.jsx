import { ThemeProvider } from 'styled-components';
import { Route } from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import { appTheme } from './common';
import * as S from './app.styled';
import { Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLoadedDataStatus } from 'store/quest-data/selectors';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { AppRoute } from 'const';

const App = () => {
  const isDataLoaded = useSelector(getLoadedDataStatus);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <Routes>
        <Route
          path={AppRoute.Quest}
          element={<DetailedQuest/>}
        />
        <Route
          path={AppRoute.Contacts}
          element={<Contacts/>}
        />
        <Route
          path={AppRoute.Main}
          element={<Home/>}
        />
        <Route
          path={AppRoute.NotFoundScreen}
          element={<NotFoundScreen/>}
        />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
