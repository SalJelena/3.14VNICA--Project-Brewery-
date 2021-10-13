import styled from "styled-components";


const StyledInputs = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px;
    padding: 10px;
    align-content: center;
    .div-select,
    .div-input{
        margin: 10px;
        padding: 10px;
    }
    select,
    input{
        padding: 10px;
        border: none;
        border-radius: 20px;
        width: 250px;
        background-color: #FFD700;
        color: #222;
        font-size: 1.2rem;
        font-weight: 400;
        
    }
    select{
        cursor: pointer;
    }
   

`

export default StyledInputs