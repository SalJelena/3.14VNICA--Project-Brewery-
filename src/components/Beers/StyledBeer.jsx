

import styled from "styled-components";


const StyledBeer = styled.div`
    text-align: center;
    margin: 0 150px;
    display: grid; 
    grid-template-columns: 1.8fr 1.5fr; 
    grid-template-rows: 0.5fr 0fr 0fr; 
    gap: 0px 10px; 
    grid-template-areas: 
        ". ."
        ". ."
        ". ."; 
    align-content: space-around; 
    justify-items: center;
    .beer__information{
        padding: 25px;
        background-color: #f7f7f7;
        box-shadow: 8px 8px 8px 2px rgba(0, 0, 0, 0.2);
    }
    p{
        padding: 25px;
    }
    ul{
        list-style-type: none;
    }

    .beer__image {
    padding-top: 50px;
    background-image: url('https://res.cloudinary.com/dwrla4d2s/image/upload/v1634111167/final_project/back4_5_opyudo.png')
  }
    
`

export default StyledBeer