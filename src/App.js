import "./App.css";
import ThemeProvider from "./context/ThemeProvider.js";

const App = () => {
  return (
    <div className="App">

      <ThemeProvider />
    </div>
  );
};

export default App;
