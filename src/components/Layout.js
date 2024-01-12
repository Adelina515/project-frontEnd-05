import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './header/Header';
import { Container } from './Container/Container';

export const Layout = () => {
  return (
    <Container>
      <Header />
      <Suspense>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </Container>
  );
};
