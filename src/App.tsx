import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios, { AxiosResponse } from 'axios';

function App() {

  const [response, setResponse] = React.useState<AxiosResponse>();

  useEffect(()=>{
    axios.get('/api/HttpTriggerTS')
    .then((response) =>{
      setResponse(response);
      console.log(response);
    })
    .catch((error)=>{
      console.log(error);
    })
    .then(()=>{

    });
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {response?.data.test}
        </p>
      </header>
    </div>
  );
}

export default App;
