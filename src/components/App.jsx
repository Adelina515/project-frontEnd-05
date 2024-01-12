import { lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const Main = lazy(() => import('../pages/Main'));
const Welcome = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const SignUp = lazy(() => import('../pages/SignUpPage/SignUpPage'));
const SignIn = lazy(() => import('../pages/SignInPage/SignInPage'));
const Diary = lazy(() => import('../pages/Diary'));
const Products = lazy(() => import('../pages/Products'));
const Exercises = lazy(() => import('../pages/Exercises'));
const Profile = lazy(() => import('../pages/Profile'));

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route
            path="/welcome"
            element={<RestrictedRoute redirectTo="/" component={<Welcome />} />}
          />
          <Route
            path="/signup"
            element={<RestrictedRoute redirectTo="/" component={<SignUp />} />}
          />
          <Route
            path="/signin"
            element={<RestrictedRoute redirectTo="/" component={<SignIn />} />}
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
  );
};
