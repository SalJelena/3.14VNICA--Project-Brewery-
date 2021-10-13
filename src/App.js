import React, { useState } from 'react'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalFonts from './Fonts/fonts';
import GlobalStyles from './GlobalStyles';
import Home from './components/Home/Home';
import About from './components/About/About';
import Beers from './components/Beers/Beers';
import Login from './components/Forms/Login';
import Register from './components/Forms/Register';
import GotIdea from './components/Forms/GotIdea';
import StyledNav from './components/Home/StyledNav';
import StyledLink from './components/Home/StyledLink';
import StyledLinkBtn from './components/Home/StyledLinkBtn';
import StyledImg from './components/Home/StyledImg';
import BeerInfo from './components/Beers/BeerInfo';
import Beer from './components/Beers/Beer';
import StyledFooter from './components/Footer/StyledFooter';

const App = () => {

  const [beers, setBeers] = useState([])
  const [user, setUser] = useState(null)
  const [users, setUsers] = useState([])
 


  return (
   
    <Router>
      <GlobalFonts />
      <GlobalStyles />
     
      <StyledNav>
        <StyledImg src="https://res.cloudinary.com/dwrla4d2s/image/upload/v1634024959/final_project/3.14vnica_zehias.png" alt="logo"  />
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About us</StyledLink>
        <StyledLink to="/beers">Beers</StyledLink>
        <StyledLink to="/gotidea">Got idea?</StyledLink>

        { user ? 
        <p>{user.username}</p>
        :
        <>
        <StyledLinkBtn to="/login">Login</StyledLinkBtn>
        <StyledLinkBtn to="/register">Register</StyledLinkBtn>
        </>
        }
       
      </StyledNav>
     

    <Switch>

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route exact path="/beers">
        <Beers beers={beers} setBeers={setBeers} />
      </Route>

      <Route exact path="/beers/:id">
					<Beer beers={beers} />
			</Route>

      <Route path="/gotidea">
        <GotIdea user={user} setBeers={setBeers} />
      </Route>

      <Route path="/login">
        <Login setUser={setUser} setUsers={setUser} />
      </Route>

      <Route path="/register">
        <Register setUsers={setUsers} />
      </Route>


    </Switch>



    </Router>


  );
}


export default App;
