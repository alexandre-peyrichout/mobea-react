import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [country, setCountry] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3000/api/users`).then(res => {
      setUsers(res.data);
    });
  }, []);

  const handleChange = e => {
    setCountry({ [e.target.name]: e.target.value });
  };

  const submit = () => {
    const formData = country;
    axios.post(`http://localhost:3000/api/cities`, formData);
  };

  return (
    <div>
      {users.map(user => (
        <div key={user.iduser}>{user.firstname}</div>
      ))}
      <div>
        <form>
          <label htmlFor="name">
            <input type="text" id="name" name="name" onChange={handleChange} />
          </label>
          <label htmlFor="flag">
            <input type="text" id="flag" name="flag" onChange={handleChange} />
          </label>
          <button type="submit" onClick={submit}>
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
