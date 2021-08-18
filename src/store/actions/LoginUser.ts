import { IState, IAction } from '..';

export default function LoginUser(state: IState, action: IAction) {
  return {
    ...state,
    user: {
      name: action.userName,
      image: action.userImage,
    },
  };
}
