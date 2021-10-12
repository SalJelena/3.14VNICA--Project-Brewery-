import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getBeerById } from "../../Service"
import StyledBeer from "./StyledBeer"

const Beer = () => {

    const [beer, setBeer] = useState(null)
    
    let {id} = useParams()

    useEffect(()=>{

        let mounted = true
        getBeerById(id).then(res => {
            if(mounted)
            setBeer(res.data)
            console.log(res.data);
        })
        return () => {mounted = false}

    }, [id]) 

  

    return  (
        <StyledBeer>
            <p>{beer?.name}</p>
            
            <img src={beer?.image} alt={beer?.name} /> 
            <p>{beer?.description}</p>

            <div>
                <p>{beer?.food_pairing.map(p => <li key={beer.id}>{p}</li>)}</p>
            </div>

            <p>{beer?.brewers_tips}</p>
        </StyledBeer>
    )
    }

export default Beer