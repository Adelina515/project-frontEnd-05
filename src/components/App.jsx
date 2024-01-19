import { lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
// import { selectIsUserLogin } from '../redux/auth/auth-selectors';
// import { useSelector } from 'react-redux';
import { current } from '../redux/auth/auth-operations';

import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const Welcome = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('../pages/SignInPage/SignInPage'));
const Diary = lazy(() => import('../pages/Diary'));
const Products = lazy(() => import('../pages/ProductsPage/ProductsPage'));
const Exercises = lazy(() => import('../pages/Exercises'));
const Profile = lazy(() => import('../pages/ProfilePage/Profile'));

export const App = () => {
  const dispatch = useDispatch();
  // const { isLogin } = useSelector(selectIsUserLogin);

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);
  return (
    <>
      <Toaster />
      <BrowserRouter basename="/project-frontEnd-05">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Welcome />} />
            <Route path="*" element={<Navigate to="/" />} />
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
