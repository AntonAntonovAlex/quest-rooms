import { useState, useEffect } from 'react';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { useParams } from 'react-router-dom';
import { store } from '../../store';
import { fetchQuestAction } from '../../store/api-actions';
import { useSelector } from 'react-redux';
import { getQuest } from '../../store/quest-data/selectors';
import { QuestLevel, QuestGenres } from 'const';
import LoadingScreen from '../loading-screen/loading-screen';
import { loadQuest } from '../../store/quest-data/quest-data';

const DetailedQuest = () => {
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);
  const params = useParams();

  useEffect(() => {
    store.dispatch(fetchQuestAction(Number(params.id)));

    return () => {
      store.dispatch(loadQuest(null));
    };

  }, [params.id]);

  const quest = useSelector(getQuest);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  const handleBookingModalClose = () => {
    setIsBookingModalOpened(false);
  };

  if (!quest) {
    return (
      <LoadingScreen />
    );
  }

  const {title, peopleCount, type, duration, coverImg, level, description} = quest;

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`../${coverImg}`}
          alt={`Квест ${title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{title}</S.PageTitle>
            <S.PageSubtitle>{QuestGenres[type].name}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{duration} мин</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{peopleCount[0]}–{peopleCount[1]} чел</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{QuestLevel[level]}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal onBookingModalCloseCallback={handleBookingModalClose}/>}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
