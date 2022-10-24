import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import HomePage from "./pages/homepage/homepage";
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Login /> } />
            <Route path="/home" element={ <HomePage /> } />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
