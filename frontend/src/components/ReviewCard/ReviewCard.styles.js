import styled from "styled-components";



export const ReviewCardContainer = styled.div`
background-color: white;
width: 271px;
height: 410px;
padding: 11px;
border-top: #E47D31 8px solid;
border-color: #EBEBEB 1px solid;
border-radius: 3px;

h3, h4 {
   color: #E47D31;
}

p {
   
    font-size: 14px;
}

hr {
    margin-left:-10px;
    margin-right: -10px;
    position: relative;
    margin-bottom: 10px;
    height: 1px;
    background-color: #cccccc4d;
    border: none;
}
`;

export const BtnContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;
margin-bottom: 17px;
button {
 background-color: rgba(145, 145, 145, 0.6);
 color: white;
 height: 25px;
 width: 130px;
 font-weight: 400;
 font-size: 16px;
 border: none;
 display: flex;
 justify-content: center;
 align-items: center;
 font-family: 'Helvetica';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 18px;
}
button:hover {
    background-color: rgba(145, 145, 145, 0.395) ;
}
`;

export const BtnLeft = styled.div`
button {
 border-right: solid white 1px;
 border-bottom-left-radius: 28px;
 border-top-left-radius: 28px;
}

p {
    margin-left: 10px;
    margin-right: 5px;
}
`;

export const BtnRight = styled.div`
button {
 border-left: solid white 1px;
 border-bottom-right-radius: 28px;
 border-top-right-radius: 28px;
}
`;

export const StyledP = styled.div`
    font-family: 'Helvetica';
    padding-bottom: 11px;
    font-size: 20px;
    font-weight: 300;

`;

export const StyledHeader = styled.div`
    display: flex;
    height: 60px;
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

export const Footer = styled.div`
    p {
        padding-bottom: 10px;
        font-family: 'Helvetica';
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 16px;
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
`;






