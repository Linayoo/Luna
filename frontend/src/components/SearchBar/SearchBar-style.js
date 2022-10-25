import styled from "styled-components";

export const SearchBarStyle = styled.div`

 select {
    width: 20%;
    border-left: none;
}

 input {
    width: 80%;
}
input, select {
    height: 50px;
}

input, select {
    height: 50px;
    color: #808080b1;
    border-bottom: 1px solid #D8D8D8;
    border-left: none;
    border-top: none;
    border-right: 1px solid #D8D8D8;
    font-size: 20px;
    border-radius: 3px;
    padding-left: 20px;
 } 

input:focus, select:focus {
    outline: none;
}
`;
