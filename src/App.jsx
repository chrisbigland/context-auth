import './App.css';
import ThemeProvider from './context/ThemeProvider.js';
import UserProvider from './context/UserProvider.js';


function App() {
  return (



    <div className="App">
        <ThemeProvider >
          <UserProvider />
        </ThemeProvider>  
    </div>

  );
}

export default App;
