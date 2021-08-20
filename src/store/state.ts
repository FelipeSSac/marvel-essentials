import { EnsurePrevUser } from '../helpers/ensurers';

export interface IState {
  token: string;
  user: {
    githubUserImage: string,
    githubUser: string;
  };
}

export const initialState: IState = {
  ...EnsurePrevUser(),
};
