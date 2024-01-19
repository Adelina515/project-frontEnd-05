import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import { current } from '../redux/auth/auth-operations';

import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import {
  selectIsUserLogin,
  selectUserToken,
} from '../redux/auth/auth-selectors';

const Welcome = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('../pages/SignInPage/SignInPage'));
const Diary = lazy(() => import('../pages/Diary'));
const Products = lazy(() => import('../pages/ProductsPage/ProductsPage'));
const Exercises = lazy(() => import('../pages/Exercises'));
const Profile = lazy(() => import('../pages/ProfilePage/Profile'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();

  const isLogin = useSelector(selectIsUserLogin);
  const token = useSelector(selectUserToken);

  useEffect(() => {
    if (token && !isLogin) {
      dispatch(current());
    }
  }, [dispatch, isLogin, token]);
  return (
    <>
      <BrowserRouter basename="/project-frontEnd-05">
        <Toaster />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={<RestrictedRoute component={<Welcome />} />}
            />
            <Route path="*" element={<NotFoundPage />} />
            <Route
              path="/signup"
              element={
                <RestrictedRoute
                  redirectTo="/profile"
                  component={<SignUpPage />}
                />
              }
            />

            <Route
              path="/signin"
              element={
                <RestrictedRoute
                  redirectTo="/diary"
                  component={<SignInPage />}
                />
              }
            />

            <Route
              path="/profile"
              element={
                <PrivateRoute redirectTo="/signin" component={<Profile />} />
              }
            />
            <Route
              path="/diary"
              element={
                <PrivateRoute redirectTo="/signin" component={<Diary />} />
              }
            />
            <Route
              path="/products"
              element={
                <PrivateRoute redirectTo="/signin" component={<Products />} />
              }
            />
            <Route
              path="/exercises"
              element={
                <PrivateRoute redirectTo="/signin" component={<Exercises />} />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
