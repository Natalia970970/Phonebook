import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import { Loading } from './Loading/Loading';


import { Home } from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { LoginPage } from '../pages/LoginPage';
import { ContactsPage } from '../pages/ContactsPage';

import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

import { refreshUser } from './../redux/AuthOperations';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    isRefreshing ? (
      <Loading />
    ) : (
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route
          path="/register"
          element={
            <PublicRoute
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
              <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
    )
  )
}