import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';


function App() {
  // const publicClient = new CoinBasePro.PublicClient();
  const [active, setActive] = useState(false)

  useEffect(() => {
    async function getData(){
      const response = await axios.get("http://localhost:5000/api/")
      console.log(response);
    };
    getData();

  })

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
