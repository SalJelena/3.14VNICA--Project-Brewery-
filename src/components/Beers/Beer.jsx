import { useState } from "react"
import StyledBeer from "./StyledBeer"

const Beer = ({beer}) => {

    const [isActive, setIsActive] = useState('')
    

    // beer.available ? setIsActive('Available') : setIsActive('Not available currently.')

    //Klik na svaku karticu ce voditi na detaljnije o tom pivu, na promps

    return(
        <StyledBeer onClick={()=>{

        }} >
            <p>{beer.name}</p>
            
            <img src={process.env.PUBLIC_URL + beer.image} alt={beer.name} />
          
        </StyledBeer>
    )
}

export default Beer