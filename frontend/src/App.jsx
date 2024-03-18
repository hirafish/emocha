import "./App.css";
import { FetchFromPython } from "./components/api/Sample";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/router/Router";

import Twemoji from "react-twemoji";

function App() {
  return (
    <BrowserRouter>
      <div id="App" className="w-full h-screen">
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
