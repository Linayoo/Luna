import styled from "styled-components";

export const Create = styled.div`
display: flex;
justify-content: center;
padding-top: 30px;
font-size: 24px;
color:#4C4C4C;


 p{
    width   : 400px;
    height  : 50px;   
    position: relative;
    z-index : 1;

 }
 p:before {
    content : "";
    position: absolute;
    left    : 50px;
    bottom  : 0;
    height  : 1px;
    width   : 50%;  
    border-bottom:3px solid #E47D31;
 }

`;

export const Flex = styled.div`
margin-top: 30px;
font-size: 20px;
color:#979797;
display: flex;
justify-content: center;


form, input {
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr; 
  gap: 35px;
}



label,input{
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  width: 370px;
  height: 80px;
  position: relative;
}

input, select {
    height: 50px;
    color: #808080b1;
    border: #342e2e;
    font-size: 20px;
    border-radius: 3px;
    padding-left: 20px;
 } 

input:focus, select:focus {
    outline: none;
    border-bottom: 1px solid #837b7b8e;
    box-shadow: 0 1px 0 0 #837b7b8e;
}

p {
    color: #4C4C4C;
    font-family: 'Arial';
    position: absolute;
    top: -25px;
}


`;

export const InputFlex = styled.div`
margin-top: -23px;
font-size: 20px;
color:#979797;
display: flex;
justify-content: center;

p {
    position: relative;
    padding: 20px;
}
`;



export const SearchBtn = styled.div`
button {
 background-color: #E47D31;
 color: white;
 height: 56px;
 width: 200px;
 font-weight: 400;
 font-size: 16px;
 border: none;
 display: flex;
 justify-content: center;
 align-items: center;
 border-radius: 28px;
 position: relative;
    left: 120%;
}
button:hover {
    background-color: #e47c31d5;;
}
`;

export const Background = styled.div`
background-color: #F2F2F2;
height: 100vh;
`;


export const Btn = styled.div`
button {
 background-color: #E47D31;
 color: white;
 height: 38px;
 width: 216px;
 font-weight: 400;
 font-size: 16px;
 border: none;
 border-radius: 28px;
 font-weight: lighter;
}
`;