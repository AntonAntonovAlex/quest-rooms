import logo from 'assets/img/logo.svg';
import * as S from './header.styled';
import { useDispatch } from 'react-redux';
import { resetState, changeIsActiveLinkHeader } from 'store/quest-process/quest-process';
import { useSelector } from 'react-redux';
import { getIsActiveLinkQuest } from 'store/quest-process/selectors';

const Header = () => {
  const dispatch = useDispatch();
  const isActiveLinkQuest = useSelector(getIsActiveLinkQuest);

  return (
  <S.StyledHeader>
    <S.HeaderWrapper>
      <S.Logo>
        <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
      </S.Logo>

      <S.Navigation>
        <S.Links>
          <S.LinkItem>
            <S.Link
            $isActiveLink={isActiveLinkQuest}
            to="/"
            onClick={(evt) => {
              dispatch(resetState());
              dispatch(changeIsActiveLinkHeader(true));
            }}>
              Квесты
            </S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link to="#">Новичкам</S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link to="#">Отзывы</S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link to="#">Акции</S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link
            $isActiveLink={!isActiveLinkQuest}
            to="/contacts"
            onClick={(evt) => {
              dispatch(changeIsActiveLinkHeader(false));
            }}
            >Контакты</S.Link>
          </S.LinkItem>
        </S.Links>
      </S.Navigation>
      <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
    </S.HeaderWrapper>
  </S.StyledHeader>
);
}


export default Header;
