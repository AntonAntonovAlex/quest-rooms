import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';

export const AppRoute = {
  Main: '/',
  Contacts: '/contacts',
  Quest: '/quest/:id',
  NotFoundScreen: '*',
};

export const APIRoute = {
  Quest: '/quests',
  OrderPost: '/orders',
};

export const NameSpace = {
  Data: 'DATA',
  Quest: 'QUEST',
};

export const QuestGenres = {
  'allType': { filterType: 'allType', name: 'Все квесты', icon: <IconAllQuests />},
  'adventures': { filterType: 'adventures', name: 'Приключения', icon: <IconAdventures />},
  'horror': { filterType: 'horror', name: 'Ужасы', icon: <IconHorrors />},
  'mystic': { filterType: 'mystic', name: 'Мистика', icon: <IconMystic />},
  'detective': { filterType: 'detective', name: 'Детектив', icon: <IconDetective />},
  'sci-fi': { filterType: 'sci-fi', name: 'Sci-fi', icon: <IconScifi />},
};

export const HttpCode = {
  BadRequest: 400,
  NotFound: 404,
};

export const QuestLevel = {
  'hard': 'сложный',
  'medium': 'средний',
  'easy': 'простой',
};

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const CITY = {
  title: 'Санкт-Петербург',
  lat: 59.96822,
  lng: 30.31650,
  zoom: 15,
};

export const POINT = {
  title: 'Санкт-Петербург, Набережная реки Карповка, д 5',
  lat: 59.96822,
  lng: 30.31650,
};
