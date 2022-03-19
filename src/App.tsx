import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios, { AxiosResponse } from 'axios';
// import {
//   HubConnectionBuilder,
//   HubConnectionState,
//   HubConnection,
// } from '@microsoft/signalr';

function App() {

  const [response, setResponse] = useState<AxiosResponse[]>([]);

  useEffect(()=>{
    axios.get('/api/HttpTriggerTS?name=mike')
    .then((res) =>{
      setResponse((preresponse)=>[...preresponse, res]);
      console.log(res);
    })
    .catch((error)=>{
      console.log(error);
    })
    .then(()=>{
    });
  },[])

  const onClick = () => {
    axios.get('/api/HttpTriggerTS?name=taro')
    .then((res) =>{
      setResponse((preresponse)=>[...preresponse, res]);
      console.log(res);
    })
    .catch((error)=>{
      console.log(error);
    })
    .then(()=>{
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {response?.map((res) => res.data.test)}
        <button onClick={onClick}>BUTTON</button>
      </header>
    </div>
  );
}

export default App;
