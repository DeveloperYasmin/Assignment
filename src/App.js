import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
        setUser(response.data.results[0]);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {user && (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src={user.picture.large} alt="User" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{`${user.name.first} ${user.name.last}`}</div>
            <p className="text-gray-700 text-base">
              {`Gender: ${user.gender}`}
            </p>
            <p className="text-gray-700 text-base">
              {`Email: ${user.email}`}
            </p>
            <p className="text-gray-700 text-base">
              {`Location: ${user.location.city}, ${user.location.country}`}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;