import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

const Main = lazy(() => import('../pages/Main'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Main />} />
      </Routes>
    </div>
  );
};
