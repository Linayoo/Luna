import { ReviewCardContainer, BtnLeft, BtnRight, BtnContainer, StyledP, StyledHeader, Footer, MainStyle } from "./ReviewCard.styles"

const ReviewCard = () => {
      return (
        <ReviewCardContainer>
            <StyledHeader>
                <img src="/images/icons/profile.png"/>
                <div>
                <h3>Laurent H.</h3>
                <p>6 reviews in total</p>
                </div>
            </StyledHeader>
            <hr/>
            <MainStyle>
                <h3>Colinz Bar</h3>
                Ugh. Don't waste your time. Pizza dough good, thin crust but ingredients so so. Side of mixed vegetables very oily and mainly bell... 
                <button> read more</button>
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
  