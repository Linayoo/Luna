import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import RestaurantHeader from "../../components/RestaurantHeader/RestaurantHeader"
import ReviewFilterCard from "../../components/ReviewFilterCard/ReviewFilterCard"
import { FilterSection, WriteReviewSection, Flex } from "./restaurantpage.styles"

const RestaurantPage = () => {
    return (
        <div>
            <Header></Header>
            <RestaurantHeader></RestaurantHeader>
           <Flex>
            <FilterSection>
                <form>
                    <input
                    placeholder="Filter list..."
                    autoComplete="off"
                    type="text" 
                    name={"search"} 
                    />
                    <div>
                    <button type="submit">FILTER</button>
                    </div>
                </form>
                <ReviewFilterCard></ReviewFilterCard>
                <ReviewFilterCard></ReviewFilterCard>
            </FilterSection>
            <WriteReviewSection>
                <div>
                    <img src="images/icons/clock.svg"/>
                    <p>Monday-Friday 9:00 am - 8:00 pm</p>
                </div>
                <hr/>
                <div>
                    <img src="images/icons/money.png"/>
                    <p>Price level: $$$</p>
                </div>
                <div>
                    <button>WRITE A REVIEW</button>
                    <button>EDIT DATA</button>
                </div>
            </WriteReviewSection>
            </Flex>
            <Footer></Footer>
        </div>
    )
  
}
  
export default RestaurantPage
  