import logo from './logo.svg';
import './App.css';
import { io } from "socket.io-client";

function App() {
  // FastAPIとの通信
  const fetchFromPython=async ()=>{
    const response=await fetch("http://localhost:8000/fastapi",{
      method:"GET",
      headers:{
          "Content-Type":"application/json"
        }
      }
    );
    if(!response.ok){
      console.log("error status:"+String(response.status));
    }
    const data=await response.json();
    return data;
  };

  // (async()=>{
  //   try{
  //   const data=await fetchFromPython();
  //   console.log(data);
  //   }catch(error){
  //     console.log("(Fetch Error)",error);
  //   };
  // })();

  
  // --------------
  // Socket.io通信
  const port = process.env.PORT || 8000;
  const socket = io('http://localhost:' + port, {auth: {token: 'my-token'}});

  socket.on('connect', () => {
    console.log(`connect ${socket.id}`);
  });

  socket.on('disconnect', () => {
    console.log(`disconnect ${socket.id}`);
  });

  socket.on('hello', (a, b, c) => {
    console.log(a, b, c);
  });



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
