import Footer from '../Footer/Footer.jsx'
import StyledFooter from '../Footer/StyledFooter.jsx'
import StyledHeader from './StyledHeader.jsx'
import StyledMain from './StyledMain.jsx'



const Home = () => {

    return (
        <>

        <StyledHeader>
            {/* <img src="https://res.cloudinary.com/dwrla4d2s/image/upload/v1634025295/final_project/engin-akyurt-3ORoQEJY9LA-unsplash_jw9hxe.jpg" alt="headerphoto" className="header-img" /> */}
            <h1 className="header-title">“I work until beer o’clock.” <span>- Stephen King</span></h1>

        </StyledHeader>

        <StyledMain>
        
        </StyledMain>

            <StyledFooter>
                <Footer />
            </StyledFooter>

        </>
        
    )
}

export default Home