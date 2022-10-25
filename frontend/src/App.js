import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import HomePage from "./pages/homepage/homepage";
import CreateRestaurant from "./pages/create-restaurant/create-restaurant";
import SearchPage from "./pages/searchpage/searchpage";
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Login /> } />
            <Route path="/home" element={ <HomePage /> } />
            <Route path="/create" element={ <CreateRestaurant /> } />
            <Route path="/search" element={ <SearchPage/> } />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
