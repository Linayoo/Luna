import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import RestaurantHeader from "../../components/RestaurantHeader/RestaurantHeader"
import ReviewFilterCard from "../../components/ReviewFilterCard/ReviewFilterCard"
import { FilterSection, WriteReviewSection, Flex } from "./restaurantpage.styles"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { AiOutlineClockCircle } from "react-icons/ai"
import { GrMoney } from "react-icons/gr"

const RestaurantPage = () => {

    const [restaurantData, setRestaurantData] = useState('');
    const { id } = useParams();
    const localToken = localStorage.getItem("token");
   
    useEffect(() => {
            const config = {
                method: "GET",
                headers: new Headers ({
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localToken}`
                })
            };
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
  