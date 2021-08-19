import { MarvelLogoContainer } from './styles';

interface IMavelLogoProps {
  className?: string;
}

export default function MarvelLogo({ className = 'header__logo' }: IMavelLogoProps) {
  return (
    <MarvelLogoContainer
      className={className}
    >
      Marvel
    </MarvelLogoContainer>
  );
}

MarvelLogo.defaultProps = { className: 'header__logo' };
