import * as S from './quests-catalog.styled';
import { useSelector } from 'react-redux';
import { getQuests } from 'store/quest-data/selectors';
import { getQuestType } from 'store/quest-process/selectors';
import QuestCard from '../quest-card/quest-card';
import { useDispatch } from 'react-redux';
import { changeType } from 'store/quest-process/quest-process';
import { QuestGenres } from 'const';

const QuestsCatalog = () => {
  const questsList = useSelector(getQuests);
  const questType = useSelector(getQuestType);
  const dispatch = useDispatch();

  const sortedQuestsList = questType === QuestGenres['allType'].filterType ?
    questsList :
    questsList.filter((quest) => quest.type === QuestGenres[questType].filterType);

  return (
    <>
      <S.Tabs>
        {Object.keys(QuestGenres).map((questGenre) => (
          <S.TabItem key={questGenre}>
            <S.TabBtn
              isActive={questType === QuestGenres[questGenre].filterType}
              onClick={(evt) => {
                dispatch(changeType(QuestGenres[questGenre].filterType));
              }}
            >
              {QuestGenres[questGenre].icon}
              <S.TabTitle>{QuestGenres[questGenre].name}</S.TabTitle>
            </S.TabBtn>
          </S.TabItem>
        ))}
      </S.Tabs>
      <S.QuestsList>
        {sortedQuestsList.map((quest) => (<QuestCard quest={quest} key={quest.id}/>))}
      </S.QuestsList>
    </>
  );
};

export default QuestsCatalog;
