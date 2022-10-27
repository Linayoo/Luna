import styled from "styled-components";

export const Wrapper = styled.div`
position: relative;
`;

export const ImageStyle = styled.div`
img{
    height: 200px;
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

export const ReviewInput = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color:#F2F2F2; 
height: 100vh;

img {
    filter: opacity(30%)
}

div {
    margin-top: 40px;
    width: 650px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

p {
    margin-left: 33px;
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 23px;
    color: #7E7E7E;
}

form {
    width: 650px;
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
    margin-top: 25px;
}
textarea {
    width: 830px;
    height: 260px;
    padding: 20px;
    font-size: 16px;
    color: #BBB7B7;
    border: 1px solid#EBEBEB;
    border-radius: 3px;
}

form  > button {
 background-color: #E47D31;
 color: white;
 font-family: 'Helvetica';
 height: 40px;
 width: 120px;
 font-weight: 400;
 font-size: 16px;
 border: none;
 display: flex;
 justify-content: center;
 align-items: center;
 border-radius: 28px;
 margin-left: 100%;
 margin-top: 31px;;
}
`
