import './App.css';
import { FetchFromPython } from './components/api/Sample';
import { ConnectSocketIo } from './components/socketio/Socketio';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/router/Router';
import { AuthProvider } from './context/userauthcontext';

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
    <AuthProvider>
      <BrowserRouter>
        <div id="App" className="w-full h-svh dark:bg-gray-900">
              <Router />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
