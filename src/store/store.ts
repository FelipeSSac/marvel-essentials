import { createStore } from 'redux';

import {
  initialState,
  IAction,
  ActionTypes,
  LoginUser,
  LogoutUser,
} from '.';

function reducer(state = initialState, action: IAction) {
  switch (action.type) {
    case ActionTypes.LoginUser: {
      return LoginUser(action);
    }
    case ActionTypes.LogoutUser: {
      return LogoutUser();
    }
    default: {
      return state;
    }
  }
}

const store = createStore(reducer);

export default store;
