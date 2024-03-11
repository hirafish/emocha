import logo from './logo.svg';
import './App.css';
import { FetchFromPython } from './components/api/Sample';
import { ConnectSocketIo } from './components/socketio/Socketio';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/router/Router';
import Navigation from "./components/nav/Navigation";

import Twemoji from 'react-twemoji';

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
        <Twemoji noWrapper={true} options={{ className: 'twemoji' }}>
        <div className='flex h-full'>
          <Navigation />
          <div className="flex-1 bg-gray-100 w-full h-full">
            <Router />
          </div>
        </div>
        </Twemoji>
      </div>


    </BrowserRouter>
  );
}

export default App;
