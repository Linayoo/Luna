import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { SearchBtn, SearchContainer, FormContainer, BestRated } from "./homepage.styles"
import { useState } from "react"
import RestaurantCard from "../../components/RestaurantCard/restaurantCard"


const HomePage = () => {

    const [restaurants, setRestaurants] = useState([]);
    console.log(restaurants)
    const localToken = localStorage.getItem("token");
    console.log(localToken)

    // Get all restaurants

    const fetchRestaurants = () => {
        const url = "https://luna-tuna.propulsion-learn.ch/backend/api/restaurants/"
        const config = {
            method: "GET",
            headers: new Headers({
                "Authorization": `Bearer ${localToken}`
            })
        }
        fetch(url, config)
            .then(response => response.json())
            .then(data => setRestaurants(data))
            .catch(error => console.log(error))
    }

    return (
        <div>
            <Header></Header>
            <SearchContainer>
            <img src="/images/icons/homepage.png"/>
            <FormContainer>
                    <form>
                        <input 
                            autoComplete="off"
                            type="text" 
                            name={"search"} 
                            placeholder="Search ..."
                        />
                        <SearchBtn>
                        <button type="submit">Search</button>
                        </SearchBtn>
                    </form>
            </FormContainer>
            </SearchContainer>
            <BestRated>
            <p>BEST RATED RESTAURANTS</p>
            <button onClick={fetchRestaurants}>My Kebab Place</button>
            {restaurants.map(elem => <RestaurantCard name={elem.name} address={elem.street} image={elem.image}/>)}
            </BestRated>
            <Footer></Footer>
        </div>
    )
}

export default HomePage
