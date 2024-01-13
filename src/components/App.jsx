import { lazy } from 'react';
import { Navigate, Route, Routes, BrowserRouter as Router,} from 'react-router-dom';
import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const Main = lazy(() => import('../pages/Main'));
const Welcome = lazy(() => import('../pages/Welcome'));
const SignUp = lazy(() => import('../pages/SignUp'));
const SignIn = lazy(() => import('../pages//SignIn'));
const Diary = lazy(() => import('../pages/Diary'));
const Products = lazy(() => import('../pages/Products'));
const Exercises = lazy(() => import('../pages/Exercises'));
const Profile = lazy(() => import('../pages/Profile'));

export const App = () => {
  return (
    <div>
         <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
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
        <Route path="/profile" element={<Profile />} />
          
      
        <Route
          path="/diary"
          element={<PrivateRoute redirectTo="/signin" component={<Diary />} />}
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
      </Routes>
      </Router>
    </div>
  );
};
