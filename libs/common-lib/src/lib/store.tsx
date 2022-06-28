import { createStore } from 'redux';

// configureStore

const reducerModel: {
  user: any,
  action: any
} = {user: '', action: {}};

const reducer = (state: typeof reducerModel = {user: 'anonymous', action: {}}, action:any) => {
  switch (action.type) {
    case 'SET_USER':
      state.user = action.user;
      state.action = action.type;
      return state;
    default:
      return state
  }
}

export const store = createStore(reducer);