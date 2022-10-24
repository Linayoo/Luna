import styled from 'styled-components';



export const HeaderContainer = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 font-family: Arial, Helvetica, sans-serif;
 height: 70px;
 border-bottom: 1px solid #D8D8D8;
 width: 100%;
`;

export const LinkContainer = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;

`;



export const Logo = styled.div`

img{
 width: 90px;
 height: 23px;
}
 margin-left:30px;
 margin-top: 20px;
`;

export const Link = styled.div`
 border: none;
 background-color: white;

 button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    font-size: 20px;
    color: #4A4A4A;
    background-color: transparent;
    border: 3px solid transparent;
    margin: 0 35px 0 35px;
    padding: 20px;
} 
button:hover {
    cursor: pointer;
    font-weight: 700;
    border-bottom: 3px solid orange;
}
`;

export const HeaderBtn = styled.div`
button {
 background-color: #E47D31;
 color: white;
 height: 40px;
 width: 100px;
 font-weight: 400;
 font-size: 16px;
 cursor: pointer;
 border: none;
 display: flex;
 justify-content: center;
 align-items: center;
}
button:hover {
    background-color: #e47c31d5;;
}
`;

export const BtnLeft = styled.div`
button {
 border-right: solid white 1px;
 border-bottom-left-radius: 28px;
 border-top-left-radius: 28px;
 margin-left:62px;
}
`;

export const BtnRight = styled.div`
button {
 border-left: solid white 1px;
 border-bottom-right-radius: 28px;
 border-top-right-radius: 28px;
 margin-right:30px;
}
`;




