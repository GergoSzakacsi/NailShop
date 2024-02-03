import { Outlet } from 'react-router-dom';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Header/Footer/Footer';
import './Layout.css'
function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
