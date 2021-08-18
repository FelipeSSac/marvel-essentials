import { useHistory } from 'react-router-dom';

import { MarvelLogoContainer } from './styles';

export default function MarvelLogo() {
  const history = useHistory();

  const handleHeroes = () => {
    history.push('/heroes');
  };

  return (
    <MarvelLogoContainer onClick={handleHeroes}>
      Marvel
    </MarvelLogoContainer>
  );
}
