import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'; // Import your stylesheet

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://tutorial-backend-g7fr.onrender.com/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="app-container">
      <h1 className="app-title">Dummy Data</h1>
      <div className="card-grid">
        {data.map(item => (
          <div key={item.id} className="card">
            <h2 className="card-id">ID: {item.id}</h2>
            <p className="card-name">Name: {item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
