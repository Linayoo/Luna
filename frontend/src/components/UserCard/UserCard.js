import { MainStyle, StyledHeader, ReviewCardContainer, Background  } from "./UserCard-styles"

const UserCard = () => {
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
                 Im professional photographer with an eye for details in every thing I do in my live. Every time a pass by a nice restaurant i have to stop and take notes... 
                <button> read more</button>
            </MainStyle>
        </ReviewCardContainer>
      )
  
  }
  
  export default UserCard
  