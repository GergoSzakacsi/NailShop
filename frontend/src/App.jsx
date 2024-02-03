import { useState } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Contact from './components/Contact/Contact';
import SignIn from './components/SingIn/SignIn';
import Registration from './components/Registration/Registration';
import UserProfile from './components/UserProfile/UserProfile';
import About from './components/About/About';
import Nails from './components/Nails/nails';
import PriceList from './components/PriceList/PriceList';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const handleSignIn = (newToken) => {
    setToken(newToken);
  };
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
        {
          path: '/profile',
          element: <UserProfile />,
        },
        {
          path: '/nails',
          element: <Nails/>,
        },
        {
          path: '/pricelist',
          element: <PriceList/>,
        },
        {
          path: '/signin',
          element: token ? (
            // Render the User Profile component or other authorized content here
            <Navigate replace to="/" />
          ) : (
            <SignIn onSignIn={handleSignIn} />
          ),
        },
        {
          path: '/profile',
          element: <UserProfile />,
        },
        {
          path: '/registration',
          element: <Registration />,
        },
        {
          path: '/about',
          element: <About/>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
