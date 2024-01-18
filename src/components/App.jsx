import { lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import { current } from '../redux/auth/auth-operations';

import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const Main = lazy(() => import('../pages/Main'));
const Welcome = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('../pages/SignInPage/SignInPage'));
const Diary = lazy(() => import('../pages/Diary'));
const Products = lazy(() => import('../pages/ProductsPage/ProductsPage'));
const Exercises = lazy(() => import('../pages/Exercises'));
const Profile = lazy(() => import('../pages/ProfilePage/Profile'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route
              path="/welcome"
              // element={<Welcome to="/" />}
              element={
                <RestrictedRoute redirectTo="/" component={<Welcome />} />
              }
            />
            <Route
              path="/signup"
              //  element={<SignUpPage/>}
              element={
                <RestrictedRoute
                  redirectTo="/profile"
                  component={<SignUpPage />}
                />
              }
            />

            <Route
              path="/signin"
              // element={<SignInPage/>}
              element={
                <RestrictedRoute
                  redirectTo="/diary"
                  component={<SignInPage />}
                />
              }
            />

            <Route
              path="/profile"
              // element={<Profile to="/" />}
              element={
                <PrivateRoute redirectTo="/signin" component={<Profile />} />
              }
            />
            <Route
              path="/diary"
              // element={<Diary to="/" />}
              element={
                <PrivateRoute redirectTo="/signin" component={<Diary />} />
              }
            />
            <Route
              path="/products"
              // element={<Products to="/" />}
              element={
                <PrivateRoute redirectTo="/signin" component={<Products />} />
              }
            />
            <Route
              path="/exercises"
              // element={<Exercises to="/" />}
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
