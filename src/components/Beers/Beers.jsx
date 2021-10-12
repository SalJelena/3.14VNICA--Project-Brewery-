import { useEffect, useState } from "react"
import { getAllBeers } from "../../Service"
import Beer from "./Beer"
import Select from "./Select"

const Beers = () => {

    const [beers, setBeers] = useState([])
    const [select, setSelect] = useState('')
    

    useEffect(() => {
       
        getAllBeers().then(res => {
            setBeers(res.data)
        })
    },[])


    let flavourType = [...new Set(beers.map(beer => beer.flavour))]

    return(
        <div>
            <Select setSelect={setSelect} options={flavourType} type='types of flavours' />
            {beers.filter(beer => beer.flavour.startsWith(select)).map(beer => <Beer key={beer.id} beer={beer} />)}
        </div>
    )
}

export default Beers