export interface IAction {
  type: string;
  userName: string;
  userImage: string;
}

export const ActionTypes = {
  LoginUser: 'LoginUser',
  LogoutUser: 'LogoutUser',
};
