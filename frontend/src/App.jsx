import logo from './logo.svg';
import './App.css';
import { FetchFromPython } from './api/Sample';
import { ConnectSocketIo } from './socketio/Socketio';
import Navigation from "./components/nav/Navigation";
import Home from './pages/Home';
import Settings from './pages/Settings';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas,faGhost } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons';

library.add(fas, faTwitter, faFontAwesome,faGhost)

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

  return (
    <div className="w-full h-screen">
      <div className='flex h-full'>
        <Navigation />
        <div className="flex-1 bg-gray-100 w-full h-full">
          {/* <Home /> */}
          <Settings />
        </div>
      </div>
    </div>
  );
}

export default App;
