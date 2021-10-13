

import styled from "styled-components";


const StyledBeers = styled.div`
  display: grid;
  padding: 25px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 50px 50px;
  grid-auto-flow: row;
  grid-template-areas:
    ". . ."
    ". . ."
    ". . .";
  text-align: center;
    > div:hover{
      background-image: url('https://res.cloudinary.com/dwrla4d2s/image/upload/v1634110905/final_project/back4_4_aoeekc.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 350px;
      /* border: 1px solid grey; */
      /* border-radius: 20px;
      box-shadow: 0px 10px 11px -2px #BAC6C1; */
    }


  





    
`

export default StyledBeers