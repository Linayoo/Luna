import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import UserCard from "../../components/UserCard/UserCard"
import ReviewCard from "../../components/ReviewCard/ReviewCard"
import SearchBar from "../../components/SearchBar/SearchBar"
import RestaurantCard from "../../components/RestaurantCard/restaurantCard"
import { ButtonContainer, Line, MainStyle, Grid, } from "./searchpage-styles"
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";



const SearchPage = () => {
    const stateToken = useSelector(state => state.login.token)
    const [users, setUsers] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [comments, setComments] = useState([]);
    const [render, setRender] = useState("restaurant");

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3MzE0Mjc5LCJpYXQiOjE2NjY4ODIyNzksImp0aSI6ImMzMWQ4MDkxOWUwNzRlYzdhZTJjMThiMDE1YTFhNjBkIiwidXNlcl9pZCI6MX0.bmvP1reL5Ji41kVTHEgGQasT7WNQdOiSCmRzPbLOv7c"

    const localToken = localStorage.getItem("token");

    useEffect(() => {
      // user fetch
        const config = {
            method: "GET",
            headers: new Headers ({
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localToken}`
            })
        };

     
        fetch("https://luna-tuna.propulsion-learn.ch/backend/api/users/list/", config).then(response => {
            return response.json();
            
        }).then(data => {
            console.log(data)
            data.forEach((result) => {
                setUsers(oldArray => [...oldArray, result]);
            });
        });
        // restaurant fetch

     
        fetch("https://luna-tuna.propulsion-learn.ch/backend/api/restaurants/", config).then(response => {
            return response.json();
            
        }).then(data => {
            console.log(data)
            data.forEach((result) => {
                setRestaurants(oldArray => [...oldArray, result]);
            });
        });

        // review fetch 
    
        fetch("https://luna-tuna.propulsion-learn.ch/backend/api/reviews/restaurant/2/", config).then(response => {
            return response.json();
            
        }).then(data => {
            console.log(data)
            data.forEach((result) => {
                setReviews(oldArray => [...oldArray, result]);
            });
        });

        // comments fetch

        fetch("https://luna-tuna.propulsion-learn.ch/backend/api/review/comment/1/", config).then(response => {
            return response.json();
            
        }).then(data => {
            console.log(data)
            data.forEach((result) => {
                setComments(oldArray => [...oldArray, result]);
            });
        });



    }, []);
    return (
        <div>
        <Header></Header>
        <SearchBar></SearchBar>

        <MainStyle>

        <ButtonContainer>
            <button onClick={() => setRender("restaurant")}>RESTAURANTS</button>
            <button onClick={() => setRender("reviews")}>REVIEWS</button>
            <button onClick={() => setRender("users")}>USERS</button>
        </ButtonContainer>
        <Line>
            <hr/>
        </Line>

        <Grid>
            {users.map((user) => {
                        if(render === 'users') {
                            return <UserCard userProps={user}/>;
                        }
                    })}
                
            {restaurants.map((restaurant) => {
                    if(render == "restaurant") {
                        return <RestaurantCard restaurantProps={restaurant}/>;
                    }
                })}

            {reviews.map((review) => {
                    if(render == "reviews") {
                        return <ReviewCard reviewProps={review} comment={comments.text_content}/>;
                    }
                })}
             
                 

        </Grid>

        </MainStyle>

        <Footer></Footer>
        </div>
    )
}

export default SearchPage