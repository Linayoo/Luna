import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import RestaurantHeader from "../../components/RestaurantHeader/RestaurantHeader"
import ReviewFilterCard from "../../components/ReviewFilterCard/ReviewFilterCard"
import { FilterSection, WriteReviewSection, Flex, OverFlow } from "./restaurantpage.styles"
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const RestaurantPage = () => {
    const stateToken = useSelector(state => state.login.token)
    const [reviews, setReviews] = useState([]);
    const localToken = localStorage.getItem("token");

    console.log(reviews)

    useEffect(() => {
          const config = {
              method: "GET",
              headers: new Headers ({
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${localToken}`
              })
          };
  
          // review fetch 
      
          fetch("https://luna-tuna.propulsion-learn.ch/backend/api/reviews/restaurant/2/", config).then(response => {
              return response.json();
              
          }).then(data => {
              console.log(data)
              data.forEach((result) => {
                  setReviews(oldArray => [...oldArray, result]);
              });
          });
  
      }, []);
   
    return (
        <div>
            <Header></Header>
            <RestaurantHeader></RestaurantHeader>
           <Flex>
           
            <FilterSection>
            <OverFlow>
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
               
                {reviews?.map((review) => {
                    if(review) {
                        return <ReviewFilterCard reviewProps={review}/>;
                    }
                })}
                <ReviewFilterCard></ReviewFilterCard>
                <ReviewFilterCard></ReviewFilterCard>
                <ReviewFilterCard></ReviewFilterCard>
                <ReviewFilterCard></ReviewFilterCard>
                <ReviewFilterCard></ReviewFilterCard>
                <ReviewFilterCard></ReviewFilterCard>
                <ReviewFilterCard></ReviewFilterCard>
                <ReviewFilterCard></ReviewFilterCard>
                <ReviewFilterCard></ReviewFilterCard>
                </OverFlow>
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
  