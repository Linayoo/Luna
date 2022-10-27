import { MainStyle, StyledHeader, RestaurantCardContainer} from "./RestaurantCard.styles"

const RestaurantCard = () => {
      return (
        <RestaurantCardContainer>
            <StyledHeader>
                <div>
                <p>Restaurant Name</p>
                <p>Adress</p>
                </div>

            </StyledHeader>
            <div>
                <img src="/images/icons/star-full.png"/> 
                <img src="/images/icons/star-full.png"/>
                <img src="/images/icons/star-full.png" /> 
                </div>
            <MainStyle>
            <img src="/images/icons/rest.png"/>           
            </MainStyle>
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




