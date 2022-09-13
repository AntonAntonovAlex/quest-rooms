import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { useState}  from 'react';
import { useDispatch } from 'react-redux';
import { sendBookingAction } from 'store/api-actions';

const BookingModal = ({onBookingModalCloseCallback}) => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userPeopleCount, setUserPeopleCount] = useState('');

  const sendBooking = (bookingData) => {
    dispatch(sendBookingAction(bookingData));
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    sendBooking({
      name: userName,
      peopleCount: +userPeopleCount,
      phone: userPhone,
      isLegal: true,
    })
    
  };

  return (
  <S.BlockLayer>
    <S.Modal>
      <S.ModalCloseBtn
      onClick={onBookingModalCloseCallback}
      >
        <IconClose width="16" height="16" />
        <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
      </S.ModalCloseBtn>
      <S.ModalTitle>Оставить заявку</S.ModalTitle>
      <S.BookingForm
        onSubmit={handleFormSubmit}
        action="https://echo.htmlacademy.ru"
        method="post"
        id="booking-form"
      >
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
          <S.BookingInput
            type="text"
            id="booking-name"
            name="booking-name"
            placeholder="Имя"
            required
            onChange={({target}) => {
              const value = target.value;
              setUserName(value);
            }}
            value={userName}
          />
        </S.BookingField>
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-phone">
            Контактный телефон
          </S.BookingLabel>
          <S.BookingInput
            type="tel"
            id="booking-phone"
            name="booking-phone"
            placeholder="Телефон"
            required
            onChange={({target}) => {
              const value = target.value;
              setUserPhone(value);
            }}
            value={userPhone}
          />
        </S.BookingField>
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-people">
            Количество участников
          </S.BookingLabel>
          <S.BookingInput
            type="number"
            id="booking-people"
            name="booking-people"
            placeholder="Количество участников"
            required
            onChange={({target}) => {
              const value = target.value;
              setUserPeopleCount(value);
            }}
            value={userPeopleCount}
          />
        </S.BookingField>
        <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
        <S.BookingCheckboxWrapper>
          <S.BookingCheckboxInput
            type="checkbox"
            id="booking-legal"
            name="booking-legal"
            required
          />
          <S.BookingCheckboxLabel
            className="checkbox-label"
            htmlFor="booking-legal"
          >
            <S.BookingCheckboxText>
              Я согласен с{' '}
              <S.BookingLegalLink href="#">
                правилами обработки персональных данных и пользовательским
                соглашением
              </S.BookingLegalLink>
            </S.BookingCheckboxText>
          </S.BookingCheckboxLabel>
        </S.BookingCheckboxWrapper>
      </S.BookingForm>
    </S.Modal>
  </S.BlockLayer>
);
}


export default BookingModal;
