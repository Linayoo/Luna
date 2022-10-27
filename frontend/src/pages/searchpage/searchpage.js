import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import UserCard from "../../components/UserCard/UserCard"
import ReviewCard from "../../components/ReviewCard/ReviewCard"
import SearchBar from "../../components/SearchBar/SearchBar"
import { ButtonContainer, Line, MainStyle, Grid, } from "./searchpage-styles"
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";



const SearchPage = () => {
    const stateToken = useSelector(state => state.login.token)
    const [users, setUsers] = useState([]);

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3MzE0Mjc5LCJpYXQiOjE2NjY4ODIyNzksImp0aSI6ImMzMWQ4MDkxOWUwNzRlYzdhZTJjMThiMDE1YTFhNjBkIiwidXNlcl9pZCI6MX0.bmvP1reL5Ji41kVTHEgGQasT7WNQdOiSCmRzPbLOv7c"

    useEffect(() => {
      
        const config = {
            method: "GET",
            headers: new Headers ({
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
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

      
    }, []);
    return (
        <div>
        <Header></Header>
        <SearchBar></SearchBar>

        <MainStyle>

        <ButtonContainer>
            <button>RESTAURANTS</button>
            <button>REVIEWS</button>
            <button>USERS</button>
        </ButtonContainer>
        <Line>
            <hr/>
        </Line>

        <Grid>
        {users.map((user) => {
                    if(user.avatar === undefined) {
                        return <UserCard userProps={user}/>;
                    }
                })}
        </Grid>

        </MainStyle>

        <Footer></Footer>
        </div>
    )
}

export default SearchPage