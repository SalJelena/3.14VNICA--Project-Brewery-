import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllBeers } from "../../Service"

import Select from "./Select"
import StyledBeers from "./StyledBeers"


const Beers = ({beers, setBeers}) => {


    const [select, setSelect] = useState('')
 
    
    useEffect(() => {
        let mounted = true

        getAllBeers().then(res => {
            if(mounted)
            setBeers(res.data)
        })

        return () => {mounted = false}
    },[setBeers])


    let flavourType = [...new Set(beers.map(beer => beer.flavour))]

 

    return(
        <>
            <div className="div-select">
            <Select setSelect={setSelect} options={flavourType} type='types of flavours' />
            </div>

            <StyledBeers>
            {beers.filter(beer => beer.flavour.startsWith(select)).map(beer => 
            
            <div key={beer.id}> 
            <Link to={`/beers/${beer.id}`}>{beer.name} <br/><img src={beer.image} alt={beer.name} width="250px"/> </Link> 
            
            </div>

            )}

        </StyledBeers>
        </>
    )
}

export default Beers