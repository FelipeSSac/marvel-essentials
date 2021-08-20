export interface IAction {
  type: string;
  token: string;
  user: {
    githubUser: string,
    githubUserImage: string,
  },
}

export const ActionTypes = {
  LoginUser: 'LoginUser',
  LogoutUser: 'LogoutUser',
};
