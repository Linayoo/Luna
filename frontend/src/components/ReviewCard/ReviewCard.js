import { ReviewCardContainer, BtnLeft, BtnRight, BtnContainer, StyledP, StyledHeader, Footer, MainStyle } from "./ReviewCard.styles"

const ReviewCard = (props) => {

      return (
        <ReviewCardContainer>
            <StyledHeader>
                <img src="/images/icons/profile.png"/>
                <div>
                <h3>{props.reviewProps.creator.first_name + " " + props.reviewProps.creator.last_name }</h3>
                <p>6 reviews in total</p>
                </div>
            </StyledHeader>
            <hr/>
            <MainStyle>
                <h3>{props.reviewProps.restaurant.name}</h3>
                <p>{props.reviewProps.text_content}</p>
                <button> read more</button>
            </MainStyle>
            <BtnContainer>
                    <BtnLeft>
                        <button>
                            <img src="/images/icons/like.png"/>
                            <p>Like {props.reviewProps.liked_by.length}</p>
                        </button>
                    </BtnLeft>
                    <BtnRight>
                        <button>
                            <p>Comment 23</p>
                        </button>
                    </BtnRight>
            </BtnContainer>
            <Footer>
                <StyledP>Latest Comments</StyledP>
                <div>
                <h4>Colin Wirz</h4>
                <p>Actually you have no taste!</p>
                </div>
                <div>
                <h4>Laurent Meyer</h4>
                <p>Sorry Bro!</p>
                </div>
            </Footer>
        </ReviewCardContainer>
      )
  
  }
  
  export default ReviewCard
  