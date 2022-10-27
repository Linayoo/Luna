import styled from "styled-components";


export const RestaurantCardContainer = styled.div`
background-color: white;
width: 271px;
height: 190px;
padding: 11px;
border-top: #E47D31 8px solid;
border-color: #EBEBEB 1px solid;
border-radius: 3px;
img {
    margin-right: 0px;
    margin-left: 0px;
    margin-top: 5px
}

h3, h4 {
   color: #E47D31;
}

p {
   
    font-size: 14px;
}

`;


export const StyledHeader = styled.div`
    display: flex;
    height: 50px;
    margin-left: -11px;
    img {
        margin-right: 5px;
        margin-top: -11px;
    }

    p {
        color: #4C4C4C;
        font-size: 14px;
        font-weight: 700;
        margin-top: 5px;
    }
`;


export const MainStyle = styled.div`
    font-size: 14px;
    h3 {
        padding-bottom: 10px;
    }

    button {
        background-color: white;
        border: none;
        color: #E47D31;
        font-weight: 700;
        }
    }
`;
