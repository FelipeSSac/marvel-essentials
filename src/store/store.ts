import { createStore } from 'redux';

import {
  initialState,
  IAction,
  ActionTypes,
  LoginUser,
  LogoutUser,
} from '.';

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ActionTypes.LoginUser: {
      return LoginUser(state, action);
    }
    case ActionTypes.LogoutUser: {
      return LogoutUser(state);
    }
    default: {
      return state;
    }
  }
};

const store = createStore(reducer);

export default store;
