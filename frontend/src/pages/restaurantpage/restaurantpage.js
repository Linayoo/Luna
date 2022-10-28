import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import RestaurantHeader from "../../components/RestaurantHeader/RestaurantHeader"
import ReviewFilterCard from "../../components/ReviewFilterCard/ReviewFilterCard"
import { FilterSection, WriteReviewSection, Flex, OverFlow } from "./restaurantpage.styles"
import { useState, useSelector } from "react"
import { useEffect } from "react"
import { AiOutlineClockCircle } from "react-icons/ai"
import { useParams } from "react-router-dom"
import { GrMoney } from "react-icons/gr"


const RestaurantPage = () => {
    const stateToken = useSelector(state => state.login.token)
    const [reviews, setReviews] = useState([]);
    const localToken = localStorage.getItem("token");
    const [restaurantData, setRestaurantData] = useState('');
    const { id } = useParams();
  

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

          fetch(`https://luna-tuna.propulsion-learn.ch/backend/api/restaurants/${id}`, config).then(response => {
            return response.json();
            
        }).then(data => setRestaurantData(data))
  
      }, []);

   
   
 
    return (
        <div>
            <Header></Header>
            <RestaurantHeader image={restaurantData.image} 
                              name={restaurantData.name}
                              category={restaurantData.category}
                              street={restaurantData.street}
                              telephone={restaurantData.phone}
                              >
                              </RestaurantHeader>
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
                    <AiOutlineClockCircle />
                    <p>{restaurantData.opening_hours}</p>
                </div>
                <hr/>
                <div>
                    <GrMoney />
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
  