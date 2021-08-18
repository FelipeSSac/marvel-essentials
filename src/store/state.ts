export interface IState {
  user: {
    name: string;
    image: string;
  };
  isAuthenticated: boolean;
}

export const initialState: IState = {
  user: {
    name: '',
    image: '',
  },
  isAuthenticated: false,
};
