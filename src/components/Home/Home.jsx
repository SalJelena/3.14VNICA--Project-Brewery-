
import Footer from '../Footer/Footer.jsx'
import StyledFooter from '../Footer/StyledFooter.jsx'
import StyledHeader from './Header/StyledHeader.jsx'




const Home = () => {

    return (
        <>

        <StyledHeader>

            <h1 className="header-title">“I work until beer o’clock.” - Stephen King</h1>

        </StyledHeader>


            <StyledFooter>
                <Footer />
            </StyledFooter>

        </>
        
    )
}

export default Home