import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';
import nailartImage from '../../Images/nailgel.jpg';

function SignIn({ onSignIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const { token } = data;
        localStorage.setItem('token', token);
        onSignIn(token);
      } else {
        const errorData = await response.json();
        console.error('Sign-In failed:', errorData.message);
      }
    } catch (error) {
      console.error('Error during sign-in:', error.message);
    }
  };

  return (
    <div className="page-container">
      <div className="sign-in-container">
        <img className="nailart-left" src={nailartImage} alt="Nail Art" />
        <img className="nailart-right" src={nailartImage} alt="Nail Art" />
        <h2>Bejelentkezés</h2>
        <div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="sign-in-button m-2" onClick={handleSignIn}>
          Bejelentkezés
        </button>
        <article class="m-2">
          <p class="fs-5">
            Nincs még fiókod?  <Link to="/registration">Regisztráció</Link>
          </p>
        </article>
      </div>
    </div>
  );
}

export default SignIn;