import { MarvelLogoContainer } from './styles';

export default function MarvelLogo({ className = 'header__logo' as string }) {
  return (
    <MarvelLogoContainer
      className={className}
    >
      Marvel
    </MarvelLogoContainer>
  );
}

MarvelLogo.defaultProps = { className: 'header__logo' };
