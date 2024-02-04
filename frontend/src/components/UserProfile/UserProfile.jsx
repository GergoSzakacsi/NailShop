import React, { useState, useEffect } from 'react';

function UserProfile() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    const token = localStorage.getItem('token');
    console.log('Token:', token);
    try {
      const response = await fetch('http://localhost:5000/user/data', {
        headers: {
          Authorization: `${token}`,
        },
      });

      console.log('Response Status:', response.status);

      if (response.status === 200) {
        const data = await response.json();
        setUserInfo(data);
      } else {
        console.error('Error fetching user information:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching user information:', error);
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <div>
      <h2>User Profile</h2>
      {userInfo ? (
        <div>
          <p>Welcome, {userInfo.name}!</p>
          <p>Email: {userInfo.email}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
}

export default UserProfile;
