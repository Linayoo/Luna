import styled from "styled-components";


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
}
button:hover {
    background-color: #e47c31d5;;
}
`;

export const SearchContainer = styled.div`
 img { 
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 25%;
 }
 form {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    //display: ;
    z-index: 1;
 }

 input {
    margin: 10px;
    height: 55px;
    width: 530px;
    padding: 20px;
    font-size: 20px;
    color: grey;
    border: #3b3939;
    border-radius: 3px;
 }
 input:focus {
    border-bottom: 1px solid #837b7b8e;
    box-shadow: 0 1px 0 0 #837b7b8e;
    
  }

  input:focus, input.form-control:focus {
    outline: none;
    outline-width: 0;
  }

`;

export const FormContainer = styled.div`
display: flex;
justify-content: center;
input, button {
    margin-top: 70px;
}
`;

export const BestRated = styled.div`
display: flex;
justify-content: center;
margin-top: 210px;
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

export const Grid = styled.div`
  margin-left: 10%;
  margin-top: 50px;
  display: grid;
  height: 100px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 50px;
  width: 80%;
`;




