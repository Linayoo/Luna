import { ReviewCardContainer, StyledHeader, MainStyle, BtnContainer, BtnRight, BtnLeft, ViewAllBtn, TimeStamp } from "./ReviewFilterCard.styles"

const ReviewFilterCard = () => {
    return (
        <ReviewCardContainer>
        <StyledHeader>
        <img src="/images/icons/profile.png"/>
        <div>
        <h3>Laurent H.</h3>
        <p>6 reviews in total</p>
        </div>
        <div>
            <img src="images/icons/star-full.png"/>
            <img src="images/icons/star-full.png"/>
            <img src="images/icons/star-full.png"/>
            <img src="images/icons/star-half.png"/>
            <img src="images/icons/star-empty.png"/>    
        </div>
        <TimeStamp>
        <p>01.01.2018 15:22</p>
        </TimeStamp>
    </StyledHeader>
    <hr/>
    <MainStyle>
        This location at the Bahnhofstrasse is quite friendly and easily located across the street from the train station. The people there seem to be quite good and helpful in their service. 
    </MainStyle>
    <BtnContainer>
            <BtnLeft>
                <button>
                    <img src="/images/icons/like.png"/>
                    <p>Like 63</p>
                </button>
            </BtnLeft>
            <BtnRight>
                <button>
                    <p>Comment 23</p>
                </button>
            </BtnRight>
            <ViewAllBtn>
            <button> View all comments</button>
            </ViewAllBtn>
    </BtnContainer>
  
    </ReviewCardContainer>
    )
}

export default ReviewFilterCard