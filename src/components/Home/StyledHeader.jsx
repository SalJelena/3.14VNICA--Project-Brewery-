import styled from 'styled-components'


const StyledHeader = styled.header`
    padding: 0;
    
    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: center; */
    margin:0;
    background-image: url("https://res.cloudinary.com/dwrla4d2s/image/upload/v1634046801/final_project/engin-akyurt-3ORoQEJY9LA-unsplash_lfb9pt.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 928px;
    
    .header-img {
        margin: 0;
        width: 100%;   
    }
    .header-title {
        font-family: 'Anton', sans-serif;
        margin-top: 0;
        /* flex: 1; */
        font-size: 70px;
        padding-top: 230px;
        padding-right: 70%;
        padding-left: 50px;
        /* display: grid;
        grid-template-columns: 3fr 2fr;
        row-gap: 3rem; */
        /* align-content: center;
        justify-content: center;
        align-items: start;
        justify-items: start; */
        color:#FFD700; 
    } 

`

export default StyledHeader