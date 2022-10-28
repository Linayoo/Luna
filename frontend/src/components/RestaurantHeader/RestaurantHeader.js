import { ImageStyle, RestaurantDetails, RestaurantSlider, RestaurantDetailsCard, Wrapper } from "./RestaurantHeader.styles"
import {FiMapPin } from "react-icons/fi"
import { BsTelephone } from "react-icons/bs"
import { RiComputerLine } from "react-icons/ri"

const RestaurantHeader = props => {

    console.log(props.image)
    const numberAboveFour = () => {
        const rating = Math.floor(Math.random() * (5 * 10 - 1 * 10) + 1 * 10) / (1 * 10);
        if (rating > 3.8) {
            console.log(rating)
            return rating;
        } else {
            console.log(rating)
            return 3.8;

        }
    }
    const category = () => {
        if (props.category === "A") return 'Asian';
        if (props.category === "I") return 'Italian';
        if (props.category === "B") return 'Burger';
        if (props.category === "V") return 'Vegetarian';
    }

    return (

        <div>
            <Wrapper>
                <ImageStyle>
                <img src={props.image} />
                </ImageStyle>
            <RestaurantSlider>
                <h1>{props.name}</h1>
                <p>{category()}</p>
                <div>
                    <div>
                        <img className="stars"
                            src="/images/icons/5stars_100px.png" 
                            style={{width: `calc(100px * ${numberAboveFour() / 5})`}}>
                        </img>
                    </div>
                    <p>{Math.floor(Math.random() * 100)} Reviews</p>
                </div>
            </RestaurantSlider>
                <RestaurantDetailsCard>
                    <div>
                        <img src="/images/icons/map.png"/>
                    </div>
                    <RestaurantDetails>
                        <div>
                        <FiMapPin />
                        <p>{props.street}</p>
                        </div>
                        <div>
                        <BsTelephone />
                        <p>{props.telephone}</p>
                        </div>
                        <div>
                        <RiComputerLine />
                        <p>laederach.com</p>
                        </div>
                    </RestaurantDetails>
                </RestaurantDetailsCard>
            </Wrapper>
        </div>
        
    )
}


export default RestaurantHeader