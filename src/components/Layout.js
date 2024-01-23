import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './header/Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
