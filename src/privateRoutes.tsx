import { Component, ElementType } from 'react';
import { Route, Redirect } from 'react-router-dom';

import jwt from 'jsonwebtoken';

interface IPrivateRoutesProps {
  component: ElementType;
  path: string;
  exact: boolean;
}

export default function PrivateRoutes({
  component, path, ...rest
}: IPrivateRoutesProps) {
  const isLogin = localStorage.getItem('@MarvelShowcaseToken');

  const isSectionActive = () => {
    if (isLogin === null) {
      return false;
    }

    const tokenPayLoad: any = jwt.decode(isLogin);
    const expSeconds = tokenPayLoad.exp;
    const timeNow = Date.now() / 1000;

    return !(timeNow > expSeconds);
  };

  return (
    <Route
      {...rest}
      render={(props) => (
        isSectionActive() ? <Component {...props} /> : <Redirect to="/" />
      )}
    />
  );
}
