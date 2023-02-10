import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginUserRequest } from '../../store/actions/usersActions';
import Cookies from 'js-cookie';

const CookieProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (Cookies.get('jwt')) {
      dispatch(loginUserRequest());
    }
  }, [dispatch]);

  return <>{children}</>
};

export default CookieProvider;
