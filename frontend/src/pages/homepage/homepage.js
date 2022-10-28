import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { SearchBtn, SearchContainer, FormContainer, BestRated, Grid } from "./homepage.styles"
import RestaurantCard from "../../components/RestaurantCard/restaurantCard"
import { useEffect } from "react";
import { useState } from "react";


const HomePage = () => {
    const [restaurants, setRestaurants] = useState([]);
    const localToken = localStorage.getItem("token");

    useEffect(() => {
            const config = {
                method: "GET",
                headers: new Headers ({
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localToken}`
                })
            };
        fetch("https://luna-tuna.propulsion-learn.ch/backend/api/restaurants/", config).then(response => {
            return response.json();
            
        }).then(data => {
            console.log(data)
            data.forEach((result) => {
                setRestaurants(oldArray => [...oldArray, result]);
            });
        });
    }, []);
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
                </BestRated>
                <Grid>
                {restaurants.map((restaurant, index) => {
                    if (index > 3) return
                        if(restaurant) {
                            return <RestaurantCard restaurantProps={restaurant}/>;
                        }
                    })}
                </Grid>
            <Footer></Footer>
        </div>
    )
}

export default HomePage
