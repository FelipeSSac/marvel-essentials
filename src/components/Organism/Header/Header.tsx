import { MarvelLogo } from '../../Atom/MarvelLogo';
import { Navbar } from '../../Molecule/Navbar';

import { HeaderContainer } from './styles';

export default function Header() {
  return (
    <HeaderContainer>
      <MarvelLogo />
      <Navbar />
    </HeaderContainer>
  );
}
