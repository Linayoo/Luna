import { ReviewCardContainer, StyledHeader, MainStyle, BtnContainer, BtnRight, BtnLeft, ViewAllBtn, TimeStamp, ImgStyle, } from "./ReviewFilterCard.styles"


const ReviewFilterCard = (props) => {
  
    console.log(props.reviewProps?.creator.first_name)
    return (
        <ReviewCardContainer>
        <StyledHeader>
            <ImgStyle>
        <img src={props.reviewProps ? props.reviewProps?.creator.profile_pic : "/images/icons/profile.png"}/>
        </ImgStyle>
        <div>
        <h3>{props.reviewProps ? props.reviewProps?.creator.first_name + " " + props.reviewProps?.creator.last_name : "Laurent H"}</h3>
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
        
        <p>{props.reviewProps?.created ? "10.27.2022 08:24" : "01.01.2018 15:22"}</p>
        
        </TimeStamp>
    </StyledHeader>
    <hr/>
    <MainStyle>
        {props.reviewProps ? props.reviewProps?.text_content : "This location at the Bahnhofstrasse is quite friendly and easily located across the street from the train station. The people there seem to be quite good and helpful in their service."}
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