import Login from "./components/Login/Login";
import HomePage from "./pages/homepage/homepage";
import CreateRestaurant from "./pages/create-restaurant/create-restaurant";
import SearchPage from "./pages/searchpage/searchpage";
import RestaurantPage from "./pages/restaurantpage/restaurantpage";
import ReviewPage from "./pages/reviewpage/reviewpage";
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
            <Route path="/restaurant" element={ <RestaurantPage/> } />
            <Route path="/review" element={ <ReviewPage/> } />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
