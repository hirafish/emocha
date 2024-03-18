import "./App.css";
import { FetchFromPython } from "./components/api/Sample";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/router/Router";

import Twemoji from "react-twemoji";

function App() {
  // FastAPIとの通信

  // (async()=>{
  //   try{
  //   const data=await FetchFromPython();
  //   console.log(data);
  //   }catch(error){
  //     console.log("(Fetch Error)",error);
  //   };
  // })();

  // --------------

  // Socket.io通信

  // ConnectSocketIo();

  // --------------

  return (
    <BrowserRouter>
      <div id="App" className="w-full h-screen">
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
