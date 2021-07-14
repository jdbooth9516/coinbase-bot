import React, { useEffect } from 'react'
import axios from 'axios';
import './App.css';

function App() {

  useEffect(() => {
    async function getData() {
      const response = await axios.get("http://localhost:5000/api/");
      console.log(response.data)
    }
    getData();
  }, []);

  return (
    <div className="App">

    </div>
  );
}

export default App;
