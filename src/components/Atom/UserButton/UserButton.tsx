import { useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes, IState } from '../../../store';

import { UserButtonContainer } from './styles';

export default function UserButton() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { githubUser, githubUserImage } = useSelector((store: IState) => store.user);

  function handleLogoutUser() {
    dispatch({ type: ActionTypes.LogoutUser });

    history.push('/login');
  }

  return (
    <UserButtonContainer
      type="button"
      onClick={handleLogoutUser}
    >
      <img className="user-button__image" src={githubUserImage} alt={githubUser} />
      Sair
    </UserButtonContainer>
  );
}
