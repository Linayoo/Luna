import styled from "styled-components";


export const RestaurantCardContainer = styled.div`
display: flex;
flex-direction: column;
background-color: white;
width: 271px;
height: 410px;
border-top: #E47D31 8px solid;
border-color: #EBEBEB 1px solid;
border-radius: 3px;
img {
    margin-right: 0px;
    margin-left: 0px;
    margin-top: 5px
}

div > div {
    display: flex;
    align-items: center;
}

div > img:first-of-type {
}

div > img:last-of-type {
    margin-right: 50px;
}


div > p {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 23px;
    color: #4C4C4C;

}

`;


export const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    padding: 13px;
    p:first-of-type {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    color: #4C4C4C;
    margin-top: 5px;
    margin-bottom: 5px;
    }
    
`;


export const MainStyle = styled.div`
  
    
`;


export const Stars = styled.div`
  margin-left: 10px;
    
`;


export const Img = styled.div`
  img {
    height: 272px;
    width: 271px;
    max-width:100%;
    max-height:100%;
    margin-top: 18px;
  }
    
`;
