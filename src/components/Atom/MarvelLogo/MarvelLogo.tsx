import { MarvelLogoContainer } from './styles';

export default function MarvelLogo({ ...rest }) {
  return (
    <MarvelLogoContainer {...rest}>
      Marvel
    </MarvelLogoContainer>
  );
}

MarvelLogo.defaultProps = { className: 'header__logo' };
