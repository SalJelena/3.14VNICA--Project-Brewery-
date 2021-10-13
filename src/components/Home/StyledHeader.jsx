import styled from 'styled-components'


const StyledHeader = styled.header`
    padding: 0;
    display: flex; 
    flex-direction: column; 
    align-items: center;
    margin:0;
    background-image: url("https://res.cloudinary.com/dwrla4d2s/image/upload/v1634046801/final_project/engin-akyurt-3ORoQEJY9LA-unsplash_lfb9pt.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 928px;
    
     h1 {
       
        font-family: 'Anton', sans-serif;
        margin-top: 0;
        flex: 1;
        font-size: 70px;
        padding-top: 230px;
        padding-right: 700px;
        padding-left: 50px;    
        color: #ffffff;        
        
        overflow: hidden;

    }
`

export default StyledHeader