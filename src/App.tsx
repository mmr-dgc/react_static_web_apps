import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios, { AxiosResponse } from 'axios';

function App() {

  const [response, setResponse] = useState<AxiosResponse>();

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

  const onClick = () => {
    alert('Clicked!');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {response?.data.test}
        </p>
        <button onClick={onClick}>BUTTON</button>
      </header>
    </div>
  );
}

export default App;
