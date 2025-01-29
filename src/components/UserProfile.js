// src/components/UserProfile.js
import React from 'react';
import { useSelector } from 'react-redux';

function UserProfile() {
  const user = useSelector((state) => state.user.user);

  return (
    <div>
      <h2>User Profile</h2>
      {user ? <p>Welcome, {user.name}!</p> : <p>No user data available</p>}
    </div>
  );
}

export default UserProfile;
