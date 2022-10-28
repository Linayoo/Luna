import styled from "styled-components";

export const ButtonContainer = styled.div`
width: 100%;
padding-top: 19px;
display: flex;
justify-content: center;
align-items: center;
button {
    background-color: #F2F2F2;
    border: none;
    margin: 0 15px;
    font-weight: 700;
    font-size: 20px;
    color:  #4C4C4C;
    width: 200px;
    padding-bottom: 17px;
    border: 3px solid transparent;
}
button:focus, button:active {
  border-bottom: 4px solid #E47D31;

  
    
}

`;

export const Line = styled.div`
display: flex;
justify-content: center;
hr {
    width: 630px;
    margin-top: 0px;
    height: 2px;
    background-color: #D8D8D8;
    border: none;
    
}

`;

export const MainStyle = styled.div`
background-color: #F2F2F2;
height: 100vh;
`;


export const Grid = styled.div`
  margin-left: 15%;
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 450px;
  grid-row-gap: 20px;
  width: 70%;
  height: 100vh;
`;




export const OverFlow= styled.div`
overflow-y: auto;
height: 100vh;
`;






