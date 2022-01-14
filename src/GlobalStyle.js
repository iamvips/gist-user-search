import { createGlobalStyle } from "styled-components"; // Grays

const GlobalStyles = createGlobalStyle`
  body{
    margin: 0;
    font-family: Helvetica Neue,Helvetica,Segoe UI,Arial,freesans,sans-serif;
    color: #626465;
  }
  *{
    box-sizing: border-box;
  }

  .paginationBttns{
    width: 80%;
    height:10%;
    list-style: none;
    display: flex;
    justify-content: center;
    margin-left: 150px;
  }

  .paginationBttns a{
    padding: 10px;
    margin: 8px;
    cursor: pointer;    
  }

  .paginationBttns a:hover{
    color: white;
    background-color: #0366d6; 
    border: none;  
  }

  .paginationActive a{
    color: white;
    background-color: #0366d6;  
    border: none; 
  }
`;

export default GlobalStyles;
