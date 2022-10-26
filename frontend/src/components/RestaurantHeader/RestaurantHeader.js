import { ImageStyle, RestaurantDetails, RestaurantSlider, RestaurantDetailsCard, Wrapper } from "./RestaurantHeader.styles"

const RestaurantHeader = () => {
    return (

        <div>
            <Wrapper>
                <ImageStyle>
                <img src="/images/icons/restaurant-header.png" />
                </ImageStyle>
            <RestaurantSlider>
                <h1>Läderach Chocolatier Suisse</h1>
                <p>Chocolatiers & Shops</p>
                <div>
                    <div>
                    <img src="images/icons/star-full.png"/>
                    <img src="images/icons/star-full.png"/>
                    <img src="images/icons/star-full.png"/>
                    <img src="images/icons/star-half.png"/>
                    <img src="images/icons/star-empty.png"/>
                    </div>
                    <p>68 reviews</p>
                </div>
            </RestaurantSlider>
                <RestaurantDetailsCard>
                    <div>
                        <img src="images/icons/map.png"/>
                    </div>
                    <RestaurantDetails>
                        <div>
                        <img src="images/icons/pin.svg"/>
                        <p>Bahnhofstrasse 106</p>
                        </div>
                        <div>
                        <img src="images/icons/phone.svg"/>
                        <p>+41 44 211 53 72</p>
                        </div>
                        <div>
                        <img src="images/icons/laptop.png"/>
                        <p>laederach.com</p>
                        </div>
                    </RestaurantDetails>
                </RestaurantDetailsCard>
            </Wrapper>
        </div>
        
    )
}


export default RestaurantHeader