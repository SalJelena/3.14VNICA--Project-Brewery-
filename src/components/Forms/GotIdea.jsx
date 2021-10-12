import { Redirect } from "react-router"

const GotIdea = ({user}) => {

    return user ? (
        <div>
            <img src="https://res.cloudinary.com/dwrla4d2s/image/upload/v1633982169/final_project/main3_mwmm52.png" alt="img" width="100%" />
            <p>Ulogovani ste</p>
        </div>
    )
    :
    (
        <Redirect to="/login" />
    )
}

export default GotIdea