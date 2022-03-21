import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios, { AxiosResponse } from "axios";
import {
  HubConnectionBuilder,
  LogLevel,
  HubConnection,
} from "@microsoft/signalr";

function App() {
  const [signalRResponse, setSignalRResponse] = useState<string[]>([]);

  // RPCで呼び出されるメソッド
  const newMessage = (message: string) => {
    setSignalRResponse((state) => [...state, message]);
  };

  // connectionに上記メソッドをバインディング
  const bindConnectionMessage = (connection: HubConnection) => {
    connection.on("newMessage", newMessage);
  };

  useEffect(() => {
    const apiBaseUrl: string = "http://localhost:7071/api"; //window.location.origin;

    const connection: HubConnection = new HubConnectionBuilder()
      .withUrl(apiBaseUrl)
      .configureLogging(LogLevel.Information)
      .build();

    bindConnectionMessage(connection);

    connection.start().catch(console.error);
  }, []);

  const onClick = () => {
    axios.get("/api/cosmosdb").catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {signalRResponse?.map((res, index) => (
          <li key={index}>{res}</li>
        ))}
        <button onClick={onClick}>BUTTON(cosmosdb)</button>
      </header>
    </div>
  );
}

export default App;
