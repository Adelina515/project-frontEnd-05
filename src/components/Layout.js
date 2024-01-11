import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './header/Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
