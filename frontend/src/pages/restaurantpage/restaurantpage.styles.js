import styled from "styled-components";

export const FilterSection = styled.div`

form {
    width: 650px;
    display: flex;
    margin-bottom: 25px;
    margin-top: 15px;
}
input {
    width: 510px;
    height: 40px;
    padding: 20px;
    font-size: 16px;
    color: grey;
    border: 1px solid#EBEBEB;
    border-radius: 3px;
}

form > div > button {
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
 margin-left: 20px;
}
`

export const WriteReviewSection = styled.div`
display: flex;
flex-direction: column;
width: 508px;
height:744px ;
padding: 20px;
font-family: 'Helvetica';
font-style: normal;
font-weight: 300;
font-size: 20px;
background-color: #F5F5F5;

 button {
 background-color: #E47D31;
 color: white;
 font-family: 'Helvetica';
 height: 39px;
 width: 200px;
 font-weight: 400;
 font-size: 16px;
 border: none;
 display: flex;
 justify-content: center;
 align-items: center;
 border-radius: 28px;
 margin-left: 20px;
}

hr {
    margin: 13px 0;
}

img {
    margin-right: 25px;
}

div:nth-of-type(3) {
    margin-top: 30px;
}

 div {
    display: flex;
 }
`

export const Flex = styled.div`
 display: flex;
 justify-content: center;
 background-color: #F8F8F8;;
`

export const OverFlow= styled.div`
overflow-y: auto;
height: 100vh;
`;

