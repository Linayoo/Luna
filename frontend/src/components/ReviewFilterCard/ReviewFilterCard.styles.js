import styled from "styled-components";



export const ReviewCardContainer = styled.div`
background-color: white;
width: 650px;
height: 188px;
padding: 11px;
border-color: #EBEBEB 1px solid;
border-radius: 3px;
margin-top: 15px;

h3, h4 {
   color: #E47D31;
   width: 130px;
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

`;


export const ViewAllBtn = styled.div`
button {
    background-color: white;
    border: none;
    color: #E47D31;
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    width: 134px;
    margin-left: 235px;
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
    align-items: center;
    height: 60px;
    margin-left: -11px;
    div:nth-child(3) {
        margin-left: 15px;
        width: 150px;
    }
    img {
        margin-right: 5px;
        margin-top: -11px;
    }

    

    p {
        color: #4C4C4C;
        font-size: 14px;
        font-weight: 700;
        margin-top: 5px;
        height: 40px;
    };
`;


export const TimeStamp = styled.div`
   p {
    height: 70px;
    margin-left:180px;
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    width: 80px;
   }
`;

export const ImgStyle = styled.div`
   img {
    height: 75px;
   }
`;



export const MainStyle = styled.div`
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 18px;

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










