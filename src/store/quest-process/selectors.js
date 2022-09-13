import { NameSpace } from '../../const';

export const getQuestType = (state) => state[NameSpace.Quest].type;
export const getIsActiveLinkQuest = (state) => state[NameSpace.Quest].isActiveLinkQuest;
