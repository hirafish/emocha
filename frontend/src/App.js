import logo from './logo.svg';
import './App.css';

function App() {
  const backendServerUrl="http://backend:8000";
  const fetchFromPython=async ()=>{
    const response=await fetch("http://localhost:8000/",{
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
  (async()=>{
    const data=await fetchFromPython();
    console.log(data);
  })();
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
