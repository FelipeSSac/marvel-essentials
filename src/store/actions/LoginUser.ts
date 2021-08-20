import { IAction } from '..';

export default function LoginUser(action: IAction) {
  return {
    token: action.token,
    user: {
      githubUserImage: `https://github.com/${action.user.githubUser}.png`,
      githubUser: action.user.githubUser,
    },
  };
}
