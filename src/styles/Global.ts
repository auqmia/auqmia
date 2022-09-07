import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-primary: #00DEDF;
    --color-secondary:  #CE8EDB;
    --color-third: #ce8edb6b;
  
    --gray-5:#1E1E1E;
    --gray-4: #292929;
    --gray-3:  rgba(119, 159, 156, 0.2);
    --gray-2: #242424;
    --gray-0:#f8f9fa;


    --color-success: #3fe864;
    --color-warning: #Ffcd07;
    --color-error: #e83f5b;
    --color-information: #155bcb;
    --color-primary-Disable:#59323F;
    --font-family: 'KoHo', sans-serif;

   
  }

*{
  margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
  box-sizing: border-box;
  font-family: var(--font-family);
}
body{
 overflow-x: hidden;
 background-color: var(--gray-4);
}
::-webkit-scrollbar {
    border: none;
    width: 5px;
    height: 5px;
}
::-webkit-scrollbar-thumb {
    background-color: var(--gray-3);
    border-radius: 5px;
}
button{
  cursor: pointer;
}

a{
  cursor: pointer;
  text-decoration: none;
}

ul,li{
 list-style: none;
 
}
`;
