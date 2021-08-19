import { NavLink } from 'react-router-dom';

import { UserButton } from '../../Atom/UserButton';

import { NavContainer } from './styles';

export default function Navbar() {
  const navItems = [
    { id: 'aS213', name: 'Personagens', path: '/' },
    { id: 'Ba597', name: 'Filmes', path: '/movies' },
    { id: 'GH089', name: 'HQs', path: '/hqs' },
  ];

  return (
    <NavContainer>
      {navItems.map((navItem) => (
        <NavLink
          key={navItem.id}
          className="nav__link"
          activeClassName="nav__link nav__link--active"
          to={navItem.path}
          exact
        >
          {navItem.name}
        </NavLink>
      ))}
      <UserButton />
    </NavContainer>
  );
}
