import { MainStyle, StyledHeader, RestaurantCardContainer, Img, Stars} from "./RestaurantCard.styles"



const RestaurantCard = (props) => {

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

      return (
        <RestaurantCardContainer>
            <StyledHeader>
                <p>{props.restaurantProps.name}</p>
                <p>{props.restaurantProps.street}</p>
            </StyledHeader>
            <MainStyle>
            <Stars>
                <img className="stars" src="/images/icons/5stars_100px.png" style={{width: `calc(100px * ${numberAboveFour() / 5})`}}>
                </img>
                <p>reviews: {Math.floor(Math.random() * 30)}</p>
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




