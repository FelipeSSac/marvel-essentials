import { NavLink } from 'react-router-dom';
import { NavContainer } from './styles';

export default function Navbar() {
  const navItems = [
    { id: 'aS213', name: 'Personagens', path: '/heroes' },
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
      <button className="nav__user-button" type="button">
        <img className="nav__user-button__image" src="https://avatars.githubusercontent.com/u/82123850?v=4" alt="User" />
        Sair
      </button>
    </NavContainer>
  );
}
