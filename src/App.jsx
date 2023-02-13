import "./App.css";
import ThemeProvider from "./context/ThemeProvider.js";
import UserProvider from "./context/UserProvider.js";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <UserProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;