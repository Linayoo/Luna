import { MainStyle, StyledHeader, ReviewCardContainer, Background  } from "./UserCard-styles"

const UserCard = (props) => {

      return (
        <ReviewCardContainer>
            <StyledHeader>
                <img src={props.userProps.profile_pic}/>
                <div>
                <h3>{props.userProps.first_name + " " + props.userProps.last_name}</h3>
                <p>{Math.floor(Math.random() * 100)} reviews in total</p>
                </div>
            </StyledHeader>
            <hr/>
            <MainStyle>
                {props.userProps.thing_i_love}
                <button> read more</button>
            </MainStyle>
        </ReviewCardContainer>
      )
  
  }
  
  export default UserCard
  