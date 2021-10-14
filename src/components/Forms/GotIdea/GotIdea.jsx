import { useState } from "react"
import { Redirect, useHistory } from "react-router"
import { v1 as uuidv1 } from 'uuid'
import { postNewBeer } from "../../../Service"
import StyledGotIdea from "./StyledGotIdea"

const GotIdea = ({user, setBeers}) => {

    const [newBeerName, setNewBeerName] = useState('')
    const [newBeerDesc, setNewBeerDesc] = useState('')
    const [newBeerFlavour, setNewBeerFlavour] = useState('')
    const [newFoodPairing, setNewFoodPairing] = useState('')
    const [newBeerImage, setNewBeerImage] = useState('')

    const history = useHistory()


    return user ? (
        <div>
            <img src="https://res.cloudinary.com/dwrla4d2s/image/upload/v1633982169/final_project/main3_mwmm52.png" alt="img" width="100%" />
         <StyledGotIdea>   
            <form onSubmit={(e)=>{
                e.preventDefault()

                let newBeer = {
                    id: uuidv1(),
                    name: newBeerName,
                    description: newBeerDesc,
                    flavour: newBeerFlavour,
                    food_pairings: newFoodPairing,
                    image: newBeerImage
                }

                postNewBeer(newBeer).then(res => {
                    setBeers(prev => [...prev, res.data])
                })

                history.push('/beers')

            }}>
            <h2>CREATE BEER</h2>
                <input type="text" placeholder="Name of beer" onChange={(e)=>{
                    setNewBeerName(e.target.value)
                }} />
                <input type="text" placeholder="flavour" onChange={(e)=>{
                    setNewBeerFlavour(e.target.value)
                }} />
                <input type="text" placeholder="Food pairings" onChange={(e)=>{
                    setNewFoodPairing(e.target.value)
                }} />
                <input type="text" placeholder="Image..." onChange={(e)=>{
                    setNewBeerImage(e.target.value)
                }} />
                <textarea rows="10" cols="30" placeholder="Write your description here..." onChange={(e) => {
                    setNewBeerDesc(e.target.value)
                }}/>


                <input type="submit" value="new quote" />
            </form>


                </StyledGotIdea>
        </div>
    )
    :
    (
        <Redirect to="/login" />
    )
}

export default GotIdea