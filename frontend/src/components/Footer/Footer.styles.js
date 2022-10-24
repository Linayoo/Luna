import styled from 'styled-components';


export const FooterWrap = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;


export const FooterContainer = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 font-family: Arial, Helvetica, sans-serif;
 height: 52px;
 background-color: white;
 
 ul {
    text-decoration: none;
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
 }
`;

export const FooterLinks = styled.div`
 ul > li {
    margin-right: 75px;
    color: #646363;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    margin-left: 30px;
 }
 ul > li:hover {
    cursor: pointer;
    transform: scale(1.1);
 }
`;

export const FooterIcons = styled.div`
 ul > li {
    margin-left: 30px;
 }

 ul > li:hover {
    cursor: pointer;
    transform: scale(1.1);
    color: #837e7e13;
 }

 ul > li:last-child {
    margin-right: 30px;
 }
`;

export const Copyright = styled.p`
    font-size: 12px;
    color: #646363;
    height: 37px;
    padding: 10px 30px;
    background-color: white;
`;

export const Line = styled.hr`
     height: 1px;
     background-color: #cccccc4d;
     border: none;
     margin-top: 0;
`;







