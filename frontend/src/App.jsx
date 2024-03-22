import './App.css';
import { FetchFromPython } from './components/api/Sample';
import { ConnectSocketIo } from './components/socketio/Socketio';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/router/Router';
import { JapaneseSlangProvider } from './components/providers/JapaneseSlangProvider';
import { EnglishSlangProvider } from './components/providers/EnglishSlangProvider';

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
        <EnglishSlangProvider>
        <JapaneseSlangProvider>
            <div id="App" className="w-full h-svh dark:bg-gray-900">
                <Router />
            </div>
        </JapaneseSlangProvider>
        </EnglishSlangProvider>
      </BrowserRouter>
  );
}

export default App;
