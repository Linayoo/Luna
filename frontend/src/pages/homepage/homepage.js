import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { SearchBtn, SearchContainer, FormContainer, BestRated} from "./homepage.styles"


const HomePage = () => {
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
            <Footer></Footer>
        </div>
    )
}

export default HomePage
