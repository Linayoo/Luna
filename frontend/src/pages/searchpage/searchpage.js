import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import UserCard from "../../components/UserCard/UserCard"
import ReviewCard from "../../components/ReviewCard/ReviewCard"
import SearchBar from "../../components/SearchBar/SearchBar"
import { ButtonContainer, Line, MainStyle, Grid, } from "./searchpage-styles"


const SearchPage = () => {
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
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
        </Grid>

        </MainStyle>

        <Footer></Footer>
        </div>
    )
}

export default SearchPage