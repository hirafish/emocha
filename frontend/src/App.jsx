import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/router/Router';
import { JapaneseSlangProvider } from './components/providers/JapaneseSlangProvider';
import { EnglishSlangProvider } from './components/providers/EnglishSlangProvider';

function App() {
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
