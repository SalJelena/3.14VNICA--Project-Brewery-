import { useParams } from "react-router"


const BeerInfo = ({beers}) => {


    let {id} = useParams()

    let beer = beers.find(b => b.id === id)
    

    return beer ? (
        <div>
          <p> {beer?.description} </p>
        </div>
    )
    :
    (
        <p>Nije uspelo</p>
    )
   
}

export default BeerInfo