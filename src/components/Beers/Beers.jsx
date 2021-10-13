import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllBeers } from "../../Service"

import Select from "./Select"
import StyledBeers from "./StyledBeers"
import StyledBtn from "./StyledBtn"
import StyledInputs from "./StyledInputs"


const Beers = ({beers, setBeers}) => {


    const [select, setSelect] = useState('')
    const [input, setInput] = useState('')
 
    
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
        <StyledInputs>
            <div className="div-select">
                <Select setSelect={setSelect} options={flavourType} type='types of flavours' />
            </div>
            <div className="div-input" >
                <input type="text" placeholder="Search by name..." onChange={(e)=>{
                    setInput(e.target.value)
                    
                }} />
            </div>
        </StyledInputs>
        <StyledBeers>
            {beers.filter(beer => beer.flavour.startsWith(select)).map(beer => 
            
            <div key={beer.id}> 
            <StyledBtn to={`/beers/${beer.id}`}>
                <h3>{beer.name}</h3>
                <br/>
                <img src={beer.image} alt={beer.name} width="350px"/> 
            </StyledBtn> 
            
            </div>

            )}

    </StyledBeers>
        </>
    )
}

export default Beers