import { useState } from "react"

const Beer = ({beer}) => {

    const [isActive, setIsActive] = useState('')
    

    // beer.available ? setIsActive('Available') : setIsActive('Not available currently.')

    //Klik na svaku karticu ce voditi na detaljnije o tom pivu, na promps

    return(
        <div onClick={()=>{

        }} >
            <p>{beer.name}</p>
            <p>{beer.flavour}</p>
            <img src={process.env.PUBLIC_URL + beer.image} alt={beer.name} width="150px" />
            <hr />
        </div>
    )
}

export default Beer