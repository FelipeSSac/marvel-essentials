import { IState } from '..';

export default function LoginUser(state: IState) {
  return {
    ...state,
    user: {
      name: '',
      image: '',
    },
  };
}
