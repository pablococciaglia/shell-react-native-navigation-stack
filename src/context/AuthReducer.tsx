import {AuthState} from './AuthContext';

type AuthAction =
  | {type: 'signIn'}
  | {type: 'signOut'}
  | {type: 'changeIcon'; payload: string}
  | {type: 'changeName'; payload: string};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'Create a username',
      };
    case 'signOut':
      return {
        isLoggedIn: false,
      };
    case 'changeIcon':
      return {
        ...state,
        favoriteIcon: action.payload,
      };
    case 'changeName':
      return {
        ...state,
        username: action.payload,
      };

    default:
      return state;
  }
};
