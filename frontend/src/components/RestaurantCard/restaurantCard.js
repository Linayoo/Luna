import { MainStyle, StyledHeader, RestaurantCardContainer, Img, Stars} from "./RestaurantCard.styles"



const RestaurantCard = (props) => {
      return (
        <RestaurantCardContainer>
            <StyledHeader>
                <p>{props.restaurantProps.name}</p>
                <p>{props.restaurantProps.street}</p>
            </StyledHeader>
            <MainStyle>
            <Stars>
                <img src="/images/icons/star-full.png"/> 
                <img src="/images/icons/star-full.png"/>
                <img src="/images/icons/star-full.png" /> 
                <img src="/images/icons/star-full.png" /> 
                <img src="/images/icons/star-half.png" /> 
                <p>46</p>
            </Stars>
            </MainStyle>
            <Img>
            <img src={props.restaurantProps.image}/>       
            </Img>    
        </RestaurantCardContainer>
      )
  
  }
  
  export default RestaurantCard




/* const RestaurantCard = (props) => {
    return (
        <CardDeck sx={{ maxWidth: 10 }}>
            <CardBody>
                <CardTitle>Restaurant Name</CardTitle>
                <CardSubtitle>Address</CardSubtitle>
                <CardActions>
                    <Stack spacing={1}>
                        <Rating name="half-rating" defaultValue={1} precision={0.5} />
                    </Stack>
                </CardActions>
                <CardMedia
                    component="img"
                    height="200"
                    weight="50"
                    src="/images/tuna.jpg" />
                <CardImg top width="50%" src="/images/tuna.jpg" alt="Card image cap" />
            </CardBody>
        </CardDeck>
    );
};

export default RestaurantCard; */




