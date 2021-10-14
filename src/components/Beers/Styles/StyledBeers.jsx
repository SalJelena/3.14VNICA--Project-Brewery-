

import styled from "styled-components";


const StyledBeers = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  text-align: center;

    > div:hover{
      background-image: url('https://res.cloudinary.com/dwrla4d2s/image/upload/v1634220167/final_project/back4__4_-removebg-preview_1_cpaa68.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 350px;
      
    }

    img:hover{
      transform: scale(1.2);
      
    }

    
`

export default StyledBeers