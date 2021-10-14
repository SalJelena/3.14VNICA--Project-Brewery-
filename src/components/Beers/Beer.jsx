import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import { getBeerById } from "../../Service"
import StyledBeer from './Styles/StyledBeer'

const Beer = () => {

    const [beer, setBeer] = useState(null)
    let {id} = useParams()
    const history = useHistory()
    

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

            <div className="beer__information" >
            <p className="backbtn" onClick={()=>{
                history.push('/beers')
            }}>Go back</p> 


            <h1>{beer?.name}</h1>
               
            <p>{beer?.description}</p>
            <div>
                <h2>Ideas for food pairings:</h2>
                
                 <ul>{beer?.food_pairing.map(p => <li key={p}>{p}</li>)}</ul> 
            </div>
            <h2>Brewer's tips for you:</h2>
            <p>{beer?.brewers_tips}</p>
            </div>

            <div className="beer__image" >
               {beer?.image ? 
                <img src={beer.image} alt={beer?.name} /> 
                :
                <img src="https://res.cloudinary.com/dwrla4d2s/image/upload/v1634231280/final_project/Untitled_design__1_-removebg-preview_snxvei.png" alt={beer?.name} />

               }
            
            </div>

        </StyledBeer>
    )
    }

export default Beer