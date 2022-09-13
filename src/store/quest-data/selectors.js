import { NameSpace } from '../../const';

export const getQuests = (state) => state[NameSpace.Data].quests;
export const getLoadedDataStatus = (state) => state[NameSpace.Data].isDataLoaded;
export const getQuest = (state) => state[NameSpace.Data].quest;
