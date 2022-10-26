import styled from "styled-components";

export const Wrapper = styled.div`
position: relative;
`;

export const ImageStyle = styled.div`
img{
    height: 400px;
    width: 100%;
  
}
`;

export const RestaurantDetailsCard = styled.div`
font-family: 'Helvetica';
color:  #4C4C4C;
height: 336px;
width: 360px;
background-color: white;
position: absolute;
z-index: 1;
top: 30px;
left: 70%;
right: 0;
bottom: 0;

div > img {
    max-width:100%;
max-height:100%;
}
`;

export const RestaurantDetails = styled.div`
div {
    display: flex;
    margin-top: 24px;
    margin-left: 30px;
}

img {
    margin-right: 34px;
    width: 20px;
}


`;

export const RestaurantSlider = styled.div`
font-family: 'Helvetica';
color: white;
background-color: rgba(0, 0, 0, 0.5);
height: 204px;
position: absolute;
z-index: 1;
top: 0;
left: 0;
right: 0;
bottom: 0;
padding-left: 130px;
padding-top: 32px;

div {
    display: flex;
}

div > p {
    margin-left: 30px;
}


h1 {
    margin-bottom: 13px;
}

p {
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
}
`;

