// UserProfile.js
import React, { useState, useEffect } from 'react';

function UserProfile() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // Fetch user information from the backend when the component mounts
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    const token = localStorage.getItem('token');
    console.log('Token:', token); // Check if the token is retrieved correctly
    try {
      const response = await fetch('http://localhost:5000/user/data', {
        headers: {
          Authorization: `${token}`, // Include 'Bearer' prefix for the token
        },
      });

      console.log('Response Status:', response.status); // Log the response status

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
    // Remove the JWT token from local storage when the user signs out
    localStorage.removeItem('token');
    // Redirect to the sign-in page or perform other actions as needed
    window.location.href = '/';
  };

  return (
    <div>
      <h2>User Profile</h2>
      {userInfo ? (
        <div>
          <p>Welcome, {userInfo.name}!</p>
          <p>Email: {userInfo.email}</p>
          {/* Add other user information */}
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
}

export default UserProfile;
