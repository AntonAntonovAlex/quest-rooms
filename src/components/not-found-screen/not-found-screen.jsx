import { MainLayout, PageTitle } from 'components/common/common';
import * as S from '../contacts/contacts.styled';

const NotFoundScreen = () => (
  <MainLayout>
    <S.Main>
      <S.ContentWrapper>
        <S.PageHeading>
          <PageTitle>404 Not Found</PageTitle>
        </S.PageHeading>
      </S.ContentWrapper>
    </S.Main>
  </MainLayout>
);

export default NotFoundScreen;