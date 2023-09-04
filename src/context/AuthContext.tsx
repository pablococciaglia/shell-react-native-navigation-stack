import React, {createContext, useCallback, useReducer} from 'react';
import {authReducer} from './AuthReducer';

export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  signOut: () => void;
  setFavoriteIcon: (iconName: string) => void;
  setUserName: (userName: string) => void;
}

export const AuthContext = createContext<AuthContextProps>({
  authState: authInitialState,
  signIn: () => {},
  signOut: () => {},
  setFavoriteIcon: () => {},
  setUserName: () => {},
});

export const AuthProvider = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  const signOut = () => {
    dispatch({type: 'signOut'});
  };

  const setFavoriteIcon = (iconName: string) => {
    dispatch({type: 'changeIcon', payload: iconName});
  };

  const setUserName = useCallback((userName: string) => {
    dispatch({type: 'changeName', payload: userName});
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        signOut,
        setFavoriteIcon,
        setUserName,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const AppState = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) => {
  return <AuthProvider>{children}</AuthProvider>;
};
