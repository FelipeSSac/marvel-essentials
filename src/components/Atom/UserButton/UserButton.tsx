import { UserButtonContainer } from './styles';

export default function UserButton() {
  return (
    <UserButtonContainer type="button">
      <img className="nav__user-button__image" src="https://avatars.githubusercontent.com/u/82123850?v=4" alt="User" />
      Sair
    </UserButtonContainer>
  );
}
