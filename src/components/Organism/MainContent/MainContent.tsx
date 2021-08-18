import InternalRouter from '../../../routes/InternalRouter';

import { MainContentContainer } from './styles';

export default function MainContent() {
  return (
    <MainContentContainer>
      <InternalRouter />
    </MainContentContainer>
  );
}
