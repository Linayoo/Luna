import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { ImageStyle, RestaurantDetails, RestaurantSlider, RestaurantDetailsCard, Wrapper, ReviewInput } from "./reviewpage.styles"

const ReviewPage = () => {
    return (
        <div>
            <Header></Header>
            <Wrapper>
                <ImageStyle>
                <img src="/images/icons/review-img.png" />
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
            </Wrapper>
            <ReviewInput>
                <div>
                    <img src="images/icons/star.svg"/>
                    <img src="images/icons/star.svg"/>
                    <img src="images/icons/star.svg"/>
                    <img src="images/icons/star.svg"/>
                    <img src="images/icons/star.svg"/>
                    <p>Select your rating</p>
                </div>
                <form>
                    <textarea 
                    type="textarea"
                    name="textValue"
                    rows={15}
                    cols={50}
                    placeholder="Your review helps others learn about great local businesses.&#13;&#10;Please don't review this business if you received a freebie for writing this review,&#13;&#10;or if you're connected in any way to the owner or employees."
                    required
                    ></textarea>
                    <button>SUBMIT</button>
                </form>
                </ReviewInput>
            <Footer></Footer>
        </div>
    )
}

export default ReviewPage